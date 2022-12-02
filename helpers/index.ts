export const generateRandomBetween = (
  min: number,
  max: number,
  exclude: string | number,
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === Number(exclude)) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
