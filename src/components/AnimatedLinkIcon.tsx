import styled from '@emotion/styled';
import React from 'react';

const AnimatedBorder = styled.a`
  --app-border-opacity: 0.8;
  position: relative;
  padding: 10px;
  display: block;
  background-color: rgb(var(--color-app-primary));

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 2px solid;
    border-radius: 6px;
    /* border-image-slice: 1;
    border-image-source: linear-gradient(to right, rgb(var(--color-gradient-primary)), rgb(var(--color-gradient-secondary))); */
    border-color: rgba(var(--color-app-secondary), var(--app-border-opacity));
    transform: scale(1);
    transition: transform 300ms;
  }

  &:hover::after {
    transform: scale(1.2);
  }

  &:focus::after {
    transform: scale(1.2);
  }
`;

export default function AnimatedLinkIcon({
  children,
  target = '_blank',
  rel = 'noreferrer noopener',
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <AnimatedBorder target={target} rel={rel} {...rest}>
      {children}
    </AnimatedBorder>
  );
}
