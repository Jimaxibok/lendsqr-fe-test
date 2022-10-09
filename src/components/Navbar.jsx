import { Layout } from 'antd'
import lendsqrLogo from '../assets/images/lendsqrLogo.svg'
import { Input, Space } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { Menu } from 'antd'
import UserWithLoan from '../assets/images/UserWithLoan.png'
import Saving from '../assets/images/Saving.png'
import Users from '../assets/images/Users.png'
import ActiveUsers from '../assets/images/ActiveUsers.png'
import { BiBell } from 'react-icons/bi'
import {IoMdArrowDropdown} from 'react-icons/io'

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input
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
     <Header  style={{background:'white',  height: 120  }}>

     <div className> 
     <Avatar  style={{background:'gray', float: 'right'}} icon={<UserOutlined />} />
     <img src={lendsqrLogo} alt=""  />
       <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <BiBell />
      <p>Docs</p>
        
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
        <Content className='content'>

            <h2 className='userHeader'>User</h2>
        <div className="card">
            <div className='cardChild'>
             <img src={Users} className='userIcon' />  
             <h4 className='cardHead'>USERS</h4>
             <p className='cardFigure'> 2,453</p>
            </div>

            <div className='cardChild'>
            <img src={ActiveUsers} alt="" className='activeUserIcon' />
             <h4 className='cardHead'>ACTIVE USERS</h4>
             <p className='cardFigure'> 2,453</p>
            </div>

            <div className='cardChild'>
            <img src={UserWithLoan} alt="" className='userWithloanIcon' />
             <h4 className='cardHead'>USERS WITH LOANS</h4>
             <p className='cardFigure'> 12,453</p>
             </div>
             
            <div className='cardChild'>
            <img src={Saving} alt="" className='savingIcon' />
             <h4 className='cardHead'>USERS WITH SAVINGS</h4>
             <p className='cardFigure'>102,453</p>
            </div>
       </div>
            
        </Content>
        <Footer>Footer</Footer>
      </Layout>

     </Layout>
    </Layout>

    <div className='NavbarTwo' >
        <div className="navLogo">
        <img src={lendsqrLogo} alt="Logo"  />
        </div>

         <div className="navSearch">
            {/* <input type="text" className='searchInput' placeholder='Search for anything' onChange={onchange}/> */}
            <Search placeholder="Search for anything" onSearch={onSearch} enterButton className='searchInput'  />
         </div>

         <div className="navAvatar">
             <p className='docs'>Docs</p> 
             <BiBell  className='bibell'/>
             <br />
             <Avatar icon={<UserOutlined />}  className='avatar'/>
            <span>Akinyode</span>
            <IoMdArrowDropdown  className='navbarArrow'/>
         </div>
     </div>
        </>
    )
}

export default Navbar
