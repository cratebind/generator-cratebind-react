import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  .title {
    margin: 0;
    width: 100%;
    padding-top: 80px;
    line-height: 1.15;
    font-size: 48px;
    text-align: center;
  }

  .description {
    text-align: center;
  }
`;

const Home = () => (
  <Container className="hero">
    <h1 className="title">React Starter Project</h1>
    <p className="description">
      To get started, edit <code>pages/index.js</code> and save to reload.
    </p>
  </Container>
);

export default Home;
