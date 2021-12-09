import { ClockDataType, initClockListData } from '../data/initClockList';

class ClockList {
    data: ClockDataType[];

    constructor() {
        this.data = initClockListData;
    }

    getData() {
        return [...this.data];
    }

    add(clock: ClockDataType) {
        this.data.push(clock);
    }

    removeClock(id: string) {
        const deleteIndex = this.findClockIndex(id);
        this.data.splice(deleteIndex, 1);
    }

    findClockIndex(id: string) {
        return this.data.findIndex((item) => item.id === id);
    }
}

const clockListInst = new ClockList();
export default clockListInst;
