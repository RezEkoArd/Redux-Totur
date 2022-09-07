import { useEffect } from 'react';
import {connect} from 'react-redux';
import {GetPosts, AddPosts} from './actions/postsActions';

const mapStateToProps = (state) => {
  return{
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getPosts: ()=>dispatch(GetPosts()),
    addPost: (data)=>dispatch(AddPosts(data))
  }
}

function App({posts, getPosts,addPost}) {
  console.log(posts)
  
  useEffect(() => {
    getPosts()
  },[getPosts])

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={() => addPost({title:"webreq",body:"Hello",userId:1})}>Add Data</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
