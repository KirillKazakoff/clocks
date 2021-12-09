import styled from 'styled-components';
import {
    AlignSelfProps,
    LayoutProps,
    BorderProps,
    PositionProps,
    ColorProps,
    TypographyProps,
    SpaceProps,
    variant,
} from 'styled-system';
import { BoxProps } from './rebassTypes';
import { boxCompose } from './styledCompose';

// export type BoxProps = BorderProps &
// PositionProps &
// LayoutProps &
// TypographyProps &
// SpaceProps &
// AlignSelfProps & {
//     variant?: 'primary' | 'rounded';
// };

export const boxVariant = () => variant({
    variants: {
        primary: {
            px: '10px',
            py: '5px',
            borderRadius: '5px',
            border: 'primary',
        },
        rounded: {
            border: 'primary',
            borderRadius: '100px',
        },
    },
});

export const Box = styled.div<BoxProps>(boxCompose());
