const ModeDoc = () => {

    function lightMode(){
        document.body.style.color = "black"
        document.body.style.backgroundColor = "white"
    }
    function darkMode(){
        document.body.style.color = "white"
        document.body.style.backgroundColor = "black"
    }

    return (
        <div>
            <button className="btn btn-light" onClick={lightMode}>Light Mode</button>&nbsp;
            <button className="btn btn-dark" onClick={darkMode}>Dark Mode</button>
        </div>
    );
}

export default ModeDoc