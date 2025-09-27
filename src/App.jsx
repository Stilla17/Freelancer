import React from 'react'
import { Route, Routes } from 'react-router';
import Home from "./Page/Home"
import Layout from './Page/Layout.jsx';
import PageOneSign from './Page/PageSign.jsx';
import PageOneLogin from './Page/PageLogin.jsx';
import SurveQuestions from './Page/SurveQuestions.jsx';
import FilterPage from './Page/FilterPage.jsx';
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Layout />}>
          <Route path='/login' element={<PageOneLogin />} />
          <Route path='/signup' element={<PageOneSign />} />
        </Route>
        {/* <Route path='/signup' element={ } /> */}
      </Routes>
    </>
  )
}

export default App                