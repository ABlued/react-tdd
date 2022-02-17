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
