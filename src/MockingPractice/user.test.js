import { addFollowing } from './user';
import { User } from './models/user';

jest.mock('../models/user');

describe('addFollowing', () => {
  const req = {
    user: { id: 1 },
    params: { id: 2 },
  };
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };
  const next = jest.fn();

  test('사용자를 찾아 팔로잉을 추가하고 success를 응답해야 함', async () => {
    User.findOne.mocReturnValue(
      // findOne은 데이터베이스와 연결되어 값을 가져오 메소드인데
      // 테스트를 하는데 정말로 데이터베이스의 값을 가져올 필요가 없기 때문에
      // 모킹한다.
      Promise.resolve({
        id: 1,
        name: 'zenocho',
        addFollowing(value) {
          Promise.resolve(true);
        },
      })
    );
    await addFollowing(req, res, next);
    expect(res.send).toBeCalledWith('success');
  });

  test('사용자를 못 찾으면 res.status(404).send(no user)를 호출함', async () => {
    User.findOne.mocReturnValue(null);
    await addFollowing(req, res, next);

    expect(res.status).toBeCalledWith(404);
    expect(res.send).toBeCalledWith('no user');
  });

  test('DB에서 에러가 발생하면 next(error) 호출함,', async () => {
    const error = '테스트용 에러';
    User.findOne.mockReturnValue(Promise.reject(error));
    await addFollowing(req, res, next);

    expect(next).toBeCalledWith(error);
  });
});
