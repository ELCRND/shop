export const shuffle = <T>(array: T[]) => {
  let currentIndex = array.length;
  let randomIndex = null;

  while (randomIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const getRandomValue = (value: number) => {
  return Math.floor(Math.random() * value);
};
