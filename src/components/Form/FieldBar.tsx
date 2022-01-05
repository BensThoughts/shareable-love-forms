import styled from '@emotion/styled';

const FormFieldBar = styled.div<{
  displayError: boolean
}>`
  border-bottom: ${({displayError}) => displayError ? '4px solid rgb(var(--color-app-error))' : '4px solid rgb(var(--color-app-secondary))'};
  bottom: 0;
  left: 0;
  right: 0;
  content: " ";
  display: block;
  margin: 0 auto;
  position: absolute;
  transform: scaleX(0);
  transition: all 250ms;
  width: 1%;
`;

export default FormFieldBar;