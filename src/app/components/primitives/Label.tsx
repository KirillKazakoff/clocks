import styled from 'styled-components';
import { textCompose } from './styledCompose';
import { TextProps } from './Text';

const Label = styled.label<TextProps>`
    ${textCompose()};
`;

export default Label;
