/* Formats a date string ('2024-01-01') into a short date format ('Jan 01, 2024') */
export const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

export const getUpcomingDates = () => {
    const today = new Date();

    const threeWeeksLater = new Date(today);
    threeWeeksLater.setDate(threeWeeksLater.getDate() + 21);

    const todayFormatted = convertDateToString(today);
    const threeWeeksLaterFormatted = convertDateToString(threeWeeksLater);

    return {
        today: todayFormatted,
        threeWeeksLater: threeWeeksLaterFormatted,
    };
};

const convertDateToString = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};
