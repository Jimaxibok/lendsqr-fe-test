import React from 'react';
import Users from '../../assets/images/users.svg';
import ActiveUser from '../../assets/images/activeUsers.svg';
import savings from '../../assets/images/savings.svg';
import UserwithLoan from '../../assets/images/loanUsers.svg';

const SummaryCards = () => {
  return <div className='summaryCards'>
    <header className='summaryCardHeader'>
      <h1>Users</h1>
    </header>

    <div className="userCards">
        <div className="cards">
          <div className='SummaryCardImg1'>
            <img src={Users} alt=""  />
          </div>
          <p className='summaryCardName'>USERS</p>
          <p className='usersNum'>2,453</p>
          
        </div>

        <div className="cards">
          <div className='SummaryCardImg2'>
           <img src={ActiveUser} alt="" />
          </div>
          <p className='summaryCardName'>ACTIVE USERS</p>
          <p className='usersNum'>2,453</p>

        </div>

        <div className="cards">
          <div className='SummaryCardImg3'>
          <img src={UserwithLoan} alt="" />
          </div>
          <p className='summaryCardName'>USERS WITH LOANS</p>
          <p className='usersNum'>22,453</p>

        </div>

        <div className="cards">
          <div  className='SummaryCardImg4'>
          <img src={savings} alt="" />
          </div>
          <p className='summaryCardName'>USERS WITH SAVINGS</p>
          <p className='usersNum'>102,453</p>
        </div>

    </div>
  </div>
};

export default SummaryCards;
