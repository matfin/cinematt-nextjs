import React, { useEffect, useState } from 'react';
import { colours } from '../../styles';
import { Container, Direction, Square } from './loading.css';

interface Props {
  className?: string;
  strips?: number;
}

const Loading = ({ className, strips = 15 }: Props): JSX.Element => (
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
