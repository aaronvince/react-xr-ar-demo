import { createRoot } from 'react-dom/client'
// @ts-ignore It's React
import * as React from 'react'
import { App } from './App'

//@ts-ignore
const root = createRoot(document.getElementById('root'))
root.render(<App />)
