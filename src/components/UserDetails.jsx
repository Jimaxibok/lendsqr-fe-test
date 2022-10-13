import {  Modal } from 'antd';
import React, { useState } from 'react';



const UserDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = (e) => {
        e.preventDefault()
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
        <button type="" onClick={showModal} id='modal-button' style={{fontSize: '12px'}}>
          ORGANIZATION
        </button>
        <Modal  open={isModalOpen} onCancel={handleCancel} className='modalStyle' style={{backgroundColor: ''}}
          okButtonProps={{
          children: "Custom Filter"
        }}
          cancelButtonProps={{
          children: "Custom Reset"
        }}
          okText="Filter"
          cancelText="Reset"
          footer={null}
        >
            <form className='modal-div'>
          <div className='organization'>
            <label htmlFor="" className='organization-label'> Organization</label>
            <br />
            <select name="cars" id="cars" className='organization-input'>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            </select>
          </div>

          <div className='organization'>
            <label htmlFor="" className='organization-label'> Username</label>
            <br />
            <input type="text"  id='organ-username'  name='Organization' className='organization-input' />
          </div>

          <div className='organization'>
            <label htmlFor="" className='organization-label'> Email</label>
            <br />
            <input type="email"  id='organ-email' name='Organization' className='organization-input' />
          </div>

          <div className='organization'>
            <label htmlFor="" className='organization-label'>Date</label>
            <br />
            <input type="date"  name='Organization' className='organization-input' />
          </div>

          <div className='organization'>
            <label htmlFor="" className='organization-label'>Phone Number</label>
            <br />
            <input type="number"  name='Organization' className='organization-input' />
          </div>

          <div className='organization'>
            <label htmlFor="" className='organization-label'>Status</label>
            <br />
            <select name="cars" id="cars" className='organization-input'>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            </select>
          </div>

          <div className='resFilBnt'>
             <button id='reset-btn'>Reset</button> 
             <button id='filter-btn' onOk={handleOk} >Filter</button>
         </div>
      </form>
        </Modal>
      </>
    )
}

export default UserDetails
