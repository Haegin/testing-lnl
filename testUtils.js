import React from 'react'
import { render as rendar } from 'react-testing-library'
import { BrowserRouter } from 'react-router-dom'

const render = component => rendar(<BrowserRouter>{component}</BrowserRouter>)

export { render }
export * from 'react-testing-library'
