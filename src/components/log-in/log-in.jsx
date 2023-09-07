import './log-in.scss';
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Login = () => {
    return (
        <div className='login-outer'>
            <div className='login'>
                <div className='logo'>
                    <img className='logo-style' src={logo} alt="logo" />
                </div>
                <h3 className='login_to'>Log In to CogniSakhsham</h3>
                <h3 className='enter_email'>Enter your email and password below</h3>
                <div className='container'>

                    {/* Enter your email */}
                    <div className='foremail'>
                        <label for="uname"><b>EMAIL</b></label>
                        <input type="text" placeholder="Email address" name="uname" required></input>
                    </div>


                    {/* Enter your password */}
                    <div className='forpass'>
                        <label for="psw"><b>Password</b></label>
                        <a href="/">Forgot password?</a>
                        <input type="password" placeholder="Enter Password" name="psw" required></input>
                    </div>

                    {/* login button  */}
                    <div className='button-container'>
                        <button className="butt">
                            Log in
                        </button>

                    </div>

                    {/* google sign in button */}
                    <div className='googlesignin'>
                        <p className='another_signin'>or you can log in with</p>

                        {/* google icon  */}
                        <button className="google_button" type='button'><FontAwesomeIcon className='google' icon={faGoogle} color="#9FA2B4" /></button>
                    </div>

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