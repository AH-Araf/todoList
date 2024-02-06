
import './App.css';
import TaskList from './components/TaskList';
import qtec from '../src/images/qtec.png'

function App() {
  return (
    <div className="App">
      <div className='main-div'>
        <h1>Todo List for <span className='heading-design'>Qtec Solution Limited</span></h1>
        <img src={qtec} alt="" />
      </div>
      <TaskList />
    </div>
  );
}

export default App;
