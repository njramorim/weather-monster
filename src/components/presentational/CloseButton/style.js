import styled from 'styled-components';

const style = component => styled(component)`
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 2.75rem;
  height: 2.75rem;
  margin: 0;
  padding: 0;
  opacity: 0.7;
  overflow: hidden;
  position: relative;
  text-indent: -9999px;

  &:before,
  &:after {
    content: '';
    border-radius: 0.5rem;
    border: 0.125rem solid ${({ theme }) => theme.text.color};
    display: block;
    height: 0.125rem;
    position: absolute;
    left: 7.5%;
    top: 1.175rem;
    transition: transform 0.4s ease-out;
    transform-origin: center center;
    width: 80%;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    &:before {
      transform: rotate(-45deg);
    }

    &:after {
      transform: rotate(45deg);
    }
  }

  &:active {
    &:before {
      transform: rotate(-45deg) scale(0.8);
    }

    &:after {
      transform: rotate(45deg) scale(0.8);
    }
  }
`;

export default style;
