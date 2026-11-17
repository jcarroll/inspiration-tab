## Get talk summaries (kicker) from 
## Oct 2026 General Conference of 
## The Church of Jesus Christ of Latter-day Saints
## Key Improvements
## • Preserves Accents (\w + NFC): Using \w in Python regex matches all Unicode letters (including diacritics) and digits, while stripping stray symbols and emojis.
## • Removes Invisible Characters: Filters out zero-width spaces (\u200b), non-breaking spaces (\xa0), and hidden Unicode control characters (category == "C").
## • Excel-Friendly CSV (utf-8-sig): Writing the CSV with utf-8-sig adds a UTF-8 BOM header so Microsoft Excel displays accented characters properly instead of garbling them.
import csv
import re
import time
import unicodedata
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup

BASE_URL = "https://churchofjesuschrist.org"
INDEX_URL = f"{BASE_URL}/study/general-conference/2026/10?lang=eng"
HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

def sanitize_text(text):
    if not text:
        return ""
    
    # 1. Normalize Unicode to standard composed form (keeps accents intact)
    text = unicodedata.normalize("NFC", text)

    # 2. Replace smart punctuation and non-breaking spaces with standard equivalents
    replacements = {
        "\u2018": "'", "\u2019": "'",  # Smart single quotes
        "\u201c": '"', "\u201d": '"',  # Smart double quotes
        "\u2013": "-", "\u2014": "-",  # En-dash and em-dash
        "\u2026": "...",               # Ellipsis
        "\xa0": " ",                   # Non-breaking space
        "\u200b": "",                  # Zero-width space
        "\ufeff": ""                   # Byte order mark
    }
    for bad_char, clean_char in replacements.items():
        text = text.replace(bad_char, clean_char)

    # 3. Strip hidden control characters (Unicode category 'C')
    text = "".join(ch for ch in text if unicodedata.category(ch)[0] != "C")

    # 4. Keep Unicode word characters (letters with accents + numbers), spaces, and standard punctuation
    text = re.sub(r"[^\w\s.,!?'\"-]", "", text)

    # 5. Collapse multiple spaces or newlines into a single space
    return re.sub(r"\s+", " ", text).strip()

def get_soup(url):
    response = requests.get(url, headers=HEADERS, timeout=15)
    response.raise_for_status()
    response.encoding = "utf-8"
    return BeautifulSoup(response.text, "html.parser")

def extract_speaker(soup):
    speaker_el = soup.find(class_="author-name") or soup.find(class_="byline")
    if speaker_el:
        name = sanitize_text(speaker_el.get_text(" ", strip=True))
        return name.removeprefix("By ").strip()
    return "Unknown Speaker"

def main():
    print("Fetching conference index page...")
    index_soup = get_soup(INDEX_URL)

    talk_urls = []
    for a_tag in index_soup.find_all("a", href=True):
        href = a_tag["href"]
        if "/study/general-conference/2026/10/" in href:
            full_url = urljoin(BASE_URL, href).split("?") + "?lang=eng"
            if full_url not in talk_urls and not full_url.endswith("-session?lang=eng"):
                talk_urls.append(full_url)

    print(f"Found {len(talk_urls)} potential talk pages. Extracting details...")
    results = []

    for idx, url in enumerate(talk_urls, 1):
        try:
            talk_soup = get_soup(url)
            title_el = talk_soup.find("h1")
            raw_title = title_el.get_text(" ", strip=True) if title_el else "Untitled"
            title = sanitize_text(raw_title)
            speaker = extract_speaker(talk_soup)

            kicker_el = talk_soup.find(class_="kicker")
            if kicker_el:
                raw_kicker = kicker_el.get_text(" ", strip=True)
                kicker_text = sanitize_text(raw_kicker)
                results.append({
                    "speaker": speaker,
                    "title": title,
                    "url": url,
                    "kicker_text": kicker_text
                })
                print(f"[{idx}/{len(talk_urls)}] Extracted: {speaker} - {title}")
            else:
                print(f"[{idx}/{len(talk_urls)}] No kicker found: {speaker} - {title}")

            time.sleep(0.5)
        except Exception as e:
            print(f"[{idx}/{len(talk_urls)}] Error fetching {url}: {e}")

    # Save to CSV (utf-8-sig ensures Excel opens accented characters properly)
    csv_filename = "oct_2026_kickers_clean.csv"
    fieldnames = ["speaker", "title", "url", "kicker_text"]
    with open(csv_filename, mode="w", newline="", encoding="utf-8-sig") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)

    # Save to plain text file
    txt_filename = "oct_2026_kickers_clean.txt"
    with open(txt_filename, mode="w", encoding="utf-8") as txt_file:
        for item in results:
            txt_file.write(f"Speaker: {item['speaker']}\n")
            txt_file.write(f"Title:   {item['title']}\n")
            txt_file.write(f"URL:     {item['url']}\n")
            txt_file.write(f"Kicker:  {item['kicker_text']}\n")
            txt_file.write("-" * 60 + "\n")

    print(f"\nDone! Saved {len(results)} clean entries to '{csv_filename}' and '{txt_filename}'.")

if __name__ == "__main__":
    main()
