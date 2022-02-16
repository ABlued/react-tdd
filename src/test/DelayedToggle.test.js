/* eslint-disable testing-library/prefer-query-by-disappearance */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import DelayedToggle from '../AxiosTestPractice/DelayedToggle';
describe('<DelayedToggle />', () => {
  it('reveals text when toggle is ON', async () => {
    const { getByText, findByText } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    await findByText('야호!!'); // 콜백 안의 함수가 에러를 발생시키지 않을 때 까지 기다립니다.
  });

  it('toggles text ON/OFF', async () => {
    const { getByText, findByText } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    // findby는 일치하는 항목이 있을 경우 resolve를 없을 경우 reject를 반환한다.
    const text = await findByText('ON');
    expect(text).toHaveTextContent('ON');
  });
});
