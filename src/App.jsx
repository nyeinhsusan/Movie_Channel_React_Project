import React from 'react'
import "./App.css"
import Header from './components/Header';
import Home from "./components/Home"
import { Route,Routes } from 'react-router';
import PageNotFound from './components/PageNotFound';
import Details from './components/Details';
import Footer from './components/Footer';

const App = () => {
  return (
   <div>
 <Header />

<Routes>
<Route path='/' element={<Home/>}/>
<Route path="*" element={<PageNotFound/>}/>
<Route path="/movies/details/:movieId" element={<Details/>}/>
</Routes>
<Footer />
   </div>
  )
}

export default App
