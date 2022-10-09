import { Table } from 'antd';
import axios from 'axios';
import filterIcon from '../../assets/images/filter-icon.svg';
import { useEffect, useState } from 'react';

const UsersTable = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
      } catch (error) {
        console.log(error);
      }
      const { data } = await axios.get(
        'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
      );
      setUsersData(data);
    };

    getUsers();
    //eslint-disable-next-line
  }, []);

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
  ];

  return usersData.length ? (
    <>
      <Table
        columns={userTableColumns}
        dataSource={usersData.map((info, key) => ({
          ...info,
          key,
        }))}
        pagination={false}
        bordered={false}
        size={'small'}
      />
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default UsersTable;
