import styled from 'styled-components';
import { VIEWPORT_MAX_SIZE } from '../../styles/style-global';

const style = component => styled(component)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.min};
  box-shadow: 0rem 0.6rem 0.1rem -0.2rem rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.text.color};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.padding.max}
    ${({ theme }) => theme.padding.min};
  position: relative;
  text-align: center;

  > .close {
    position: absolute;
    top: ${({ theme }) => theme.margin.min};
    right: ${({ theme }) => theme.margin.min};

    @media screen and (max-width: ${VIEWPORT_MAX_SIZE}px) {
      top: 1rem;
      right: 1rem;
    }
  }

  > .image {
    margin-top: ${({ theme }) => theme.margin.min};
  }

  .cityLink {
    text-decoration: none;
    color: ${({ theme }) => theme.text.link};
    padding-bottom: 0.75rem;
    border-bottom: 1px solid ${({ theme }) => theme.text.link};

    .country {
      font-size: 1rem;
      vertical-align: top;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  > .temp {
    margin-top: ${({ theme }) => theme.margin.min};
    font-size: 1.2rem;

    .tempItem {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .tempMin,
    .tempMax {
      display: flex;
      align-items: start;
    }

    .tempMin {
      margin-top: calc(${({ theme }) => theme.margin.min} / 2);
    }
  }
`;

export default style;
