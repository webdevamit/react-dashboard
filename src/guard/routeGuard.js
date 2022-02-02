import React from 'react';
import { collection, getDocs } from "firebase/firestore/lite";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import firebaseDb from "../config/firebaseApp";
import { useUser } from "../context/userContext";

export const RouteGuard = ({ children, redirectTo }) => {
    const { user, loading } = useUser();
    if (loading) return <Spinner animation="grow" />;
    if (children.type.name === 'SignUp' || children.type.name === 'Login') {
        return user ? <Navigate to={redirectTo}></Navigate> : children;
    } else {
        return user ? children : <Navigate to={redirectTo}></Navigate>;
    }
}

export const authenticateUser = async (localUser) => {
    try {
        const querySnapshot = await getDocs(collection(firebaseDb, "users"));
        const users = querySnapshot.docs.map(user => user.data());
        const data = users.length ? users.find(user => user.email === localUser.email && user.password === localUser.password) : ''
        if (data) {
            sessionStorage.setItem("user", data);
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.error("Error adding document: ", e);
        return e;
    }
}
export const isLogged = async () => {
    try {
        const user = await sessionStorage.getItem('user');
        return user;
    } catch (e) {
        console.error("Error adding document: ", e);
        return e;
    }
}
