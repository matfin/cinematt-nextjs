import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BackLink, BackButton, Button, Container, Title } from './header.css';

export interface Props {
  className?: string;
  navRevealed: boolean;
  onMenuButtonClick: (e: React.MouseEvent | React.TouchEvent) => void;
  onTitleClick: (e: React.MouseEvent | React.TouchEvent) => void;
}

const Header = ({ className, navRevealed, onMenuButtonClick, onTitleClick }: Props): JSX.Element => {
  const {
    query: { public_id, albumName },
  } = useRouter();

  return (
    <Container className={className}>
      {public_id ? (
        <Link href="/albums/[albumName]" as={`/albums/${albumName}`} passHref>
          <BackLink>
            <BackButton />
          </BackLink>
        </Link>
      ) : (
        <Link href="/">
          <Title data-testid="title" onClick={onTitleClick}>
            Cinematt
          </Title>
        </Link>
      )}
      <Button isOpen={navRevealed} onClick={onMenuButtonClick} />
    </Container>
  );
};

export default Header;
