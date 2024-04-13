import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './views/login/Login'
import Flores from './views/flores/Flores'
import Manage from './views/manage/Manage'
import Flor from './views/flores/flor/Flor'

function Main() {
  return (
    <div>
        <Header />
        <Routes>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/flores' element={<Flores />} ></Route>
            <Route path='/flores/:id' element={<Flor />} ></Route>
            <Route path='/manage' element={<Manage />} ></Route>
            <Route path='/manage/:id' element={<Manage />} ></Route>
            <Route path='*' element={<Login />} ></Route>

        </Routes>
    </div>
  )
}

export default Main