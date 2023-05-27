import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  console.log(props.notes)

  return (
    <div className="flex flex-raw justify-center items-center border border-gray-300 rounded md p-3 my-5">
      {props.notes.map((note) => (
        <div key={note.id}>
          {note.name}
          {note.content}
        </div>
      )

      )}
      <button>{props.notes} Delete</button>
      <h1>Hello note component</h1>

    </div>
  );
}

export default Notes;