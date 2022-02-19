import { isLoggedIn, isNotLoggedIn } from './middlewares';

describe('isLoggedIn', () => {
  const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    },
    next = jest.fn();

  test('로그인 되어 있으면 is LoggedIn이 next를 호출해야 함', () => {
    const req = {
      isAuthenticated: jest.fn(() => true),
    };
    isLoggedIn(req, res, next);
    expect(next).toBeCalledTimes(1);
  });
});

describe('isNotLoggedIn', () => {
  const res = {
      redirect: jest.fn(),
    },
    next = jest.fn();

  test('로그인 되어 있으면 isNotLoggedIn이 그대로 redirect해야함', () => {
    const req = {
      isAuthenticated: jest.fn(() => true),
      // 로그인 API가 잘 동작되는지는 관심 없다.
      // 우리가 확인하려는 건 if (req.isAuthenticated()) { next();} 에서 next() 잘 동작되는지만 볼 뿐이다.
    };
    const message = encodeURIComponent('로그인한 상태입니다.');
    isNotLoggedIn(req, res, next);

    expect(res.redirect).toBeCalledWith(`/?error=${message}`);
  });

  test('로그인 되어 있지 않으면 isNotLoggedIn이 에러를 응답해야함', () => {
    const req = {
      isAuthenticated: jest.fn(() => false),
    };
    isNotLoggedIn(req, res, next);
    expect(next).toBeCalledTimes(1);
  });
});
