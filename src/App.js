import Users from './pages/Users';
import User from './pages/User';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import DashboardLayout from './components/layouts/DashboardLayout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Login />} />
          <Route
            element={
              // GET BACK TO THIS ROUTING LATER
              <DashboardLayout>
                {' '}
                <Users />
              </DashboardLayout>
            }>
            <Route path='/users' element={<Users />} />
            <Route path='/user' element={<User />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
