export const max = (numbers) => {
  // let result = numbers[0];
  // numbers.forEach((n) => {
  //   if (n > result) {
  //     result = n;
  //   }
  // });
  // return result;
  return Math.max(...numbers); // 리팩토링
};

export const min = (numbers) => {
  return Math.min(...numbers);
};

export const avg = (numbers) => {
  // const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  // return sum / numbers.length;

  return numbers.reduce((acc, cur, index, { length }) => acc + cur / length, 0);
};

export const sort = (numbers) => numbers.sort((a, b) => a - b);
export const median = (numbers) => {
  const { length } = numbers;
  const middle = Math.floor(length / 2);

  return length % 2
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
};

export const mode = (numbers) => {
  const counts = numbers.reduce(
    (acc, current) => acc.set(current, acc.get(current) + 1 || 1),
    new Map()
  );

  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(
    (number) => counts.get(number) === maxCount
  );

  if (modes.length === numbers.length) {
    // 최빈값이 없음
    return null;
  }

  if (modes.length > 1) {
    // 최빈값이 여러개
    return modes;
  }

  // 최빈값이 하나
  return modes[0];
};
