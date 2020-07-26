import React from 'react';
import Link from 'next/link';
import { albums } from '../../config';
import { Nav, NavItemList } from './navigation.css';

export interface Props {
  className?: string;
  onNavigate: (e: React.MouseEvent | React.TouchEvent) => void;
}

const capitalise = (item: string): string => `${item.charAt(0).toUpperCase()}${item.slice(1)}`;

const AlbumLinks = (onClick): JSX.Element[] =>
  albums.map(
    (slug: string): JSX.Element => (
      <li key={slug}>
        <Link as={`/albums/${slug}`} href="/albums/[id]">
          <a onClick={onClick}>{capitalise(slug)}</a>
        </Link>
      </li>
    ),
  );

const Navigation = ({ className, onNavigate }: Props): JSX.Element => (
  <Nav className={className}>
    <NavItemList>
      <li>
        <Link href="/">
          <a onClick={onNavigate}>Featured</a>
        </Link>
      </li>
      {AlbumLinks(onNavigate)}
      <li>
        <Link href="/about">
          <a onClick={onNavigate}>About</a>
        </Link>
      </li>
    </NavItemList>
  </Nav>
);

export default Navigation;
