import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';

export default function Movies(props) {
  const { title, movies } = props;

  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Container>
      <h3>{title}</h3>
      <Carousel {...settings}>
        {movies?.map((movie) => (
          <ListItem>
            <Link to={movie.href}>
              {movies ? (
                <img src={movie.cardImg} alt={movie.title} />
              ) : (
                <img src="" alt="" />
              )}
            </Link>
          </ListItem>
        ))}
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  padding: 25px;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  .slick-list {
    overflow: initial;
    margin: 0 -12.5px;

    @media (max-width: 480px) {
      margin: 0 -8px;
    }
  }

  .slick-slide > div {
    margin: 0 12.5px;

    @media (max-width: 480px) {
      margin: 0 8px;
    }
  }

  .slick-prev {
    width: 40px;
    left: -40px;

    @media (max-width: 480px) {
      width: 35px;
      left: -17.5px;
    }

    &:before {
      font-size: 35px;

      @media (max-width: 480px) {
        font-size: 25px;
      }
    }
  }

  .slick-next {
    width: 40px;
    right: -40px;

    @media (max-width: 480px) {
      width: 35px;
      right: -17.5px;
    }

    &:before {
      font-size: 35px;

      @media (max-width: 480px) {
        font-size: 25px;
      }
    }
  }
`;

const ListItem = styled.li`
  flex: 0 0 calc(25% - 18.75px);
  box-shadow: rgb(0 0 0 / 70%) 0px 25px 30px -10px,
    rgb(0 0 0 / 75%) 0px 15px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
  border: 3px solid rgba(250, 250, 250, 0.1);
  border-radius: 10px;
  box-sizing: border-box;

  button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  &.slick-active button:before {
    color: #fff;
  }

  img {
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 60px -15px,
      rgb(0 0 0 / 70%) 0px 30px 20px -10px;
    transform: scale(1.05);
    border-color: rgba(250, 250, 250, 0.8);
  }
`;
