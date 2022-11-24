import {useEffect, useState} from "react";
import network from "../network";

export default function ViewComments(){

    let [user, setUsers] = useState()
    useEffect(() => {
        fetch(`https://${network.ip}/api/admin/users`).then(response => response.json()).then(response => {
            setUsers(response.map( user => <option key={user.id} value={user.id}>{user.email}</option>))
        })
    },[])
    return <>

        <select name={"user"}>
            <option value={0} key={0}>Sin seleccionar</option>
            {user}
        </select>
    </>
}
