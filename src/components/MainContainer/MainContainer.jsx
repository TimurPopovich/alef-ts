import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react/cjs/react.development'
import OneCard from '../OneCard/OneCard'

function MainContainer() {

  const usersGlobalState = useSelector(state => state.users.users)
  const postsGlobalState = useSelector(state => state.posts.posts)

  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    setPosts(postsGlobalState)
  }, [postsGlobalState])

  function inputHandler(e) {

    setValue(e.target.value);
    const author = usersGlobalState.filter(el => el.name.toLowerCase().indexOf(e.target.value.toLowerCase().trim()) > -1).map(el => el.id)
    setPosts(postsGlobalState.filter(el => author.includes(el.userId)))

  }

  return (
    <>
      <div className='container'>
        <div className="input-group mb-3 mt-3 w-50">
          <span className="input-group-text">🔎</span>
          <input
            type="text"
            className="form-control"
            placeholder='Filter by author...'
            value={value}
            onChange={(e) => { inputHandler(e) }} />
        </div>
      </div>

      <div className='container'>
        {posts.length ? posts.map(el => <OneCard key={el.id} post={el} users={usersGlobalState} />) : 'Нет совпадений'}
      </div>
    </>
  )
}

export default MainContainer
