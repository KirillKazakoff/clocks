import styled from 'styled-components';
import { variant } from 'styled-system';
import { BoxProps } from './rebassTypes';
import { boxCompose } from './styledCompose';

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

export const Box = styled.div<BoxProps>(boxCompose(), boxVariant());
