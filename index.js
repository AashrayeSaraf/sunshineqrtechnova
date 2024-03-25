const data = require("./data.js");
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const crypto = require("crypto")

function generateCookieForPath(path) {
  const hash = crypto.createHash("sha256");
  hash.update(path);
  hash.update(data.config.cookieSecret);
  return hash.digest("hex");
}

const app = express();
const port = data.config.serverPort;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

if (data.config.devMode)
  app.get("/", (req, res) => {
    res.render("index.ejs", {
      data: data
    });
  });

app.get("/path/:path/:stage", (req, res) => {
  const path = req.params.path;
  const stage = req.params.stage;
  const code = req.query.code;
  const game = data.paths[path][stage];

  if (game === undefined) {
    res.sendStatus(404);
    return;
  } else if (game.code !== code) {
    res.sendStatus(403);
    return;
  }

  const cookiePath = req.cookies.path;
  if (cookiePath !== generateCookieForPath(path) && stage !== "1") {
    console.log("No path cookie");
    res.render("wrongpath.ejs");
    return;
  }

  res.cookie("path", generateCookieForPath(path), {
    maxAge: 1000 * 60 * 60 * 24
  });
  res.render(`${game.gameType}.ejs`, game.config);
})

app.get("/switch/:switch", (req, res) => {
  const switchId = req.params.switch;
  const code = req.query.code;
  const switchObj = data.switches[switchId];

  const cookiePath = req.cookies.path;
  if (cookiePath === undefined) {
    console.log("No path cookie");
    res.sendStatus(403);
    return;
  }
  if (switchObj === undefined) {
    console.log("No route for path");
    res.sendStatus(404);
    return;
  }
  if (switchObj.code !== code) {
    console.log("Invalid code");
    res.sendStatus(403);
    return;
  }

  // Find matching path object
  const matchedPathId = Object.keys(switchObj.routes).find((path) => {
    if (generateCookieForPath(path) === cookiePath) {
      return true;
    } else {
      return false;
    }
  });

  if (matchedPathId === undefined) {
    console.log("No matching path");
    res.render("wrongpath.ejs");
    return;
  }

  const targetStageId = switchObj.routes[matchedPathId];

  const pathObj = data.paths[matchedPathId];

  if (pathObj === undefined) {
    console.log("No path object");
    res.render("wrongpath.ejs");
    return;
  }

  res.cookie("path", cookiePath, {
    maxAge: 1000 * 60 * 60 * 24
  });
  res.redirect(`/path/${matchedPathId}/${targetStageId}?code=${pathObj[targetStageId].code}`);
});

app.listen(port, () => {
  console.log("Server running on port 8080");
});


module.exports = app;

