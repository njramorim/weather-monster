import styled from 'styled-components';

const style = component => styled(component)`
  input {
    border-radius: ${({ theme }) => theme.borderRadius.min};
    color: ${({ theme }) => theme.colors.highStrong};
    box-shadow: inset 0.2rem 0.4rem 0.3rem -0.2rem rgba(0, 0, 0, 0.25);
    height: 5rem;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: bold;
    width: 90%;
    border: none;
    display: block;
    margin: 0 auto;
    outline: none;
  }
`;
export default style;
