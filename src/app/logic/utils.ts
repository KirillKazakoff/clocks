import { DateTime } from 'luxon';

export default function getTimeOnZone(zone: string) {
    const time = DateTime.now().setZone(zone.trim());
    if (!time.isValid) throw new Error('invalid timeZone format');
    const { hour, minute, second } = time;

    console.log('Brazil time:', time.setZone(zone.trim()).toFormat('HH:mm'));
    return { hour, minute, second };
}
