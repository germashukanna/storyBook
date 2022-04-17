import React, {useState} from "react";

export default {
    title: "React.memo demo"
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)
        }</div>
}

const Users = React.memo(UsersSecret)

export const Exampl1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])
    const addUsers = () => {
        const newUser = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUsers}>addUser</button>
        <Counter count={counter}/>
        <Users users={users}/>

    </>
}