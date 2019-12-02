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
  }

  .hideField:checked + .inputStyle {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

export default style;
