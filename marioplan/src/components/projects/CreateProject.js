import React, {useState } from 'react'

function CreateProject() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const handleTitleChange = (e) =>{
        setTitle(e.target.value);
    }
    const handleContentChange = (e) =>{
        setContent(e.target.value);
      }
   const handleSubmit = (e) =>{
       e.preventDefault();
       console.log(title);
       console.log(content);
    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create New Project</h5>

                <div className="input-field">
                    <label htmlFor="title">Title</label> 
                    <input value={title} type="text" id="title" onChange={handleTitleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="content">Content</label> 
                   <textarea value = {content} id= "content" className ="materialize-textarea" onChange={handleContentChange}/>
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 Z-depth-0">Create Project</button>
                </div>

            </form>

        </div>
    )

}

export default CreateProject;