export const initClockListData = [
    {
        name: 'Moscow',
        time: {
            hour: 10,
            minute: 10,
            second: 53,
        },
        id: '1',
    },
    {
        name: 'Litva',
        time: {
            hour: 12,
            minute: 60,
            second: 10,
        },
        id: '2',
    },
];

export type ClockDataType = typeof initClockListData[0];
