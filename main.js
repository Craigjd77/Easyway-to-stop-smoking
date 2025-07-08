/* === Allen Carr's Educational Series - 1950s-1960s Filmstrip === */

// Slide Data - All 39 Allen Carr Chapters
const slides = [
    { id: 1, title: "Introduction to the Smoking Trap", subtitle: "Understanding the Nature of Addiction" },
    { id: 2, title: "The Illusion of Pleasure", subtitle: "Deconstructing the Smoking Experience" },
    { id: 3, title: "The Fear of Quitting", subtitle: "Why you're afraid to stop" },
    { id: 4, title: "Understanding Nicotine Addiction", subtitle: "The science behind the trap" },
    { id: 5, title: "The Social Conditioning", subtitle: "How society keeps you smoking" },
    { id: 6, title: "Breaking the Mental Chains", subtitle: "Freeing your mind from the trap" },
    { id: 7, title: "The Easy Way Method", subtitle: "How to quit easily and permanently" },
    { id: 8, title: "Preparing for Freedom", subtitle: "Getting ready to quit" },
    { id: 9, title: "The Final Cigarette", subtitle: "Making the decision to be free" },
    { id: 10, title: "The First Day of Freedom", subtitle: "Your first day as a non-smoker" },
    { id: 11, title: "Dealing with Cravings", subtitle: "Understanding and managing cravings" },
    { id: 12, title: "The Recovery Process", subtitle: "Your body's healing journey" },
    { id: 13, title: "Physical Healing", subtitle: "How your body recovers" },
    { id: 14, title: "Mental Clarity", subtitle: "The return of clear thinking" },
    { id: 15, title: "Financial Freedom", subtitle: "The money you'll save" },
    { id: 16, title: "Social Benefits", subtitle: "How quitting improves relationships" },
    { id: 17, title: "Health Improvements", subtitle: "The health benefits of quitting" },
    { id: 18, title: "The New You", subtitle: "Discovering your true self" },
    { id: 19, title: "Staying Free", subtitle: "Maintaining your freedom" },
    { id: 20, title: "Helping Others", subtitle: "Sharing your success" },
    { id: 21, title: "The Science of Addiction", subtitle: "Understanding the biology" },
    { id: 22, title: "Psychological Aspects", subtitle: "The mental side of addiction" },
    { id: 23, title: "Behavioral Patterns", subtitle: "Breaking old habits" },
    { id: 24, title: "Cognitive Restructuring", subtitle: "Changing your thinking" },
    { id: 25, title: "Emotional Freedom", subtitle: "Freeing your emotions" },
    { id: 26, title: "The Power of Choice", subtitle: "Taking control of your life" },
    { id: 27, title: "Building Confidence", subtitle: "Strengthening your resolve" },
    { id: 28, title: "Overcoming Obstacles", subtitle: "Dealing with challenges" },
    { id: 29, title: "The Success Mindset", subtitle: "Thinking like a non-smoker" },
    { id: 30, title: "Long-term Strategies", subtitle: "Staying free forever" },
    { id: 31, title: "Relapse Prevention", subtitle: "Avoiding the trap again" },
    { id: 32, title: "The Freedom Lifestyle", subtitle: "Living as a non-smoker" },
    { id: 33, title: "Celebrating Success", subtitle: "Acknowledging your achievement" },
    { id: 34, title: "Advanced Techniques", subtitle: "Mastering the method" },
    { id: 35, title: "The Complete Transformation", subtitle: "Your full transformation" },
    { id: 36, title: "Living Without Smoking", subtitle: "Your new normal" },
    { id: 37, title: "The Legacy of Freedom", subtitle: "Your lasting impact" },
    { id: 38, title: "Final Thoughts", subtitle: "Reflections on freedom" },
    { id: 39, title: "Your New Beginning", subtitle: "Starting your free life" }
];

// Allen Carr Quotes for Each Slide
const allenQuotes = [
    "The truth is that smoking does absolutely nothing for you at all. It doesn't relieve stress, it doesn't help you concentrate, it doesn't give you courage, and it doesn't make you look cool. It does the exact opposite of all these things.",
    "The only pleasure you get from smoking is the relief from the withdrawal symptoms from the previous cigarette. That's not pleasure, that's just relief from a self-imposed discomfort.",
    "The fear of quitting is always worse than the reality. Once you understand that you're not giving up anything of value, the fear disappears completely.",
    "Nicotine is a drug that creates an artificial need and then satisfies that need. It's like being thirsty and drinking salt water - it only makes you thirstier.",
    "Society has been brainwashed into believing that smoking is a habit that's difficult to break, when in fact it's an addiction that's easy to escape once you understand the trap.",
    "The chains that bind you are not physical - they're mental. Once you see the truth, the chains fall away.",
    "The key to success is understanding that you're not giving up anything of value. You're gaining everything.",
    "Preparation is not about building willpower - it's about building understanding.",
    "When you finish your final cigarette, you're not giving up anything. You're gaining everything.",
    "Your first day of freedom is the beginning of your new life. Welcome to the real you.",
    "Cravings are not your enemy - they're the addiction dying. Celebrate them.",
    "Recovery is not a process of deprivation - it's a process of liberation.",
    "Your body has an amazing capacity to heal. Give it the chance it deserves.",
    "Mental clarity is not something you gain - it's something you recover.",
    "The money you save is not just financial - it's freedom from financial slavery.",
    "Social freedom means being able to be yourself without needing a crutch.",
    "Health is not the absence of disease - it's the presence of vitality.",
    "The new you is not someone you become - it's someone you always were.",
    "Staying free is not about resisting temptation - it's about not being tempted.",
    "Helping others is not just altruistic - it's how you stay free yourself.",
    "Understanding the science helps you see the trap for what it really is.",
    "The psychological aspects of addiction are just as important as the physical ones.",
    "Old patterns can be broken. New patterns can be created.",
    "Your thoughts create your reality. Choose freedom.",
    "Emotional freedom means feeling your feelings without needing to numb them.",
    "The power of choice is the greatest power you have.",
    "Confidence comes from understanding, not from willpower.",
    "Obstacles are opportunities to strengthen your commitment.",
    "Success is not a destination - it's a mindset.",
    "Long-term freedom requires long-term thinking.",
    "Relapse prevention is not about fear - it's about understanding.",
    "The freedom lifestyle is not restrictive - it's liberating.",
    "Celebrate every moment of your freedom. You've earned it.",
    "Advanced techniques are just deeper understanding.",
    "Transformation is not a process - it's a realization.",
    "Living without smoking is not a sacrifice - it's a gift.",
    "Your legacy of freedom will inspire others to find their own.",
    "Final thoughts are just the beginning of your new life.",
    "Your new beginning starts with the understanding that you're already free."
];

// Available Slide Images
const availableImages = [1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

// Current slide state
let currentSlide = 1;
let vintageEffectsEnabled = false;

// Initialize the Educational Filmstrip
document.addEventListener('DOMContentLoaded', function() {
    initializeFilmstrip();
    setupControls();
    setupVintageToggle();
    updateProgress();
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
});

// Initialize Filmstrip
function initializeFilmstrip() {
    generateSlideSelector();
    generateAllSlides();
    showSlide(1);
}

// Generate Slide Selector
function generateSlideSelector() {
    const slideSelect = document.getElementById('slideSelect');
    if (!slideSelect) return;
    
    slides.forEach(slide => {
        const option = document.createElement('option');
        option.value = slide.id;
        option.textContent = `Slide ${slide.id}: ${slide.title}`;
        slideSelect.appendChild(option);
    });
    
    slideSelect.addEventListener('change', (e) => {
        showSlide(parseInt(e.target.value));
    });
}

// Generate All Slides (3-39)
function generateAllSlides() {
    const container = document.getElementById('additionalSlides');
    if (!container) return;
    
    // Generate slides 3-39
    for (let i = 3; i <= 39; i++) {
        const slide = slides[i - 1];
        const quote = allenQuotes[i - 1];
        const hasImage = availableImages.includes(i);
        
        const slideArticle = document.createElement('article');
        slideArticle.className = 'film-slide';
        slideArticle.id = `slide${i}`;
        
        const imageHtml = hasImage ? `
            <div class="slide-image-frame">
                <img src="images/${i}.png" alt="Slide ${i}: ${slide.title}" class="slide-image" onerror="this.parentElement.style.display='none'">
                <div class="image-label">Slide ${i}: ${slide.title}</div>
            </div>
        ` : '';
        
        slideArticle.innerHTML = `
            <div class="slide-header">
                <div class="slide-number">Slide ${i}</div>
                <h2 class="slide-title">${slide.title}</h2>
                <div class="slide-subtitle">${slide.subtitle}</div>
            </div>
            
            <div class="slide-content">
                ${imageHtml}
                
                <div class="narrator-text">
                    <div class="narrator-label">Narrator</div>
                    <div class="quote">"${quote}"</div>
                </div>
                
                <div class="slide-text">
                    <p>${getSlideIntroduction(i)}</p>
                    
                    ${getSlideContent(i)}
                    
                    ${getSlideConclusion(i)}
                </div>
            </div>
        `;
        
        container.appendChild(slideArticle);
    }
}

// Setup Controls
function setupControls() {
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentSlide > 1) {
                showSlide(currentSlide - 1);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentSlide < 39) {
                showSlide(currentSlide + 1);
            }
        });
    }
}

// Setup Vintage Effects Toggle
function setupVintageToggle() {
    const toggleBtn = document.getElementById('vintageToggle');
    if (!toggleBtn) return;
    
    toggleBtn.addEventListener('click', () => {
        vintageEffectsEnabled = !vintageEffectsEnabled;
        document.body.classList.toggle('vintage-effects', vintageEffectsEnabled);
        toggleBtn.classList.toggle('active', vintageEffectsEnabled);
        
        // Update button text
        const label = toggleBtn.querySelector('.toggle-label');
        if (label) {
            label.textContent = vintageEffectsEnabled ? 'Modern View' : 'Vintage Effects';
        }
    });
}

// Show Slide
function showSlide(slideNumber) {
    // Hide all slides
    document.querySelectorAll('.film-slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    const currentSlideElement = document.getElementById(`slide${slideNumber}`);
    if (currentSlideElement) {
        currentSlideElement.classList.add('active');
    }
    
    // Update current slide state
    currentSlide = slideNumber;
    
    // Update UI
    updateSlideCounter();
    updateSlideSelector();
    updateProgress();
    
    // Add slide transition effect
    addSlideTransitionEffect();
}

// Update Slide Counter
function updateSlideCounter() {
    const currentSlideElement = document.querySelector('.current-slide');
    if (currentSlideElement) {
        currentSlideElement.textContent = `Slide ${currentSlide}`;
    }
}

// Update Slide Selector
function updateSlideSelector() {
    const slideSelect = document.getElementById('slideSelect');
    if (slideSelect) {
        slideSelect.value = currentSlide;
    }
}

// Update Progress
function updateProgress() {
    const progressBar = document.getElementById('reelProgress');
    if (!progressBar) return;
    
    const progressPercentage = (currentSlide / 39) * 100;
    progressBar.style.width = progressPercentage + '%';
}

// Add Slide Transition Effect
function addSlideTransitionEffect() {
    const currentSlideElement = document.getElementById(`slide${currentSlide}`);
    if (currentSlideElement) {
        // Add click sound effect (optional)
        playSlideClickSound();
        
        // Add visual transition effect
        currentSlideElement.style.animation = 'none';
        setTimeout(() => {
            currentSlideElement.style.animation = 'slideTransition 0.8s ease-out';
        }, 10);
    }
}

// Play Slide Click Sound (optional)
function playSlideClickSound() {
    // Create a simple click sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Ignore errors if Web Audio API is not supported
    }
}

// Handle Keyboard Navigation
function handleKeyboardNavigation(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (currentSlide > 1) {
                showSlide(currentSlide - 1);
            }
            break;
        case 'ArrowRight':
            if (currentSlide < 39) {
                showSlide(currentSlide + 1);
            }
            break;
        case 'Home':
            showSlide(1);
            break;
        case 'End':
            showSlide(39);
            break;
    }
}

// Get Slide Introduction
function getSlideIntroduction(slideNum) {
    const introductions = {
        3: "In this educational slide, we examine one of the most significant barriers to smoking cessation - fear. Understanding the nature of this fear is crucial for successful cessation.",
        4: "This slide presents the scientific foundation of nicotine addiction, providing essential knowledge for understanding the smoking trap.",
        5: "This educational content explores the powerful social and cultural factors that maintain the smoking habit.",
        6: "This slide focuses on the mental aspects of smoking addiction and the process of cognitive liberation.",
        7: "In this important slide, we present the Easy Way method - a systematic approach to permanent smoking cessation.",
        8: "This educational content covers the essential preparation required for successful smoking cessation.",
        9: "This slide examines the critical moment of decision - the transition from smoker to non-smoker.",
        10: "This educational content celebrates the beginning of your journey to freedom and health.",
        11: "This slide provides essential information about understanding and managing nicotine cravings.",
        12: "This educational content explores the natural healing process that occurs after smoking cessation.",
        13: "This slide examines the remarkable physical recovery that takes place in the body.",
        14: "This educational content explores the return of mental clarity and cognitive function.",
        15: "This slide examines the immediate and long-term financial benefits of smoking cessation.",
        16: "This educational content explores how smoking cessation improves social relationships.",
        17: "This slide examines the comprehensive health improvements that result from smoking cessation.",
        18: "This educational content explores the process of self-discovery and personal transformation.",
        19: "This slide provides essential strategies for maintaining long-term freedom from smoking.",
        20: "This educational content explores how your success can inspire and help others.",
        21: "This slide provides deeper scientific understanding of addiction mechanisms.",
        22: "This educational content examines the psychological dimensions of smoking addiction.",
        23: "This slide explores the process of breaking old patterns and creating new ones.",
        24: "This educational content focuses on cognitive restructuring techniques.",
        25: "This slide explores the emotional liberation that accompanies smoking cessation.",
        26: "This educational content examines the power of conscious choice in behavior change.",
        27: "This slide focuses on building confidence through understanding and knowledge.",
        28: "This educational content provides strategies for overcoming common obstacles.",
        29: "This slide explores the mindset required for long-term success.",
        30: "This educational content provides comprehensive long-term strategies.",
        31: "This slide focuses on preventing relapse through understanding.",
        32: "This educational content explores the lifestyle changes that support freedom.",
        33: "This slide emphasizes the importance of celebrating your achievements.",
        34: "This educational content provides advanced techniques for mastery.",
        35: "This slide explores the complete transformation process.",
        36: "This educational content examines life as a non-smoker.",
        37: "This slide explores the lasting impact of your decision.",
        38: "This educational content provides final reflections on the journey.",
        39: "This final slide celebrates your new beginning and future possibilities."
    };
    
    return introductions[slideNum] || "This educational slide provides important information about smoking cessation and the journey to freedom.";
}

// Get Slide Content
function getSlideContent(slideNum) {
    const contents = {
        3: `
            <h3 class="section-title">Understanding Quitting Anxiety</h3>
            <p>Fear is perhaps the most significant barrier to successful smoking cessation. Smokers fear the unknown, the withdrawal symptoms, and the loss of what they perceive as a coping mechanism.</p>
            
            <div class="educational-diagram">
                <h4>Common Fears Analysis</h4>
                <div class="cycle-steps">
                    <div class="step">Fear of unbearable withdrawal symptoms</div>
                    <div class="step">Fear of weight gain</div>
                    <div class="step">Fear of losing stress relief mechanism</div>
                    <div class="step">Fear of social isolation</div>
                    <div class="step">Fear of failure and relapse</div>
                </div>
            </div>
            
            <div class="educational-note">
                <h4>Important Research Finding</h4>
                <p>The intensity of withdrawal symptoms is often proportional to the smoker's fear and anxiety about quitting. Those who approach cessation with confidence and understanding typically experience milder symptoms.</p>
            </div>
        `,
        4: `
            <h3 class="section-title">The Chemistry of Addiction</h3>
            <p>Nicotine is a powerful psychoactive drug that affects multiple neurotransmitter systems in the brain. When inhaled, it rapidly crosses the blood-brain barrier and binds to nicotinic acetylcholine receptors.</p>
            
            <div class="educational-diagram">
                <h4>Neurochemical Process</h4>
                <div class="cycle-steps">
                    <div class="step">1. Nicotine inhalation</div>
                    <div class="step">2. Rapid brain absorption</div>
                    <div class="step">3. Receptor binding</div>
                    <div class="step">4. Neurotransmitter release</div>
                    <div class="step">5. Temporary satisfaction</div>
                </div>
            </div>
            
            <div class="educational-note">
                <h4>Key Scientific Insight</h4>
                <p>The brain's reward pathway is hijacked by nicotine, creating a powerful association between smoking and pleasure. However, this "pleasure" is actually just the relief from the discomfort caused by nicotine withdrawal.</p>
            </div>
        `
    };
    
    return contents[slideNum] || `
        <h3 class="section-title">Educational Content</h3>
        <p>This slide contains valuable educational information and practical strategies for your journey to freedom from smoking.</p>
        
        <h3 class="section-title">Key Learning Objectives</h3>
        <ul class="educational-list">
            <li>Understanding the smoking trap</li>
            <li>Practical strategies for success</li>
            <li>Overcoming common challenges</li>
            <li>Building lasting freedom</li>
        </ul>
        
        <div class="educational-note">
            <h4>Educational Note</h4>
            <p>Each slide builds upon previous information to create a complete understanding of the smoking cessation process. Review previous slides as needed for comprehensive learning.</p>
        </div>
    `;
}

// Get Slide Conclusion
function getSlideConclusion(slideNum) {
    const conclusions = {
        3: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding your fears is the first step to overcoming them. Knowledge dispels fear and creates confidence for successful cessation.</p>
            </div>
        `,
        4: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the science behind addiction helps you see the trap for what it really is - a chemical dependency that can be easily broken with the right knowledge.</p>
            </div>
        `
    };
    
    return conclusions[slideNum] || `
        <div class="educational-note">
            <h4>Educational Summary</h4>
            <p>Each slide brings you closer to complete understanding and freedom from the smoking trap. Continue your educational journey with confidence.</p>
        </div>
    `;
}

// Auto-advance slides (optional feature)
let autoAdvanceInterval = null;

function startAutoAdvance() {
    if (autoAdvanceInterval) return;
    
    autoAdvanceInterval = setInterval(() => {
        if (currentSlide < 39) {
            showSlide(currentSlide + 1);
        } else {
            stopAutoAdvance();
        }
    }, 30000); // 30 seconds per slide
}

function stopAutoAdvance() {
    if (autoAdvanceInterval) {
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = null;
    }
}

// Add auto-advance controls (optional)
function addAutoAdvanceControls() {
    const controlPanel = document.querySelector('.control-panel');
    if (!controlPanel) return;
    
    const autoAdvanceBtn = document.createElement('button');
    autoAdvanceBtn.className = 'control-btn';
    autoAdvanceBtn.innerHTML = '<span class="btn-label">Auto</span><span class="btn-icon">▶</span>';
    autoAdvanceBtn.addEventListener('click', () => {
        if (autoAdvanceInterval) {
            stopAutoAdvance();
            autoAdvanceBtn.innerHTML = '<span class="btn-label">Auto</span><span class="btn-icon">▶</span>';
        } else {
            startAutoAdvance();
            autoAdvanceBtn.innerHTML = '<span class="btn-label">Stop</span><span class="btn-icon">⏸</span>';
        }
    });
    
    controlPanel.appendChild(autoAdvanceBtn);
}

// Initialize auto-advance controls (uncomment to enable)
// addAutoAdvanceControls(); 