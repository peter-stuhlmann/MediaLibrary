import React from 'react';
import styled from 'styled-components';

export default function Start(props) {
  const { content } = props;

  return (
    <Container backgroundImage={content.start.images.background.src}>
      <Content>
        <Image
          src={content.start.images.top.src}
          alt={content.start.images.top.alt}
        />
        <Button>{content.start.button}</Button>
        <Description>{content.start.description}</Description>
        <Image
          src={content.start.images.bottom.src}
          alt={content.start.images.bottom.src}
        />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;

const Content = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 20px;
  width: 100vw;
  max-width: 600px;
`;

const Image = styled.img`
  max-width: 100%;
  transition: opacity 0.2s ease-out;
`;

const Button = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  padding: 17px;
  margin-top: 12px;
  background-color: #0063e5;
  color: #fff;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: 0.07s;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 12px;
  margin: 25px 0;
  letter-spacing: 0.7px;
  line-height: 1.5;
  color: #f4f4f4;
`;
