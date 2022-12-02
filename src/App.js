import Todo from './components/Todo';
// import Delmsg from './components/Delmsg';
function App() {
  return (
    <div>
      <h1>My toDo's</h1>
      {/* <Delmsg/> */}
      <Todo text='learn react'/>
      <Todo text='master react'/>
      <Todo text='master react again'/>
      <Todo text="paashaas"/>



    </div>
  );
};

export default App;
