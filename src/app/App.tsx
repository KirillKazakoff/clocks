import '../css/defaultStyle.css';
import React, { useState } from 'react';
import { Box } from './components/primitives/Box';

import Clock from './components/lib/Clock';
import Ul from './components/primitives/Ul';
import clockListInst from './logic/ClockList';
import Li from './components/primitives/Li';

import MyForm from './components/lib/MyForm';

export default function App() {
    const [clockListData, setClockListData] = useState(clockListInst.getData());

    const clockList = clockListData.map((item) => {
        return (
            <Li key={item.id}>
                <Clock
                    time={item.time} name={item.name}
                    id={item.id} className='clock'
                />
            </Li>
        );
    });

    const onUlClick = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLElement;

        if (target.id === 'remove') {
            const id = target.closest('.clock')?.id;

            if (typeof id === 'string') {
                clockListInst.removeClock(id);
                setClockListData(clockListInst.getData());
            }
        }
    };

    return (
        <Box
            width={4 / 5} bg='azure'
            mx='auto' border='primary'
            p={3}
        >
            <MyForm updateHook={setClockListData} />
            <Ul
                onClick={onUlClick} gap='10px'
                flexWrap='wrap'
            >
                {clockList}
            </Ul>
        </Box>
    );
}
