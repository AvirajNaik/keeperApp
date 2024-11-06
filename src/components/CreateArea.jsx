import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';





function CreateArea(props) {
  const [textInput, setTextInput] = useState({
    title: "",
    content: ""
  });
const [isExpanded, setExpansion] = useState(false);



  function handleChange(event) {
    const {name, value} = event.target;
    
      setTextInput((prevValue) => ({
        ...prevValue,
       [name]: value,
      }));
    }
  
    function handleClick(){
      setExpansion(true);
    }



  return (
    <div>
      <form  className="create-note">
      {isExpanded?  <input onChange = {handleChange} name="title" placeholder="Title" value={textInput.title} /> : null}
    <textarea  onClick={handleClick} onChange = {handleChange} name="content" placeholder="Take a note..." rows={isExpanded? 3 : 1} value ={textInput.content} />
      <Zoom in={isExpanded}>
      <Fab onClick={(event) =>{ 
          event.preventDefault();
          props.addNote(textInput);
          setTextInput({
            title: "",
            content: ""
          })}}> 
          <AddIcon />
        </Fab>
      </Zoom>
       
      </form>
    </div>
  );
}

export default CreateArea;
