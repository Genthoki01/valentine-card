// ---------- Helpers ----------
const $ = (id) => document.getElementById(id);

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  $(pageId).classList.add("active");
}

// ---------- Elements ----------
const yesBtn = $("yesBtn");
const noBtn = $("noBtn");
const btnArea = $("btnArea");

const page2Title = $("page2Title");
const message = $("message");
const nextBtn = $("nextBtn");

const giftBtn = $("giftBtn");
const giftBox = $("giftBox");
const openLetterBtn = $("openLetterBtn");

const letterText = $("letterText");
const foreverYes = $("foreverYes");
const foreverNo = $("foreverNo");
const finalButtons = $("finalButtons");

const heartsLayer = $("heartsLayer");

// ---------- Pages content ----------
let pageIndex = 0;

const lovePages = [
  "I love you so much 💖<br>You mean the world to me 🥺✨",
  "You make me feel safe, happy, and loved 💕<br>Thank you for being you 😘",
  "No matter what happens, I’ll always choose you 💗<br>You’re my favorite person 🫶",
  "Happy Valentine’s Day my love 💝<br>I love you forever ♾️💗<br>My Gorgeous Man 😘✨"
];

const loveLetter = `
To My Babe Rajat 💖,<br><br>

I don’t even know where to start because there are so many things I want to say, and none of them feel big enough to explain how much you mean to me 🥺✨ But I’ll try, because you deserve to know 💌.<br><br>

You’ve become one of the most beautiful parts of my life 💕. In the way you make me smile without trying 😊, in the way you make me feel safe even when everything else feels messy 🫶, and in the way you always manage to bring light into my darkest days ✨. Loving you feels like home 🏡💗 — warm, comforting, and real.<br><br>

I love the little things about you the most 🥰. The way you talk 🗣️, the way you laugh 😄, the way you look at me like I’m someone worth loving 💘. You make me feel special in a way I never thought I could feel 💞, and I’m so grateful for you 😘.<br><br>

Thank you for being patient with me 🫶, for caring about me 💗, for choosing me even on the days I don’t feel like I deserve it 🥺. Thank you for being the kind of person who makes love feel gentle, not scary 💕.<br><br>

I want you to know that I’m proud of you 🥹💖. For everything you’ve done, everything you’re doing, and everything you’re becoming 🌟. I believe in you more than words can say 💪💗, and I’ll always be here cheering you on 🎉.<br><br>

No matter what happens, I want you in my life 💞. I want to make memories with you 📸, laugh with you 😂, grow with you 🌱, and love you in every season 🍂🌸. You are not just someone I love… you are someone I want a future with 💍💖.<br><br>

I love you more than you’ll ever fully understand 💘, and I’ll keep loving you — today 💗, tomorrow 💕, and always ♾️✨.<br><br>

Forever yours 💖😘
`;

// ---------- NO button escape (PAGE 1) ----------
let noEscaping = false;

function dodgeNoButton() {
  const padding = 10;

  // Convert to absolute only once
  if (!noEscaping) {
    const btnRect = noBtn.getBoundingClientRect();
    const areaRect = btnArea.getBoundingClientRect();

    noBtn.style.position = "absolute";
    noBtn.style.left = (btnRect.left - areaRect.left) + "px";
    noBtn.style.top  = (btnRect.top  - areaRect.top)  + "px";

    noEscaping = true;
  }

  const areaRect = btnArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = areaRect.width - btnRect.width - padding;
  const maxY = areaRect.height - btnRect.height - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = Math.max(padding, x) + "px";
  noBtn.style.top  = Math.max(padding, y) + "px";
}

noBtn.addEventListener("mouseenter", dodgeNoButton);
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dodgeNoButton();
});

// ---------- YES (page 1 -> page 2) ----------
yesBtn.addEventListener("click", () => {
  showPage("page2");

  pageIndex = 0;
  message.innerHTML = lovePages[pageIndex];
  nextBtn.textContent = "Next 💌";
});

// ---------- NEXT (page 2 -> page 3) ----------
nextBtn.addEventListener("click", () => {
  pageIndex++;

  if (pageIndex < lovePages.length) {
    message.innerHTML = lovePages[pageIndex];

    if (pageIndex === lovePages.length - 1) {
      nextBtn.textContent = "Finish 💘";
    }
  } else {
    showPage("page3");
  }
});

// ---------- Gift ----------
giftBtn.addEventListener("click", () => {
  giftBtn.classList.add("hidden");
  giftBox.classList.remove("hidden");
});

// ---------- Open Letter ----------
openLetterBtn.addEventListener("click", () => {
  showPage("page4");
  letterText.innerHTML = loveLetter;
});

// ---------- Forever NO escape (PAGE 4) ----------
let foreverEscaping = false;

function dodgeForeverNo() {
  const padding = 10;

  if (!foreverEscaping) {
    const btnRect = foreverNo.getBoundingClientRect();
    const areaRect = finalButtons.getBoundingClientRect();

    foreverNo.style.position = "absolute";
    foreverNo.style.left = (btnRect.left - areaRect.left) + "px";
    foreverNo.style.top  = (btnRect.top  - areaRect.top)  + "px";

    foreverEscaping = true;
  }

  const areaRect = finalButtons.getBoundingClientRect();
  const btnRect = foreverNo.getBoundingClientRect();

  const x = Math.random() * (areaRect.width - btnRect.width - padding);
  const y = Math.random() * (areaRect.height - btnRect.height - padding);

  foreverNo.style.left = Math.max(padding, x) + "px";
  foreverNo.style.top  = Math.max(padding, y) + "px";
}

foreverNo.addEventListener("mouseenter", dodgeForeverNo);
foreverNo.addEventListener("click", (e) => {
  e.preventDefault();
  dodgeForeverNo();
});

// ---------- Forever YES ----------
foreverYes.addEventListener("click", () => {
  finalButtons.classList.add("hidden");
  showPage("page5");
});

// ---------- Floating Hearts ----------
function createBgHeart() {
  const heart = document.createElement("div");
  heart.className = "bg-heart";

  const hearts = ["💗", "💖", "💕", "💘"];
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 22 + 18 + "px";

  heartsLayer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createBgHeart, 140);
