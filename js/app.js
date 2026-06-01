// =======================
// SCROLLVERSE DECODE V1 - REFACTORED
// Sections: DATA | VARIABLES | UI BINDINGS | CATEGORY | DIFFICULTY | GAME LOGIC | HINTS | SIMILARITY | SCORING | HISTORY | CHALLENGE | LOCAL STORAGE
// =======================

// =======================
// DATA (expanded lists: 20+ entries each)
// =======================

const pokemonWords = [
    {word: "PIKACHU", hint1: "Electric Type", hint2: "Ash's Partner", hint3: "Generation 1"},
    {word: "CHARIZARD", hint1: "Fire Type", hint2: "Flies", hint3: "Mega Evolves"},
    {word: "BULBASAUR", hint1: "Grass Type", hint2: "Seed on Back", hint3: "Starter Gen 1"},
    {word: "SQUIRTLE", hint1: "Water Type", hint2: "Shell", hint3: "Starter Gen 1"},
    {word: "EEVEE", hint1: "Many Evolutions", hint2: "Normal Type", hint3: "Brown"},
    {word: "SNORLAX", hint1: "Sleeps A Lot", hint2: "Very Heavy", hint3: "Normal"},
    {word: "LUCARIO", hint1: "Aura", hint2: "Fighting Type", hint3: "Blue"},
    {word: "GENGAR", hint1: "Ghost Type", hint2: "Smiles", hint3: "Purple"},
    {word: "MAGIKARP", hint1: "Weak Fish", hint2: "Splash", hint3: "Evolves to Gyarados"},
    {word: "GARCHOMP", hint1: "Dragon/Ground", hint2: "Fast", hint3: "Pseudo-legend"},
    {word: "MEWTWO", hint1: "Psychic", hint2: "Created", hint3: "Legendary"},
    {word: "MEW", hint1: "Psychic", hint2: "Rare", hint3: "Mythical"},
    {word: "TOGEKISS", hint1: "Fairy", hint2: "Flight", hint3: "Cute"},
    {word: "TYRANITAR", hint1: "Rock/Dark", hint2: "Powerful", hint3: "Pseudo-legend"},
    {word: "DRAGONITE", hint1: "Dragon", hint2: "Sea Pilot", hint3: "Friendly"},
    {word: "JOLTEON", hint1: "Electric", hint2: "Evolution", hint3: "Spiky"},
    {word: "VAPOREON", hint1: "Water", hint2: "Evolution", hint3: "Gills"},
    {word: "FLAREON", hint1: "Fire", hint2: "Evolution", hint3: "Fierce"},
    {word: "ARCEUS", hint1: "Creator", hint2: "Mythical", hint3: "Type: ???"},
    {word: "LAPRAS", hint1: "Transport", hint2: "Water/Ice", hint3: "Gentle"}
];

const marvelWords = [
    {word: "THOR", hint1: "God Of Thunder", hint2: "Hammer", hint3: "Asgard"},
    {word: "LOKI", hint1: "Mischief", hint2: "Shapeshift", hint3: "Brother"},
    {word: "THANOS", hint1: "Infinity Stones", hint2: "Snap", hint3: "Titan"},
    {word: "IRONMAN", hint1: "Genius", hint2: "Suit", hint3: "Stark"},
    {word: "CAPTAIN AMERICA", hint1: "Shield", hint2: "Super Soldier", hint3: "Steve"},
    {word: "BLACKWIDOW", hint1: "Spy", hint2: "Red Room", hint3: "Natasha"},
    {word: "SPIDERMAN", hint1: "Wallcrawling", hint2: "Webs", hint3: "Peter"},
    {word: "HULK", hint1: "Green", hint2: "Strong", hint3: "Bruce"},
    {word: "VISION", hint1: "Android", hint2: "Mind Stone", hint3: "Philosophical"},
    {word: "SCARLET WITCH", hint1: "Magic", hint2: "Reality Warper", hint3: "Wanda"},
    {word: "FALCON", hint1: "Wingsuit", hint2: "Sam", hint3: "Good Pilot"},
    {word: "WINTER SOLDIER", hint1: "Bucky", hint2: "Metal Arm", hint3: "Cold"},
    {word: "DOCTOR STRANGE", hint1: "Sorcerer", hint2: "Multiverse", hint3: "Cloak"},
    {word: "ANTMAN", hint1: "Size Change", hint2: "Scott", hint3: "Pym Tech"},
    {word: "WOLVERINE", hint1: "Claws", hint2: "Regeneration", hint3: "Logan"},
    {word: "GROOT", hint1: "I am Groot", hint2: "Tree", hint3: "Guardians"},
    {word: "ROCKET", hint1: "Raccoon", hint2: "Weapons", hint3: "Snarky"},
    {word: "NICK FURY", hint1: "Eye Patch", hint2: "S.H.I.E.L.D.", hint3: "Director"},
    {word: "GALACTUS", hint1: "Cosmic", hint2: "Devourer", hint3: "Huge"},
    {word: "PHOENIX", hint1: "Force", hint2: "Jean Grey", hint3: "Powerful"}
];

const movieWords = [
    {word: "AVATAR", hint1: "Blue Aliens", hint2: "Pandora", hint3: "Cameron"},
    {word: "TITANIC", hint1: "Ship", hint2: "Iceberg", hint3: "Rose"},
    {word: "INCEPTION", hint1: "Dreams", hint2: "Top", hint3: "Nolan"},
    {word: "INTERSTELLAR", hint1: "Space", hint2: "Wormhole", hint3: "Nolan"},
    {word: "JOKER", hint1: "Clown", hint2: "Arthur", hint3: "Chaos"},
    {word: "GLADIATOR", hint1: "Rome", hint2: "Arena", hint3: "Maximus"},
    {word: "THE GODFATHER", hint1: "Mafia", hint2: "Don", hint3: "Corleone"},
    {word: "THE DARK KNIGHT", hint1: "Batman", hint2: "Joker", hint3: "Gotham"},
    {word: "FORREST GUMP", hint1: "Run", hint2: "Life is like", hint3: "Tom Hanks"},
    {word: "PULP FICTION", hint1: "Nonlinear", hint2: "Tarantino", hint3: "Royale"},
    {word: "THE MATRIX", hint1: "Red Pill", hint2: "Neo", hint3: "Simulated"},
    {word: "CASABLANCA", hint1: "Classic", hint2: "Rick", hint3: "1940s"},
    {word: "ALIEN", hint1: "Space Horror", hint2: "Chestburster", hint3: "Ripley"},
    {word: "TERMINATOR", hint1: "Cyborg", hint2: "Hasta la vista", hint3: "Skynet"},
    {word: "BACK TO THE FUTURE", hint1: "Time Travel", hint2: "DeLorean", hint3: "Marty"},
    {word: "THE SHINING", hint1: "Hotel", hint2: "Here's Johnny", hint3: "Kubrick"},
    {word: "STAR WARS", hint1: "Galaxy", hint2: "Force", hint3: "Skywalker"},
    {word: "THE LORD OF THE RINGS", hint1: "Ring", hint2: "Middle Earth", hint3: "Fellowship"},
    {word: "PSYCHO", hint1: "Shower", hint2: "Hitchcock", hint3: "Norman"},
    {word: "CASINO ROYALE", hint1: "Bond", hint2: "Poker", hint3: "MI6"}
];

const gameWords = [
    {word: "MINECRAFT", hint1: "Blocks", hint2: "Crafting", hint3: "Creeper"},
    {word: "FORTNITE", hint1: "Battle Royale", hint2: "Building", hint3: "Epic"},
    {word: "ROBLOX", hint1: "User Games", hint2: "Avatar", hint3: "Platform"},
    {word: "GOD OF WAR", hint1: "Kratos", hint2: "Mythology", hint3: "PlayStation"},
    {word: "PUBG", hint1: "Chicken Dinner", hint2: "Erangel", hint3: "Solo"},
    {word: "OVERWATCH", hint1: "Hero Shooter", hint2: "Blizzard", hint3: "Team"},
    {word: "HALO", hint1: "Master Chief", hint2: "Spartans", hint3: "Ring"},
    {word: "THE LEGEND OF ZELDA", hint1: "Link", hint2: "Triforce", hint3: "Hyrule"},
    {word: "SUPER MARIO", hint1: "Plumber", hint2: "Nintendo", hint3: "Princess"},
    {word: "CALL OF DUTY", hint1: "Shooter", hint2: "Campaign", hint3: "Multiplayer"},
    {word: "ASSASSIN'S CREED", hint1: "Parkour", hint2: "Hidden Blade", hint3: "Templars"},
    {word: "THE WITCHER", hint1: "Geralt", hint2: "Monsters", hint3: "Swords"},
    {word: "RED DEAD REDEMPTION", hint1: "Wild West", hint2: "Arthur", hint3: "Outlaws"},
    {word: "SKYRIM", hint1: "Dragonborn", hint2: "Elder Scrolls", hint3: "Dragons"},
    {word: "DOTA 2", hint1: "MOBA", hint2: "Heroes", hint3: "Valve"},
    {word: "LEAGUE OF LEGENDS", hint1: "MOBA", hint2: "Summoner", hint3: "Riot"},
    {word: "COUNTER STRIKE", hint1: "Terrorists", hint2: "Defusal", hint3: "CS"},
    {word: "THE SIMS", hint1: "Life", hint2: "Build", hint3: "Simulation"},
    {word: "WORLD OF WARCRAFT", hint1: "MMO", hint2: "Azeroth", hint3: "Blizzard"},
    {word: "METROID", hint1: "Samus", hint2: "Space", hint3: "Exploration"}
];

const countryWords = [
    {word: "INDIA", hint1: "Asia", hint2: "New Delhi", hint3: "Taj Mahal"},
    {word: "JAPAN", hint1: "Tokyo", hint2: "Mount Fuji", hint3: "Sushi"},
    {word: "CANADA", hint1: "Ottawa", hint2: "Maple Leaf", hint3: "CN Tower"},
    {word: "BRAZIL", hint1: "Rio", hint2: "Carnival", hint3: "Amazon"},
    {word: "FRANCE", hint1: "Paris", hint2: "Eiffel Tower", hint3: "Wine"},
    {word: "GERMANY", hint1: "Berlin", hint2: "Oktoberfest", hint3: "Autobahn"},
    {word: "AUSTRALIA", hint1: "Sydney", hint2: "Kangaroo", hint3: "Outback"},
    {word: "SPAIN", hint1: "Madrid", hint2: "Paella", hint3: "Flamenco"},
    {word: "RUSSIA", hint1: "Moscow", hint2: "Red Square", hint3: "Vodka"},
    {word: "CHINA", hint1: "Beijing", hint2: "Great Wall", hint3: "Pandas"},
    {word: "EGYPT", hint1: "Cairo", hint2: "Pyramids", hint3: "Nile"},
    {word: "MEXICO", hint1: "Mexico City", hint2: "Tacos", hint3: "Aztecs"},
    {word: "ITALY", hint1: "Rome", hint2: "Pasta", hint3: "Colosseum"},
    {word: "GREECE", hint1: "Athens", hint2: "Islands", hint3: "Ancient"},
    {word: "SOUTH AFRICA", hint1: "Cape Town", hint2: "Safari", hint3: "Table Mountain"},
    {word: "ARGENTINA", hint1: "Buenos Aires", hint2: "Tango", hint3: "Beef"},
    {word: "SWEDEN", hint1: "Stockholm", hint2: "Ikea", hint3: "ABBA"},
    {word: "NORWAY", hint1: "Fjords", hint2: "Oslo", hint3: "Aurora"},
    {word: "THAILAND", hint1: "Bangkok", hint2: "Beaches", hint3: "Thai Food"},
    {word: "VIETNAM", hint1: "Hanoi", hint2: "Pho", hint3: "Halong Bay"}
];

// =======================
// VARIABLES
// =======================

let usedWords = [];
let score = 0;
let streak = 0;
let bestStreak = 0;
let wordsSolved = 0;
let attempts = 0;
let hintsRemaining = 0;
let hintCount = 0;
let currentHintLevel = 0;
let roundActive = false;
let currentWord = "";
let currentWordObject = null;

let selectedCategory = "";
let selectedLength = "";
let selectedDifficulty = "";

let currentRound = 1;
const totalRounds = 5;

let revealedLetters = [];
let foundLetters = [];

// Difficulty settings
const DIFFICULTY = {
    Easy: {attempts:8, hints:3, similarityVisible:true, cluesVisible:true, reward:100},
    Moderate: {attempts:6, hints:2, similarityVisible:true, cluesVisible:true, reward:150},
    Hard: {attempts:5, hints:1, similarityVisible:false, cluesVisible:false, reward:250}
};

// =======================
// UI BINDINGS
// =======================

const categoryCards = document.querySelectorAll('.categories:not(.difficulties) .card');
const lengthCards = document.querySelectorAll('.length-card');
const difficultyCards = document.querySelectorAll('.difficulty-card');

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        categoryCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        selectedCategory = card.textContent.trim();
    });
});

lengthCards.forEach(card => {
    card.addEventListener('click', () => {
        lengthCards.forEach(c => c.classList.remove('length-active'));
        card.classList.add('length-active');
        selectedLength = card.textContent.trim();
    });
});

difficultyCards.forEach(card => {
    card.addEventListener('click', () => {
        difficultyCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        selectedDifficulty = card.textContent.trim();
    });
});

// =======================
// GET CATEGORY DATA
// =======================
function getWordList(){
    if(selectedCategory.includes('Pokemon')) return pokemonWords;
    if(selectedCategory.includes('Marvel')) return marvelWords;
    if(selectedCategory.includes('Movies')) return movieWords;
    if(selectedCategory.includes('Games')) return gameWords;
    if(selectedCategory.includes('Countries')) return countryWords;
    return [];
}

// =======================
// LOCAL STORAGE (best score)
// =======================
function getBestScore(){
    return Number(localStorage.getItem('bestScore') || 0);
}

function setBestScore(val){
    localStorage.setItem('bestScore', String(val));
    document.getElementById('bestScoreDisplay').textContent = val;
}

// init best score display
document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('bestScoreDisplay');
    if(el) el.textContent = getBestScore();
});

// =======================
// START ROUND
// =======================
function startRound(){
    if(!selectedDifficulty){
        alert('Select Difficulty');
        return;
    }

    let wordList = getWordList();

    const filteredWords = wordList.filter(item => {
        const lengthMatch = selectedLength === '8+' ? item.word.replace(/\s+/g,'').length >= 8 : item.word.replace(/\s+/g,'').length == Number(selectedLength);
        const notUsed = !usedWords.includes(item.word);
        return lengthMatch && notUsed;
    });

    if(filteredWords.length === 0){
        alert('No words found for selected options');
        return;
    }

    currentWordObject = filteredWords[Math.floor(Math.random()*filteredWords.length)];
    currentWord = currentWordObject.word.toUpperCase();
    usedWords.push(currentWordObject.word);
    roundActive = true;
    hintCount = 0;
    currentHintLevel = 0;

    // set attempts and hints based on difficulty
    const cfg = DIFFICULTY[selectedDifficulty] || DIFFICULTY.Moderate;
    attempts = cfg.attempts;
    hintsRemaining = cfg.hints;

    // reset
    foundLetters = [];
    revealedLetters = [];
    for(let ch of currentWord){
        revealedLetters.push(ch === ' ' ? ' ' : '_');
    }

    if(currentRound === 1){
        const history = document.getElementById('guessHistory');
        if(history) history.innerHTML = '';
    }

    const nextBtn = document.getElementById('nextWordBtn');
    if(nextBtn){
        nextBtn.textContent = 'NEXT WORD';
        nextBtn.classList.add('hidden');
    }

    const hintBtn = document.getElementById('hintBtn');
    const submitBtn = document.getElementById('submitGuess');
    if(hintBtn) hintBtn.disabled = false;
    if(submitBtn) submitBtn.disabled = false;

    // update UI
    document.getElementById('wordDisplay').textContent = revealedLetters.join(' ');
    document.getElementById('attemptDisplay').textContent = attempts;
    document.getElementById('gameCategory').textContent = selectedCategory;
    document.getElementById('gameLength').textContent = selectedLength;
    document.getElementById('roundDisplay').textContent = currentRound + '/' + totalRounds;
    document.getElementById('hintDisplay').textContent = '';
    document.getElementById('foundLetters').innerHTML = '';
    document.getElementById('resultMessage').textContent = '';

    const similaritySection = document.getElementById('similaritySection');
    const clueSection = document.getElementById('clueSection');

    if(!cfg.similarityVisible){
        if(similaritySection) similaritySection.style.display = 'none';
    } else {
        if(similaritySection) similaritySection.style.display = '';
        document.getElementById('similarityDisplay').textContent = '0%';
        document.getElementById('similarityStatus').textContent = 'Start Guessing';
    }

    if(!cfg.cluesVisible){
        if(clueSection) clueSection.style.display = 'none';
    } else {
        if(clueSection) clueSection.style.display = '';
    }

    // update score/streak displays
    document.getElementById('scoreDisplay').textContent = score;
    document.getElementById('streakDisplay').textContent = streak;
    const bestEl = document.getElementById('bestScoreDisplay');
    if(bestEl) bestEl.textContent = getBestScore();
}

// START button
document.getElementById('startBtn').addEventListener('click', () => {
    if(selectedCategory === ''){ alert('Select Category'); return; }
    if(selectedLength === ''){ alert('Select Length'); return; }
    if(selectedDifficulty === ''){ alert('Select Difficulty'); return; }

    document.getElementById('gameScreen').classList.remove('hidden');
    usedWords = [];
    currentRound = 1;
    score = 0;
    streak = 0;
    bestStreak = 0;
    wordsSolved = 0;
    roundActive = false;
    const history = document.getElementById('guessHistory');
    if(history) history.innerHTML = '';
    startRound();
});

// =======================
// HISTORY
// =======================
function addHistory(guess, similarity, status){
    const history = document.getElementById('guessHistory');
    if(!history) return;
    const card = document.createElement('div');
    card.className = 'history-card';
    card.innerHTML = `
        <div class="history-word">${guess}</div>
        <div class="history-status">${status} • ${similarity}%</div>
    `;
    history.prepend(card);
}

// =======================
// CLUE BOXES
// =======================
function renderFoundLetters(){
    const container = document.getElementById('foundLetters');
    if(!container) return;
    container.innerHTML = '';

    const visibleLetters = new Set(revealedLetters.filter(l => l !== '_' && l !== ' '));

    // Only show unique, misplaced letters that are in the word but not revealed
    const unique = [...new Set(foundLetters)].filter(l => !visibleLetters.has(l));

    unique.forEach(letter => {
        const d = document.createElement('div');
        d.className = 'found-letter';
        d.textContent = letter;
        container.appendChild(d);
    });
}

// =======================
// HINTS
// =======================
document.getElementById('hintBtn').addEventListener('click', () => {
    if(!roundActive || !currentWordObject) return;

    if(hintsRemaining <= 0){
        alert('No hints remaining for this difficulty');
        return;
    }

    hintsRemaining--;
    hintCount++;
    currentHintLevel++;
    let hintText = '';

    if(currentHintLevel === 1 && currentWordObject.hint1){
        hintText = currentWordObject.hint1;
    } else if(currentHintLevel === 2 && currentWordObject.hint2){
        hintText = currentWordObject.hint2;
    } else if(currentHintLevel === 3 && currentWordObject.hint3){
        hintText = currentWordObject.hint3;
    }

    if(hintText) document.getElementById('hintDisplay').textContent = hintText;

    // deduct points (no clamping - allow negative scores)
    score -= 20;
    document.getElementById('scoreDisplay').textContent = score;
});

// =======================
// SIMILARITY CALC
// =======================
function calcSimilarity(guess){
    const word = currentWord;
    const len = Math.max(word.replace(/\s+/g,'').length, guess.replace(/\s+/g,'').length, 1);

    // correct positions
    let correctPositions = 0;
    for(let i=0;i<Math.min(guess.length, word.length); i++){
        if(guess[i] === word[i] && word[i] !== ' ') correctPositions++;
    }

    // existing letters (set intersection)
    const wordLetters = {};
    for(let ch of word){ if(ch !== ' ') wordLetters[ch] = (wordLetters[ch]||0)+1; }
    let matched = 0;
    for(let ch of guess){ if(ch !== ' ' && wordLetters[ch]){ matched++; wordLetters[ch]--; } }

    const positionScore = correctPositions / len;
    const existingScore = matched / len;

    const combined = Math.round(Math.min(1, (positionScore * 0.7 + existingScore * 0.3)) * 100);
    return combined;
}

// =======================
// SUBMIT GUESS
// =======================
document.getElementById('submitGuess').addEventListener('click', () => {
    if(!roundActive) return;
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.trim().toUpperCase();
    if(guess === '') return;

    // reveal correct positions
    for(let i=0;i<currentWord.length;i++){
        if(guess[i] && guess[i] === currentWord[i] && currentWord[i] !== ' '){
            revealedLetters[i] = currentWord[i];
        }
    }

    // add found letters only if they exist and are not already revealed in place
    for(let ch of guess){
        if(ch === ' ') continue;
        if(currentWord.includes(ch)){
            // check if ch is already revealed in any same-position
            let revealedInPosition = false;
            for(let i=0;i<currentWord.length;i++){
                if(currentWord[i] === ch && revealedLetters[i] === ch){ revealedInPosition = true; break; }
            }
            if(!revealedInPosition && !foundLetters.includes(ch)) foundLetters.push(ch);
        }
    }

    renderFoundLetters();
    document.getElementById('wordDisplay').textContent = revealedLetters.join(' ');

    const similarity = calcSimilarity(guess);
    let status = '❄️ Far';
    if(similarity <= 25) status = '❄️ Far';
    else if(similarity <= 50) status = '🌤 Close';
    else if(similarity <= 75) status = '🔥 Very Close';
    else status = '🏆 Excellent';

    // update similarity UI if visible
    const cfg = DIFFICULTY[selectedDifficulty] || DIFFICULTY.Moderate;
    if(cfg.similarityVisible){
        document.getElementById('similarityDisplay').textContent = similarity + '%';
        document.getElementById('similarityStatus').textContent = status;
    }

    addHistory(guess, similarity, status);

    // check solved
    if(revealedLetters.join('') === currentWord){
        // reward
        score += cfg.reward;
        streak++;
        bestStreak = Math.max(bestStreak, streak);
        wordsSolved++;
        roundActive = false;
        document.getElementById('scoreDisplay').textContent = score;
        document.getElementById('streakDisplay').textContent = streak;
        document.getElementById('resultMessage').textContent = '🎉 WORD SOLVED';
        const nextBtn = document.getElementById('nextWordBtn');
        if(nextBtn){
            nextBtn.textContent = currentRound >= totalRounds ? 'FINISH' : 'NEXT WORD';
            nextBtn.classList.remove('hidden');
        }
        const hintBtn = document.getElementById('hintBtn');
        const submitBtn = document.getElementById('submitGuess');
        if(hintBtn) hintBtn.disabled = true;
        if(submitBtn) submitBtn.disabled = true;
        if(score > getBestScore()){ setBestScore(score); }
        return;
    }

    // wrong guess
    attempts--;
    document.getElementById('attemptDisplay').textContent = attempts;
    document.getElementById('resultMessage').textContent = status;

    if(attempts <= 0){
        streak = 0;
        bestStreak = Math.max(bestStreak, streak);
        roundActive = false;
        document.getElementById('streakDisplay').textContent = streak;
        document.getElementById('resultMessage').textContent = `💀 Out of Attempts — Answer: ${currentWord}`;
        document.getElementById('wordDisplay').textContent = currentWord.split('').join(' ');
        const nextBtn = document.getElementById('nextWordBtn');
        if(nextBtn){
            nextBtn.textContent = currentRound >= totalRounds ? 'FINISH' : 'NEXT WORD';
            nextBtn.classList.remove('hidden');
        }
        const hintBtn = document.getElementById('hintBtn');
        const submitBtn = document.getElementById('submitGuess');
        if(hintBtn) hintBtn.disabled = true;
        if(submitBtn) submitBtn.disabled = true;
        return;
    }

    guessInput.value = '';
});

// =======================
// NEXT WORD / CHALLENGE
// =======================
function showEndScreen(){
    const container = document.querySelector('.container');
    const best = getBestScore();
    const summary = document.createElement('div');
    summary.className = 'game-card';
    summary.innerHTML = `
        <h2>Challenge Complete</h2>
        <div style="margin:10px 0; display:grid; grid-template-columns:repeat(auto-fit,minmax(120px,1fr)); gap:12px;">
            <div class="stat-card"><span>Final Score</span><p>${score}</p></div>
            <div class="stat-card"><span>Best Score</span><p>${best}</p></div>
            <div class="stat-card"><span>Difficulty</span><p>${selectedDifficulty}</p></div>
            <div class="stat-card"><span>Words Solved</span><p>${wordsSolved}</p></div>
            <div class="stat-card"><span>Best Streak</span><p>${bestStreak}</p></div>
        </div>
        <div style="margin-top:18px; display:flex; gap:12px; justify-content:center;"><button id="playAgain">Play Again</button><button id="goHome">Home</button></div>
    `;
    container.innerHTML = '';
    container.appendChild(summary);

    document.getElementById('playAgain').addEventListener('click', () => { location.reload(); });
    document.getElementById('goHome').addEventListener('click', () => { location.href = location.pathname; });
}

document.getElementById('nextWordBtn').addEventListener('click', () => {
    currentRound++;
    if(currentRound > totalRounds){
        // finalize
        if(score > getBestScore()) setBestScore(score);
        showEndScreen();
        return;
    }

    document.getElementById('nextWordBtn').classList.add('hidden');
    startRound();
});
