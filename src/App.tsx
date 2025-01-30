import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { Login } from './components/layout/forms/Login';
import { Start } from './components/sections/Start';
import './App.css'
import { Suspense } from 'react';


function App() {

  return (
   <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/start' element={<Start/>}/>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
   </Router>
  )
}


export default App
