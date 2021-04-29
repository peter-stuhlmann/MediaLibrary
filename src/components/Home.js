import React from 'react';
import styled from 'styled-components';

import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';

import categories from '../data/categories';
import useFetch from '../hooks/useFetch';

export default function Home(props) {
  const { content } = props;

  const movies = useFetch(`${process.env.REACT_APP_MOVIES_API}/movies`);

  return (
    <Container backgroundImage={content.home.images.background.src}>
      <ImageSlider />
      <Viewers />
      {categories.map((category) => {
        const type = movies?.response?.filter(
          (movie) => movie.type === category.type
        );
        return (
          <Movies key={category.title} title={category.title} movies={type} />
        );
      })}
    </Container>
  );
}

const Container = styled.main`
  min-height: calc(100vh - 70px);
  width: 100%;
  position: relative;
  top: 70px;
  padding: 15px;
  box-sizing: border-box;
  overflow-x: hidden;

  &:after {
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-attachment: fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
