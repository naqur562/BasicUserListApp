import User from "./User"

const UserList = (props) => {
    return(
        props.allUsers.map(x => {
            return(
                <User
                    key = {x.id}
                    id = {x.id}
                    username = {x.username}
                    age = {x.age}
                />
            )
        })
    )
}

export default UserList