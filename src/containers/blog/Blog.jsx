import React from 'react'
import './blog.css'

const Blog = () => {
  return (
    <div className='lumoz__blog section__padding' id='blog'>
      <div className='lumoz__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, <br /> We are Post about it.
        </h1>
      </div>

      <iframe
        allowfullscreen
        id='wallsio-iframe'
        src='https://my.walls.io/f73x9?nobackground=1&amp;show_header=0'
        loading='lazy'
        title='My social wall'
      ></iframe>
    </div>
  )
}

export default Blog
