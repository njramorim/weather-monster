import styled from 'styled-components';

const FIELD_SIZE = '3rem';

const style = component => styled(component)`
  .clickArea {
    cursor: pointer;
    position: absolute;
    overflow: hidden;
    text-indent: -9999px;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  .hideField {
    opacity: 0;
    height: 0;
    width: 0;
  }

  .inputStyle {
    width: ${FIELD_SIZE};
    height: ${FIELD_SIZE};
    border-radius: 50%;
    line-height: ${FIELD_SIZE};
    text-indent: 0;
    display: inline-flex;
    background: transparent;
    right: 0;
    top: 0;
    overflow: hidden;
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.light};
    transition: background-color 0.3s;
    pointer-events: none;

    &:before {
      content: '️\\2714';
      position: absolute;
      color: ${({ theme }) => theme.colors.highStrong};
      text-align: center;
      font-size: 2.5rem;
      border-radius: inherit;
      transform-origin: center center;
      transform: scale(0, 0.3);
      transition: all 0.2s ease-in 0.1s;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
  }

  .hideField:checked + .inputStyle {
    background-color: ${({ theme }) => theme.colors.light};

    &:before {
      transform: scale(1);
    }
  }
`;

export default style;
