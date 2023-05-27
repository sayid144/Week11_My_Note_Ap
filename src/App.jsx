import React, { useEffect, useState } from "react";
// Import all your components here
// Soo Jiido wixii components ah ood u baahantahay

import AddNote from "./components/AddNote";
import Notes from "./components/Notes"
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // get all notes from localhost:9000/notes using axios
    axios.get('http://localhost:9000/notes')
      .then((res) => {
        setNotes(res.data)
      })
      .catch((error) => {
        console.log(error);
      })


  }, []);

  const createNote = (noteData) => {
    // Make API call to create a note (POST request to localhost:9000/create_note)
    axios.post('http://localhost:9000/notes', noteData)
      .then((res) => {
        setNotes([res.data, ...notes])
      })
      .catch((error) => {
        console.log(error)
      })
  };

  const deleteNote = (id) => {
    axios.delete(`http://localhost:9000/notes/${id}`)
      .then((res) => {
        const deletedNotes = res.data.filter((note) => note.id !== id);
        setNotes(deletedNotes);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // STRETCH GOAL: Implement edit functionality
  // STRETCH GOAL: Isku day inaa edit ku sameyso notes-ka
  // <AddNote AddNote={createNote} />

  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          { /* Add here all the components you need */}
          { /* Halkaas ku dar components-ka aad u baahan tahay */}
          <AddNote AddNote={createNote} />
          <Notes notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default App;