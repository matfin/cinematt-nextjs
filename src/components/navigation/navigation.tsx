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
        <Link as={`/albums/${albumName}`} href="/albums/[albumName]" passHref legacyBehavior>
          <LinkTextSt
            data-testid={albumName}
            aria-current={routeMatches(`/albums/${albumName}`, asPath) ? 'page' : null}
            onClick={onClick}
          >
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
          <Link href="/" passHref legacyBehavior>
            <LinkTextSt onClick={onNavigate} aria-current={asPath === '/' ? 'page' : null}>
              Featured
            </LinkTextSt>
          </Link>
        </li>
        {AlbumLinks(onNavigate, asPath)}
        <li>
          <Link href="/about" passHref legacyBehavior>
            <LinkTextSt data-testid="about" aria-current={asPath === '/about' ? 'page' : null} onClick={onNavigate}>
              About
            </LinkTextSt>
          </Link>
        </li>
      </NavItemList>
    </Nav>
  );
};

export default Navigation;
