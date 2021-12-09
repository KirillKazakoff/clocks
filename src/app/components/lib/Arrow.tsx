import styled, { keyframes } from 'styled-components';
import { BoxProps } from '../primitives/Box';
import { boxCompose } from '../primitives/styledCompose';

const arrowAnimation = (start: number) => keyframes`
    0% {transform: rotate(${start}deg)};
    100% {transform: rotate(${start + 360}deg)};
`;

type ArrowProps = BoxProps & { start: number };

const Arrow = styled.div<ArrowProps>`
    width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 10px;

    top: -2px;
    left: -2px;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    &::after {
        content: '';
        position: absolute;
    }
    ${boxCompose()};
    animation-name: ${({ start }) => arrowAnimation(start)};
`;

export const SecondArrow = styled(Arrow)`
    animation-duration: 60s;
    &::after {
        top: 2px;
        height: 48px;
        width: 1px;
        left: 49px;
        background-color: black;
    }
`;

export const MinuteArrow = styled(Arrow)`
    animation-duration: 3600s;
    &::after {
        top: 10px;
        height: 40px;
        width: 3px;
        left: 49px;
        background-color: salmon;
    }
`;

export const HourArrow = styled(Arrow)`
    animation-duration: 43200s;
    &::after {
        top: 20px;
        height: 30px;
        width: 6px;
        left: 47.5px;
        background-color: green;
    }
`;
