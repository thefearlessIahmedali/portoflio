/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

/* -------------------------- Image Dependecy -------------------------- */
import {
  IconRight,
  Twitter,
  Facebook,
  Linkedin,
  Github,
  Instagram,
  Dribble,
} from '../Icons';

/* ---------------------------- Style Dependency ---------------------------- */
import { SocialMedia } from '../Layout/style';

interface IFooterLink {
  children: string | React.ReactNode;
  goto?: string;
}

const FooterLink: React.FC<IFooterLink &
  React.AnchorHTMLAttributes<HTMLParagraphElement>> = ({
  children,
  goto,
  ...rest
}) => {
  return (
    <>
      <FooterStyle>
        <Link href={`${goto}`}>
          <p {...rest}>
            {children}
            <IconRight />
          </p>
        </Link>
      </FooterStyle>

      <SocialMedia>
        {/* 🟢 Keep Facebook */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://web.facebook.com/ahmed.ali.606073/"
          aria-label="Go To Adenekan Wonderful Facebook Page"
          title="Facebook Page"
        >
          <Facebook />
        </a>

        {/* 🟢 Keep LinkedIn */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ahmed-ismail-ai04/"
          aria-label="Go To Adenekan Wonderful Linkedin Page"
          title="Linkedin Page"
        >
          <Linkedin />
        </a>

        {/* 🔴 Hidden GitHub */}
        {/*
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/adenekan41"
          aria-label="Go To Adenekan Wonderful Github Page"
          title="Github Page"
        >
          <Github />
        </a>
        */}

        {/* 🔴 Hidden Dribbble */}
        {/*
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/codewonders"
          aria-label="Go To Adenekan Wonderful Dribble Page"
          title="Dribbble Page"
        >
          <Dribble />
        </a>
        */}

        {/* 🔴 Hidden Twitter */}
        {/*
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/code_wonders"
          aria-label="Go To Adenekan Wonderful Twitter Page"
          title="Twitter Page"
        >
          <Twitter />
        </a>
        */}

        {/* 🟢 Keep Instagram */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/itjz2/"
          aria-label="Go To Adenekan Wonderful Instagram Page"
          title="Instagram Page"
        >
          <Instagram />
        </a>
      </SocialMedia>
    </>
  );
};

const FooterStyle = styled.footer`
  p {
    font-size: var(--font-sm);
    transition: all 1s ease;

    svg {
      margin-left: 1rem;
      animation-name: forward;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    &:hover {
      @keyframes forward {
        from {
          margin-left: 1rem;
        }
        to {
          margin-left: 2rem;
        }
      }
    }
  }
`;

export default FooterLink;
