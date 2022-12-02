// import Delmsg from './Delmsg';
function Todo(props) {

    function Deletehandler() {

       alert('clicked');

        
    };
    return (
        <div>
            <div className="card">
      
      <h2>{props.text}</h2>
    <div className="button">
      <button onClick={Deletehandler}>Delete</button>
    </div>
    </div>
        
        
        </div>
    );
}

export default Todo;