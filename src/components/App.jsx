import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItem] = useState([]);

  function handleAdd(textInput) {
    console.log(textInput);
    setItem((prevValue) => {
      return [...prevValue, textInput];
    });
  }

  function handleDelete(id) {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={handleAdd} />
      {items.map((item, index) => {
        console.log(item, index);
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            checkDelete={handleDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
