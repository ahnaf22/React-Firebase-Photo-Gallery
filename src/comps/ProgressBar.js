import React, { useEffect } from 'react';
import useStorage from './hooks/useStorage';
import {motion} from 'framer-motion';


const ProgressBar = ({file,setFile}) =>{
  
    // setting the url and progress values right fromthe use storage hooks
    const {url,progress}= useStorage(file);
    //console.log(url,progress);

    useEffect(()=>{
       if(url)
       {
         setTimeout(() => {
            console.log('removing file instance');
            setFile(null);
            console.log('instance removed!');
          }, 2000)
           
       }
    },[url,setFile]);
   
    return(
        <motion.div className="progress-bar" 
                    initial={{width:0}}
                    animate={{width: progress + '%'}}
        >
           {url && <span><br/>'Uploaded Successfully'</span>}
        </motion.div>
    );
}

export default ProgressBar;