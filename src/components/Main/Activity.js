import { useState } from "react";

const Activity = (props) => {
    // console.log(props);
    const { picture, name, time } = props.activity;
    const { timeAddingHandler } = props;
    // console.log(timeAdded);

    /* let [state, setState] = useState('Add to List');

    const added = () => setState ('Item Added'); */
    const [cond, setCond] = useState(false);
    const [state, setState] = useState('Item Added');
    const [count, SetCount] = useState(1);


    return (
        <div>
            <div className="card bg-base-100 drop-shadow-2xl h-full">
                <figure className="px-3 pt-3">
                    <img src={picture} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Time Spend: {time} min</p>
                    <div className="card-actions">
                        {/* <button onClick={added} className="btn btn-md">{state}</button> */}
                        {/* <button onClick={()=> timeAddingHandler(time)} className="btn btn-md">Add to List</button> */}

                        {/* Toggling */}
                        <div onClick={() => setCond(true)}>
                            {
                                cond ? <button onClick={() => {
                                    timeAddingHandler(time);
                                    // setState('Item Added');
                                    SetCount(count + 1);
                                }} className="btn btn-md">{state} {count}</button> : <button onClick={() => timeAddingHandler(time)} className="btn btn-md">Add to List</button>
                            }
                        </div>


                        {/* <button onClick={() => {
                            timeAddingHandler(time);
                            setState('Item Added');
                            SetCount(count + 1);
                        }} className="btn btn-md">{state} {count} </button> */}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;