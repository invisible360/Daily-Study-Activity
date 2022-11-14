import React from 'react';

const QuestionAns = () => {
    return (
        <div>
            <div className='py-10'>
                <div className="text-3xl font-bold text-center">Question Answer Section</div>
                <section className='py-5'>
                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            1. how Does React Works?
                        </div>
                        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                        </div>
                    </div>
                </section>

                <section className='py-5'>
                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            2. Difference between Props and State?
                        </div>
                        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
                        </div>
                    </div>
                </section>

                <section className='py-5'>
                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            3. When we use useEffet excluding loading data in React?
                        </div>
                        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect.</p>
                        </div>
                    </div>
                </section>
            </div>

            
        </div>

    );
};

export default QuestionAns;