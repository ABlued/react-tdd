import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders learn react link', () => {
  render(<App />); // render 메소드는 매개 변수로 지정된 JSM에 가상 DOM을 만든다.
  //매개변수는 앱 컴포넌트의 JSF X이다
  const linkElement = screen.getByText(/learn react/i);
  //screen 은 전역 객체이다. 전역 객체에서 learn react라는 텍스트를 찾는 것이다.
  expect(linkElement).toBeInTheDocument();
});
