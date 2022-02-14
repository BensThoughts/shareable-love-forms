import { ReactNode } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div<{
  charWidth?: number
}>`
  display: grid;
  flex-direction: column;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  row-gap: 3rem;
  column-gap: 0;
  grid-template-columns: ${({ charWidth = 90 }) => `1fr min(${charWidth}ch, 100%) 1fr`};
  * {
    grid-column: 1 / -1;
  }
  @media (min-width: 768px) {
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: ${({ charWidth = 90 }) => `1fr min(${charWidth}ch, 100%) 1fr`};
    padding-right: 2rem;
    padding-left: 2rem;
    row-gap: 5rem;
    * {
      grid-column: 2;
    }
  }
`;

type GridWrapperProps = {
  charWidth?: number
  className?: string,
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>

export default function GridWrapper({
  charWidth = 100,
  className,
  children,
  ...rest
}: GridWrapperProps) {
  return (
    <Wrapper charWidth={charWidth} className={className} {...rest}>
      {children}
    </Wrapper>
  );
}
