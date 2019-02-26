import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './routes/Home'
import Login from './routes/Login'

const App = () => (
  <BrowserRouter>
    <>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </>
  </BrowserRouter>
)

export default App
