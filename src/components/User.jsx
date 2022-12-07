import "./User.css"

const User = (props) => {
    return(
        <div className="container user">
            <p className = "user-info">{props.username + " (" + props.age + " years old)" }</p>
        </div>

    )
}

export default User