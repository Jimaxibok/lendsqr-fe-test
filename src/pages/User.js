import React from 'react';
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {CgArrowLongLeft} from 'react-icons/cg'
import userStar from '.././assets/images/userStar.svg'
import coloredstar from '.././assets/images/coloredstar.svg'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { formatAmount } from '../helpers';
import { formatNumber } from '../helpers';


const User = () => {
const [userData, setUserData] = useState({})
const [loading, setLoading] = useState (true)

const navigate = useNavigate()
const  {id} = useParams()
// console.log(params)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const{ data } = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
        // console.log(data);
        setUserData(data)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }

     fetchUserData()

      //eslint-disable-next-line
  }, [])

  const { accountBalance, education,
     accountNumber, email, guarantor,
      phoneNumber, 
     socials, profile
     } = userData

     const {avatar, bvn, firstName,
       gender, lastName } = profile || {}

  const { level,employmentStatus, monthlyIncome, 
    officeEmail, sector, loanRepayment, duration, 
  } = education || {}

  const { facebook, instagram, twitter} = socials || {}

  if(loading){
    return 'Loading...'
  }
    const onClick = () => {
      navigate('/users');
    }
  return <> 
        <div id='userContainer'>
          <div className="backToUsersCon">
            <CgArrowLongLeft id='backarrow' onClick={onClick}/>
            <p id='backToUsers' onClick={onClick}>Back to Users</p>
          </div>

          <div className="userStatus">
            <h2>User Details</h2>
            <div className="userButton">
              <button id='blacklistButton'>BLACKLIST USER</button>
              <button id='activateButton'>ACTIVATE USER</button>
            </div>
          </div>
        </div>
       
        <div id='generalDetails'>
          <div className="userDetails">
              <div id='useravatarcon'>
                <div id='userAvatardiv'>
                <img src={avatar} alt="" id='userAvatar'/>
                </div>
                <div id='username-userid'>
                    <h2>{firstName} {lastName} </h2>
                    <span>{accountNumber}</span>
                  </div>
              </div>
              
            
            <div id='userStars'>
                <p>User's Tier</p>
                <div id='starImg'>
                <img src={coloredstar} alt="" />
                <img src={userStar} alt="" />
                <img src={userStar} alt="" />
                </div>
            </div>

            <div className='userAccount-bankDetails'>
            <p className="accbalance">{formatAmount(accountBalance)}</p>
            <p className="acctNo-bank">9912345678/<span>Providus Bank</span></p>
            </div>

          </div>


         <div className='userDetailsList'>
          <li>General Details</li>
          <li>Documents</li>
          <li>Bank Details</li>
          <li>Loans</li> 
          <li>Savings</li>
          <li>App and System</li>
          </div>
        
        </div>

        <section id='detailsContainer'>
          <p id='pinfo'>Personal Information </p>

          <div id='personalInformation'> 
               <div>
               <h4>FULL NAME</h4>
               <p>{lastName} {firstName}</p>
               </div>

               <div>
                 <h4>PHONE NUMBER</h4>
                 <p>{phoneNumber}</p>
               </div>

               <div>
                 <h4>EMAIL ADDRESS</h4>
                 <p id='personalEmail'>{email}</p>
               </div>

               <div>
                 <h4>BVN</h4>
                 <p>{bvn}</p>
               </div>

               <div>
                 <h4>GENDER</h4>
                 <p>{gender}</p>
               </div>

               <div>
                 <h4>MARITAL STARUS</h4>
                 <p>Single</p>
               </div>

               <div>
                 <h4>CHILDREN</h4>
                 <p>None</p>
               </div>

               <div>
                 <h4>TYPE OF RESIDENCE</h4>
                 <p>Parent's Apartment</p>
               </div>
           </div>

           <div className="eduEmployment">
               <p id='eduemploy'>Education and Employment</p>

              <div id='employmentEducation'>
               <div>
                 <h4>LEVEL OF EDUCATION</h4>
                 <p>{level}</p>
               </div>
               
                <div>
                  <h4>EMPLOYMENT STATUS</h4>
                  <p>{employmentStatus}</p>
                </div>

                <div>
                  <h4>SECTION OFEMPLOYMENT</h4>
                  <p>{sector}</p>
                </div>

                <div>
                  <h4>DURATION OF EMPLOYMENT</h4>
                  <p>{duration}</p>
                </div>

                <div>
                  <h4>OFFICE EMAIL</h4>
                  <p id='personalEmail'>{officeEmail}</p>
                </div>

                <div>
                  <h4>MONTHLY INCOME</h4>
                  <p> {formatAmount(monthlyIncome?.[0])} - {formatAmount(monthlyIncome?.[1])} </p>
                </div>

                <div>
                    <h4>LOAN REPAYMENT</h4>
                    <p>{formatAmount(loanRepayment)}</p>
                </div>
               </div>
           </div>

          <div id="socails">
            <p className="socialHeader">Socials</p>
            <div id='socialMedia'>
               <div>
                 <h4>TWITTER</h4>
                 <p>{twitter}</p>
               </div>
               
                <div>
                  <h4>FACEBOOK</h4>
                  <p>{facebook}</p>
                </div>

                <div>
                  <h4>INSTAGRAM</h4>
                  <p>{instagram}</p>
                </div>
               </div>
          </div>

          <div id="guarantor">
            <p className="guarantorHeader">Guarantor</p>
            <div id='guarantorForm'>
               <div>
                 <h4>FULL NAME</h4>
                 <p>{guarantor?.firstName} {guarantor?.lastName}</p>
               </div>
               
                <div>
                  <h4>PHONE NUMBER</h4>
                  <p>{formatNumber(guarantor?.phoneNumber)}</p>
                </div>

                <div>
                  <h4>ADDRESS</h4>
                  <p>{guarantor?.address}</p>
                </div>
                <div>
                  <h4>RELATIONSHIP</h4>
                  <p> Sister</p>
                </div>
               </div>
          </div>


          <div id="guarantor2">
            <p className="guarantorHeader">Guarantor</p>
            <div id='guarantorForm2'>
            <div>
                 <h4>FULL NAME</h4>
                 <p>{guarantor?.firstName} {guarantor?.lastName}</p>
               </div>
               
                <div>
                  <h4>PHONE NUMBER</h4>
                  <p>{guarantor?.phoneNumber}</p>
                </div>

                <div>
                  <h4>ADDRESS</h4>
                  <p>{guarantor?.address}</p>
                </div>
                <div>
                  <h4>RELATIONSHIP</h4>
                  <p> Sister</p>
                </div>
               </div>
          </div>
        </section>


  </>
};

export default User;
 