export function sum(a, b) {
  return a + b;
}

export function sumOf(numbers) {
  let result = 0;
  numbers.forEach((number) => {
    result += number;
  });
  return result;
}
