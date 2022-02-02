import React from 'react';
import './App.css';
import useSignUp, { STAGES } from './hooks/useSignUp';

const SignUp = () => {
    const { user,
        status,
        errors,
        focus,
        isValid,
        submitHandler,
        blurHandler,
        changeHandler
    } = useSignUp();

    if (STAGES.COMPLETED === status) {
        return <div className='wrapper'><p>Congratulation you are now the part of our Community</p></div>
    }
    return (
        <form onSubmit={submitHandler}>
            <h3>Register</h3>
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
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" value={user.firstName} className="form-control" placeholder="First name" onChange={changeHandler} onBlur={blurHandler} />
                {
                    ((STAGES.SUBMITTED === status || focus.firstName) && errors.firstName) ? (<span className='error'>{errors['firstName']}</span>) : null
                }
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" value={user.lastName} className="form-control" placeholder="Last name" onChange={changeHandler} onBlur={blurHandler} />
                {
                    ((STAGES.SUBMITTED === status || focus.lastName) && errors.lastName) && (<span className='error'>{errors['lastName']}</span>)
                }
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={user.email} className="form-control" placeholder="Enter email" onChange={changeHandler} onBlur={blurHandler} />
                {
                    ((STAGES.SUBMITTED === status || focus.email) && errors.email) && (<span className='error'>{errors['email']}</span>)
                }
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={user.password} className="form-control" placeholder="Enter password" onChange={changeHandler} onBlur={blurHandler} />
                {
                    ((STAGES.SUBMITTED === status || focus.password) && errors.password) && <span className='error'>{errors['password']}</span>
                }
            </div>

            <button type="submit" disabled={!isValid || STAGES.SUBMITTING === status} className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right">
                Already registered log in?
            </p>
        </form>
    );
}

export default SignUp;
