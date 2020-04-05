import React from 'react';
import axios from 'axios';

const Login = () =>{
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [error, setError] = React.useState();

    const handleLogin = ()=> {
        console.log( username );
        console.log( password );
        const body = {
            username: username,
            password: password,
        };

        axios.post('/api/authenticate', body)
        .then((res) => {
            console.log(res.data);
        })
        .catch( () => {
            setError('Failed to authenticate');
        });
    };

    return(
    <div>
        <h1>Login</h1>
        <div>

            <input
             value= {username} 
            onChange = { (e) => setUsername(e.target.value)} 
            />
            </div>
            <div>

            <input
             value = { password } 
            onChange = { (e) => setPassword(e.target.value)}
            />
            </div>
            <div>
                <button onClick = { handleLogin }>Log In</button>
                </div>  
    </div>
    )
};
export default Login;