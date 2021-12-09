import React from 'react';
import {
    FlexboxProps as FlexPropsSystem,
    compose,
    space,
    layout,
    color,
    typography,
    flexbox,
    border,
    BorderProps,
} from 'styled-system';

import styled from 'styled-components';
import { BoxProps } from './Box';
import { flexCompose } from './styledCompose';

export type FlexProps = FlexPropsSystem &
BoxProps & {
    gap?: string;
    rowGap?: string;
    as?: React.ElementType;
};

export const Flex = styled.div<FlexProps>`
    gap: ${({ gap }) => gap || ''};
    row-gap: ${({ rowGap }) => rowGap || ''};
    display: flex;
    ${flexCompose()};
`;
