
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, addPosts } from './actions/postsSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.posts)
  console.log(posts)

  useEffect(() => {
    dispatch(getPosts())
  },[getPosts])

  const addPost = (data) => {
    dispatch(addPosts(data))
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={() => addPost({title:"webreq" , body: "hello", userId: 1})}>add post </button>
    </div>
  );
}

export default App;
