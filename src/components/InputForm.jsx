import "./InputForm.css"
import {useState} from "react"
import {v4 as uuid} from "uuid"
import ErrorModal from "./ErrorModal"

const InputForm = (props) => {

    const [error, setError] = useState(false)

    const [input, setInput] = useState({
        id: "",
        username: "",
        age: ""
    })

    const handleChange = (event) => {

        const {name, value} = event.target

        setInput(prevValue => {
            return ({
                ...prevValue,
                [name]: value
            })
        })
    }

    const handleClick = () => {

        if (input.username.length === 0 || input.age.length === 0){
            setError("Must fill out both fields.")
        } else if (input.age <= 0){
            setError("Age must be greater than 0.")
        } else {
            props.newUser({
                id: uuid(),
                ...input
            })
            setInput({
                id: "",
                username: "",
                age: ""
            })
        }

    }

    const clearModal = () => {
        setError("")
        setInput({
            id: "",
            username: "",
            age: ""
        })
    }

    return(
        <div>

            {error ? <ErrorModal message= {error} clearModal = {clearModal} /> : null}

            <div className = "container form">
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="input" className="form-control" id="username" name="username" onChange={handleChange} value={input.username}/>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age (Years)</label>
                <input type="number" className="form-control" id="age" name="age" onChange={handleChange} value={input.age} />
            </div>
            <div>
                <button className = "btn btn-primary mb-3" onClick={handleClick}>Add User</button>
            </div>
            </div>

        </div>

    )
}

export default InputForm