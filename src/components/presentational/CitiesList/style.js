// @flow
import styled, { css } from 'styled-components';
import type { styledHOC, styledThemeProps } from '../../../lib/types';
const MAX_HEIGHT = '30rem';
const PADDING = '1rem';

const style: styledHOC<any, any> = component => styled(component)`
  position: absolute;
  left: 5%;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  width: 90%;
  transform: scale(1, 0.3);
  transform-origin: center top;
  transition: all 0.2s ease-in-out;

  ${({ isOpen }: { isOpen: boolean }) =>
    isOpen &&
    css`
      pointer-events: initial;
      opacity: 1;
      transform: scale(1, 1);
    `}

  > h1 {
    display: none;
  }

  .listWrapper {
    background: ${({ theme }: styledThemeProps) => theme.colors.highlight};
    border-radius: ${({ theme }: styledThemeProps) => theme.borderRadius.min};
    box-shadow: inset 0rem -0.6rem 0rem 0rem rgba(0, 0, 0, 0.27);
    padding: ${PADDING};
    padding-bottom: 2rem;
    overflow: hidden;
    max-height: ${MAX_HEIGHT};
    max-height: ${MAX_HEIGHT};
    width: 100%;
    display: block;
    margin: 0 auto;

    ${({ isLoading }: { isLoading: boolean }) =>
      isLoading &&
      css`
        pointer-events: none;
      `}

    > .list {
      width: 100%;
      max-height: calc(${MAX_HEIGHT} - 5rem);
      display: block;
      overflow: auto;
      padding: ${PADDING};
    }
  }
`;

export default style;
