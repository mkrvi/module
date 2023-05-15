import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Dashboard() {
    const navigate = useNavigate();

    function navigateToLogin() {
        navigate('/login');
    }

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Dashboard;
