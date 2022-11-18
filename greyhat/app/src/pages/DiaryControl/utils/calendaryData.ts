import { Day } from "../interfaces/Day";

function mounthQuantityDays(mounth: number, year: number): number {
    const data = new Date(year, mounth, 0);
    return data.getDate();
}

export function getDataCalendary(mounth: number, year: number) {
    const dates: string[] = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    const quantityDays = mounthQuantityDays(mounth, year);
    let firstWeekDay = initialDateDay(mounth, year);
    let calendaryData: Day[] = [];

    for (let day = 1; day <= quantityDays; day++) {
        const calendaryDataItem: Day = {
            date: day,
            name: dates[firstWeekDay - 1],
        };

        if (firstWeekDay <= 6) {
            firstWeekDay++;
        } else {
            firstWeekDay = 1;
        }

        calendaryData.push(calendaryDataItem);
    }

    return calendaryData;
}

function initialDateDay(mounth: number, year: number) {
    let firstDay: Date;

    if (String(mounth).length > 1) {
        firstDay = new Date(`${year}-${mounth}-01`);
    } else {
        firstDay = new Date(`${year}-0${mounth}-01`);
    }

    const weekday = firstDay.getDay();
    return weekday + 2;
}
