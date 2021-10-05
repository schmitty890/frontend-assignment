import React from "react";
import logo from "../../images/logo.svg";
import styled from "styled-components";
import { MovieConsumer } from "../../contexts/movieContext";

const HeadGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  border-bottom: 1px solid #c3c3c3c3;
  padding-bottom: 30px;
`;

const Header = () => {
  return (
    <MovieConsumer>
      {({ fetchMovieBySearch }) => (
        <HeadGridContainer>
          <img src={logo} alt="Timescale" />
          <form>
            <label style={{ float: "right" }}>
              <input
                type="text"
                placeholder="Search for a movie"
                name="search"
                onChange={async (e) => {
                  const movieTitle = e.target.value;
                  const movieInfo = await fetchMovieBySearch(movieTitle);
                }}
                style={{ padding: "10px", borderRadius: "5px" }}
              />
            </label>
          </form>
        </HeadGridContainer>
      )}
    </MovieConsumer>
  );
};

export default Header;
