function Delmsg(props) {
    function cancelHandler() {
        props.onCancel();
    } 
    function confirmHandler() {
        props.onConfirm();
    }

    return (
        <div className="Delmsg" onClick={props.onCancel}>
        
            <p> Are you sure?</p>
            
            <button onClick={cancelHandler}>Cancel</button>
            <button onClick={confirmHandler}>Confirm</button>
        </div>
         
    );

}
export default Delmsg;