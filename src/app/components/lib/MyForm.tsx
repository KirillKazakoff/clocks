/* eslint-disable import/no-duplicates */
/* eslint-disable object-curly-newline */

import React, { SetStateAction, Dispatch } from 'react';
import { nanoid } from 'nanoid';
import { ClockDataType } from '../../data/initClockList';
import { Form, Label, Input, Box, Button } from '../primitives/primitives';
import getTimeOnZone from '../../logic/utils';
import { FlexProps } from '../primitives/Flex';
import clockListInst from '../../logic/ClockList';

type MyFormProps = FlexProps & {
    updateHook: Dispatch<SetStateAction<ClockDataType[]>>;
};

export default function MyForm({ updateHook }: MyFormProps) {
    const onSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            capital: { value: string };
            timeZone: { value: string };
        };
        try {
            const clockObj = {
                time: getTimeOnZone(target.timeZone.value),
                name: target.capital.value,
                id: nanoid(),
            };

            clockListInst.add(clockObj);
            updateHook((prev) => [...prev, clockObj]);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <Form
            display='flex' gap='30px'
            mb={4} onSubmit={onSubmit}
        >
            <Box>
                <Label htmlFor='capital'>Название</Label>
                <Input
                    id='capital' name='capital'
                    variant='primary' required
                />
            </Box>
            <Box>
                <Label htmlFor='timeZone'>Временная зона</Label>
                <Input
                    id='timeZone' name='timeZone'
                    variant='primary' required
                />
            </Box>
            <Button variant='primary' alignSelf='flex-end'>
                Добавить
            </Button>
        </Form>
    );
}
