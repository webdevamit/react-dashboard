import { useState } from "react";
import { authenticateUser } from "../guard/routeGuard";
import { STAGES } from "./useSignUp";
const initialState = {
    email: '',
    password: '',
}
export default function useLogin() {
    const [user, setUser] = useState(initialState);
    const [status, setStatus] = useState(STAGES.IDLE);
    const [focus, setFocus] = useState({});
    const [errors, setErrors] = useState({});
    let isValid = Object.keys(errors).length === 0;

    async function submitHandler(e) {
        e.preventDefault();
        setStatus(STAGES.SUBMITTING);
        if (isValid) {
            authenticateUser(user).then(response => {
                if (response) {
                    setStatus(STAGES.COMPLETED);
                } else {
                    setErrors(errors => ({ ...errors, 'invalid_login': 'Invalid login credentials' }))
                    setStatus(STAGES.SUBMITTED);
                }
            });
        } else {
            setStatus(STAGES.SUBMITTED);
        }
    }
    function changeHandler(e) {
        const { id, value } = e.target;
        if (!value) setErrors(errors => ({ ...errors, [id]: `${id} is mandatory` }))
        else setErrors(errors => {
            let key = Object.keys(errors).find((err) => err === id);
            const { [key]: remove, ...rest } = errors;
            return rest;

        });
        setUser(user => {
            const { id, value } = e.target;
            return {
                ...user,
                [id]: value
            }
        });
    }
    function blurHandler(e) {
        const { id, value } = e.target;
        if (!value) setErrors(errors => ({ ...errors, [id]: `${id} is mandatory` }))
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
        submitHandler,
        blurHandler,
        changeHandler
    }
}
