import React, { useEffect } from "react";
import { Card } from "flowbite-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api, api_key } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovie, selectedMovie } from "../redux/action/movies";
import { Spinner } from 'flowbite-react';
const Details = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  //console.log(movieId,api_key);

  const dispatch = useDispatch();

  const movieDetail = async () => {
    const res = await api.get(`/movie/${movieId}?api_key=${api_key}`);
    console.log(res.data);
    dispatch(selectedMovie(res.data));
  };

  useEffect(() => {
   if(movieId){
    movieDetail();
   }
   return()=>dispatch(removeSelectedMovie({}))
  }, []);





  let movie = useSelector((state) => state.movies.movie);
  console.log(movie);
  return (
    <div className="container mx-auto ">
     <div className="">
      <span className="my-2" onClick={()=>navigate("/")}>
      <i class="fa-solid fa-arrow-left"></i>Back
      </span>
     </div>
      {JSON.stringify(movie) == "{}" ? (
           <Spinner color="info" aria-label="Info spinner example" />
      ) : (
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>{movie.title}</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>{movie.overview}</p>
          </p>
          <div className="">
            <span className="bg-gray-500 text-white p-3 rouned-xl">
              <i className="fa-solid fa-star"></i>
              {movie.vote_average}
            </span>
            <span className="ms-3 bg-gray-500 text-white p-3 rouned-xl">
              {" "}
              <i class="fa-solid fa-calendar-days me-2"></i>
              {movie.release_date}
            </span>
            <span className="ms-3 bg-gray-500 text-white p-3 rouned-xl">
              {" "}
              <i class="fa-solid fa-user"></i>
              {movie.vote_count}
            </span>
            <span className='ms-3 bg-gray-500 text-white p-3 rouned-xl'> <i class="fa-solid fa-globe"></i>{movie.production_countries[0].name}</span>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Details;
