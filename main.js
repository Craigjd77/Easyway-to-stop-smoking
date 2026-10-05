/* Allen Carr Easy Way — cinematic site
   Original paraphrase of Easyway ideas — not copyrighted book text. */

const lies = [
  {
    bad: "It helps me relax.",
    good: "It only ends the fidget it created. Non-smokers already have that calm."
  },
  {
    bad: "I need it for stress.",
    good: "Smoking schedules stress between cigarettes — then sells you the refund."
  },
  {
    bad: "I’ll always miss it.",
    good: "You’ll miss a ritual for a minute. Not a joy. The longing dies with the lie."
  },
  {
    bad: "Quitting takes iron willpower.",
    good: "Willpower means wanting it and forbidding it. Easy Way removes the want."
  },
  {
    bad: "Just one won’t hurt.",
    good: "One cigarette restarts the drug and the argument. No souvenir drags."
  },
  {
    bad: "I’m waiting for the right time.",
    good: "There’s no week the addiction will approve. Understanding is the green light."
  }
];

const voices = [
  {
    label: "Morning coffee",
    bad: "Coffee without a cigarette is pointless. That’s my sacred combo.",
    good: "Coffee is the pleasure. Nicotine gatecrashed it and charged rent."
  },
  {
    label: "After stress",
    bad: "If I don’t smoke I’ll snap. Everyone gets a crutch.",
    good: "The problem is real. A cigarette won’t rewrite it — it’ll only restart an itch."
  },
  {
    label: "With friends",
    bad: "They’re enjoying themselves. I’ll be boring if I don’t join.",
    good: "They’re answering a bell on a timer. I can stay in the joke without punching out."
  },
  {
    label: "Bored night",
    bad: "Nothing’s happening. A cigarette makes a moment.",
    good: "Boredom is allowed. Manufacturing withdrawal so you can relieve it is a sad hobby."
  }
];

const lastSteps = [
  "This is rehearsal. Keep smoking until the illusions are dead — then celebrate, don’t mourn.",
  "Hold it in your mind. Ask: what will this give me that freedom doesn’t?",
  "Answer: nothing. Only a brief end to an itch this product created.",
  "Put it out as a celebration. Practice: I am a non-smoker. I don’t want to smoke.",
  "If the thought returns, answer with truth — never “just one.” You’re already free."
];

const snapLines = [
  "Crack. Just paper, leaf, and a tiny scam.",
  "That wasn’t pleasure — that was a refund.",
  "See? Nothing sacred. Keep snapping.",
  "The monster looks smaller every time."
];

const state = {
  snaps: 0,
  busy: false,
  lieIndex: 0,
  showingTruth: false,
  lastIndex: 0
};

document.addEventListener("DOMContentLoaded", () => {
  setupSnap();
  setupLoop();
  setupLies();
  setupVoices();
  setupLast();
});

function tone(a, b) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "triangle";
    o.frequency.setValueAtTime(a, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(b, ctx.currentTime + 0.12);
    g.gain.setValueAtTime(0.07, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.15);
  } catch (_) {}
}

function setupSnap() {
  const btn = document.getElementById("snapBtn");
  const cig = document.getElementById("bigCig");
  const status = document.getElementById("snapStatus");
  const label = document.getElementById("snapLabel");
  btn.addEventListener("click", () => {
    if (state.busy) return;
    state.busy = true;
    state.snaps += 1;
    btn.classList.add("is-snapped");
    cig.classList.add("is-snapped");
    tone(220, 70);
    status.textContent = snapLines[(state.snaps - 1) % snapLines.length];
    label.textContent = state.snaps > 3 ? "AGAIN" : "SNAP ME";
    setTimeout(() => {
      btn.classList.remove("is-snapped");
      cig.classList.remove("is-snapped");
      state.busy = false;
    }, 1100);
  });
}

function setupLoop() {
  const steps = [...document.querySelectorAll(".loop-step")];
  const foot = document.getElementById("loopFoot");
  const notes = [
    "That’s the empty feeling — not a personality trait.",
    "Relief is the scam’s handshake.",
    "Costumes: calm, focus, reward. Same itch underneath."
  ];
  steps.forEach((step) => {
    step.addEventListener("click", () => {
      steps.forEach((s) => s.classList.remove("is-on"));
      step.classList.add("is-on");
      foot.textContent = notes[Number(step.dataset.step)];
      tone(280, 140);
    });
  });
}

function setupLies() {
  const card = document.getElementById("lieCard");
  const tag = document.getElementById("lieTag");
  const text = document.getElementById("lieText");
  const hint = document.getElementById("lieHint");
  const count = document.getElementById("lieCount");

  const paint = () => {
    const item = lies[state.lieIndex];
    card.classList.toggle("is-truth", state.showingTruth);
    tag.textContent = state.showingTruth ? "Easy Way" : "Smoker brain";
    text.textContent = state.showingTruth ? item.good : item.bad;
    hint.textContent = state.showingTruth ? "Tap for the lie again" : "Tap to flip";
    count.textContent = `${state.lieIndex + 1} / ${lies.length}`;
  };

  card.addEventListener("click", () => {
    state.showingTruth = !state.showingTruth;
    if (state.showingTruth) tone(320, 150);
    paint();
  });
  document.getElementById("liePrev").addEventListener("click", () => {
    state.lieIndex = (state.lieIndex - 1 + lies.length) % lies.length;
    state.showingTruth = false;
    paint();
  });
  document.getElementById("lieNext").addEventListener("click", () => {
    state.lieIndex = (state.lieIndex + 1) % lies.length;
    state.showingTruth = false;
    paint();
  });
  paint();
}

function setupVoices() {
  const picks = document.getElementById("voicePicks");
  const bad = document.getElementById("voiceBad");
  const good = document.getElementById("voiceGood");

  voices.forEach((v, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "voice-chip" + (i === 0 ? " is-on" : "");
    btn.textContent = v.label;
    btn.addEventListener("click", () => {
      [...picks.children].forEach((c) => c.classList.remove("is-on"));
      btn.classList.add("is-on");
      bad.textContent = v.bad;
      good.textContent = v.good;
      tone(260, 130);
    });
    picks.appendChild(btn);
  });
  bad.textContent = voices[0].bad;
  good.textContent = voices[0].good;
}

function setupLast() {
  const next = document.getElementById("lastNext");
  const reset = document.getElementById("lastReset");
  const line = document.getElementById("lastLine");
  const cig = document.getElementById("lastCig");

  const paint = () => {
    line.textContent = lastSteps[state.lastIndex];
    const end = state.lastIndex >= lastSteps.length - 1;
    next.hidden = end;
    next.textContent =
      state.lastIndex === 0 ? "Begin" :
      state.lastIndex === 1 ? "Ask the question" :
      state.lastIndex === 2 ? "Name the scam" :
      "Extinguish";
    cig.classList.toggle("is-lit", state.lastIndex >= 1 && state.lastIndex < 3);
    cig.classList.toggle("is-out", state.lastIndex >= 3);
    reset.hidden = state.lastIndex === 0;
  };

  next.addEventListener("click", () => {
    if (state.lastIndex < lastSteps.length - 1) {
      state.lastIndex += 1;
      tone(state.lastIndex >= lastSteps.length - 1 ? 360 : 300, 150);
      paint();
    }
  });
  reset.addEventListener("click", () => {
    state.lastIndex = 0;
    next.hidden = false;
    paint();
  });
  paint();
}
