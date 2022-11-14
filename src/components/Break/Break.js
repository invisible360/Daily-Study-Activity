import React from 'react';

const Break = (props) => {
    const breakTimeArr = [
        { id: 1, time: 5 },
        { id: 2, time: 10 },
        { id: 3, time: 15 },
        { id: 4, time: 20 },

    ];


    return (
        <div className='pb-10'>
            <h2 className='font-bold text-lg pb-5'>Add a Break</h2>

            <div className='grid grid-cols-2 lg:grid-cols-5 p-3 bg-base-100 rounded-lg gap-4 lg:gap-16'>
                {
                    breakTimeArr.map(time => <button onClick={() => props.breakTime(time.time)} key={time.id} className="btn btn-circle btn-warning text-xs hover:btn-info">{time.time} min</button>)
                }

            </div>
        </div>
    );
};

export default Break;