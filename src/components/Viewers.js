import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import viewers from '../data/viewers';

export default function Viewers() {
  return (
    <Container>
      {viewers.map((viewer) => (
        <Link to={viewer.href} key={viewer.title.text}>
          <Viewer>
            <Title>
              {viewer.title.image ? (
                <img src={viewer.title.image} alt={viewer.title.text} />
              ) : (
                viewer.title.text
              )}
            </Title>
            <Background>
              {viewer.background && viewer.background.video ? (
                <video autoPlay={true} loop={true} playsInline={true}>
                  <source
                    src={viewer.background.video}
                    type="video/mp4"
                  ></source>
                </video>
              ) : (
                <img src={viewer.background.image} alt={viewer.title} />
              )}
            </Background>
          </Viewer>
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 26px 0 26px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  a {
    flex: 0 0 calc((100% - (25px * ${viewers.length - 1})) / ${viewers.length});
    margin-right: 25px;
    margin-bottom: 25px;
  }
`;

const Title = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  img {
    width: 100%;
    z-index: 10;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

const Viewer = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  border: 3px solid rgba(250, 250, 250, 0.1);
  box-shadow: rgb(0 0 0 / 70%) 0px 25px 30px -10px,
    rgb(0 0 0 / 75%) 0px 15px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 60px -15px,
      rgb(0 0 0 / 75%) 0px 30px 20px -10px;
    transform: scale(1.05);
    border-color: rgba(250, 250, 250, 0.8);

    ${Background} {
      video,
      img {
        opacity: 1;
      }
    }
  }

  &::before {
    content: '';
    display: block;
    padding-top: calc(100% / 16 * 9);
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }

  ${Background} {
    video,
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
    }
  }
`;
