export default function getDayOfWeek(dateTime: string) {
  const dayOfWeek = new Date(dateTime).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ][dayOfWeek];
}
