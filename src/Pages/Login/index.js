import './index.css';
import {useNavigate} from 'react-router-dom';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import {auth, provider} from '../../Api'
import { useEffect } from 'react';
const Login=({setUserId, isAuth, setIsAuth})=>{
    let navigate= useNavigate();
    
    const handleLogin = () => {
    
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            console.log('Credential', credential, 'token', token, 'User', user);
            setIsAuth(true);
            setUserId(result.user.uid);
            localStorage.setItem("isAuth", true);
            localStorage.setItem("UserId",result.user.uid);
            navigate('/vote');
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log('Credential', credential,  'Email', email, "Error", errorCode, errorMessage)
        });
    }
    useEffect(()=>{
        if(localStorage.getItem("isAuth")){
            setIsAuth(true);
            window.location.pathname="/vote";
        }
    },[isAuth])

    return (
        <div className='Container'>
            Faça o login com sua conta google para votar
            <button onClick={handleLogin}> <img src="https://www.raqnbeauty.com/wp-content/uploads/2020/06/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" />
                <h3> Login </h3>
            </button>
        </div>
    );
}
export default Login;