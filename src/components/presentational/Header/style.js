import styled from 'styled-components';

const style = component => styled(component)`
  display: block;
  margin: ${({ theme }) => theme.margin.max} 0;

  .headerText {
    color: ${({ theme }) => theme.text.color};
    text-align: center;
    font-size: 3rem;
  }
`;

export default style;
