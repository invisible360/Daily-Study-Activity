import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import pp from '../../images/inv.jpg'

const Profile = () => {
    return (
        <div className='py-5'>
            <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-10 lg:w-14 rounded-full">
                        <img src={pp} alt="" />
                    </div>
                </div>
                <div className='flex flex-col px-2 lg:px-5'>
                    <h2 className='font-bold text-xs lg:text-lg'>Zakir Hossain</h2>
                    <div className='flex items-center'>
                        <FontAwesomeIcon style={{ fontSize: '13px' }} icon={faMapLocationDot} />
                        <p style={{ fontSize: '10px' }} className='pl-1 text-xs lg:text-sm'>Dhaka,Bangladesh</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between my-10 p-5 bg-base-100 rounded-lg'>
                <div className='flex flex-col items-center justify-center pb-3 lg:pb-0'>
                    <h2 className='font-semibold text-sm'>93%</h2>
                    <p className='text-xs'>Quiz</p>
                </div>
                <div className='flex flex-col items-center pb-5 lg:pb-0'>
                    <h2 className='font-semibold text-sm'>250 Hours</h2>
                    <p className='text-xs'>Video Duration</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='font-semibold text-sm'>59.71</h2>
                    <p className='text-xs'>Assignment</p>
                </div>
            </div>

        </div>
    );
};

export default Profile;