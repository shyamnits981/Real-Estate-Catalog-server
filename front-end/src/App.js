
import './App.css';
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
     <Routes>

      <Route path='/' element={<h1>Basic Infrmation</h1>} />
      <Route path='/add' element={<h1>Property detalis</h1>} />
      <Route path='/update' element={<h1>General information</h1>} />
      <Route path='/logout' element={<h1>Logout</h1>} />
      <Route path='/location' element={<h1>location information</h1>} />
      
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
