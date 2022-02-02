import React from "react";
import useLogin from "./hooks/useLogin";
import { STAGES } from "./hooks/useSignUp";

const Login = () => {
    const { user,
        status,
        errors,
        focus,
        submitHandler,
        blurHandler,
        changeHandler
    } = useLogin();
    let isValid = Object.keys(errors).length === 0;

    // if (STAGES.COMPLETED === status && isValid) {
    //     return <div className='wrapper'><p>Congratulation you are now the part of our Community</p></div>
    // }

    return (
        <form onSubmit={submitHandler}>

            <h3>Log in</h3>
            {
                !isValid && STAGES.SUBMITTED === status && (
                    <div className='errors'>
                        <p>Please fix below mentioned errors</p>
                        <ul>
                            {
                                Object.keys(errors).map(error => <li key={error}><span className='error'>{errors[error]}</span></li>)
                            }
                        </ul>
                    </div>
                )
            }
            <br />
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={user.email} className="form-control" placeholder="Enter email" onChange={changeHandler} onBlur={blurHandler} />
                {
                    (focus.email && errors.email) ? (<span className='error'>{errors['email']}</span>) : null
                }
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={user.password} className="form-control" placeholder="Enter password" onChange={changeHandler} onBlur={blurHandler} />
                {
                    (focus.password && errors.password) ? (<span className='error'>{errors['password']}</span>) : null
                }
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" id="remember" value={user.remember} className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="remember">Remember me</label>
                </div>
            </div>

            <button type="submit" disabled={!isValid || STAGES.SUBMITTING === status} className="btn btn-dark btn-lg btn-block">Sign in</button>
            <p className="forgot-password text-right">
                Forgot password?
            </p>
        </form>
    );
}

export default Login;
