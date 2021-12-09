/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import { ClockDataType } from '../../data/initClockList';
import AbsoluteBox from '../primitives/AbsoluteBox';
import { Box, BoxProps } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import Heading from '../primitives/Heading';
import { HourArrow, MinuteArrow, SecondArrow } from './Arrow';

const StyledClock = styled.div`
    height: 100px;
    position: relative;
    width: 100px;
    border: 2px solid tan;
    border-radius: 100px;
    &::after {
        content: '';
        background-color: red;
        border-radius: 0.5px;
        margin-left: -2px;
        margin-top: -2px;
        position: absolute;
        display: block;
        height: 4px;
        width: 4px;
        left: 50%;
        top: 50%;
    }
`;

// type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
// type ClockProps = BoxProps & Overwrite<ClockDataType, { id?: string }>;
type ClockProps = ClockDataType & BoxProps;

const Clock = ({
    time, name, id, ...props
}: ClockProps) => {
    const { hour, minute, second } = time;
    const secondsDeg = second * 6;
    const minutesDeg = minute * 6 + (6 / 60) * second;
    const hoursDeg = hour * 30 + (30 / 60) * minute + (0.5 / 60) * second;

    return (
        <Box
            {...props} position='relative'
            id={id}
        >
            <AbsoluteBox
                fontSize='15px'
                right='5px'
                variant='rounded'
                px={1}
                color='green'
                id='remove'
                zIndex={1000}
            >
                X
            </AbsoluteBox>
            <Heading>{name}</Heading>
            <StyledClock>
                <HourArrow start={hoursDeg} />
                <MinuteArrow start={minutesDeg} />
                <SecondArrow start={secondsDeg} />
            </StyledClock>
        </Box>
    );
};

export default Clock;
