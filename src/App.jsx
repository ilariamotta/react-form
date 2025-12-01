import { useState } from 'react'
import './App.css'
import BlogPosts from './components/BlogPosts'


function App() {
  return (
    <>
      <header className='flex justify-content-center'><h1>Your life in a blog</h1></header>
      <main>
        <div className="container flex justify-content-center">
          <div className="blog-card">
            {/* articoli postati */}
            <ul>

              <BlogPosts />
            </ul>
          </div>        
        </div>
      </main>
    </>
  )
}

export default App
