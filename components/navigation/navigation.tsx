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
    (slug: string): JSX.Element => (
      <li key={slug}>
        <Link as={`/albums/${slug}`} href="/albums/[slug]">
          <LinkTextSt data-testid={slug} isActive={routeMatches(`/albums/${slug}`, asPath)} onClick={onClick}>
            {capitalise(slug)}
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
          <Link href="/">
            <LinkTextSt onClick={onNavigate} isActive={asPath === '/'}>
              Featured
            </LinkTextSt>
          </Link>
        </li>
        {AlbumLinks(onNavigate, asPath)}
        <li>
          <Link href="/about">
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
