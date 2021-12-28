import './App.css';
import PostForm from './components/PostForm'
import Posts from './components/Posts';

function App() {
  return (
    <>
      <PostForm />
      <Posts />
      <FetchedPosts />
    </>
  );
}

export default App;
