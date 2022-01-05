import styled from '@emotion/styled';

const FormLabel = styled.label<{
  placeholderShown: boolean,
  displayError: boolean,
}>`
  display: block;
  font-weight: normal;
  left: 0;
  margin: 0;
  padding: 18px 12px 0;
  position: absolute;
  top: 0;
  transition: all linear 200ms;
  width: 100%;
  color: ${({displayError}) => displayError ? 'rgb(var(--color-app-error))' : 'rgb(var(--color-text-primary))'};
  cursor: text;
  font-size: ${({placeholderShown}) => placeholderShown ? '1.2rem' : '0.75rem'};
  transform: ${({placeholderShown}) => placeholderShown ? 'translateY(0px)' : 'translateY(-14px)'}
`;

export default FormLabel;