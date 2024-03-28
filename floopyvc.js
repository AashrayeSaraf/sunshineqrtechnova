const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "https://github.com/AashrayeSaraf/sunshineqrtechnova/blob/bbb0c4bbb85a67e47b7605d6f238edff4adf9a1c/flappy-bird-set%20copy.png";

// general settings
let gamePlaying = false;
const gravity = 0.5;
const speed = 6.2;
const size = [51, 36];
const jump = -11.5;
const cTenth = canvas.width / 10;

let gameInterval = -1;

let index = 0,
  bestScore = 0,
  flight,
  flyHeight,
  currentScore,
  pipes;

// pipe settings
const pipeWidth = 78;
const pipeGap = 270;
const pipeLoc = () =>
  Math.random() * (canvas.height - (pipeGap + pipeWidth) - pipeWidth) +
  pipeWidth;

const setup = () => {
  currentScore = 0;
  flight = jump;

  // set initial flyHeight (middle of screen - size of the bird)
  flyHeight = canvas.height / 2 - size[1] / 2;

  // setup first 3 pipes
  pipes = Array(3)
    .fill()
    .map((a, i) => [canvas.width + i * (pipeGap + pipeWidth), pipeLoc()]);

  if (gameInterval !== -1) clearInterval(gameInterval);
  gameInterval = setInterval(updateGame, SPEED_INTERVAL);
};

// Calculations only
function updateGame() {
  // Moving birds
  index++;

  if (gamePlaying) {
    // Moving pipes and calculating the score, checking for collisions
    pipes.map((pipe) => {
      // pipe moving
      pipe[0] -= speed;

      // give 1 point & create new pipe
      if (pipe[0] <= -pipeWidth) {
        currentScore++;
        // check if it's the best score
        bestScore = Math.max(bestScore, currentScore);

        // remove & create new pipe
        pipes = [
          ...pipes.slice(1),
          [pipes[pipes.length - 1][0] + pipeGap + pipeWidth, pipeLoc()],
        ];
      }

      // if hit the pipe, end
      if (
        [
          pipe[0] <= cTenth + size[0],
          pipe[0] + pipeWidth >= cTenth,
          pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + size[1],
        ].every((elem) => elem)
      ) {
        gamePlaying = false;
        setup();
      }
    });

    // Bird falling
    flight += gravity;
    flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);

    // Check if the current score equals POINTS_GOAL
    if (currentScore >= POINTS_GOAL) {
      // Stop and reset the game when the score reaches POINTS_GOAL
      gamePlaying = false;
      setup();

      // Display an alert when the score reaches POINTS_GOAL
      setTimeout(() => {
        alert(SUCCESS_MESSAGE);
      }, 100)
    }
  } else {
    flyHeight = canvas.height / 2 - size[1] / 2;
  }
}

// Display only
const render = () => {
  // background first part
  ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height,
    -((index * (speed / 2)) % canvas.width) + canvas.width,
    0,
    canvas.width,
    canvas.height
  );
  // background second part
  ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height,
    -(index * (speed / 2)) % canvas.width,
    0,
    canvas.width,
    canvas.height
  );

  // pipe display
  if (gamePlaying) {
    pipes.map((pipe) => {
      // top pipe
      ctx.drawImage(
        img,
        432,
        588 - pipe[1],
        pipeWidth,
        pipe[1],
        pipe[0],
        0,
        pipeWidth,
        pipe[1]
      );
      // bottom pipe
      ctx.drawImage(
        img,
        432 + pipeWidth,
        108,
        pipeWidth,
        canvas.height - pipe[1] + pipeGap,
        pipe[0],
        pipe[1] + pipeGap,
        pipeWidth,
        canvas.height - pipe[1] + pipeGap
      );
    });
  }

  // draw bird
  if (gamePlaying) {
    ctx.drawImage(
      img,
      432,
      Math.floor((index % 9) / 3) * size[1],
      ...size,
      cTenth,
      flyHeight,
      ...size
    );
  } else {
    ctx.drawImage(
      img,
      432,
      Math.floor((index % 9) / 3) * size[1],
      ...size,
      canvas.width / 2 - size[0] / 2,
      flyHeight,
      ...size
    );
    // text accueil
    ctx.fillText(`Best score : ${bestScore}`, 215, 245);
    ctx.fillText("Play Now and Get Riddle", 215, 535);
    ctx.fillText(`Score ${POINTS_GOAL} ->> Riddle!`, 215, 635);
    ctx.font = "bold 30px courier";
    ctx.textAlign = "center";
  }

  document.getElementById("bestScore").innerHTML = `Best : ${bestScore}`;
  document.getElementById(
    "currentScore"
  ).innerHTML = `Current : ${currentScore}`;

  // tell the browser to perform anim
  window.requestAnimationFrame(render);
};

// launch setup
setup();
img.onload = render;

// start game
document.addEventListener("click", () => (gamePlaying = true));
window.onclick = () => (flight = jump);
