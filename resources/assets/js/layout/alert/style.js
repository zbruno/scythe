import styled, { keyframes } from 'react-emotion';

export const AlertContainerStyles = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99999;
  max-width: 500px;
  margin: 0 0 0 auto;
  cursor: pointer;

  left: auto;
  right: 20px;
  top: 15px;
`;
