import React from 'react'
// import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Starter from './components/Starter'
import About from './components/About'

export default function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Starter/>
        <About/>
      </div>
      <div>
        <Slider/>
      </div>
    </div>
  )
}

