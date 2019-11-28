import styled from 'styled-components';

const TAGS = (tag, styles) => {
  switch (tag) {
    case 'h1':
      return styles[0];
    case 'h2':
      return styles[1];
    case 'h3':
    default:
      return styles[2];
  }
};

const SIZES = ['2rem', '2.8rem', '2.4rem'];

const style = component => styled(component)`
  font-size: ${({ tag }) => TAGS(tag, SIZES)};
  text-align: ${({ align }) => align};
  font-weight: ${({ tag }) => (tag === 'h2' ? 'bold' : 'regular')};
  display: inline;
`;

export default style;
