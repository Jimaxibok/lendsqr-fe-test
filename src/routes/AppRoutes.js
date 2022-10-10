import Users from '../pages/Users';
import User from '../pages/User';
import Login from '../pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import DashboardLayout from '../components/layouts/DashboardLayout';

const AppRoutes = () => {
  const authRoutes = [
    {
      link: '/users',
      exact: true,
      component: <Users />,
    },
    {
      link: '/users/:id',
      exact: true,
      component: <User />,
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        {authRoutes.map(({ link, component }, key) => (
          <Route
            path={link}
            key={key}
            element={<DashboardLayout>{component}</DashboardLayout>}
          />
        ))}
      </Routes>
    </Router>
  );
};
export default AppRoutes;
