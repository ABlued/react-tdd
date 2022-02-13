/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('<Counter/>', () => {
  it('matches snapshot', () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });
  it('has a number and two buttons', () => {
    const utils = render(<Counter />);
    utils.getByText('0');
    utils.getByText('+1');
    utils.getByText('-1');
  });

  it('increases', () => {
    const utils = render(<Counter />);
    const number = utils.getByText('0');
    const plusButton = utils.getByText('+1');

    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent('2');
    expect(number.textContent).toBe('2');
  });
  it('decreases', () => {
    const utils = render(<Counter />);
    const number = utils.getByText('0');
    const plusButton = utils.getByText('-1');
    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent('-2'); // jest-dom 의 확장 matcher 사용
  });
});

// fireEvent.이벤트이름(DOM, 이벤트객체);
// change 이벤트 같은 경우 두 번째 인자의 바꿀 value를 집어넣어야 한다.
// fireEvent.change(myInput, { target: { value: 'hello world' } });
