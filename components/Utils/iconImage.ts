export default function iconImage(iconNumber: number) {
  if (iconNumber >= 1 && iconNumber <= 44) {
    const numberAsString = iconNumber.toString().padStart(2, '0');

    const fileName = `/Images/${numberAsString}-s.png`;

    return fileName;
  } else {
    throw new Error('iconNumber is out of range.');
  }
}
