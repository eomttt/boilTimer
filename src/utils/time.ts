export const getTimeFormat = (time: number) => {
  const intTime = Math.floor(time);

  return intTime < 10 ? `0${intTime}` : intTime;
};
