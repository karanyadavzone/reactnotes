import { useState, useEffect, useRef } from "react";
import { MdDelete } from "react-icons/md";

import "./styles.css";

export default function App() {
  let baseUrl = "http://localhost:3002";
  const [text, setText] = useState("");
  const [textHead, setTextHead] = useState("");
  const [url, setUrl] = useState(`${baseUrl}/api/create`);
  const [currentNotes, setCurrentNotes] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [text]);
  useEffect(() => {
    handleGet();
  }, []);
  const handleGet = async () => {
    await fetch(`${baseUrl}/api/get`)
      .then((response) => response.json())
      .then((data) => setCurrentNotes(data));
  };
  const handleAdd = async () => {
    if (url === `${baseUrl}/api/update`) {
      let data = {
        noteid: inputvalue,
        note: text,
        notehead: textHead,
        updated_at: new Date(),
      };
      post(data);
      setUrl(`${baseUrl}/api/create`);
    } else {
      //we can add JWT here for further secure options
      // username is create to seggregate the note from other users the notes can be get using username
      //  once the login is created
      setUrl(`${baseUrl}/api/create`);
      const username = localStorage.getItem("username");
      let data = {
        // we are saving notes for a fixed user initially
        username: "admin",
        note: text,
        notehead: textHead,
      };
      post(data);
    }
    setText("");
    setTextHead("");
  };
  const post = async (data, customurl) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    await fetch(customurl || url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data, "response"));
    handleGet();
  };
  const handleEdit = (note) => {
    setUrl(`${baseUrl}/api/update`);
    setText(note.note);
    setTextHead(note.notehead);
    setInputValue(note.id);
  };
  const handleDelete = (e, note) => {
    e.stopPropagation();
    let data = { id: note.id };
    post(data, `${baseUrl}/api/delete`);
  };
  return (
    <div className="container">
      <div className="head">NOTES WEBAPP</div>

      <div className="addNoteDiv">
        <div className="noteDiv">
          <input
            className="noteInput headingInput"
            placeholder="Add Heading"
            value={textHead}
            onChange={(e) => {
              setTextHead(e.target.value);
            }}
          />
          <textarea
            placeholder="Take a note..."
            className="noteInput"
            value={text}
            ref={textareaRef}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        {text && (
          <button className="addButton" onClick={handleAdd}>
            ADD NOTE
          </button>
        )}
      </div>
      <div className="notesContainer">
        {currentNotes?.map((note, id) => {
          return (
            <div key={id}>
              <div className="notecard" onClick={() => handleEdit(note)}>
                <p className="headingNote">
                  <b>{note.notehead}</b>
                </p>
                <p>{note.note}</p>
                <div className="cardBottom">
                  <p><em>{note.created_at}</em></p>
                  <button
                    className="editButton"
                    onClick={(e) => handleDelete(e, note)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="footer">IWCN ASSIGNMENT KARAN YADAV </p>
    </div>
  );
}
