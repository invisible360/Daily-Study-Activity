import React, { useEffect, useState } from 'react';
import Activity from './Activity';

const Main = (props) => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    /* const timeAdded = (activity) => {
        console.log(activity);
    } */
    const {timeAddingHandler} = props;

    return (
        <main className='lg:col-span-3 mx-auto w-[90%]'>
            <header>
                <div className='flex items-center flex-col lg:flex-row pt-10'>
                    <img className='w-1/2 lg:w-1/12' src="https://chipngo.org/wp-content/uploads/2019/06/education-icon.png" alt="" />
                    <h1 className='text-xs lg:text-4xl font-bold text-gray-600 pl-2 pt-3 lg:pt-0'>DAILY-STUDY-ACTIVITY</h1>
                </div>
                <h3 className='text-lg lg:text-3xl font-semibold py-10 text-center'>Select today's Practice</h3>
            </header>

            {/* card section */}
            <section className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    activities.map(activity => <Activity 
                        activity={activity} 
                        key={activity.id}
                        timeAddingHandler = {timeAddingHandler}
                        ></Activity>)
                }

            </section>

        </main>
    );
};

export default Main;