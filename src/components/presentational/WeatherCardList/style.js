import styled from 'styled-components';
import { VIEWPORT_MAX_SIZE } from '../../styles/style-global';

const style = component => styled(component)`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;

  > li {
    width: 30%;
    margin-top: ${({ theme }) => theme.margin.medium};
  }

  @media screen and (max-width: ${VIEWPORT_MAX_SIZE}px) {
    flex-direction: column;

    > li {
      width: 100%;
    }
  }
`;

export default style;
