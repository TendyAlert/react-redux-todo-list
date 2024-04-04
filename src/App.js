import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ToDoList from './components/ToDoList/ToDoList';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
        </div>
        <div className='empty-div'></div>
        <div>
          <Routes>
            <Route path='/todo/:targetTasks' Component={ToDoList}/>
            <Route path='/about' Component={About}/>
            <Route path='/contact' Component={Contact}/>
            <Route path='/todo' Component={ToDoList}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
