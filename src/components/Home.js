import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';

export default function Home(props) {
  const { content } = props;

  return (
    <Container backgroundImage={content.home.images.background.src}>
      <ImageSlider />
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
