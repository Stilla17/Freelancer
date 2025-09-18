import React from 'react'
import { Route, Routes } from 'react-router';
import Home from "./Page/Home"
import Layout from './Page/Layout.jsx';
import PageOneSign from './Page/PageOneSign.jsx';
import PageOneLogin from './Page/PageOneLogin.jsx';
import SurveQuestions from './Page/SurveQuestions.jsx';
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Layout />}>
          <Route path='/login' element={<PageOneLogin />} />
          <Route path='/signup' element={<PageOneSign />} />
          <Route path='/signup/:step' element={<SurveQuestions />} />
        </Route>
        {/* <Route path='/signup' element={ } /> */}

      </Routes>
    </>
  )
}

export default App