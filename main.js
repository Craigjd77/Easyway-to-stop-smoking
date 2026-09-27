/* Allen Carr Easy Way — interactive site */

const lessons = [
  { title: "Introduction to the Smoking Trap", sub: "Understanding the Nature of Addiction", chapter: "The Trap" },
  { title: "The Illusion of Pleasure", sub: "Deconstructing the Smoking Experience", chapter: "The Trap" },
  { title: "The Fear of Quitting", sub: "Why you're afraid to stop", chapter: "The Trap" },
  { title: "Understanding Nicotine Addiction", sub: "The science behind the trap", chapter: "The Trap" },
  { title: "The Social Conditioning", sub: "How society keeps you smoking", chapter: "The Trap" },
  { title: "Breaking the Mental Chains", sub: "Freeing your mind from the trap", chapter: "Mind Free" },
  { title: "The Easy Way Method", sub: "How to quit easily and permanently", chapter: "Mind Free" },
  { title: "Preparing for Freedom", sub: "Getting ready to quit", chapter: "Mind Free" },
  { title: "The Final Cigarette", sub: "Making the decision to be free", chapter: "Mind Free" },
  { title: "The First Day of Freedom", sub: "Your first day as a non-smoker", chapter: "Mind Free" },
  { title: "Dealing with Cravings", sub: "Understanding and managing cravings", chapter: "Recovery" },
  { title: "The Recovery Process", sub: "Your body's healing journey", chapter: "Recovery" },
  { title: "Physical Healing", sub: "How your body recovers", chapter: "Recovery" },
  { title: "Mental Clarity", sub: "The return of clear thinking", chapter: "Recovery" },
  { title: "Financial Freedom", sub: "The money you'll save", chapter: "Recovery" },
  { title: "Social Benefits", sub: "How quitting improves relationships", chapter: "Life After" },
  { title: "Health Improvements", sub: "The health benefits of quitting", chapter: "Life After" },
  { title: "The New You", sub: "Discovering your true self", chapter: "Life After" },
  { title: "Staying Free", sub: "Maintaining your freedom", chapter: "Life After" },
  { title: "Helping Others", sub: "Sharing your success", chapter: "Life After" },
  { title: "The Science of Addiction", sub: "Understanding the biology", chapter: "Deep Dive" },
  { title: "Psychological Aspects", sub: "The mental side of addiction", chapter: "Deep Dive" },
  { title: "Behavioral Patterns", sub: "Breaking old habits", chapter: "Deep Dive" },
  { title: "Cognitive Restructuring", sub: "Changing your thinking", chapter: "Deep Dive" },
  { title: "Emotional Freedom", sub: "Freeing your emotions", chapter: "Deep Dive" },
  { title: "The Power of Choice", sub: "Taking control of your life", chapter: "Mastery" },
  { title: "Building Confidence", sub: "Strengthening your resolve", chapter: "Mastery" },
  { title: "Overcoming Obstacles", sub: "Dealing with challenges", chapter: "Mastery" },
  { title: "The Success Mindset", sub: "Thinking like a non-smoker", chapter: "Mastery" },
  { title: "Long-term Strategies", sub: "Staying free forever", chapter: "Mastery" },
  { title: "Relapse Prevention", sub: "Avoiding the trap again", chapter: "Forever Free" },
  { title: "The Freedom Lifestyle", sub: "Living as a non-smoker", chapter: "Forever Free" },
  { title: "Celebrating Success", sub: "Acknowledging your achievement", chapter: "Forever Free" },
  { title: "Advanced Techniques", sub: "Mastering the method", chapter: "Forever Free" },
  { title: "The Complete Transformation", sub: "Your full transformation", chapter: "Forever Free" },
  { title: "Living Without Smoking", sub: "Your new normal", chapter: "New Life" },
  { title: "The Legacy of Freedom", sub: "Your lasting impact", chapter: "New Life" },
  { title: "Final Thoughts", sub: "Reflections on freedom", chapter: "New Life" },
  { title: "Your New Beginning", sub: "Starting your free life", chapter: "New Life" }
];

const allenQuotes = [
  "The truth is that smoking does absolutely nothing for you at all. It doesn't relieve stress, it doesn't help you concentrate, it doesn't give you courage, and it doesn't make you look cool.",
  "The only pleasure you get from smoking is the relief from the withdrawal symptoms from the previous cigarette. That's not pleasure — that's relief from a self-imposed discomfort.",
  "The fear of quitting is always worse than the reality. Once you understand that you're not giving up anything of value, the fear disappears.",
  "Nicotine is a drug that creates an artificial need and then satisfies that need. Like drinking salt water when you're thirsty.",
  "Society has been brainwashed into believing that smoking is a habit that's difficult to break. It's an addiction that's easy to escape once you see the trap.",
  "The chains that bind you are not physical — they're mental. Once you see the truth, the chains fall away.",
  "The key to success is understanding that you're not giving up anything of value. You're gaining everything.",
  "Preparation is not about building willpower — it's about building understanding.",
  "When you finish your final cigarette, you're not giving up anything. You're gaining everything.",
  "Your first day of freedom is the beginning of your new life. Welcome to the real you.",
  "Cravings are not your enemy — they're the addiction dying. Celebrate them.",
  "Recovery is not a process of deprivation — it's a process of liberation.",
  "Your body has an amazing capacity to heal. Give it the chance it deserves.",
  "Mental clarity is not something you gain — it's something you recover.",
  "The money you save is not just financial — it's freedom from financial slavery.",
  "Social freedom means being able to be yourself without needing a crutch.",
  "Health is not the absence of disease — it's the presence of vitality.",
  "The new you is not someone you become — it's someone you always were.",
  "Staying free is not about resisting temptation — it's about not being tempted.",
  "Helping others is not just altruistic — it's how you stay free yourself.",
  "Understanding the science helps you see the trap for what it really is.",
  "The psychological aspects of addiction are just as important as the physical ones.",
  "Old patterns can be broken. New patterns can be created.",
  "Your thoughts create your reality. Choose freedom.",
  "Emotional freedom means feeling your feelings without needing to numb them.",
  "The power of choice is the greatest power you have.",
  "Confidence comes from understanding, not from willpower.",
  "Obstacles are opportunities to strengthen your commitment.",
  "Success is not a destination — it's a mindset.",
  "Long-term freedom requires long-term thinking.",
  "Relapse prevention is not about fear — it's about understanding.",
  "The freedom lifestyle is not restrictive — it's liberating.",
  "Celebrate every moment of your freedom. You've earned it.",
  "Advanced techniques are just deeper understanding.",
  "Transformation is not a process — it's a realization.",
  "Living without smoking is not a sacrifice — it's a gift.",
  "Your legacy of freedom will inspire others to find their own.",
  "Final thoughts are just the beginning of your new life.",
  "Your new beginning starts with the understanding that you're already free."
];

const featuredQuotes = [
  allenQuotes[0],
  allenQuotes[1],
  allenQuotes[2],
  allenQuotes[6],
  allenQuotes[10],
  allenQuotes[18],
  "There is no such thing as a confirmed smoker. There are only smokers who haven't yet seen the Easy Way.",
  "You don't need willpower to stop smoking — you need the truth about nicotine."
];

const lessonBodies = {
  1: `<p>Welcome. This filmstrip walks you through Allen Carr's core insight: smoking is not a pleasure you must sacrifice. It's a trap that creates a tiny itch — then sells you the "cure."</p>
    <ul><li>See nicotine addiction clearly</li><li>Unlearn the pleasure myth</li><li>Leave as a happy non-smoker</li></ul>`,
  2: `<p>That first drag feels like relief because withdrawal was already humming in the background. Remove the drug, and the fake "pleasure" job disappears with it.</p>`,
  3: `<p>Fear of quitting is fear of losing a friend that was never on your side. When the friend is exposed as a pickpocket, fear shrinks.</p>`,
  4: `<p>Nicotine is a empty little loop: dose → fading → empty feeling → next dose. Understanding the loop is half the escape.</p>`,
  7: `<p>The Easy Way: keep smoking while you learn, destroy the illusions, then finish the final cigarette as a celebration — not a grim vow of deprivation.</p>`,
  9: `<p>Make the decision from a place of clarity: you are not "giving up." You are refusing to feed a parasite that charged you for the privilege.</p>`,
  11: `<p>A craving is the dying echo of nicotine's fake need. Don't fight it with panic — greet it as proof the escape is working.</p>`,
  19: `<p>Staying free is easy when you no longer believe cigarettes do something useful. Protect the understanding, and the urge has nowhere to land.</p>`,
  39: `<p>You're not starting a lifelong battle. You're starting an ordinary, delicious non-smoker life — with better mornings and a quieter mind.</p>`
};

const snapLines = [
  { title: "Crack!", line: "See? It was never precious. Just paper, leaf, and a tiny drug story." },
  { title: "Illusion weakening…", line: "Allen would tip his glasses and say: that wasn't pleasure — that was relief." },
  { title: "Nice snap!", line: "Every break is practice for the real finale: walking away cheerful." },
  { title: "Freedom reps!", line: "You're training your brain to laugh at the nicotine sales pitch." },
  { title: "Poof goes the myth", line: "Cigarettes don't calm you. They interrupt the storm they started." }
];

let currentLesson = 1;
let currentQuote = 0;
let snapCount = 0;
let snapBusy = false;

document.addEventListener("DOMContentLoaded", () => {
  setupSmokeField();
  setupSnap();
  setupLessons();
  setupQuotes();
  showLesson(1);
  showQuote(0);
});

function setupSmokeField() {
  const field = document.getElementById("smokeField");
  if (!field) return;

  for (let i = 0; i < 10; i++) {
    spawnPuff(field, true);
  }

  setInterval(() => spawnPuff(field, false), 1600);
}

function spawnPuff(field, initial) {
  const puff = document.createElement("span");
  puff.className = "smoke-puff";
  puff.style.left = `${Math.random() * 100}%`;
  puff.style.animationDuration = `${10 + Math.random() * 10}s`;
  puff.style.width = `${18 + Math.random() * 26}px`;
  puff.style.height = puff.style.width;
  if (initial) {
    puff.style.bottom = `${Math.random() * 80}vh`;
  }
  field.appendChild(puff);
  puff.addEventListener("animationend", () => puff.remove());
}

function setupSnap() {
  const btn = document.getElementById("snapCig");
  const cig = document.getElementById("cigVisual");
  const status = document.getElementById("snapStatus");
  const meter = document.getElementById("freedomMeter");
  const countEl = document.getElementById("snapCount");
  if (!btn || !cig) return;

  btn.addEventListener("click", () => {
    if (snapBusy) return;
    snapBusy = true;
    snapCount += 1;

    btn.classList.add("is-snapped");
    cig.classList.add("snapped");
    playSnapSound();

    const msg = snapLines[(snapCount - 1) % snapLines.length];
    status.innerHTML = `<strong>${msg.title}</strong><span>${msg.line}</span>`;
    countEl.textContent = String(snapCount);
    document.querySelector(".meter-label").innerHTML =
      `<span id="snapCount">${snapCount}</span> ${snapCount === 1 ? "snap" : "snaps"} · illusion weakening`;
    meter.style.width = `${Math.min(100, snapCount * 12)}%`;

    setTimeout(() => {
      cig.classList.remove("snapped");
      btn.classList.remove("is-snapped");
      snapBusy = false;
      if (snapCount >= 8) {
        status.innerHTML = `<strong>You're getting it.</strong><span>The cigarette looks smaller every time. That's the Easy Way clicking into place.</span>`;
      }
    }, 1200);
  });
}

function playSnapSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(220, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (_) {
    /* ignore */
  }
}

function setupLessons() {
  const select = document.getElementById("lessonSelect");
  const prev = document.getElementById("prevLesson");
  const next = document.getElementById("nextLesson");

  lessons.forEach((lesson, index) => {
    const opt = document.createElement("option");
    opt.value = String(index + 1);
    opt.textContent = `${index + 1}. ${lesson.title}`;
    select.appendChild(opt);
  });

  select.addEventListener("change", (e) => showLesson(Number(e.target.value)));
  prev.addEventListener("click", () => {
    if (currentLesson > 1) showLesson(currentLesson - 1);
  });
  next.addEventListener("click", () => {
    if (currentLesson < lessons.length) showLesson(currentLesson + 1);
  });

  document.addEventListener("keydown", (e) => {
    if (e.target && (e.target.tagName === "SELECT" || e.target.tagName === "INPUT")) return;
    if (e.key === "ArrowRight" && currentLesson < lessons.length) showLesson(currentLesson + 1);
    if (e.key === "ArrowLeft" && currentLesson > 1) showLesson(currentLesson - 1);
  });
}

function showLesson(num) {
  currentLesson = num;
  const lesson = lessons[num - 1];
  const panel = document.getElementById("lessonPanel");

  document.getElementById("lessonKicker").textContent = `${lesson.chapter} · Lesson ${num}`;
  document.getElementById("lessonTitle").textContent = lesson.title;
  document.getElementById("lessonSub").textContent = lesson.sub;
  document.getElementById("lessonQuote").textContent = `“${allenQuotes[num - 1]}”`;
  document.getElementById("lessonBody").innerHTML =
    lessonBodies[num] ||
    `<p>${lesson.sub}. Sit with Allen's line above until the old smoking story feels a bit silly — then move on.</p>
     <p>Each lesson stacks understanding. You're not building willpower; you're removing reasons to smoke.</p>`;

  document.getElementById("lessonLabel").textContent = `Lesson ${num} / ${lessons.length}`;
  document.getElementById("lessonMeter").style.width = `${(num / lessons.length) * 100}%`;
  document.getElementById("lessonSelect").value = String(num);

  panel.style.animation = "none";
  // force reflow for restart
  void panel.offsetWidth;
  panel.style.animation = "";
}

function setupQuotes() {
  const dots = document.getElementById("quoteDots");
  featuredQuotes.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show quote ${i + 1}`);
    dot.addEventListener("click", () => showQuote(i));
    dots.appendChild(dot);
  });

  document.getElementById("prevQuote").addEventListener("click", () => {
    showQuote((currentQuote - 1 + featuredQuotes.length) % featuredQuotes.length);
  });
  document.getElementById("nextQuote").addEventListener("click", () => {
    showQuote((currentQuote + 1) % featuredQuotes.length);
  });

  setInterval(() => {
    showQuote((currentQuote + 1) % featuredQuotes.length);
  }, 7000);
}

function showQuote(index) {
  currentQuote = index;
  const text = document.getElementById("quoteText");
  const card = document.getElementById("quoteCard");
  text.textContent = `“${featuredQuotes[index]}”`;

  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "lessonIn 0.45s ease";

  [...document.getElementById("quoteDots").children].forEach((dot, i) => {
    dot.setAttribute("aria-selected", i === index ? "true" : "false");
  });
}
