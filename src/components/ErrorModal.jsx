import "./ErrorModal.css"

const ErrorModal = (props) => {
    return(
        <div>
            <div className= "backdrop" />
            <div className = "container error-modal">
                <h1>{props.message}</h1>
                <button className="btn btn-primary" onClick = {props.clearModal}>Go Back</button>
            </div>
        </div>

    )
}

export default ErrorModal