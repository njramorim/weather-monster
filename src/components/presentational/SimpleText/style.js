import styled from 'styled-components';

const style = component => styled(component)`
  color: ${({ theme }) => theme.text.color};
  font-size: ${({ theme }) => theme.text.size};
  text-align: ${({ align }) => align};
`;

export default style;
