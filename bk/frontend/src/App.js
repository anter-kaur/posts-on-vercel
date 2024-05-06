import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import Update from './components/update'

function App() {

// Access protocol, domain, and port of the current webpage's URL
const protocol = window.location.protocol;
const domain = window.location.hostname;
const port = window.location.port;

// Use the retrieved information as needed
console.log("Protocol:", protocol);
console.log("Domain:", domain);
console.log("Port:", port);


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
