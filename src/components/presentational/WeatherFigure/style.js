import styled from 'styled-components';

const style = component => styled(component)`
  background-color: white;
  border: 0.125rem solid ${({ theme }) => theme.colors.dark};
  border-radius: 50%;
  display: block;
  height: 7.5rem;
  margin: 0 auto;
  overflow: hidden;
  width: 7.5rem;

  img {
    height: auto;
    width: 100%;
  }

  figcaption {
    display: none;
  }
`;

export default style;
