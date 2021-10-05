import React from "react";
import { MovieConsumer } from "../../contexts/movieContext";
import styled from "styled-components";
import moment from "moment";

const HeaderModalContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const BodyModalContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  font-size: 12px;
`;

const ReleaseDate = styled.div`
  padding-bottom: 20px;
`;

const Overview = styled.div`
  padding-bottom: 20px;
`;

const Rating = styled.div``;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.5);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  justify-self: start;
`;

const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

function Modal({ setOpenModal }) {
  return (
    <MovieConsumer>
      {({ selectedMovieById }) => (
        <ModalBackground>
          <ModalContainer>
            <HeaderModalContainer>
              <Title>
                <h1>{selectedMovieById.title}</h1>
              </Title>
              <TitleCloseBtn>
                <Button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  X
                </Button>
              </TitleCloseBtn>
            </HeaderModalContainer>

            <BodyModalContainer className="body">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${selectedMovieById.poster_path}`}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  paddingLeft: "20px",
                }}
              >
                <ReleaseDate>
                  <strong>Release date:</strong>
                  {moment(selectedMovieById.release_date).format(
                    "MMM DD, YYYY"
                  )}
                </ReleaseDate>
                <Overview>{selectedMovieById.overview}</Overview>
                <Rating>
                  <strong>{selectedMovieById.vote_average}</strong> / 10 (
                  {selectedMovieById.vote_count} total votes)
                </Rating>
              </div>
            </BodyModalContainer>
          </ModalContainer>
        </ModalBackground>
      )}
    </MovieConsumer>
  );
}

export default Modal;
