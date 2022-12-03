import Delmsg from './Delmsg';
import {useState} from 'react';
function Todo(props) {
  const [modalIsOpen, setModelIsOpen] = useState(false);

    function Deletehandler() {
      setModelIsOpen(true);
    };
    function closeModal() {
      setModelIsOpen(false);
    }
    
    return (
        <div>
            <div className="card">
      
      <h2>{props.text}</h2>
    <div className="button">
      <button onClick={Deletehandler}>Delete</button>
    </div>
    {modalIsOpen ? <Delmsg onCancel={closeModal} onConfirm={closeModal}/> : null}
    </div>
        
        
        </div>
    );
}

export default Todo;