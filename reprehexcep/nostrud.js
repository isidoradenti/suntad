function fillCalendarArray(calendar2, firstDay2, lastDate2) {
    let currentDate = new Date(firstDay2);
    
    while (currentDate <= lastDate2) {
        calendar2.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

// Example usage:
const calendar2 = [];
const firstDay2 = new Date('2024-06-01'); // Start date
const lastDate2 = new Date('2024-06-30'); // End date

fillCalendarArray(calendar2, firstDay2, lastDate2);

console.log(calendar2); // Logs all dates from June 1, 2024 to June 30, 2024
