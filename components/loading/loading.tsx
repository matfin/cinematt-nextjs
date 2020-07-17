import React from 'react';
import { Container, Direction, Square } from './loading.css';

interface Props {
  className?: string;
}

const Loading = ({ className }: Props): JSX.Element => (
  <Container className={className}>
    <Square direction={Direction.UP} />
    <Square direction={Direction.DOWN} />
    <Square direction={Direction.UP} />
    <Square direction={Direction.DOWN} />
    <Square direction={Direction.UP} />
    <Square direction={Direction.DOWN} />
  </Container>
);

export default Loading;
