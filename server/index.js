const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// signin
app.post("/api/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?",
    username,
    (err, result) => {
      if (err) {
        res.send("ERROR");
      }
      if (result[0]?.password == password) {
        res.send(result);
      } else {
        res.send("ERROR");
      }
    }
  );
});
app.post("/api/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      if (err) {
        res.send("ERROR");
      }
      res.send(result);
    }
  );
});
// Route to get all notes
app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM notes", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Route to get one note
app.get("/api/getFromusername/:username", (req, res) => {
  const id = req.params.username;
  db.query("SELECT * FROM notes WHERE username = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Route for creating the notes
app.post("/api/create", (req, res) => {
  const username = req.body.username;
  const note = req.body.note;
  const notehead = req.body.notehead;
  if (note) {
    db.query(
      "INSERT INTO notes (username, note,notehead) VALUES (?,?,?)",
      [username, note, notehead],
      (err, result) => {
        if (err) {
          res.send("ERROR");
        }
        res.send(result);
      }
    );
  } else {
    res.send("ERROR");
  }
});

app.post("/api/update", (req, res) => {
  const note = req.body.note;
  const noteid = req.body.noteid;
  const notehead = req.body.notehead;
  const updated_at = req.body.updated_at;
  db.query(
    "UPDATE notes SET note = ? ,notehead = ? , updated_at = ? WHERE id = ?",
    [note,notehead, updated_at, noteid],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result);
    }
  );
});

// Route to delete a note

app.post("/api/delete", (req, res) => {
  const id = req.body.id;

  db.query("DELETE FROM notes WHERE id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
