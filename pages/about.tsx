import React from 'react';
import Layout from 'components/layout/layout';
import Content from 'assets/pages/about.md';
import { Container } from 'styles/pages/about.css';

const About = (): JSX.Element => (
  <Layout>
    <Container>
      <Content />
    </Container>
  </Layout>
);

export default About;
