/* Allen Carr Easy Way — interactive site
   Lesson text is original educational paraphrase of well-known Easyway ideas.
   It is NOT verbatim text from Allen Carr’s copyrighted book. */

const lessons = [
  { title: "The Worst Nicotine Addict", sub: "Allen’s own escape story", chapter: "Opening", book: "Ch. 1" },
  { title: "The Easyway", sub: "A method that removes reasons to smoke", chapter: "Opening", book: "Ch. 2" },
  { title: "Why Is It Difficult to Stop?", sub: "Fear, not nicotine, does most of the damage", chapter: "Opening", book: "Ch. 3" },
  { title: "The Sinister Trap", sub: "How the nicotine loop locks shut", chapter: "The Trap", book: "Ch. 4" },
  { title: "Why We Smoke", sub: "Not pleasure — panic relief in disguise", chapter: "The Trap", book: "Ch. 5" },
  { title: "Nicotine Addiction", sub: "A tiny drug with a loud sales pitch", chapter: "The Trap", book: "Ch. 6" },
  { title: "Brainwashing & the Sleeping Partner", sub: "The stories that keep the pack alive", chapter: "The Trap", book: "Ch. 7" },
  { title: "Relieving Withdrawal Pangs", sub: "The “pleasure” is just ending the itch", chapter: "Illusions", book: "Ch. 8" },
  { title: "Stress", sub: "Cigarettes create the stress they pretend to cure", chapter: "Illusions", book: "Ch. 9" },
  { title: "Boredom", sub: "Nicotine makes life flatter, not richer", chapter: "Illusions", book: "Ch. 10" },
  { title: "Concentration", sub: "Focus returns when the itch stops interrupting", chapter: "Illusions", book: "Ch. 11" },
  { title: "Relaxation", sub: "True calm is what non-smokers already have", chapter: "Illusions", book: "Ch. 12" },
  { title: "Combination Cigarettes", sub: "Coffee, booze, meals — the pairing myth", chapter: "Illusions", book: "Ch. 13" },
  { title: "What Am I Giving Up?", sub: "Nothing of value — everything of slavery", chapter: "Freedom", book: "Ch. 14" },
  { title: "Self-Imposed Slavery", sub: "Paying to stay slightly uncomfortable", chapter: "Freedom", book: "Ch. 15" },
  { title: "I’ll Save Money Every Week", sub: "Cash is nice; freedom is the real win", chapter: "Freedom", book: "Ch. 16" },
  { title: "Health", sub: "Stop fearing doom — start craving vitality", chapter: "Freedom", book: "Ch. 17" },
  { title: "Energy", sub: "Breath and blood without the poison toll", chapter: "Freedom", book: "Ch. 18" },
  { title: "Confidence & “It Relaxes Me”", sub: "Courage was yours before the pack", chapter: "Freedom", book: "Ch. 19" },
  { title: "Those Sinister Black Shadows", sub: "Health dread that never quite goes away", chapter: "Freedom", book: "Ch. 20" },
  { title: "The “Advantages” of Smoking", sub: "List them honestly — watch them vanish", chapter: "Myths", book: "Ch. 21" },
  { title: "The Willpower Method", sub: "Why grit makes quitting feel like prison", chapter: "Myths", book: "Ch. 22" },
  { title: "Beware of Cutting Down", sub: "Fewer cigarettes, bigger pedestal", chapter: "Myths", book: "Ch. 23" },
  { title: "Just One Cigarette", sub: "The oldest trap door in the book", chapter: "Myths", book: "Ch. 24" },
  { title: "Casual Smokers & Teenagers", sub: "Light smoking is still the same machine", chapter: "Myths", book: "Ch. 25" },
  { title: "The Secret Smoker", sub: "Hiding the pack hides nothing from you", chapter: "Myths", book: "Ch. 26" },
  { title: "A Social Habit?", sub: "Company doesn’t need a chimney", chapter: "Myths", book: "Ch. 27" },
  { title: "Timing", sub: "There is no perfect week to escape", chapter: "Getting Free", book: "Ch. 28" },
  { title: "Will I Miss the Cigarette?", sub: "You’ll miss the itch’s fake cure — briefly", chapter: "Getting Free", book: "Ch. 29" },
  { title: "Will I Put on Weight?", sub: "Hunger ≠ nicotine emptiness", chapter: "Getting Free", book: "Ch. 30" },
  { title: "Avoid False Incentives", sub: "Scare tactics and bribes aren’t the Easy Way", chapter: "Getting Free", book: "Ch. 31" },
  { title: "How the Easy Way Works", sub: "Change the feeling first — then stop", chapter: "Getting Free", book: "Ch. 32" },
  { title: "The Withdrawal Period", sub: "Mild emptiness, not a monster under the bed", chapter: "Getting Free", book: "Ch. 33" },
  { title: "Just One Drag", sub: "One drag restarts the whole machine", chapter: "Getting Free", book: "Ch. 34" },
  { title: "Will It Be Harder for Me?", sub: "Heavy smokers often see the trap fastest", chapter: "Getting Free", book: "Ch. 35" },
  { title: "Main Reasons for Failure", sub: "Doubt, substitutes, and “I’ll miss it”", chapter: "Finale", book: "Ch. 36" },
  { title: "Substitutes", sub: "Patches and gums keep the drug story alive", chapter: "Finale", book: "Ch. 37" },
  { title: "Should I Avoid Temptation?", sub: "Don’t hide — see other smokers as still trapped", chapter: "Finale", book: "Ch. 38" },
  { title: "Revelation & the Final Cigarette", sub: "Celebrate the last one — you’re already free", chapter: "Finale", book: "Ch. 39–40" }
];

const lessonInsights = [
  "Allen wasn’t a casual smoker dabbling with willpower — he was living proof that even a hundred-a-day addiction can flip when the trap is seen clearly.",
  "The Easy Way isn’t about suffering longer. It’s about removing every reason you thought you needed to smoke.",
  "Stopping feels hard mainly because we expect misery. Change the expectation and the “difficulty” shrinks.",
  "The trap is elegant and nasty: nicotine creates a tiny need, then the cigarette poses as the hero that solves it.",
  "We don’t smoke for joy. We smoke to feel briefly like the non-smoker we already wish we were.",
  "Nicotine addiction is mostly mental theatre with a small physical itch — not a life sentence.",
  "Advertising, friends, films, and “everyone knows quitting is hard” stories are the sleeping partner of the drug.",
  "The “hit” is relief from withdrawal you wouldn’t have if you didn’t smoke.",
  "Smoking doesn’t soothe stress — it schedules stress between cigarettes.",
  "Boredom isn’t cured by nicotine; nicotine makes ordinary moments feel incomplete.",
  "You concentrate worse while half your mind is hunting the next dose.",
  "Real relaxation is the baseline of a free body — not a poisoned pause.",
  "Pairing smokes with coffee or wine trains the brain to credit the cigarette for the occasion.",
  "Ask what you’re giving up. If the honest answer is “nothing good,” fear collapses.",
  "Slavery feels normal when every hour is organized around feeding it.",
  "Money saved is a bonus. The prize is not wanting the product.",
  "Health fear alone rarely frees smokers — understanding does.",
  "Energy returns when you’re not paying a constant poison tax.",
  "Confidence doesn’t live in a filter tip. It was borrowed from ending your own discomfort.",
  "The dark health cloud follows smokers around — quitting lifts it.",
  "Try listing smoking’s advantages without using withdrawal-relief language. The list empties.",
  "Willpower quitting says “I want it but I can’t have it.” Easy Way says “I don’t want it.”",
  "Cutting down crowns each remaining cigarette as precious — the opposite of freedom.",
  "“Just one” is how the trap reinstalls itself overnight.",
  "There are no true casual nicotine addicts — only people at different points on the same escalator.",
  "Secret smoking proves the addiction owns your dignity as well as your lungs.",
  "Social ease comes from people, not from synchronized nicotine tops-ups.",
  "Waiting for a calm month is another cigarette’s favorite excuse.",
  "You won’t miss smoking. You may briefly notice the absence of a fake ritual.",
  "Weight fear is often nicotine emptiness mislabeled as hunger.",
  "Bribing yourself with prizes still frames quitting as loss.",
  "First destroy illusions while you can still smoke — then stop as a celebration.",
  "Physical withdrawal is usually a mild, empty feeling — fear makes it huge.",
  "One drag is not a taste test. It’s a restart button.",
  "If you smoke heavily, you have more evidence of the trap — use it.",
  "Most failure starts with “I’ll always miss it” or “I’ll just use a substitute.”",
  "Substitutes often keep nicotine — and the mental chains — in the game.",
  "Avoiding every smoker makes cigarettes taboo and more magnetic.",
  "Freedom starts the moment the final cigarette dies — not after some magical week thirty."
];

const featuredInsights = [
  lessonInsights[3],
  lessonInsights[4],
  lessonInsights[7],
  lessonInsights[8],
  lessonInsights[13],
  lessonInsights[21],
  lessonInsights[23],
  lessonInsights[38]
];

function body(html) {
  return html.trim();
}

const lessonBodies = {
  1: body(`
    <p>In <em>The Easy Way to Stop Smoking</em>, Allen opens with his own nightmare résumé: decades of chain-smoking, failed “willpower” attempts, and the panic that quitting would ruin his life. Then one insight reversed the whole story — he wasn’t about to lose a pleasure; he was about to escape a parasite.</p>
    <p>That personal disaster is the book’s promise: if someone smoking around the clock can become a happy non-smoker without white-knuckle misery, the method isn’t reserved for “light” smokers.</p>
    <ul>
      <li>Heavy history doesn’t make you hopeless — it makes the trap more obvious.</li>
      <li>Failed past quits usually failed because they were framed as sacrifice.</li>
      <li>Your job here isn’t to suffer. It’s to see.</li>
    </ul>
  `),
  2: body(`
    <p>The Easy Way is simple to say and radical to feel: remove every illusion that cigarettes do something useful, then stop — cheerfully — because there’s nothing left to want.</p>
    <p>Carr’s instructions (in spirit): keep smoking while you learn so you’re not distracted by craving; don’t use nicotine substitutes; follow the method through to the final cigarette; be open to the possibility that stopping can feel like freedom, not punishment.</p>
    <ul>
      <li>Goal: happy non-smoker, not “ex-smoker forever resisting.”</li>
      <li>Tool: understanding, not grit.</li>
      <li>Feeling you’re aiming for: “I’m free,” not “I’m forbidden.”</li>
    </ul>
  `),
  3: body(`
    <p>Why do smart people stay hooked? Not because nicotine withdrawal is unbearable — Carr stresses it’s usually a mild empty feeling. The real blocker is terror of the void: dull parties, unbearable stress, ruined concentration, missing “my” cigarette.</p>
    <p>Those fears are built from brainwashing. Once you see that smoking never supplied the benefits you credited it with, “difficulty” was mostly a prophecy you were handed.</p>
  `),
  4: body(`
    <p>The sinister trap works like this: nicotine leaves the body quickly, a slight insecurity appears, you smoke, relief arrives, and the brain files a false report — “cigarettes help.” Repeat thousands of times and the report feels like personality.</p>
    <p>You’re not weak. You’re inside a machine designed to look like a choice.</p>
    <ul>
      <li>Partial doses keep the machine humming.</li>
      <li>Relief is mislabeled as pleasure or reward.</li>
      <li>Escape begins when you stop believing the report.</li>
    </ul>
  `),
  5: body(`
    <p>Ask a smoker why they smoke and you’ll hear stress, focus, social glue, reward after meals. Carr’s blunt answer: you smoke because you’re addicted — and every “reason” is a story told by that addiction.</p>
    <p>Non-smokers handle the same jobs, meals, and arguments without paying a drug for permission to feel normal.</p>
  `),
  6: body(`
    <p>Nicotine creates an artificial need and then “satisfies” it — like drinking salt water for thirst. The physical dependence is real but relatively small; the catastrophe is mental: believing life without the next fix would be lesser.</p>
    <p>Within days of stopping, most of the chemical itch fades. What lingers, if you let it, is the superstition that something precious was lost.</p>
  `),
  7: body(`
    <p>“Brainwashing” in Easyway language means the cultural script: smoking is sophisticated, quitting is agony, “you’ll always miss it,” willpower is the only path. The “sleeping partner” is that script working quietly beside the drug.</p>
    <p>Advertising isn’t required anymore — friends, office lore, and your own past failed quits will keep the myth warm.</p>
    <ul>
      <li>Question every “benefit” claim.</li>
      <li>Refuse the identity “I am a smoker who struggles.”</li>
      <li>Replace it with “I was misled by a tiny addiction.”</li>
    </ul>
  `),
  8: body(`
    <p>This is the fulcrum chapter idea of the whole book: the enjoyment of a cigarette is mostly the ending of withdrawal from the previous one. That’s not a bonus. That’s a refund of comfort the cigarette stole.</p>
    <p>Try Carr’s classic comparison in your own words: the cigarette you “need most” (often the first of the day) is frequently also the one that tastes worst — because the need was huge and the product still foul.</p>
  `),
  9: body(`
    <p>Smokers live with a low-grade nicotine hunger that spikes between cigarettes. Lighting up turns the volume down — so smoking gets credited as a stress tool. Non-smokers never pay that tax, so they never need that fake refund.</p>
    <p>Nicotine is also a stimulant. The “ahh” is not deep calm; it’s the end of a self-inflicted fidget.</p>
  `),
  10: body(`
    <p>Boredom cigarettes feel like entertainment because they interrupt emptiness with ritual. Remove the addiction and ordinary life doesn’t become emptier — the constant “something’s missing” signal shuts off.</p>
    <p>Carr’s point: nicotine doesn’t spice life; it makes unsmoked moments feel incomplete.</p>
  `),
  11: body(`
    <p>Trying to work while half-waiting for the next cigarette shreds attention. After a smoke, focus seems to return — so the cigarette gets the credit. The Easy Way flips it: the cigarette caused the distraction by installing the itch.</p>
  `),
  12: body(`
    <p>True relaxation is what you feel when nothing is chasing you. Smokers rarely get that baseline; they get brief ceasefires. Stopping doesn’t remove your ability to unwind — it removes the saboteur of unwinding.</p>
  `),
  13: body(`
    <p>“Combination cigarettes” are the ones welded to coffee, alcohol, or the end of a meal. The occasion is enjoyable; nicotine barges in and steals the credit. After you stop, the coffee still tastes — often better — without the side order of poison.</p>
    <p>Keep the rituals you love. Fire the drug that hitchhiked on them.</p>
  `),
  14: body(`
    <p>Carr keeps dragging readers back to one audit: what, precisely, are you giving up? Tar? Expense? Bad breath? Slavery to a schedule? Or a genuine pleasure?</p>
    <p>If cigarettes gave nothing good — only temporary relief from the problem they created — then quitting is gain on every axis.</p>
  `),
  15: body(`
    <p>Self-imposed slavery is organizing your day around when you can feed the addiction: weather, flights, meetings, kids’ events, money. Freedom is walking into those spaces without negotiating with a packet.</p>
  `),
  16: body(`
    <p>Yes, the math is ugly and motivating — but Easyway warns against making money the main engine. If you quit “for the savings” while still believing cigarettes are lovely, you’ll feel deprived when you spend the savings.</p>
    <p>Let money be a cheerful side effect of not wanting the product.</p>
  `),
  17: body(`
    <p>Carr doesn’t lead with gore photos. Smokers already know the risks; fear alone rarely finishes the job. Health matters — but the method’s lever is: you are not losing a friend; you are ending an assault.</p>
  `),
  18: body(`
    <p>Carbon monoxide, tar, and constant withdrawal drama tax your energy. Many people describe a lift in stamina and morning clarity once the machine stops. That isn’t a miracle — it’s subtraction of a burden.</p>
  `),
  19: body(`
    <p>“It relaxes me / gives me confidence” is the addiction speaking. The confidence was the feeling of being back to the level non-smokers start from. You don’t need a cigarette to be yourself in a meeting — you need the itch gone.</p>
  `),
  20: body(`
    <p>Carr describes the private dread smokers carry — the “black shadows” of what smoking might be doing inside. Quitting doesn’t just reduce risk; it removes that stalking anxiety from ordinary days.</p>
  `),
  21: body(`
    <p>Exercise from the Easy Way tradition: write down the advantages of being a smoker. Then cross out any item that is actually “relief of withdrawal” or “I was told this.” What’s left is usually an empty page — and a grin.</p>
  `),
  22: body(`
    <p>Willpower quitting means wanting a cigarette and forbidding it. That frames life as permanent denial. Easy Way flips the desire itself so you’re not resisting a treat — you’re declining a mugging.</p>
    <p>If you still feel deprived, the illusions aren’t finished yet. Keep reading/thinking before you crown yourself with grit.</p>
  `),
  23: body(`
    <p>Cutting down sounds responsible. Carr calls it a trap: each remaining cigarette becomes more “special,” withdrawal lasts all day, and you stay addicted while rehearsing how precious smoking is.</p>
    <p>Don’t shrink the pack. Shrink the belief.</p>
  `),
  24: body(`
    <p>“Just one” after quitting is how nicotine and brainwashing move back into the house. One cigarette restarts the physical need and proves to the mind that you “needed” it.</p>
    <p>There is no safe souvenir cigarette.</p>
  `),
  25: body(`
    <p>Teen experimenters and “social” smokers like to believe they’re in control. Easyway treats nicotine as an escalator: once you’re on, the stories change but the mechanism doesn’t. Casual is often just early.</p>
  `),
  26: body(`
    <p>Hiding ashtrays, lying about quitting, smoking out windows — the secret smoker shows how much shame the addiction manufactures. Freedom includes not arranging your life around concealment.</p>
  `),
  27: body(`
    <p>Smoking borrowed social credit for decades. Today the same conversations work without the prop — and you stop stepping outside mid-story like a servant answering a bell.</p>
  `),
  28: body(`
    <p>“After the holidays / after this deadline / when I’m less stressed” is the addiction booking its next month. Carr’s timing advice in spirit: if you understand and want to be free, now is the moment — stress is a reason to stop the stress generator.</p>
  `),
  29: body(`
    <p>You may notice a brief empty cue where a ritual used to be. That isn’t missing a joy; it’s the echo of a habit loop. Smile at it. It passes faster when you don’t mourn.</p>
  `),
  30: body(`
    <p>Nicotine emptiness can feel adjacent to hunger. If you panic-eat, you’ll blame quitting. Easyway counsel: learn the difference, eat when you’re actually hungry, and don’t install food as a nicotine understudy.</p>
  `),
  31: body(`
    <p>False incentives: terrifying yourself, betting money, doing it “for” someone else while you still believe cigarettes are wonderful. Those can create temporary compliance without removing desire.</p>
    <p>The real incentive is wanting to be free because smoking offers nothing.</p>
  `),
  32: body(`
    <p>Method checklist in original words:</p>
    <ul>
      <li>Keep smoking until the illusions are dead — don’t white-knuckle early.</li>
      <li>No substitutes that keep nicotine or the “I need a hit” story alive.</li>
      <li>Stop completely when you finish — not “cutting down forever.”</li>
      <li>Finish the last cigarette as a celebration, not a funeral.</li>
      <li>Never doubt the decision; remind yourself what you escaped.</li>
    </ul>
  `),
  33: body(`
    <p>Physical withdrawal is temporary and usually mild — an empty, restless cue. Fear, self-pity, and “I’ll always want one” thoughts turn a molehill into a mountain.</p>
    <p>Carr’s reframe: each pang is the addiction dying. You’re not being punished; you’re being released.</p>
  `),
  34: body(`
    <p>One drag is enough to pump nicotine back into the system and reopen the mental argument. Don’t sample. Don’t “check if I still like it.” You already know the trick.</p>
  `),
  35: body(`
    <p>People worry their case is special — too many years, too much stress, too little support. Easyway answers: the mechanism is the same. Heavy smokers often have the clearest evidence that cigarettes never delivered the life they advertised.</p>
  `),
  36: body(`
    <p>Classic failure modes the book warns about: believing you’ll be miserable forever; using “just one” as a reward; leaning on substitutes while still romanticizing smoking; failing to close the decision.</p>
    <p>Protect the understanding. That’s the whole game.</p>
  `),
  37: body(`
    <p>Gum, patches, vapes-as-crutches — anything that continues nicotine can prolong the physical leash and the mental idea that you still need a “dose” to cope. Easy Way aims to get cigarettes out of your head, not merely out of your hand for a week.</p>
  `),
  38: body(`
    <p>Hiding from every smoker makes tobacco taboo and glamorous. Carr’s counsel in spirit: live normally. When you see someone smoking, don’t envy them — recognize the trap you escaped.</p>
  `),
  39: body(`
    <p><strong>Moment of revelation:</strong> the point where you know cigarettes do nothing for you — zero. Fear drops. Curiosity about “maybe I’ll miss it” dies.</p>
    <p><strong>Final cigarette:</strong> smoke it conscious of the scam. Ask what it’s giving you. Put it out with relief and pride. From that second, practice the identity: I am a non-smoker who doesn’t want to smoke.</p>
    <ul>
      <li>Don’t mourn. Celebrate.</li>
      <li>Don’t bargain for a future souvenir cigarette.</li>
      <li>If a thought of smoking appears, answer it with truth, not panic.</li>
      <li>For the full original instructions and clinics, see Allen Carr’s Easyway books and centres — this site is a learning tribute, not a replacement.</li>
    </ul>
  `)
};

const snapLines = [
  { title: "Crack!", line: "Paper, leaf, and a refund of comfort the cigarette stole first." },
  { title: "Illusion weakening…", line: "That wasn’t pleasure — that was relief from the previous dose." },
  { title: "Trap exposed!", line: "Allen’s point: you’re not denying a treat. You’re declining a mugging." },
  { title: "Freedom reps!", line: "Each snap is practice for the final cigarette celebration." },
  { title: "Brainwashing off", line: "Stress helper? Focus tool? Cool prop? Cross them off the list." }
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

  document.getElementById("lessonKicker").textContent =
    `${lesson.chapter} · ${lesson.book} · Lesson ${num}`;
  document.getElementById("lessonTitle").textContent = lesson.title;
  document.getElementById("lessonSub").textContent = lesson.sub;
  document.getElementById("lessonQuote").textContent = `“${lessonInsights[num - 1]}”`;
  document.getElementById("lessonBody").innerHTML =
    lessonBodies[num] ||
    `<p>${lesson.sub}</p><p>Keep stacking understanding — desire dies when the illusions die.</p>`;

  document.getElementById("lessonLabel").textContent = `Lesson ${num} / ${lessons.length}`;
  document.getElementById("lessonMeter").style.width = `${(num / lessons.length) * 100}%`;
  document.getElementById("lessonSelect").value = String(num);

  panel.style.animation = "none";
  void panel.offsetWidth;
  panel.style.animation = "";
}

function setupQuotes() {
  const dots = document.getElementById("quoteDots");
  featuredInsights.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show insight ${i + 1}`);
    dot.addEventListener("click", () => showQuote(i));
    dots.appendChild(dot);
  });

  document.getElementById("prevQuote").addEventListener("click", () => {
    showQuote((currentQuote - 1 + featuredInsights.length) % featuredInsights.length);
  });
  document.getElementById("nextQuote").addEventListener("click", () => {
    showQuote((currentQuote + 1) % featuredInsights.length);
  });

  setInterval(() => {
    showQuote((currentQuote + 1) % featuredInsights.length);
  }, 7000);
}

function showQuote(index) {
  currentQuote = index;
  const text = document.getElementById("quoteText");
  const card = document.getElementById("quoteCard");
  text.textContent = `“${featuredInsights[index]}”`;

  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "lessonIn 0.45s ease";

  [...document.getElementById("quoteDots").children].forEach((dot, i) => {
    dot.setAttribute("aria-selected", i === index ? "true" : "false");
  });
}
