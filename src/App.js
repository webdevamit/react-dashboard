import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import { RouteGuard } from './guard/routeGuard';
import Dashboard from './Dashboard';
import Header from './Header';

const App = () => {
    return (
        <div className="App">
            <Header></Header>
            <div className="outer">
                <div className="inner">
                    <Routes>
                        <Route exact path='/' element={
                            <RouteGuard redirectTo={'/sign-in'}>
                                <Dashboard></Dashboard>
                            </RouteGuard>}
                        />
                        <Route path="/sign-in" element={
                            <RouteGuard redirectTo={'/'}>
                                <Login></Login>
                            </RouteGuard>}
                        />
                        <Route path="/sign-up" element={
                            <RouteGuard redirectTo={'/'}>
                                <SignUp></SignUp>
                            </RouteGuard>}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
