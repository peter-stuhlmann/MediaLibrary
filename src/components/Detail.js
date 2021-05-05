import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import useFetch from '../hooks/useFetch';
import durationCompiler from '../helpers/durationCompiler';
import { PlayIcon } from '../assets/icons';

export default function Detail() {
  let { title } = useParams();

  const movie = useFetch(`${process.env.REACT_APP_MOVIES_API}/movies/${title}`);

  return movie?.response ? (
    <Container>
      <Background>
        <img src={movie.response.backgroundImg} alt={movie.response.title} />
        <div></div>
      </Background>
      <TitleImgContainer>
        <TitleImg src={movie.response.titleImg} alt={movie.response.title} />
      </TitleImgContainer>
      <Control>
        <Button playMovie>
          <PlayIcon />
          Play
        </Button>
        <Button playTrailer>
          <PlayIcon />
          Trailer
        </Button>
        <Button title="Add to watchlist" addToWatchlist>
          <span></span>
          <span></span>
        </Button>
      </Control>
      <MetaData>
        {movie.response.year && <span>{movie.response.year}</span>}
        {movie.response.duration && (
          <span>{durationCompiler(movie.response.duration)}</span>
        )}
        {movie.response.seasons && <span>{movie.response.seasons}</span>}
        {movie.response.genre && <span>{movie.response.genre.join(', ')}</span>}
      </MetaData>
      <Description>{movie.response.description}</Description>
    </Container>
  ) : (
    <Loading>Loading...</Loading>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 25px;
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 70px;

  img {
    width: 100vw;
  }

  div {
    background-image: radial-gradient(
      farthest-side at 75% 20%,
      transparent,
      rgb(25, 30, 40)
    );
    position: absolute;
    inset: 0px;
  }
`;

const TitleImgContainer = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 25px;
  width: 100%;
  position: relative;
`;

const TitleImg = styled.img`
  width: 35vw;
  max-width: 600px;
  min-width: 200px;
`;

const Control = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const Button = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 25px;
  height: 55px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1.6px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgb(250, 250, 250);
  border: none;
  font-weight: bold;
  transition: all 0.2s ease-in-out 0s;

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
  }

  svg {
    width: 32px;
  }

  ${(props) =>
    props.playMovie &&
    `
    border-radius: 4px;

    &:hover {
      background-color: rgb(200, 200, 200);
    }
  `}

  ${(props) =>
    props.playTrailer &&
    `
    border: 1px solid #fff;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;

    &:hover {
      background: rgba(250, 250, 250, 0.4);
      border: 1px solid transparent;
    }

    svg {
      fill: #fff;
      transition: all 0.2s ease-in-out 0s;
    }

    &:hover {
      color: #000;

      svg {
        fill: #000;
      }
    }
  `}

  ${(props) =>
    props.addToWatchlist &&
    `
    border-radius: 50%;
    padding: 0;
    height: 45px;
    width: 45px;
    border: 2px solid rgb(250, 250, 250);
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease-out 0s;

    &:hover {
      background-color: rgb(250, 250, 250);

      span {
        background-color: #000;
      }
    }

    span {
      background-color: rgb(250, 250, 250);

      &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
      }

      &:nth-child(2) {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
      }
    }   
  `}
`;

const MetaData = styled.div`
  font-size: 15px;
  position: relative;

  span {
    &:after {
      content: ' • ';
    }

    &:last-child {
      &:after {
        content: '';
      }
    }
  }
`;

const Description = styled.p`
  line-height: 1.4;
  font-size: 20px;
  padding: 15px 0px;
  margin: 0;
  color: rgb(250, 250, 250);
  max-width: 875px;
  position: relative;
`;

const Loading = styled.p`
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
`;
