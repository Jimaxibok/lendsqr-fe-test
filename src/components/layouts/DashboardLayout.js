import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import breifcaseIcon from '../../assets/images/briefcase-icon.svg';
import usersIcon from '../../assets/images/users-icon.svg';
import lendsqrLogo from '../../assets/images/lends-logo.svg';
import { DownOutlined } from '@ant-design/icons';
const { Header, Sider } = Layout;

const DashboardLayout = (props) => {
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
                    <h2>TEXTFIELD</h2>
                  </div>

                  <div>
                    <h2>OTHER ITEMS</h2>
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
              <h2>OTHERS ITEMS</h2>
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
