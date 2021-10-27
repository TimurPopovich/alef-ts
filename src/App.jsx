import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react/cjs/react.development";
import MainContainer from "./components/MainContainer/MainContainer";
import { initialPosts } from "./redux/reducers/postsReducer";
import { initialUsers } from "./redux/reducers/usersReducer";

function App() {

  const dispatch = useDispatch()
  const usersGlobalState = useSelector(state => state.users.users)
  const postsGlobalState = useSelector(state => state.posts.posts)

  useEffect(() => {

    async function getPosts() {
      const response = await fetch('http://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      dispatch(initialPosts(data))
    }

    async function getUser() {
      const response = await fetch('http://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      dispatch(initialUsers(data))
    }

    getPosts()
    getUser()

  }, [dispatch])

  return (
    <div className="App">
      {usersGlobalState.length !== 0 && postsGlobalState !== 0 ? <MainContainer /> : null}
    </div>
  );
}

export default App;
