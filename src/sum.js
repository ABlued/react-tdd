export function sum(a, b) {
  return a + b;
}

export function sumOf(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}
// 이런 식으로 리팩토링 이후에도 테스트를 실행해서 통과하면 쉽게 리팩토링이 된다.
