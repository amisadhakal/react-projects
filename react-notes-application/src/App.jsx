import { useState } from "react";

const NotesApp = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  // Add a new note
  const addNote = () => {
    if (note.trim() === "") return;

    setNotes([...notes, note]);
    setNote("");
  };

  // Delete a note
  const deleteNote = (deleteIndex) => {
    setNotes(
      notes.filter((currentNote, index) => index !== deleteIndex)
    );
  };

  // Edit a note
  const editNote = (index) => {
    setNote(notes[index]);
    setEditingIndex(index);
  };

  // Update a note
  const updateNote = () => {
    if (note.trim() === "") return;

    setNotes(
      notes.map((currentNote, index) => {
        if (index === editingIndex) {
          return note;
        }

        return currentNote;
      })
    );

    setNote("");
    setEditingIndex(-1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-5">
          Notes App
        </h1>

        <input
          type="text"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Enter a note..."
          className="w-full p-3 border rounded-lg"
        />

        <button
          onClick={editingIndex === -1 ? addNote : updateNote}
          className="w-full bg-blue-600 text-white p-3 rounded-lg mt-3 hover:bg-blue-700"
        >
          {editingIndex === -1 ? "Add" : "Update"}
        </button>

        {notes.map((currentNote, index) => (
          <div
            key={index}
            className="flex justify-between items-center border p-3 rounded-lg mt-3"
          >
            <h2>{currentNote}</h2>

            <div className="flex gap-2">
              <button
                onClick={() => editNote(index)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Edit
              </button>

              <button
                onClick={() => deleteNote(index)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default NotesApp;