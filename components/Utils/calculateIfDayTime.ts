export default function calculateIfDayTime(dateString: string): boolean {
  const date = new Date(dateString);

  const hour = date.getHours();

  const isDayTime = hour >= 6 && hour < 18;

  return isDayTime;
}
