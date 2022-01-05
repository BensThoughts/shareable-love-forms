import styled from '@emotion/styled';

const AnimatedUnderline = styled.span`
  position: relative;
  padding: 0.1em 0;
  overflow: hidden;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: rgb(var(--color-app-secondary));
    opacity: 0;
    transform: scaleX(0);
    transform-origin: center;
    transition: opacity 300ms, transform 300ms;
  }

  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }

  &:focus::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;

export default AnimatedUnderline;
