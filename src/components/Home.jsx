import React, { useEffect } from 'react'
import Movies from './Movies'
import { api, api_key } from '../api/api'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../redux/action/movies'

const Home = () => {
const dispatch = useDispatch()
  const getMovies= async()=>{
const res = await api.get(`/movie/popular?api_key=${api_key}`)
//console.log(res.data.results);//that is testing for res how to data store
dispatch(fetchMovies(res.data.results))
  }
useEffect(()=>{
  getMovies();
},[])
  return (
    <div>
         <Movies/>
     
    </div>
  )
}

export default Home
