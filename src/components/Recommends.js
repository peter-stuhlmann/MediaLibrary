import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import recommends from '../data/recommends';

export default function Recommends(props) {
  const { title } = props;

  return (
    <Container>
      <h3>{title}</h3>
      <List>
        {recommends.map((recommend) => (
          <ListItem>
            <Link to={recommend.href}>
              <img src={recommend.image} alt={recommend.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  padding: 25px;
`;

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  flex: 0 0 calc(25% - 18.75px);
  margin-right: 25px;
  box-shadow: rgb(0 0 0 / 70%) 0px 25px 30px -10px,
    rgb(0 0 0 / 75%) 0px 15px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
  border: 3px solid rgba(250, 250, 250, 0.1);
  border-radius: 10px;
  box-sizing: border-box;

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
