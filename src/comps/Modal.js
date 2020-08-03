import React from 'react';
import {motion} from 'framer-motion';

const Modal =({selectedImage,setSelectedImage}) =>{
     
    const handleExit =(e)=>{
        if(e.target.classList.contains('backdrop'))
        {
            setSelectedImage(null);
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleExit}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
        >
             <motion.img src={selectedImage} alt="Highlighted Image"
                         initial={{y:'-100vh'}}
                         animate={{y:0}}
                         transition={{ease:'easeOut',duration:0.4}}                     
             />
        </motion.div>
    );
}

export default Modal;