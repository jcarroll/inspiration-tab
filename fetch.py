## Get talk summaries (kicker) from 
## Oct 2026 General Conference of 
## The Church of Jesus Christ of Latter-day Saints
import csv
import time
from urllib.parse import urljoin
import requests
from bs4 import BeautifulSoup

BASE_URL = "https://churchofjesuschrist.org"
INDEX_URL = f"{BASE_URL}/study/general-conference/2026/10?lang=eng"
HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

def get_soup(url):
    response = requests.get(url, headers=HEADERS, timeout=15)
    response.raise_for_status()
    return BeautifulSoup(response.text, "html.parser")

def extract_speaker(soup):
    # Primary selector used on ChurchofJesusChrist.org talk pages
    speaker_el = soup.find(class_="author-name")
    if not speaker_el:
        # Fallback selector for older or alternative page layouts
        speaker_el = soup.find(class_="byline")
    if speaker_el:
        # Clean up leading "By " if present
        name = speaker_el.get_text(" ", strip=True)
        return name.removeprefix("By ").strip()
    return "Unknown Speaker"

def main():
    print("Fetching conference index page...")
    index_soup = get_soup(INDEX_URL)

    # Collect unique talk URLs matching the conference path
    talk_urls = []
    for a_tag in index_soup.find_all("a", href=True):
        href = a_tag["href"]
        if "/study/general-conference/2026/10/" in href:
            full_url = urljoin(BASE_URL, href).split("?")[0] + "?lang=eng"
            # Exclude session overview links if they lack a talk slug
            if full_url not in talk_urls and not full_url.endswith("-session?lang=eng"):
                talk_urls.append(full_url)

    print(f"Found {len(talk_urls)} potential talk pages. Extracting details...")
    results = []

    for idx, url in enumerate(talk_urls, 1):
        try:
            talk_soup = get_soup(url)
            title_el = talk_soup.find("h1")
            title = title_el.get_text(strip=True) if title_el else "Untitled"
            speaker = extract_speaker(talk_soup)

            kicker_el = talk_soup.find(class_="kicker")
            if kicker_el:
                kicker_text = kicker_el.get_text(strip=True)
                kicker_html = str(kicker_el)
                results.append({
                    "speaker": speaker,
                    "title": title,
                    "url": url,
                    "kicker_text": kicker_text,
                    "kicker_html": kicker_html
                })
                print(f"[{idx}/{len(talk_urls)}] Extracted: {speaker} - {title}")
            else:
                print(f"[{idx}/{len(talk_urls)}] No kicker found: {speaker} - {title}")

            time.sleep(0.5)  # Polite pause between requests
        except Exception as e:
            print(f"[{idx}/{len(talk_urls)}] Error fetching {url}: {e}")

    # Save to CSV
    csv_filename = "oct_2026_kickers.csv"
    fieldnames = ["speaker", "title", "url", "kicker_text", "kicker_html"]
    with open(csv_filename, mode="w", newline="", encoding="utf-8") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)

    # Save to plain text file
    txt_filename = "oct_2026_kickers.txt"
    with open(txt_filename, mode="w", encoding="utf-8") as txt_file:
        for item in results:
            txt_file.write(f"Speaker: {item['speaker']}\n")
            txt_file.write(f"Title:   {item['title']}\n")
            txt_file.write(f"URL:     {item['url']}\n")
            txt_file.write(f"Kicker:  {item['kicker_text']}\n")
            txt_file.write("-" * 60 + "\n")

    print(f"\nDone! Saved {len(results)} talks to '{csv_filename}' and '{txt_filename}'.")

if __name__ == "__main__":
    main()
