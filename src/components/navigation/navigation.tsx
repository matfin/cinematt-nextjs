import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { albums } from 'config';
import { LinkTextSt, Nav, NavItemList } from './navigation.css';

export interface Props {
  className?: string;
  onNavigate: (e: React.MouseEvent | React.TouchEvent) => void;
}

const capitalise = (item: string): string => `${item.charAt(0).toUpperCase()}${item.slice(1)}`;
const routeMatches = (currentRoute: string, asPath: string): boolean => asPath.includes(currentRoute);

const AlbumLinks = (onClick: (e: React.MouseEvent | React.TouchEvent) => void, asPath: string): JSX.Element[] =>
  albums.map(
    (albumName: string): JSX.Element => (
      <li key={albumName}>
        <Link as={`/albums/${albumName}`} href="/albums/[albumName]" passHref>
          <LinkTextSt data-testid={albumName} isActive={routeMatches(`/albums/${albumName}`, asPath)} onClick={onClick}>
            {capitalise(albumName)}
          </LinkTextSt>
        </Link>
      </li>
    ),
  );

const Navigation = ({ className, onNavigate }: Props): JSX.Element => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <Nav className={className}>
      <NavItemList>
        <li>
          <Link href="/" passHref>
            <LinkTextSt onClick={onNavigate} isActive={asPath === '/'}>
              Featured
            </LinkTextSt>
          </Link>
        </li>
        {AlbumLinks(onNavigate, asPath)}
        <li>
          <Link href="/about" passHref>
            <LinkTextSt isActive={asPath === '/about'} onClick={onNavigate}>
              About
            </LinkTextSt>
          </Link>
        </li>
      </NavItemList>
    </Nav>
  );
};

export default Navigation;
