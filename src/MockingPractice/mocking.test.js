// 변수를 mock함수로 만들기
const mockFn = jest.fn();

// mock함수는 기본적으로 undefined를 반환한다.
mockFn(); // undefined
mockFn(1); // 인수를 넣어도 undefined를 반환한다.

// mockReturnValue을 사용해 리턴값을 지정할 수 있다.
mockFn.mockReturnValue('I am a mock!'); // I am a mock!

// mock 함수는 기본적으로 몸체가 없는 함수이다.
// mockImplemetation() 메소드를 사용하여 함수 몸체를 구현할 수 있다.
mockFn.mockImplementation((name) => `I am ${name}`);
console.log(mockFn('ablue'));

// 비동기 함수의 resolve와 reject도 구현할 수 있다.
test('async resolve test', async () => {
  const asyncMock = jest.fn().mockResolvedValue(1);
  const result = await asyncMock();
  console.log(result); // 1
});

test('async reject test', async () => {
  const asyncMock = jest.fn().mockRejectedValue(new Error('Async error'));
  const result = await asyncMock();
  console.log(result); // throws "Async error"
});

// mock함수는 자신이 어떻게 호출이 되었고 몇 번 호출되었는지를 알 수 있다.

test('mock test', () => {
  const mockFn = jest.fn();
  mockFn.mockImplementation((name) => `I am ${name}`);

  mockFn('a');
  mockFn(['a', 'b']);

  expect(mockFn).toBeCalledTimes(2);
  expect(mockFn).toBeCalledWith('a');
  expect(mockFn).toBeCalledWith(['a', 'b']);
});
