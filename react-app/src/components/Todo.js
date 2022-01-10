function Todo(props){
    function deleteFunction()
    {
        console.log(props.text);
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={deleteFunction}>
                        Delete
                    </button>
                </div>
        </div>
    );           
}

export default Todo;