import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import Update from './components/update'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/addpost' element={<AddPost/>} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
