import { useState } from 'react'


export default function BlogPosts() {
    const [post, setPost] = useState([
        "Ritrovare il tempo per sé",
        "Come trasformare le idee in progetti",
        "La magia delle piccole abitudini",
    ])
    const [newPost, setNewPost] = useState('')
     return (
        <>
            {post.map((title, index) => (
                <li className='card-title' key={index}>
                    {title}<button>x</button>
                </li>
            ))}
            <form onSubmit={(event) => {
                event.preventDefault()
                console.log(event.target.value);
                setPost([...post, newPost]);
                setNewPost('');
            }}>
                <div className="blog-card"><input type='text' value={newPost} onChange={(event) => {setNewPost(event.target.value)}}/>
                    <button type='submit' className='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

