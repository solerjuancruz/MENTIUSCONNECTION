import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from '../components/Login';
import Home from '../components/Home';
import Time from '../components/times/Time';
import { Header } from '../components/layouts/Header';
import DbMentius from '../components/dbMentius/DbMentius';
import { Movistar } from '../components/movistar/Movistar';
import Portabilidad from '../components/movistar/Portabilidad';
import Upgrade from '../components/movistar/Upgrade';
import Prepost from '../components/movistar/Prepost';
import Fija from '../components/movistar/Fija';
import LineaNueva from '../components/movistar/LineaNueva';
import Phoenix from '../components/movistar/Phoenix';
import Rechazos from '../components/movistar/Rechazos';
import Cobertura from '../components/movistar/Cobertura';
import AltoRiesgo from '../components/movistar/AltoRiesgo';
import CreatePlan from '../components/movistar/CreatePlan';
import OneToOne from '../components/oneToOne/OneToOne';

export default function MisRutas() {
  return (
    <BrowserRouter>
    {/* Contenido central */}
    <section className='content'>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/time' element={<Time/>}/>
        <Route path='/db-mentius' element={<DbMentius/>}/>

        {/* Movistar  */}

        <Route path='/movistar' element={<Movistar/>}/>
        <Route path='/portabilidad' element={<Portabilidad/>} />
        <Route path='/upgrade' element={<Upgrade/>}/>
        <Route path='/prepost' element={<Prepost/>}/>
        <Route path='/fija' element={<Fija/>}/>
        <Route path='/linea-nueva' element={<LineaNueva/>}/>
        <Route path='/phoenix' element={<Phoenix/>}/>
        <Route path='/rechazos' element={<Rechazos/>}/>
        <Route path='/cobertura' element={<Cobertura/>}/>
        <Route path='/alto-riesgo' element={<AltoRiesgo/>}/>
        <Route path='/new-plan' element={<CreatePlan/>}/>
          
        {/* One to One */}

        <Route path='/one-to-one' element={<OneToOne/>}/>

      </Routes>
    </section>
  </BrowserRouter>
  )
}