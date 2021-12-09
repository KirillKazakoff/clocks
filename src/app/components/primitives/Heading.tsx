import styled from 'styled-components';

import { textCompose } from './styledCompose';
import { TextProps } from './Text';

type HeadingProps = TextProps & {};

const Heading = styled.h2<HeadingProps>`
    ${textCompose()}
`;

export default Heading;
