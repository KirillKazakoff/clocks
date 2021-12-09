import styled from 'styled-components';
import { TextProps } from './Text';

type LinkProps = {
    textDecoration?: string;
    cursor?: string;
} & TextProps;

const Link = styled.a<LinkProps>`
    ${({ textDecoration, cursor }) => ({
        cursor,
        textDecoration,
    })}
`;

Link.defaultProps = {
    textDecoration: 'none',
    cursor: 'pointer',
};

export default Link;
