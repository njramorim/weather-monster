import styled from 'styled-components';

const style = component => styled(component)`
  display: block;
  margin: ${({ theme }) => theme.margin.max} 0;

  h1 {
    text-align: center;
    font-size: 3rem;
  }
`;

export default style;
