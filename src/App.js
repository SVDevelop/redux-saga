import './App.css';
import PostForm from './components/PostForm'
import Posts from './components/Posts';

function App() {
  return (
    <>
      <PostForm />
      <Posts posts={[1,2,3,4]}/>
      <FetchedPosts />
    </>
  );
}

export default App;
