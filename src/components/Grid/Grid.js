import React, { useState } from "react";
import styled from "styled-components";
import { MovieConsumer } from "../../contexts/movieContext";
import Breakpoints from "../../helpers/breakpoints";
import Modal from "../../components/Modal/Modal";

const Card = styled.section`
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  height: 100%;
  font-size: 18px;
  box-shadow: 1px 1px 8px #888888;
  border-radius: 10px;
  margin: 0px 10px;
`;

const MovieRating = styled.div`
  border: 3px solid;
  background: #fff;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  position: absolute;
  margin: 10px;
`;

const MovieTitle = styled.div`
  max-width: 200px;
  margin: 0 auto;
  min-height: 50px;
`;

const MovieImage = styled.img`
  objectfit: cover;
  width: 100%;
  maxheight: 350px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;

  @media ${Breakpoints.device.tablet} {
    grid-template-columns: auto auto;
  }

  @media ${Breakpoints.device.laptop} {
    grid-template-columns: auto auto auto auto;
  }
`;

const Grid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <MovieConsumer>
      {({ nowPlaying, fetchMovieById, selectedMovieById }) => (
        <section>
          <h1>Most Recent Movies</h1>
          {nowPlaying.results ? (
            <GridContainer>
              {nowPlaying.results.map((movie, index) => (
                <Card
                  className="card"
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={async (e) => {
                    const modalInfo = await fetchMovieById(movie.id);
                    setModalOpen(true);
                  }}
                >
                  <MovieRating>
                    <span style={{ position: "relative", top: "5px" }}>
                      {movie.vote_average}
                    </span>
                  </MovieRating>
                  <MovieImage
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    style={{
                      objectFit: "cover",
                      maxHeight: "350px",
                    }}
                  />
                  <MovieTitle>{movie.title}</MovieTitle>
                </Card>
              ))}
            </GridContainer>
          ) : (
            <div>No results...</div>
          )}
          {modalOpen && (
            <Modal setOpenModal={setModalOpen} movie={selectedMovieById} />
          )}
        </section>
      )}
    </MovieConsumer>
  );
};

export default Grid;
