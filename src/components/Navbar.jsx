import { Layout } from 'antd'
import lendsqr from "../assets/png/lendsqr.png"
import Union from "../assets/png/Union.png"
import { Input, Space } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { Menu } from 'antd';

const { Search } = Input;


const { Header, Footer, Sider, Content } = Layout;

const Navbar = () => {
    const onSearch = (value) => console.log(value);
    const { Title } = Typography

    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      )
    return (
        <>
     <Layout>
     <Header  style={{background:'white', padding:20}}>
     <Avatar  style={{background:'gray', float: 'right'}} icon={<UserOutlined />} />
     <div>
     {/* <Title level={4}>  <img src={Union} alt="union" width='40' />  </Title> */}
     <Title level={4}> <img src={lendsqr} alt="" /> </Title>
     </div>
     
     </Header>
     <Layout>
     <Sider style={{background:'white'}} > 
         <Menu  mode="inline"
          defaultSelectedKeys={['1']}>
           <Menu.Item key='Dashboard'>
               Dashboard
           </Menu.Item>
         <Menu.SubMenu key='SubMenu' title='User'>
           <Menu.ItemGroup key='AboutUs' title='About Us'>
               <Menu.Item key='location1'>  Location 1 </Menu.Item>
               <Menu.Item key='location2'>  Location 2 </Menu.Item>
            </Menu.ItemGroup>  
          </Menu.SubMenu> 
         </Menu>
      </Sider>

      <Layout>  
        <Content>Content hhhhh
            
        </Content>
        <Footer>Footer</Footer>
      </Layout>

     </Layout>
    </Layout>
        </>
    )
}

export default Navbar
