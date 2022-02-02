import { useState } from "react";
const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}
export const STAGES = {
    IDLE: 'IDLE',
    SUBMITTING: 'SUBMITTING',
    SUBMITTED: 'SUBMITTED',
    COMPLETED: 'COMPLETED',
}
export default function useSignUp() {
    const [user, setUser] = useState(initialState);
    const [focus, setFocus] = useState({});
    const [status, setStatus] = useState(STAGES.IDLE);
    const errors = getErrors();
    const isValid = Object.keys(errors).length === 0;
    const delay = (time) => {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    function getErrors() {
        let result = {};
        if (!user.firstName) result.firstName = 'First name is mandatory';
        if (!user.lastName) result.lastName = 'Last name is mandatory';
        if (!user.email) result.email = 'Email is mandatory';
        if (!user.password) result.password = 'Password is mandatory';
        return result;
    }
    async function submitHandler(e) {
        e.preventDefault();
        setStatus(STAGES.SUBMITTING);
        await delay(4000);
        if (isValid) {
            setStatus(STAGES.COMPLETED);
        } else {
            setStatus(STAGES.SUBMITTED);
        }
    }
    function changeHandler(e) {
        const { id, value } = e.target;
        setUser(user => {
            return {
                ...user,
                [id]: value
            }
        });
    }
    function blurHandler(e) {
        const { id } = e.target;
        setFocus(user => {
            return {
                ...user,
                [id]: true
            }
        });
    }
    return {
        user,
        status,
        errors,
        focus,
        isValid,
        submitHandler,
        blurHandler,
        changeHandler
    }
}
