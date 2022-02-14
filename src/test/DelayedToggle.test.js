/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import DelayedToggle from '../AxiosTestPractice/DelayedToggle';

describe('<DelayedToggle />', () => {
  it('reveals text when toggle is ON', async () => {
    const { getByText, findByText } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    await findByText('야호!!'); // 콜백 안의 함수가 에러를 발생시키지 않을 때 까지 기다립니다.
  });
});
