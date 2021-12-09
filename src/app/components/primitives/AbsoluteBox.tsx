import styled from 'styled-components';
import { boxVariant } from './Box';
import { BoxProps } from './rebassTypes';
import { boxCompose } from './styledCompose';

type AbsoluteBoxType = BoxProps & { top?: number };

const AbsoluteBox = styled.div<AbsoluteBoxType>`
    position: absolute;
    ${boxCompose()};
    ${boxVariant()};
`;

AbsoluteBox.defaultProps = {
    top: 0,
};

export default AbsoluteBox;
