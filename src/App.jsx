import React from 'react'
import { Route, Routes } from 'react-router';
import Home from "./Page/Home"
import Layout from './Page/Layout.jsx';
import PageOneLogin from './Page/PageLogin.jsx';
import PageOneSignUp from './Page/PageSignUp.jsx';
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Layout />}>
          <Route path='/login' element={<PageOneLogin />} />
          <Route path='/signup' element={<PageOneSignUp />} />
        </Route>

      </Routes>
    </>
  )
}

export default App                