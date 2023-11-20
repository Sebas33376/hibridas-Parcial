import { useState } from "react"

const ImageUpload = () => {
const [file,setFile] = useState()
    const onSubmit= (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", file);
        fetch("http://localhost:2023/upload",{
            method:"POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return(
        <form onSubmit={onSubmit}>
            <input type="file" onChange={() =>setFile(file)} />
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default ImageUpload