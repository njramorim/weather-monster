// @flow
import styled from 'styled-components';

const style = component => styled(component)`
  padding: 1rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  background-color: transparent;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .description {
    height: 100%;
    font-size: 1.3rem;
    > dt {
      display: none;
    }

    > dd {
      display: inline-block;
      padding-right: 1rem;
      vertical-align: bottom;
    }

    .country {
      font-weight: bold;
      font-size: 1.1rem;
      opacity: 0.8;
      padding-right: ${({ theme }) => theme.padding.min};
    }
  }
`;

export default style;
