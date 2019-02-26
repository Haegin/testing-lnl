import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './routes/Home'
import Login from './routes/Login'

const App = () => (
  <BrowserRouter>
    <>
      <Route path="/login" render={() => <Login onSubmit={console.log} />} />
      <Route path="/" exact component={Home} />
    </>
  </BrowserRouter>
)

export default App
