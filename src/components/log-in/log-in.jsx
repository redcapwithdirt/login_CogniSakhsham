import './log-in.scss';
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


const defaultFormFields = {
    email: '',
    password: '',
}

const Login = () => {
    const [formfield, setFormfield] = useState(defaultFormFields)
    const { email, password } = formfield
    const resetFormField = () => {
        setFormfield(defaultFormFields)
    }


    const handlechange = (event) => {
        const { name, value } = event.target
        setFormfield({ ...formfield, [name]: value })
    }

    const handleSubmit=(event)=>{
       resetFormField(defaultFormFields)
    }
    return (
        <div className='login-outer'>
            <div className='login'>
                <div className='logo'>
                    <img className='logo-style' src={logo} alt="logo" />
                </div>
                <h3 className='login_to'>Log In to CogniSakhsham</h3>
                <h3 className='enter_email'>Enter your email and password below</h3>
                <div className='container'>

                    <form onSubmit={handleSubmit}>
                        {/* Enter your email */}
                        <div className='foremail'>
                            <label><b>EMAIL</b></label>
                            <input type="email" placeholder="Email address" onChange={handlechange} name="email" value={email} required ></input>
                        </div>


                        {/* Enter your password */}
                        <div className='forpass'>
                            <label><b>Password</b></label>
                            <a href="/">Forgot password?</a>
                            <input type="password" placeholder="Enter Password" onChange={handlechange} name="password" value={password} required></input>
                        </div>

                        {/* login button  */}
                        <div className='button-container'>
                            <button type='submit' className="butt">
                                Log in
                            </button>

                        </div>

                        {/* google sign in button */}
                        <div className='googlesignin'>
                            <p className='another_signin'>or you can log in with</p>

                            {/* google icon  */}
                            <button className="google_button" type='button'><FontAwesomeIcon className='google' icon={faGoogle} color="#9FA2B4" /></button>
                        </div>
                    </form>



                    {/* sign up  */}
                    <div className='sign-up'>
                        <h4 className='sign-up-text'>Don't have an account?</h4>
                        <button className='sign-up-button'>Sign up</button>
                    </div>

                </div>



            </div>
        </div>
    );
}

export default Login;