import React, { useState } from 'react';
import ProgressBar from './ProgressBar'


const UploadForm=() => {

    //using local state hook to store file
    //file is the name,setfile is the function to set the state
    //initially state is null
    const [file,setFile]=useState(null);
    // set a state for error handling
    const [error,setError] = useState(null);
    // allowedfile types
    const filetypes = ['image/png','image/jpeg'];

    // change Handler for the input
    const changeFile=(e)=>{

    
        //lets get the selected file
        let selectedFile = e.target.files[0];
        if(selectedFile && filetypes.includes(selectedFile.type))
        {
            // if there is any file selected then set local state
            setFile(selectedFile);
            setError(null); 
        }else{
            setFile(null);
            setError("Please Enter a valid file(png or jpeg)")

        }
    
    }

     return (
        <form> 
           <label>
                <input type="file" onChange={changeFile} />
                <span>+</span>
           </label>

           <div className="output">
              { error && <div className="error">{error}</div> }
              { file && <div>{file.name}</div> }
              { file && <ProgressBar file={file} setFile={setFile}/>}
           </div>
        </form>
     );

}

export default UploadForm;