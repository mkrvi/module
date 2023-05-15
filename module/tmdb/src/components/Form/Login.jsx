import React from 'react';
import Button from '@mui/material/Button';
import FormInput from './UI/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {loginSchema} from "../../data/schema";
import {Link, useNavigate} from "react-router-dom";
import {Box, Paper} from "@mui/material";


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const navigate = useNavigate();

    function onSubmit() {
        localStorage.setItem('token', 'some-token');
        navigate('/movies');
    }

    function navigateToRegister() {
        navigate('/register');
    }

    return (
        <Box sx={{height:'100vh'}}>
            <Paper sx={{
                width: '400px', position: 'absolute', top: '50%',
                left: '50%', padding: '40px', transform: 'translate(-50%, -50%)',
                // boxSizing: 'border-box',
                // boxShadow: '0 15px 25px rgba(0, 0, 0, 0.6)',
                borderRadius: '12px'
            }}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login Form</h2>
                    <FormInput
                        label="Username"
                        {...register('username')}
                        type="text"
                    />
                    <p>{errors.username?.message}</p>
                    <FormInput
                        label="Password"
                        {...register('password')}
                        type="password"
                        sx={{mb: 3}}
                    />
                    <p>{errors.password?.message}</p>
                    <Button variant="contained" sx={{backgroundColor:'#00ffff', color: '#25282B'}} onClick={navigateToRegister}>
                        Sign Up
                    </Button>
                    <Button variant="contained" sx={{backgroundColor:'#00ffff', color: '#25282B'}} type="submit">
                        Login
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;
