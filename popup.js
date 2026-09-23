const DATA = [
  // --- General Conference 2021-2026 ---
  {
    text: "Our relationship to God and the purpose of our mortal life are explained in terms of the family.",
    source: "Dallin H. Oaks",
    title: "The Family-Centered Gospel of Jesus Christ (Oct 2025)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2025/10?lang=eng",
  },
  {
    text: "As followers of Christ, let us follow Him by forgoing contention and by using the language and methods of peacemakers.",
    source: "Dallin H. Oaks",
    title: "Alive in Christ (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
  {
    text: "Through the glorious Atonement, Jesus Christ strengthens, supports, and succors us in every mortal trial.",
    source: "Henry B. Eyring",
    title: "The Sustaining Power of the Atonement (Oct 2025)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2025/10?lang=eng",
  },
  {
    text: "When life feels overwhelming, we can turn to Heavenly Father for personal peace and guidance through sincere prayer.",
    source: "Henry B. Eyring",
    title: "Prayers for Peace (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
  {
    text: "Progression along the covenant path anchors our souls to the Savior and brings true lasting joy.",
    source: "D. Todd Christofferson",
    title: "The Covenant Path of Discipleship (Oct 2025)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2025/10?lang=eng",
  },
  {
    text: "Developing Christlike character allows us to overcome the natural man and become more like the Savior.",
    source: "D. Todd Christofferson",
    title: "The Character of Christ (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
  {
    text: "Just as the Lord healed a blind man with clay, He often uses humble or unusual things to bless and teach us.",
    source: "Jeffrey R. Holland",
    title: "And Now I See (Oct 2025)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2025/10?lang=eng",
  },
  {
    text: "Standing as unified apostolic witnesses of the literal, bodily Resurrection of our Savior Jesus Christ.",
    source: "Jeffrey R. Holland",
    title: "Witnesses of the Resurrection (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
  {
    text: "We should follow the Savior's admonition to be peacemakers—in our hearts, at home, and in our communities.",
    source: "Gary E. Stevenson",
    title: "Blessed Are the Peacemakers (Oct 2025)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2025/10?lang=eng",
  },
  {
    text: "Engaging in temple and family history work binds generations and secures prophetic safety for our souls.",
    source: "Gary E. Stevenson",
    title: "Heavens Open Through Holy Temples (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
  {
    text: "Healing and forgiveness are each found in their fulness in the atoning love of Jesus Christ.",
    source: "Neil L. Andersen",
    title: "The Gift of Forgiveness (Oct 2025)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2025/10?lang=eng",
  },
  {
    text: "Standing firm against the shifting values of the world by anchoring our personal foundation deeply in Jesus Christ.",
    source: "Neil L. Andersen",
    title: "Build Your Foundation on Christ (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
  {
    text: "Temperance harmonizes and strengthens other Christlike attributes, making it an essential part of our character.",
    source: "Ulisses Soares",
    title: "Adorned with the Virtue of Temperance (Oct 2025)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2025/10?lang=eng",
  },
  {
    text: "Following Christ is a constant, conscious choice that governs our words in every setting—including digital spaces.",
    source: "Ulisses Soares",
    title: "Abiding in the True Vine (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
  {
    text: "Taking upon ourselves the Savior's name requires intentional discipleship and living true to our covenants.",
    source: "Dale G. Renlund",
    title: "Taking on the Name of Jesus Christ (Oct 2025)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2025/10?lang=eng",
  },
  {
    text: "Aligning our hearts with God's commandments unlocks clear, stable, and protective personal revelation.",
    source: "Dale G. Renlund",
    title: "The Architecture of Personal Revelation (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
  {
    text: "Standing witness to the prophetic declaration that the family is central to the Creator’s plan.",
    source: "Ronald A. Rasband",
    title: "The Family Proclamation — Words From God (Oct 2025)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2025/10?lang=eng",
  },
  {
    text: "Ensuring our homes and individual lives are built solidly upon the rock of our Redeemer, Jesus Christ.",
    source: "Ronald A. Rasband",
    title: "Built Upon the Rock (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
  {
    text: "Deepening our connection with Christ brings a profound sense of purpose, community, and divine belonging.",
    source: "Gerrit W. Gong",
    title: "Covenant Belonging and Joy (Oct 2025)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2025/10?lang=eng",
  },
  {
    text: "When we have a question, problem, or joy, Jesus Christ says, I am your answer—your way, your truth, your life.",
    source: "Gerrit W. Gong",
    title: "Tis Eastertide: No One Walks Alone (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
  {
    text: "Trusting that the Lord reshapes and refines our broken hearts through the infinite reach of His mercy.",
    source: "Patrick Kearon",
    title: "Handcarved Vessels of Mercy (Oct 2025)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2025/10?lang=eng",
  },
  {
    text: "Callings from the Lord are tailor-made for our growth; when we respond, we join the Savior in His redeeming work.",
    source: "Patrick Kearon",
    title: "About His Business (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
  {
    text: "Jesus Christ ministered perfectly, and great blessings come when we love and minister in His way.",
    source: "Kristin M. Yee",
    title: "Ministering—“That Ye Love One Another” (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
  {
    text: "Our covenants bind us to the Savior, offering spiritual protection and enabling us to reflect His love.",
    source: "J. Anette Dennis",
    title: "Anchored to Christ Through Sacred Covenants (Oct 2025)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2025/10?lang=eng"
  },
  {
    text: "Cultivating a Gospel-centered perspective allows us to view life's shifts with hope and divine reassurance.",
    source: "Tamara W. Runia",
    title: "Finding Joy in the Journey (Apr 2026)",
    url: "https://www.churchofjesuschrist.org/study/general-conference/2026/04?lang=eng",
  },
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
"../img/img1.jpg",
"../img/img2.jpg",
"../img/img3.jpg",
"../img/img4.jpg",
"../img/img5.jpg",
"../img/img6.jpg",
"../img/img7.jpg",
"../img/img8.jpg",
"../img/img9.jpg",
"../img/img10.jpg",
"../img/img11.jpg",
"../img/img12.jpg",
"../img/img13.jpg",
"../img/img14.jpg",
"../img/img15.jpg",
"../img/img16.jpg",
"../img/img17.jpg",
"../img/img18.jpg",
"../img/img19.jpg",
"../img/img20.jpg",
"../img/img21.jpg",
"../img/img22.jpg",
"../img/img23.jpg",
"../img/img24.jpg",
"../img/img25.jpg",
"../img/img26.jpg",
"../img/img27.jpg",
"../img/img28.jpg",
"../img/img29.jpg",
"../img/img30.jpg",
"../img/img31.jpg",
"../img/img32.jpg",
"../img/img33.jpg",
"../img/img34.jpg",
"../img/img35.jpg",
"../img/img36.jpg",
"../img/img37.jpg",
"../img/img38.jpg",
"../img/img39.jpg",
"../img/img40.jpg",
"../img/img41.jpg",
"../img/img42.jpg",
"../img/img43.jpg",
"../img/img44.jpg",
"../img/img45.jpg",
"../img/img46.jpg",
"../img/img47.jpg",
"../img/img48.jpg",
"../img/img49.jpg",
"../img/img50.jpg",
"../img/img51.jpg",
"../img/img52.jpg",
"../img/img53.jpg",
"../img/img54.jpg",
"../img/img55.jpg",
"../img/img56.jpg",
"../img/img57.jpg",
"../img/img58.jpg",
"../img/img59.jpg",
"../img/img60.jpg",
"../img/img61.jpg",
"../img/img62.jpg",
"../img/img63.jpg",
"../img/img64.jpg",
"../img/img65.jpg",
"../img/img66.jpg",
"../img/img67.jpg",
"../img/img68.jpg",
"../img/img69.jpg",
"../img/img70.jpg",
"../img/img71.jpg",
"../img/img72.jpg",
"../img/img73.jpg",
"../img/img74.jpg",
"../img/img75.jpg",
"../img/img76.jpg",
"../img/img77.jpg",
"../img/img78.jpg",
"../img/img79.jpg",
"../img/img80.jpg",
"../img/img81.jpg",
"../img/img82.jpg",
"../img/img83.jpg",
"../img/img84.jpg",
"../img/img85.jpg",
"../img/img86.jpg",
"../img/img87.jpg",
"../img/img88.jpg",
"../img/img89.jpg",
"../img/img90.jpg",
"../img/img91.jpg",
"../img/img92.jpg",
"../img/img93.jpg",
"../img/img94.jpg",
"../img/img95.jpg",
"../img/img96.jpg",
"../img/img97.jpg",
"../img/img98.jpg",
"../img/img99.jpg",
"../img/img100.jpg",
"../img/img101.jpg",
"../img/img102.jpg",
"../img/img103.jpg",
"../img/img104.jpg",
"../img/img105.jpg",
"../img/img106.jpg",
"../img/img107.jpg",
"../img/img108.jpg",
"../img/img109.jpg",
"../img/img110.jpg",
"../img/img111.jpg",
"../img/img112.jpg",
"../img/img113.jpg"
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
