import React from 'react'

function OneCard({ post, users }) {

  const author = users?.find(el => el.id === post.userId)
  const title = post.title[0].toUpperCase() + post.title.slice(1)
  const body = post.body[0].toUpperCase() + post.body.slice(1)

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <div className='card-text'>{body}</div>
      </div>
        <div className='author text-muted'>{author.name}</div>
    </div>
  )
}

export default OneCard
