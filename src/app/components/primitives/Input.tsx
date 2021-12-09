import styled from 'styled-components';
import { variant } from 'styled-system';
import { boxCompose } from './styledCompose';
import { BoxProps } from './Box';

type InputProps = BoxProps & { variant?: 'primary' | 'secondary' };

const Input = styled.input<InputProps>(
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

export default Input;
