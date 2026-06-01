<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScrollVerse Decode</title>

    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="container">

    <h1>SCROLLVERSE</h1>
    <h2>DECODE</h2>

    <p class="subtitle">
        Guess The Hidden Word
    </p>

    <!-- CATEGORY -->

    <h3>Select Category</h3>

    <div class="categories">

        <div class="card">⚡ Pokemon</div>

        <div class="card">🦸 Marvel</div>

        <div class="card">🎬 Movies</div>

        <div class="card">🎮 Games</div>

        <div class="card">🌎 Countries</div>

    </div>

    <!-- LENGTH -->

    <h3>Select Word Length</h3>

    <div class="lengths">

        <div class="length-card">4</div>

        <div class="length-card">5</div>

        <div class="length-card">6</div>

        <div class="length-card">7</div>

        <div class="length-card">8+</div>

    </div>

    <button id="startBtn">
        START GAME
    </button>

    <!-- DIFFICULTY -->

    <h3>Select Difficulty</h3>

    <div class="categories difficulties">

        <div class="card difficulty-card">Easy</div>

        <div class="card difficulty-card">Moderate</div>

        <div class="card difficulty-card">Hard</div>

    </div>

    <!-- GAME SCREEN -->

    <div id="gameScreen" class="game-card hidden">

        <div class="game-stats">

            <div class="stat-card">
                <span>Category</span>
                <p id="gameCategory"></p>
            </div>

            <div class="stat-card">
                <span>Length</span>
                <p id="gameLength"></p>
            </div>

            <div class="stat-card">
                <span>Score</span>
                <p id="scoreDisplay">0</p>
            </div>

            <div class="stat-card">
                <span>Best Score</span>
                <p id="bestScoreDisplay">0</p>
            </div>

            <div class="stat-card">
                <span>Attempts</span>
                <p id="attemptDisplay">5</p>
            </div>

            <div class="stat-card">
                <span>Streak</span>
                <p id="streakDisplay">0</p>
            </div>

            <div class="stat-card">
                <span>Word</span>
                <p id="roundDisplay">1/5</p>
            </div>

        </div>

        <!-- HIDDEN WORD -->

        <div id="wordDisplay">
            _ _ _ _ _
        </div>

        <!-- SIMILARITY CARD -->

        <div id="similaritySection" class="similarity-card">

            <h3 id="similarityStatus">
                Start Guessing
            </h3>

            <h1 id="similarityDisplay">
                0%
            </h1>

        </div>

        <!-- CLUE LETTERS -->

        <div id="clueSection">
            <h3>Clue Letters</h3>
            <div id="foundLetters">
            </div>
        </div>

        <!-- HINTS -->

        <button id="hintBtn">
            USE HINT (-20)
        </button>

        <p id="hintDisplay"></p>

        <!-- GUESS -->

<div class="input-row">

    <input
    type="text"
    id="guessInput"
    placeholder="Enter Guess">

    <button id="submitGuess">
        Submit Guess
    </button>

</div>

        <!-- RESULT -->

        <p id="resultMessage"></p>

        <!-- HISTORY -->

        <div id="historySection">

            <h3>Previous Guesses</h3>

            <div id="guessHistory"></div>

        </div>

        <!-- NEXT WORD -->

        <button
            id="nextWordBtn"
            class="hidden">

            NEXT WORD

        </button>

    </div>

</div>

<script src="js/app.js"></script>

</body>
</html>