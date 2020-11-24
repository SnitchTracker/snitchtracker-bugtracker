import axios from 'axios';

export default class ApiUser {

    async validarLoginUser(data) {
        
        let {password, email} = data;
        
        let authentication = await axios.post('http://127.0.0.1:4000/users/authenticate', {password, email});

        return authentication;
            
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: JSON.stringify(data),
        //     redirect: 'follow'
        // };

        //     fetch("http://127.0.0.1:4000/users/authenticate", requestOptions)
        //     console.log(data)
        //         .then(response => res(response.json()))
        //         .catch(err => error(err));
        // });
    }

    GetUser() {
        return JSON.parse(localStorage.getItem('token'));
    }

    async GetAllUsers() {

        let authentication = await axios('http://localhost:4000/users')
        
        return authentication
    }

    async GetTicket() {

        let authentication = await axios('http://127.0.0.1:4000/ticket')

        return authentication
    }
}
