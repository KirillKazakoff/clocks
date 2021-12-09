// import { ImageProps } from 'rebass';
import styled from 'styled-components';
import { SpaceProps, LayoutProps, PositionProps } from 'styled-system';
import { imageCompose } from './styledCompose';

type ImageProps = SpaceProps & LayoutProps & PositionProps & {};

const Image = styled.img<ImageProps>`
    ${imageCompose()};
`;

export default Image;
