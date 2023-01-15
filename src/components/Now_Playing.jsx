import React from 'react'

import { useEffect,useState } from "react";
import { useSelector} from "react-redux"


function Now_Playing() {

    const { now_playing } = useSelector((state) => state.movieData)

    const [modal, setModal] = useState({
        hover: false,
        image: null,
        title: null,
        text: null,
      });
    
      return (
        <div className="movie-row-container">
          <h2>Now Playing</h2>
          <div className="movie_container">
            {now_playing.map((el, index) => {
              console.log(el);
              if (el.vote_average > 7.5) {
                return (
                  <div
                    key={index}
                    className="movie_cart"
                    onClick={() => {
                      setModal({
                        hover: true,
                        image: el.poster_path,
                        title: el.title,
                        text: el.overview,
                      });
                    }}
                    onMouseLeave={() => {
                      setModal({ hover: false });
                    }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                      alt="image"
                    />
                  </div>
                );
              }
            })}
            {modal.hover && (
              <div className="modal">
                <div className="modal-image">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${modal.image}`}
                    alt="image"
                  />
                </div>
    
                <div className="modal-content">
                  <h2 className="title">{modal.title}</h2>
                  <p className="text">{modal.text}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      );
}

export default Now_Playing