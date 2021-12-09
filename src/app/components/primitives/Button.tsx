import styled from 'styled-components';
import { variant, VariantArgs } from 'styled-system';
import { BoxProps } from './rebassTypes';
import { boxCompose } from './styledCompose';

type ButtonProps = BoxProps &
VariantArgs & {
    variant?: 'primary' | 'secondary';
};
const Button = styled('button')<ButtonProps>(
    variant({
        variants: {
            primary: {
                px: '10px',
                py: '5px',
                borderRadius: '5px',
                border: 'primary',
            },
            secondary: {
                color: 'red',
                bg: 'grey',
            },
        },
    }),
    boxCompose(),
);

export default Button;
