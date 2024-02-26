import React, { useRef } from 'react'
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { TextInput } from 'flowbite-react';
import { api,api_key } from '../api/api';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/action/movies';
// index.js or App.js
const Header = () => {
const movieName = useRef('')
const dispatch = useDispatch();
  const searchMovie = async()=>{
  
    if(movieName.current.value !==''){
  const res = await api.get(`/search/movie?query=${movieName.current.value}&api_key=${api_key}`)
  //console.log(res.data.results);
  dispatch(fetchMovies(res.data.results))
    }
  }
  return (
    <div>
      <Navbar fluid rounded>
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
 <Link to="/">
 <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Lana Movie Channel</span>
 </Link>
     <div className='flex md:order-2 '>
      <form className='flex justify-center items-center me-3'>
     <TextInput  placeholder="Search......." ref={movieName} className='me-3'/>
     <Button color="dark" onClick={()=>searchMovie()}>Search</Button>
      </form>
      </div>
    </Navbar>
    </div>
  )
};

export default Header
