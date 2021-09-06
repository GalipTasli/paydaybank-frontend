import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import UserService from '../services/userService';


export default function Deleteuser() {
    let {id} = useParams();

    useEffect(()=>{
        let userService = new UserService()
        userService.deleteUser(id)
    },[])
    return (
        <div>
            <h1>Silme işlemi başarılı</h1>
        </div>
    )
}

