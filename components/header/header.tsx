import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BackLink, BackButton, Button, Container, Title } from './header.css';

export interface Props {
  className?: string;
  navRevealed: boolean;
  onMenuButtonClick: (e: React.MouseEvent | React.TouchEvent) => void;
}

const Header = ({ className, navRevealed, onMenuButtonClick }: Props): JSX.Element => {
  const {
    query: { publicId, slug },
  } = useRouter();

  return (
    <Container className={className}>
      {publicId ? (
        <Link href="/albums/[slug]" as={`/albums/${slug}`}>
          <BackLink>
            <BackButton />
          </BackLink>
        </Link>
      ) : (
        <Title>Cinematt</Title>
      )}
      <Button isOpen={navRevealed} onClick={onMenuButtonClick} />
    </Container>
  );
};

export default Header;
