import { useState } from "react";
import '../childFiles/randomQuote.css'

const FileUploader = () => {

    
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div>
        <span><b>Select a image to upload</b></span><br/><br/>
            <input type="file" accept="image/*"  onChange={handleFileChange}/><br/>
            <button className="btn btn-dark">Submit</button>
            <br/><br/>
            <img src={selectedFile} alt="Image Not Selected" style={{width:'200px',height:'200px'}}></img>
        </div>
    );
}

export default FileUploader