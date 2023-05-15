import React from 'react';
import {createBrowserRouter, Navigate} from 'react-router-dom';
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../components/Form/Login";
import Register from "../components/Form/Register";
import CardList from "../components/CardList/CardList";
import Movies from "../pages/Movies/Movies";
import Movie from "../pages/Movie/Movie";
import Favorite from "../components/Favourite/Favourite";

export default function ProtectedRoute({ children }) {
    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" />;
    }
    return children;
}

export const router = createBrowserRouter([
    {
        path:'/',
        element: (
            <ProtectedRoute>
                <Dashboard />
                <Navigate to="movies" />
            </ProtectedRoute>
        ),
        children:[
            {
                path: 'movies',
                element: <Movies/>,
            },
            {
                path: 'movies/:id',
                element: <Movie/>,
            },

            {
                path: 'favourite',
                element: <Favorite/>,
            },
            {
                path: 'favourite/:id',
                element: <Movie/>
            },
            {
                path: '*',
                element: <h1>Not found</h1>,
            },

        ],
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>,
    },
    {
        path: '*',
        element: <Navigate to="dashboard" />,
    },
])