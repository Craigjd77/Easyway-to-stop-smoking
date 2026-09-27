/* Allen Carr Easy Way — freedom arcade
   Original educational paraphrase of Easyway ideas — not book verbatim. */

const illusions = [
  { lie: "It helps me relax", truth: "It only ends the fidget nicotine created. Non-smokers already have that calm." },
  { lie: "I need it for stress", truth: "Smoking schedules stress between cigarettes, then sells you the refund." },
  { lie: "It helps me concentrate", truth: "Half your mind is hunting the next dose. Silence that itch and focus returns." },
  { lie: "I’ll always miss it", truth: "You’ll notice a missing ritual briefly — not a lost joy. Longing dies with the illusion." },
  { lie: "Quitting takes iron willpower", truth: "Willpower means wanting it and forbidding it. Easy Way removes the want." },
  { lie: "Just one won’t hurt", truth: "One cigarette restarts nicotine and the mental argument. No souvenir drags." },
  { lie: "Cutting down is smarter", truth: "Fewer cigarettes make each one feel precious. You stay hooked and more obsessed." },
  { lie: "I’m waiting for the right time", truth: "There’s no calm month the addiction will approve. Understanding is the green light." }
];

const dayBeats = [
  {
    time: "7:10 AM",
    title: "First of the day",
    body: "Eyes open, and the hunger is already loud. This one feels like oxygen.",
    reframe: "It’s loud because you went hours without nicotine — not because mornings require smoke.",
    sky: "linear-gradient(180deg, #f7d9a8 0%, #9ec9e6 55%, #e8f4fa 100%)"
  },
  {
    time: "10:40 AM",
    title: "Desk fidget",
    body: "Work gets sticky. You tell yourself a cigarette will sharpen you.",
    reframe: "The sticky feeling is partly the itch interrupting you. Feed it and it takes credit for ‘focus.’",
    sky: "linear-gradient(180deg, #b9d8ef 0%, #dfeff8 50%, #eef6f2 100%)"
  },
  {
    time: "1:05 PM",
    title: "After lunch",
    body: "Meal ends. Hands look for the familiar punctuation mark.",
    reframe: "The meal was the pleasure. The cigarette trained itself onto the period at the end of the sentence.",
    sky: "linear-gradient(180deg, #87b7d8 0%, #cfe6f4 45%, #e7f3ee 100%)"
  },
  {
    time: "3:30 PM",
    title: "Stress spike",
    body: "Email lands like a brick. You want the ‘calm down’ stick.",
    reframe: "Handle the email. Don’t tip a drug that made you edgy between doses all day.",
    sky: "linear-gradient(180deg, #6f9fbd 0%, #c5dcea 50%, #e8eef2 100%)"
  },
  {
    time: "8:15 PM",
    title: "Pub / friends",
    body: "Laughter, drinks, the doorway summons. ‘Just social.’",
    reframe: "The fun is the people. Stepping out mid-story is answering a bell, not belonging.",
    sky: "linear-gradient(180deg, #3d5f7a 0%, #7f9eb5 40%, #d9e3ea 100%)"
  },
  {
    time: "11:40 PM",
    title: "Last one",
    body: "You bargain: final cigarette, then sleep. Tomorrow’s first one is already booked.",
    reframe: "The ‘last one’ is a subscription renewal. Freedom is cancelling the plan — cheerfully.",
    sky: "linear-gradient(180deg, #1b2a38 0%, #3e566b 45%, #9aaebc 100%)"
  }
];

const brainScenes = [
  {
    label: "Tough meeting",
    smoker: "If I don’t smoke after this I’ll snap. I need something. Everyone gets a crutch.",
    free: "The meeting was hard. A cigarette won’t rewrite it — it’ll just restart a private itch so I can ‘solve’ it."
  },
  {
    label: "Morning coffee",
    smoker: "Coffee without a cigarette is pointless. That’s my sacred combo.",
    free: "Coffee is the ritual I like. Nicotine gatecrashed it and charged rent. Keep the mug, fire the gatecrasher."
  },
  {
    label: "Friends lighting up",
    smoker: "They’re enjoying themselves. I’m the boring one if I don’t join.",
    free: "They’re feeding a trap on a timer. I can stay in the joke without punching out for a dose."
  },
  {
    label: "Bored evening",
    smoker: "There’s nothing to do. A cigarette makes a moment happen.",
    free: "Boredom is allowed. Manufacturing a tiny withdrawal so I can relieve it is a sad hobby."
  }
];

const trialCharges = [
  {
    charge: "False advertising: ‘I am pleasure’",
    prompt: "Cross-exam: What do you actually deliver in the first second?",
    verdict: "Only relief from withdrawal you caused. That’s a refund, not a gift. Guilty of impersonating pleasure."
  },
  {
    charge: "Fraud: ‘I calm stress’",
    prompt: "Cross-exam: Who created the edgy feeling between doses?",
    verdict: "You did. Then you sold the ceasefire. Guilty of running a protection racket."
  },
  {
    charge: "Theft: time, money, breath",
    prompt: "Cross-exam: Name one thing you give that a non-smoker lacks.",
    verdict: "Silence. You take continuously and call the brief pause ‘benefit.’ Guilty on theft."
  },
  {
    charge: "Conspiracy with brainwashing",
    prompt: "Cross-exam: Who told the jury quitting must be miserable?",
    verdict: "Culture, fear, and failed willpower quits — your sleeping partners. Guilty of conspiracy."
  }
];

const ceremonySteps = [
  { btn: "Begin ritual", text: "Rehearsal only. In real life, keep smoking until the illusions are gone." },
  { btn: "Look honestly", text: "Hold it in your mind. Ask: what will this give me that freedom doesn’t?" },
  { btn: "Name the scam", text: "Answer: nothing. A brief end to an itch this product created." },
  { btn: "Extinguish with relief", text: "Put it out as celebration, not sacrifice. Line to practice: I am a non-smoker. I don’t want to smoke." },
  { btn: "Done", text: "If the thought returns, answer with truth — never ‘just one.’ Protect the understanding." }
];

const topics = [
  { title: "The trap in one breath", body: "Nicotine fades → empty restlessness → smoke → relief → brain files ‘cigarettes help.’ Escape = stop believing the filing system." },
  { title: "Why willpower feels like prison", body: "Wanting it and forbidding it is permanent denial. Easy Way flips the desire so you’re declining a mugging." },
  { title: "Substitutes keep the story alive", body: "Anything that continues nicotine — or the ‘I need a hit’ identity — can prolong both itch and myth." },
  { title: "Withdrawal without horror", body: "Usually a mild empty cue. Fear inflates it. Each pang can mean the addiction is dying." },
  { title: "Allen’s proof point", body: "Hundred-a-day smoker who escaped without mourning. Heavy history can make the trap clearer, not hopeless." }
];

const snapLines = [
  { title: "Crack!", line: "Paper, leaf, and a refund of comfort it stole first." },
  { title: "Illusion thinning…", line: "Not pleasure — relief from the previous dose." },
  { title: "Sales pitch denied", line: "You’re declining a mugging, not a treat." },
  { title: "Freedom rep", line: "Practice for the real finale: put it out smiling." }
];

const state = {
  flipped: new Set(),
  deckIndex: 0,
  deckShowingBack: false,
  dayVisited: new Set([0]),
  brainHeard: false,
  meterLogged: false,
  trialSeen: new Set(),
  doorChosen: false,
  ceremonyDone: false,
  ceremonyIndex: 0,
  snapCount: 0,
  snapBusy: false
};

document.addEventListener("DOMContentLoaded", () => {
  setupSmokeField();
  setupSnap();
  setupDeck();
  setupDay();
  setupBrains();
  setupMeter();
  setupTrial();
  setupDoors();
  setupCeremony();
  setupTopics();
  updatePathScore();
});

function updatePathScore() {
  const score =
    Math.min(3, state.flipped.size) +
    Math.min(2, state.dayVisited.size > 1 ? 2 : state.dayVisited.size) +
    (state.brainHeard ? 1 : 0) +
    (state.meterLogged ? 1 : 0) +
    Math.min(2, state.trialSeen.size) +
    (state.doorChosen ? 1 : 0) +
    (state.ceremonyDone ? 1 : 0);
  const total = 11;
  const scoreEl = document.getElementById("pathScore");
  const totalEl = document.getElementById("pathTotal");
  const meter = document.getElementById("pathMeter");
  if (!scoreEl) return;
  scoreEl.textContent = String(score);
  totalEl.textContent = String(total);
  meter.style.width = `${Math.min(100, (score / total) * 100)}%`;
}

function setupSmokeField() {
  const field = document.getElementById("smokeField");
  if (!field) return;
  for (let i = 0; i < 10; i++) spawnPuff(field, true);
  setInterval(() => spawnPuff(field, false), 1600);
}

function spawnPuff(field, initial) {
  const puff = document.createElement("span");
  puff.className = "smoke-puff";
  puff.style.left = `${Math.random() * 100}%`;
  puff.style.animationDuration = `${10 + Math.random() * 10}s`;
  puff.style.width = `${18 + Math.random() * 26}px`;
  puff.style.height = puff.style.width;
  if (initial) puff.style.bottom = `${Math.random() * 80}vh`;
  field.appendChild(puff);
  puff.addEventListener("animationend", () => puff.remove());
}

function setupSnap() {
  const btn = document.getElementById("snapCig");
  const cig = document.getElementById("cigVisual");
  const status = document.getElementById("snapStatus");
  const meter = document.getElementById("freedomMeter");
  if (!btn || !cig) return;

  btn.addEventListener("click", () => {
    if (state.snapBusy) return;
    state.snapBusy = true;
    state.snapCount += 1;
    btn.classList.add("is-snapped");
    cig.classList.add("snapped");
    playTone(220, 80);
    const msg = snapLines[(state.snapCount - 1) % snapLines.length];
    status.innerHTML = `<strong>${msg.title}</strong><span>${msg.line}</span>`;
    document.querySelector(".meter-label").innerHTML =
      `<span id="snapCount">${state.snapCount}</span> ${state.snapCount === 1 ? "snap" : "snaps"} · illusion weakening`;
    meter.style.width = `${Math.min(100, state.snapCount * 12)}%`;
    setTimeout(() => {
      cig.classList.remove("snapped");
      btn.classList.remove("is-snapped");
      state.snapBusy = false;
    }, 1200);
  });
}

function playTone(start, end) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(start, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(end, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.07, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (_) {
    /* ignore */
  }
}

function setupDeck() {
  const card = document.getElementById("flipCard");
  const prev = document.getElementById("deckPrev");
  const next = document.getElementById("deckNext");
  document.getElementById("deckTotal").textContent = String(illusions.length);

  const render = () => {
    const item = illusions[state.deckIndex];
    document.getElementById("deckLie").textContent = item.lie;
    document.getElementById("deckTruth").textContent = item.truth;
    document.getElementById("deckIndex").textContent = String(state.deckIndex + 1);
    card.classList.toggle("is-flipped", state.deckShowingBack);
    document.getElementById("deckProgress").textContent =
      `${state.flipped.size} / ${illusions.length} flipped`;
  };

  card.addEventListener("click", () => {
    state.deckShowingBack = !state.deckShowingBack;
    if (state.deckShowingBack) {
      state.flipped.add(state.deckIndex);
      playTone(300, 150);
      updatePathScore();
    }
    render();
  });

  prev.addEventListener("click", () => {
    state.deckIndex = (state.deckIndex - 1 + illusions.length) % illusions.length;
    state.deckShowingBack = false;
    render();
  });

  next.addEventListener("click", () => {
    state.deckIndex = (state.deckIndex + 1) % illusions.length;
    state.deckShowingBack = false;
    render();
  });

  render();
}

function setupDay() {
  const range = document.getElementById("dayRange");
  if (!range) return;

  const paint = () => {
    const i = Number(range.value);
    const beat = dayBeats[i];
    state.dayVisited.add(i);
    document.getElementById("dayTime").textContent = beat.time;
    document.getElementById("dayTitle").textContent = beat.title;
    document.getElementById("dayBody").textContent = beat.body;
    document.getElementById("dayReframe").textContent = beat.reframe;
    document.getElementById("daySky").style.background = beat.sky;
    const night = i >= 4;
    document.getElementById("day").classList.toggle("is-night", night);
    updatePathScore();
  };

  range.addEventListener("input", paint);
  paint();
}

function setupBrains() {
  const select = document.getElementById("brainSituation");
  const heard = document.getElementById("brainHeard");
  if (!select) return;

  brainScenes.forEach((scene, i) => {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = scene.label;
    select.appendChild(opt);
  });

  const paint = () => {
    const scene = brainScenes[Number(select.value)];
    document.getElementById("brainSmoker").textContent = scene.smoker;
    document.getElementById("brainFree").textContent = scene.free;
  };

  select.addEventListener("change", paint);
  heard.addEventListener("click", () => {
    state.brainHeard = true;
    heard.textContent = "Difference locked in";
    heard.disabled = true;
    playTone(280, 140);
    updatePathScore();
  });
  paint();
}

function setupMeter() {
  const cigs = document.getElementById("cigsPerDay");
  const price = document.getElementById("packPrice");
  const logBtn = document.getElementById("meterLogged");
  if (!cigs) return;

  const paint = () => {
    const perDay = Number(cigs.value);
    const pack = Number(price.value);
    document.getElementById("cigsPerDayVal").textContent = String(perDay);
    document.getElementById("packPriceVal").textContent = pack.toFixed(pack % 1 ? 1 : 0);

    const yearlyMoney = (perDay / 20) * pack * 365;
    const hours = ((perDay * 5) / 60) * 365;
    document.getElementById("statMoney").textContent = `$${Math.round(yearlyMoney).toLocaleString()}`;
    document.getElementById("statDays").textContent = `${perDay}×365 tiny appointments`;
    document.getElementById("statHours").textContent = `${Math.round(hours)} hrs / year`;
    document.getElementById("meterNote").textContent =
      `That’s roughly $${Math.round(yearlyMoney)} a year to rent a feeling non-smokers get free.`;
  };

  cigs.addEventListener("input", paint);
  price.addEventListener("input", paint);
  logBtn.addEventListener("click", () => {
    state.meterLogged = true;
    logBtn.textContent = "Toll logged";
    logBtn.disabled = true;
    playTone(260, 120);
    updatePathScore();
  });
  paint();
}

function setupTrial() {
  const wrap = document.getElementById("trialCharges");
  const prompt = document.getElementById("trialPrompt");
  const verdict = document.getElementById("trialVerdict");
  const verdictText = document.getElementById("trialVerdictText");
  const chargeLine = document.getElementById("trialCharge");
  if (!wrap) return;

  trialCharges.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "trial-charge";
    btn.textContent = item.charge;
    btn.addEventListener("click", () => {
      wrap.querySelectorAll(".trial-charge").forEach((el) => el.classList.remove("is-active"));
      btn.classList.add("is-active");
      chargeLine.textContent = item.charge;
      prompt.textContent = item.prompt;
      verdict.hidden = false;
      verdictText.textContent = item.verdict;
      state.trialSeen.add(index);
      playTone(310, 130);
      updatePathScore();
    });
    wrap.appendChild(btn);
  });
}

function setupDoors() {
  const will = document.getElementById("doorWill");
  const easy = document.getElementById("doorEasy");
  const result = document.getElementById("doorResult");
  if (!will) return;

  const choose = (which) => {
    state.doorChosen = true;
    will.classList.toggle("is-picked", which === "will");
    easy.classList.toggle("is-picked", which === "easy");
    will.classList.toggle("is-dimmed", which !== "will");
    easy.classList.toggle("is-dimmed", which !== "easy");
    result.hidden = false;
    if (which === "will") {
      result.textContent =
        "Door A is how most people quit — and why they feel deprived. You can notice it… and still walk to Door B.";
    } else {
      result.textContent =
        "Door B is the Easy Way: destroy the illusions first, then leave cheerful. No lifelong arm-wrestle with a cigarette.";
      playTone(340, 170);
    }
    updatePathScore();
  };

  will.addEventListener("click", () => choose("will"));
  easy.addEventListener("click", () => choose("easy"));
}

function setupCeremony() {
  const next = document.getElementById("ceremonyNext");
  const reset = document.getElementById("ceremonyReset");
  const step = document.getElementById("ceremonyStep");
  const cig = document.getElementById("ceremonyCig");
  const stage = document.getElementById("ceremonyStage");
  if (!next) return;

  const render = () => {
    const current = ceremonySteps[state.ceremonyIndex];
    step.textContent = current.text;
    const isLast = state.ceremonyIndex >= ceremonySteps.length - 1;
    next.hidden = isLast;
    next.textContent = state.ceremonyIndex === 0
      ? "Begin ritual"
      : ceremonySteps[Math.min(state.ceremonyIndex + 1, ceremonySteps.length - 1)].btn;
    cig.classList.toggle("is-lit", state.ceremonyIndex >= 1 && state.ceremonyIndex < 3);
    cig.classList.toggle("is-out", state.ceremonyIndex >= 3);
    stage.classList.toggle("is-complete", isLast);
    reset.hidden = state.ceremonyIndex === 0;
  };

  next.addEventListener("click", () => {
    if (state.ceremonyIndex < ceremonySteps.length - 1) {
      state.ceremonyIndex += 1;
      if (state.ceremonyIndex >= ceremonySteps.length - 1) {
        state.ceremonyDone = true;
        playTone(360, 180);
      } else playTone(300, 150);
      render();
      updatePathScore();
    }
  });

  reset.addEventListener("click", () => {
    state.ceremonyIndex = 0;
    state.ceremonyDone = false;
    next.hidden = false;
    render();
    updatePathScore();
  });

  render();
}

function setupTopics() {
  const list = document.getElementById("topicList");
  if (!list) return;
  topics.forEach((topic) => {
    const details = document.createElement("details");
    details.className = "topic";
    details.innerHTML = `<summary>${topic.title}</summary><p>${topic.body}</p>`;
    list.appendChild(details);
  });
}
