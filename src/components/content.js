import React from 'react';

export default function Content ({ note, setNotes })  {
  const handleTitleChange = (e) => {
    const updatedTitle = e.target.value;
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.id === note.id ? { ...n, title: updatedTitle } : n))
    );
  }; 

  const handleContentChange = (e) => {
    const updatedContent = e.target.value;
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.id === note.id ? { ...n, content: updatedContent } : n))
    );
  };

  return (
    <div className="flex flex-col p-4 w-full mt-20 ml-10">
      <input
        className="text-4xl font-bold focus:outline mb-8 w-3/4"
        type="text"
        value={note.title}
        onChange={handleTitleChange}
      /> {/* occur title change function when user changes title*/}
      <textarea
        className="w-3/4 h-80 border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-300"
        value={note.content}
        onChange={handleContentChange}
      />
    </div>
  );
};

