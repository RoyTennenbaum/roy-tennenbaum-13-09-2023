import { WeatherUnitProps } from '@/types/global';

export default function toggleTemperatureUnit({
  value,
  unit,
}: WeatherUnitProps) {
  if (unit === 'C') {
    const fahrenheitValue = (value * 9) / 5 + 32;
    return { value: fahrenheitValue, unit: 'F' };
  } else {
    const celsiusValue = ((value - 32) * 5) / 9;
    return { value: celsiusValue, unit: 'C' };
  }
}
