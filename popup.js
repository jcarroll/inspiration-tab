const DATA = [
  // --- General Conference 2021-2026 ---
  {
    text: "Think celestial! When you are confronted with a dilemma, think celestial!",
    source: "Russell M. Nelson",
    title: "Think Celestial!",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2023/10/51nelson?lang=eng"
  },
  {
    text: "Jesus Christ is the strength of youth. He is the strength of parents.",
    source: "Dieter F. Uchtdorf",
    title: "Jesus Christ Is the Strength of Youth",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2022/10/11uchtdorf?lang=eng"
  },
  {
    text: "Overcoming the world is not a event that happens in a day or two. It happens over a lifetime as we repeatedly embrace the doctrine of Christ.",
    source: "Russell M. Nelson",
    title: "Overcoming the World and Finding Rest",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2022/10/47nelson?lang=eng"
  },
  {
    text: "The answer is always Jesus.",
    source: "Russell M. Nelson",
    title: "The Answer Is Always Jesus",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2023/04/51nelson?lang=eng"
  },
  {
    text: "Peacemakers are needed now more than ever. Be one.",
    source: "Russell M. Nelson",
    title: "Peacemakers Wanted",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2023/04/47nelson?lang=eng"
  },
  {
    text: "Our testimony of the Savior and His gospel will be most effective when it is part of who we are.",
    source: "Dallin H. Oaks",
    title: "The Great Plan",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2020/04/51oaks?lang=eng"
  },
  {
    text: "True discipleship is not about doing things perfectly; it is about doing things intentionally.",
    source: "Dieter F. Uchtdorf",
    title: "Daily Restoration",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2021/10/41uchtdorf?lang=eng"
  },
  {
    text: "The Lord loves effort, because effort brings rewards that can't come without it.",
    source: "Russell M. Nelson",
    title: "Joy and Spiritual Survival",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2016/10/joy-and-spiritual-survival?lang=eng"
  },
  {
    text: "God is our Heavenly Father. He loves us. He knows our potential.",
    source: "April 2024 Conference",
    title: "Rejoice in the Gift of Priesthood Keys",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2024/04/57nelson?lang=eng"
  },
  {
    text: "To be a follower of Christ is to strive to conform our actions, our conduct, and our lives to those of the Savior.",
    source: "Dallin H. Oaks",
    title: "Following Christ",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2024/04/43oaks?lang=eng"
  },
  {
    text: "Your virtue is the power that brings you closer to God.",
    source: "Ulisses Soares",
    title: "Covenant Confidence through Jesus Christ",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2024/04/16soares?lang=eng"
  },

  // --- Book of Mormon ---
  {
    text: "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded.",
    source: "1 Nephi 3:7",
    url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/3?id=p7#p7"
  },
  {
    text: "For the natural man is an enemy to God, and has been from the fall of Adam.",
    source: "Mosiah 3:19",
    url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/3?id=p19#p19"
  },
  {
    text: "Adam fell that men might be; and men are, that they might have joy.",
    source: "2 Nephi 2:25",
    url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?id=p25#p25"
  },
  {
    text: "And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true.",
    source: "Moroni 10:4",
    url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/10?id=p4#p4"
  },
  {
    text: "And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation.",
    source: "Helaman 5:12",
    url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/5?id=p12#p12"
  },
  {
    text: "I can do all things through Christ which strengtheneth me.",
    source: "Alma 26:12",
    url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/26?id=p12#p12"
  },
  {
    text: "Men are instructed sufficiently that they know good from evil.",
    source: "2 Nephi 2:5",
    url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?id=p5#p5"
  },
  {
    text: "Behold, I am a disciple of Jesus Christ, the Son of God. I have been called of him to declare his word among his people, that they might have everlasting life.",
    source: "3 Nephi 5:13",
    url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/5?id=p13#p13"
  },
  {
    text: "But behold, that which is of God inviteth and enticeth to do good continually; wherefore, every thing which inviteth and enticeth to do good, and to love God, and to serve him, is inspired of God.",
    source: "Moroni 7:13",
    url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/7?id=p13#p13"
  },
  {
    text: "If ye have judged a man who putteth forth his petition to you for your substance that he perish not, and condemn him, how much more just will be your condemnation for withholding your substance.",
    source: "Mosiah 4:22",
    url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4?id=p22#p22"
  }
];

const IMAGES = [
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295436_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111814_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/21/15/38/beach-1846010_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/19/18/57/godafoss-1840758_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/09/08/12/00/stars-1654074_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/02/15/10/39/salzburg-2068220_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181_1280.jpg"
];

function setRandomContent() {
  const quote = DATA[Math.floor(Math.random() * DATA.length)];
  const bg = IMAGES[Math.floor(Math.random() * IMAGES.length)];

  const textElem = document.getElementById('quote-text');
  const linkElem = document.getElementById('quote-link');
  const bgElem = document.getElementById('background-overlay');

  textElem.textContent = `"${quote.text}"`;
  
  let sourceText = `— ${quote.source}`;
  if (quote.title) {
    sourceText += `, "${quote.title}"`;
  }
  
  linkElem.textContent = sourceText;
  linkElem.href = quote.url;
  
  bgElem.style.backgroundImage = `url('${bg}')`;
}

document.addEventListener('DOMContentLoaded', () => {
  setRandomContent();
});