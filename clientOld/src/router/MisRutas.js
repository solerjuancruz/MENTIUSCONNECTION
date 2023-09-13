import React from 'react';
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import Login from "../components/Login";
import Inicio from '../components/Inicio';
import Create from '../components/users/Create';
import Users from '../components/users/Users';
import { indexMovistar } from '../components/movistar/indexMovistar';
import { Times } from '../components/time/Times';

export default function MisRutas() {
  return (
    <BrowserRouter>
        {/* Contenido central */}
        <section className='content'>
            <Routes>
                <Route path='/' element={<Navigate to="/login"/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Inicio/>}/>
                <Route path='/create-user' element={<Create/>}/>
                <Route path='/users' element={<Users/>}/>

                {/* Tiempos */}

                <Route path='/time' element={<Times/>}/>
                  
                  {/* Movistar */}
                
                <Route path='/movistar' element={<indexMovistar/>}/>

                <Route path='*' element={
                  <h1 className='heading'>Error 404</h1>
                }/>
            </Routes>
        </section>
    </BrowserRouter>
  )
}
