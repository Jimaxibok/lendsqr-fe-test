import { Layout } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import breifcaseIcon from '../../assets/images/briefcase-icon.svg';
import usersIcon from '../../assets/images/users-icon.svg';
import lendsqrLogo from '../../assets/images/lends-logo.svg';
import home from '../../assets/images/home 1.svg';
import { DownOutlined } from '@ant-design/icons';
import { RiArrowDropDownFill } from 'react-icons/ri';
import bell from '../../assets/images/bell.svg';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
const { Header, Sider } = Layout;

const DashboardLayout = (props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <>
      <Layout className='dashboard-layout'>
        <Header className='dashboard-header-container'>
          <div className='dashboard-header w-100'>
            <Row className='w-100'>
              <Col xs={4} lg={6}>
                <div>
                  <img src={lendsqrLogo} alt='Lendsqr' width='160' />
                </div>
              </Col>
              <Col xs={18} lg={18}>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <div className='searchInput'>
                      <input
                        type='text'
                        className='searchinputbar'
                        placeholder='Search for anything'
                        value={text}
                        onChange={handleChange}
                      />
                      <div className='btn btn-common'>
                        <FaSearch style={{ color: 'white' }} className='fasearch' />
                      </div>
                    </div>
                  </div>

                  <div className='avatarbell'>
                    <p className='avatarbellItem1'>Docs</p>
                    <img src={bell} alt='bell' className='avatarbellItem2' />
                    <Avatar size='large' icon={<UserOutlined />} className='avatarbellItem3' />
                    <span className='avatarbellItem4'>Akinyode</span>
                    <RiArrowDropDownFill className='avatarbellItem5' />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Header>
        <Layout>
          <Sider className='dashboard-sidebar' width={260}>
            <div>
              <div className='sidebar-menu'>
                <img src={breifcaseIcon} alt='organization' />
                <span>Switch Organization</span>
                <DownOutlined style={{ fontSize: '14px' }} />
              </div>
              <div className='sidebarDashboard'>
                <img src={home} alt='home' />
                <span>Dashboard</span>
              </div>
              <p className='sidebar-customers'>CUSTOMERS</p>
              <div className='sidebar-menu menu-active'>
                <Link to='/users'>
                  <img src={usersIcon} alt='users' />
                  <span>Users</span>
                </Link>
              </div>
            </div>
          </Sider>

          <Layout className='dashboard-content-container'>{props.children}</Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
