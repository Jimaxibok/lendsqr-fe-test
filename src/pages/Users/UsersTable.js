import { Table, Dropdown, Menu } from 'antd';
import axios from 'axios';
import filterIcon from '../../assets/images/filter-icon.svg';
import { useEffect, useState } from 'react';
import { formatDate } from '../../helpers';
import { MoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const UsersTable = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(
          'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
        );
        setUsersData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
    //eslint-disable-next-line
  }, []);

  const getMenu = (userId) => (
    <Menu
      items={[
        {
          key: '1',
          label: <Link to={`/users/${userId}`}>View Details</Link>,
        },
      ]}
    />
  );

  const userTableColumns = [
    {
      title: (
        <span>
          {' '}
          ORGANIZATION &nbsp; <img src={filterIcon} alt='' />{' '}
        </span>
      ),
      dataIndex: 'orgName',
    },
    {
      title: (
        <span>
          {' '}
          USERNAME &nbsp; <img src={filterIcon} alt='' />{' '}
        </span>
      ),
      dataIndex: 'userName',
    },
    {
      title: (
        <span>
          {' '}
          EMAIL &nbsp; <img src={filterIcon} alt='' />{' '}
        </span>
      ),
      dataIndex: 'email',
    },
    {
      title: (
        <span>
          {' '}
          PHONE NUMBER &nbsp; <img src={filterIcon} alt='' />{' '}
        </span>
      ),
      dataIndex: 'phoneNumber',
    },
    {
      title: (
        <span>
          {' '}
          DATE &nbsp; <img src={filterIcon} alt='' />{' '}
        </span>
      ),
      dataIndex: 'createdAt',
      render: (val) => formatDate(val),
    },
    {
      title: (
        <span>
          {' '}
          STATUS &nbsp; <img src={filterIcon} alt='' />{' '}
        </span>
      ),
      dataIndex: 'status',
    },
    {
      title: '',
      dataIndex: 'operation',
      render: (_, record) => (
        <Dropdown overlay={getMenu(record.id)} placement='bottom'>
          <MoreOutlined style={{ fontSize: '1.2rem', cursor: 'pointer' }} />
        </Dropdown>
      ),
    },
  ];

  return usersData.length ? (
    <>
      <Table
        columns={userTableColumns}
        dataSource={usersData.map((info, key) => ({
          ...info,
          key,
        }))}
        bordered={false}
        size={'middle'}
      />
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default UsersTable;
