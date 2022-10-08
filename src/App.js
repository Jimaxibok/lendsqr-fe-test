import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import User from './pages/User'

function App() {
  return (
    <> 
    
    <Router>
      <Routes>
      <Route path='' element={<Login />} />
      <Route path='/user' element={<User />} />
      
     </Routes>
     </Router>
   
    </>
  );
}

export default App;
