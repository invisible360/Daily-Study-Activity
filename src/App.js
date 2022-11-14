import { useState } from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import QuestionAns from './components/QuestionAnswer/QuestionAns';

function App() {
  const [activity, setActivity] = useState(0);

  const timeAdded = (time) => {
    const newTime = time + activity;
    setActivity(newTime);
  }

  return (
    <div className="App">
      <section className='grid grid-cols-2 lg:grid-cols-4'>
        <Main timeAddingHandler={timeAdded}></Main>
        <Aside newActivity={activity}></Aside>
      </section>
      <QuestionAns></QuestionAns>
    </div>
  );
}

export default App;
