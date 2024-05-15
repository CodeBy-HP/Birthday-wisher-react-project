import React from 'react';
import './App.css';
import Birthday from './Components/Birthday.jsx';
import Generate from './Components/Generate.jsx';
import RouterBirthday from './Components/RouterBirthday.jsx';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <div className='App'>
    <Routes>
        <Route exact path='/' element={<Birthday/>} />
        <Route
          exact
          path='/birthday/:name?/:day?/:month?'
          element = {<RouterBirthday/>}
        />
        <Route exact path='/generate' element={<Generate/>}/>
    </Routes>
    </div>
    </>
  )
}
export default App;