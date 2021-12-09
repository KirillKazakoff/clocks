import styled from 'styled-components';
import { BoxProps, boxVariant } from './Box';
import { boxCompose } from './styledCompose';

const AbsoluteBox = styled.div<BoxProps>`
    position: absolute;
    ${boxCompose()};
    ${boxVariant()};
`;

AbsoluteBox.defaultProps = {
    top: 0,
};

export default AbsoluteBox;
