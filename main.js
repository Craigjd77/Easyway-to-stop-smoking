/* Allen Carr Easy Way — interactive escape path
   Content is original educational paraphrase of well-known Easyway ideas.
   NOT verbatim text from Allen Carr’s copyrighted book. */

const myths = [
  {
    lie: "It helps me relax",
    truth: "It only ends the fidget nicotine created. Non-smokers already have the calm you’re borrowing."
  },
  {
    lie: "I need it for stress",
    truth: "Smoking schedules stress between cigarettes, then sells you the refund."
  },
  {
    lie: "It helps me concentrate",
    truth: "Half your brain is hunting the next dose. The “focus” after a smoke is the itch shutting up."
  },
  {
    lie: "I’ll always miss it",
    truth: "You’ll briefly notice a missing ritual — not a lost joy. The longing dies with the illusion."
  },
  {
    lie: "Quitting takes iron willpower",
    truth: "Willpower means wanting it and forbidding it. Easy Way removes the want."
  },
  {
    lie: "Just one won’t hurt",
    truth: "One cigarette restarts nicotine and the mental argument. There’s no souvenir drag."
  },
  {
    lie: "Cutting down is smarter",
    truth: "Fewer cigarettes make each one feel more precious. You stay hooked and more obsessed."
  },
  {
    lie: "I’m waiting for the right time",
    truth: "There’s no calm month the addiction will approve. Understanding is the green light."
  }
];

const moments = [
  {
    id: "coffee",
    label: "Morning coffee",
    title: "Coffee doesn’t need a chimney",
    body: "The first cigarette feels huge because overnight withdrawal peaked. The coffee is the pleasure; nicotine is the pickpocket hitching a ride.",
    line: "Keep the mug. Fire the parasite."
  },
  {
    id: "stress",
    label: "After stress",
    title: "Stress already happened — smoking added a second job",
    body: "The argument, deadline, or traffic is real. The cigarette didn’t solve it; it briefly ended a nicotine itch layered on top.",
    line: "Handle the problem. Don’t tip the drug."
  },
  {
    id: "meal",
    label: "After a meal",
    title: "Dessert isn’t poison smoke",
    body: "A full stomach and a pause feel good. Pairing a cigarette trained your brain to credit the wrong thing.",
    line: "Finish the meal. Skip the refund ritual."
  },
  {
    id: "social",
    label: "With friends / pub",
    title: "Company isn’t a nicotine appointment",
    body: "Laughter and chat work without synchronized tops-ups. Stepping outside mid-story is slavery dressed as socializing.",
    line: "Stay in the conversation. Pity the ones still popping out."
  },
  {
    id: "drive",
    label: "In the car",
    title: "The road doesn’t require a filter tip",
    body: "Boredom + habit loop. The car smell, the ash, the window crack — none of that is freedom.",
    line: "Drive as a non-smoker. Hands on the wheel, not the itch."
  },
  {
    id: "boredom",
    label: "When bored",
    title: "Nicotine makes ordinary moments feel incomplete",
    body: "Lighting up interrupts emptiness with ritual. Remove the addiction and life doesn’t get flatter — the fake “something’s missing” signal stops.",
    line: "Boredom is allowed. Poison isn’t required."
  }
];

const auditItems = [
  {
    claim: "Pleasure / reward",
    rebuttal: "That’s relief from withdrawal you wouldn’t have if you didn’t smoke."
  },
  {
    claim: "Stress relief",
    rebuttal: "It manufactures the stress between doses, then poses as medicine."
  },
  {
    claim: "Helps me think",
    rebuttal: "It distracts you until you feed it — then takes credit for clear thinking."
  },
  {
    claim: "Social lubricant",
    rebuttal: "People connect. Cigarettes just billed you for the interval."
  },
  {
    claim: "Weight control",
    rebuttal: "A poison appetite suppressant isn’t a lifestyle. Hunger ≠ nicotine emptiness."
  },
  {
    claim: "It’s my identity / me-time",
    rebuttal: "You deserve breaks that don’t enslave you. Me-time without a leash feels bigger."
  }
];

const ceremonySteps = [
  {
    btn: "Begin ritual",
    text: "When you’re ready, begin. In real life, keep smoking until the illusions are gone — this is rehearsal."
  },
  {
    btn: "Look at it honestly",
    text: "Pick up the cigarette in your mind. Ask: what is this about to give me that I don’t already have as a free person?"
  },
  {
    btn: "Name the scam",
    text: "Answer: nothing. Only a brief end to an itch this same product created. No courage. No magic. No treasure."
  },
  {
    btn: "Extinguish with relief",
    text: "Put it out as a celebration, not a sacrifice. From this second, practice the line: I am a non-smoker. I don’t want to smoke."
  },
  {
    btn: "Done",
    text: "If a thought of smoking appears later, don’t panic — answer it with truth. Never “just one.” Protect the understanding."
  }
];

const topics = [
  {
    title: "The sinister trap",
    body: "Nicotine fades → empty restlessness → you smoke → relief → brain files “cigarettes help.” Repeat until it feels like personality. Escape starts when you stop believing the report."
  },
  {
    title: "Brainwashing’s sleeping partner",
    body: "Ads, films, friends, and “everyone knows quitting is hard” keep the myth warm beside the drug. Question every benefit story you’ve inherited."
  },
  {
    title: "Why willpower feels like prison",
    body: "Wanting it and forbidding it is permanent denial. Easy Way flips desire itself so you’re declining a mugging, not resisting a treat."
  },
  {
    title: "Substitutes & the long leash",
    body: "Anything that keeps nicotine (or the “I need a hit” story) can prolong both the physical itch and the mental chains. Aim to get it out of your head."
  },
  {
    title: "Withdrawal without the horror story",
    body: "Physical pangs are usually a mild empty cue. Fear and self-pity inflate them. Each pang can mean the addiction is dying — smile at it."
  },
  {
    title: "Allen’s own escape",
    body: "Hundred-a-day smoker, failed willpower quits, then one insight: he wasn’t losing a pleasure — he was escaping a parasite. Heavy history can make the trap clearer, not hopeless."
  }
];

const snapLines = [
  { title: "Crack!", line: "Paper, leaf, and a refund of comfort the cigarette stole first." },
  { title: "Illusion weakening…", line: "That wasn’t pleasure — that was relief from the previous dose." },
  { title: "Trap exposed!", line: "You’re not denying a treat. You’re declining a mugging." },
  { title: "Freedom reps!", line: "Each snap is practice for the final cigarette celebration." },
  { title: "Brainwashing off", line: "Stress helper? Focus tool? Cool prop? Cross them off." }
];

const state = {
  mythsSmashed: new Set(),
  momentsSeen: new Set(),
  auditsDone: new Set(),
  ceremonyDone: false,
  snapCount: 0,
  snapBusy: false,
  ceremonyIndex: 0
};

document.addEventListener("DOMContentLoaded", () => {
  setupSmokeField();
  setupSnap();
  setupMyths();
  setupMoments();
  setupAudit();
  setupCeremony();
  setupTopics();
  updatePathScore();
});

function pathPoints() {
  return (
    state.mythsSmashed.size +
    state.momentsSeen.size +
    state.auditsDone.size +
    (state.ceremonyDone ? 1 : 0)
  );
}

function pathTotal() {
  return myths.length + 3 + 3 + 1; // smash all myths + sample moments/audits toward score feel
}

function updatePathScore() {
  // Score toward a friendly max: all myths + any 3 moments + any 3 audits + ceremony
  const momentPts = Math.min(3, state.momentsSeen.size);
  const auditPts = Math.min(3, state.auditsDone.size);
  const score = state.mythsSmashed.size + momentPts + auditPts + (state.ceremonyDone ? 1 : 0);
  const total = myths.length + 3 + 3 + 1;

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

function setupMyths() {
  const grid = document.getElementById("mythGrid");
  const progress = document.getElementById("mythProgress");
  if (!grid) return;

  myths.forEach((myth, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "myth-card";
    btn.innerHTML = `
      <span class="myth-label">Myth</span>
      <strong class="myth-lie">${myth.lie}</strong>
      <span class="myth-truth">${myth.truth}</span>
      <span class="myth-hint">Tap to smash</span>
    `;
    btn.addEventListener("click", () => {
      const opening = !btn.classList.contains("is-smashed");
      btn.classList.toggle("is-smashed");
      if (opening) {
        state.mythsSmashed.add(index);
        playTone(320, 140);
      } else {
        state.mythsSmashed.delete(index);
      }
      progress.textContent = `${state.mythsSmashed.size} / ${myths.length} myths smashed`;
      updatePathScore();
    });
    grid.appendChild(btn);
  });
}

function setupMoments() {
  const picks = document.getElementById("momentPicks");
  const coach = document.getElementById("momentCoach");
  if (!picks) return;

  moments.forEach((moment) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "moment-chip";
    btn.textContent = moment.label;
    btn.addEventListener("click", () => {
      picks.querySelectorAll(".moment-chip").forEach((el) => el.classList.remove("is-active"));
      btn.classList.add("is-active");
      coach.hidden = false;
      document.getElementById("coachTitle").textContent = moment.title;
      document.getElementById("coachBody").textContent = moment.body;
      document.getElementById("coachLine").textContent = moment.line;
      state.momentsSeen.add(moment.id);
      updatePathScore();
      playTone(280, 160);
    });
    picks.appendChild(btn);
  });
}

function setupAudit() {
  const choices = document.getElementById("auditChoices");
  const list = document.getElementById("auditList");
  const empty = document.getElementById("auditEmpty");
  const verdict = document.getElementById("auditVerdict");
  if (!choices) return;

  auditItems.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "audit-chip";
    btn.textContent = item.claim;
    btn.addEventListener("click", () => {
      if (state.auditsDone.has(index)) return;
      state.auditsDone.add(index);
      btn.disabled = true;
      btn.classList.add("is-used");
      empty.hidden = true;

      const li = document.createElement("li");
      li.innerHTML = `<s>${item.claim}</s><span>${item.rebuttal}</span>`;
      list.appendChild(li);
      playTone(240, 110);

      if (state.auditsDone.size >= 3) {
        verdict.hidden = false;
      }
      if (state.auditsDone.size === auditItems.length) {
        verdict.textContent =
          "Every “benefit” crossed out. Smoking offers nothing — quitting isn’t a sacrifice.";
      }
      updatePathScore();
    });
    choices.appendChild(btn);
  });
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
    next.textContent = isLast
      ? "Done"
      : ceremonySteps[state.ceremonyIndex + 1]?.btn || "Continue";
    if (state.ceremonyIndex === 0) next.textContent = "Begin ritual";

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
      } else {
        playTone(300, 150);
      }
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
