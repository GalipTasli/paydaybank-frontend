import axios from "axios";

export default class UserService{
    getUsers(){
        return axios.get("http://localhost:8080/api/users/getall")
    }
    addUsers(user)
    {
   
        return axios.post("http://localhost:8080/api/users/add?emailAddress="+user.emailAddress+"&name="+user.name+"&password="+user.password+"&title="+user.title)
  
        
    }
    verificationEmailandPassword(user)
    {
       
        return axios.put("http://localhost:8080/api/users/verify?emailAddress="+user.emailAddress+"&password="+user.password)
    }
    getByUserId(id)
    {
        return axios.get("http://localhost:8080/api/users/getByUserId?id="+id)
    }
    putUser(user)
    {
        return axios.put("http://localhost:8080/api/users/update?emailAddress="+user.emailAddress+"&id="+user.id+"&name="+user.name+"&password="+user.password+"&title="+user.title)
    }

}