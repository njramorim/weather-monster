import styled from 'styled-components';

const style = component => styled(component)`
  border-radius: ${({ theme }) => theme.borderRadius.max};
  background-color: ${({ theme, type }) =>
    type === 'danger'
      ? theme.colors.danger
      : type === 'alert'
      ? theme.colors.alert
      : theme.colors.cleanColor};
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.text.size};
  text-transform: uppercase;
  font-weight: bold;
  padding: ${({ theme }) => theme.padding.min};
  display: block;
  width: 90%;
  text-align: center;
  position: relative;
  margin: ${({ theme }) => theme.margin.min} auto;
`;

export default style;
