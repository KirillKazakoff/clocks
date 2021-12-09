import styled from 'styled-components';
import { SpaceProps, ColorProps, TypographyProps } from 'styled-system';
import { textCompose } from './styledCompose';

export type TextProps = SpaceProps & ColorProps & TypographyProps;

export const Text = styled.span<TextProps>`
    ${textCompose()};
`;
