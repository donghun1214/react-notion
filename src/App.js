import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Content from './components/content';

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "First Note", content: "This is the first note" },
    { id: 2, title: "Second Note", content: "This is the second note" }
  ]);

  return (
    <Router>
      <div className="flex">
        <Sidebar notes={notes} setNotes={setNotes} />
        <Routes>
          <Route path="/" element={<Content note={notes[0]} setNotes={setNotes} />} />   {/*  rendering root page with (notes[0]) */}
          <Route path="/note/:id" element={<NoteWrapper notes={notes} setNotes={setNotes} />} /> {/*  rendering Note page with (notes[id]) */}
        </Routes>
      </div>
    </Router>
  );
};

const NoteWrapper = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === parseInt(id));  {/* find note with id */}
  return <Content note={note} setNotes={setNotes} />;   
};

export default App;