import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Allroutes from './Allroutes';
import { fetchAllQuestions } from './actions/askQuestion';
import { fetchAllUsers } from './actions/users';

function App() {
  // console.log( <Navbar/>)

  const dispatch=useDispatch()

  useEffect(()=>{ dispatch(fetchAllQuestions())
  dispatch(fetchAllUsers())},[dispatch])
  return (

    
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Allroutes/>
    </BrowserRouter>
    </div>
  );
}

export default App;
