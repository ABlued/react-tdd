import { max, min, avg, sort, median, mode } from './stats';

const array = [1, 2, 3, 4];

describe('여러가지 특수값 구하기', () => {
  it('최댓값 구하기', () => {
    expect(max(array)).toBe(4);
  });
  it('최솟값 구하기', () => {
    expect(min(array)).toBe(1);
  });
  it('평균값 구하기', () => {
    expect(avg(array)).toBe(2.5);
  });
  describe('중앙값 구하기', () => {
    it('배열 정렬하기', () => {
      expect(sort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
    });
    it('배열 길이가 짝수일 때는 중앙값 두 개를 더해 2로 나눠야한다.', () => {
      expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
    it('배열 길이가 홀수일 때는 중앙값 그대로 반환해야한다.', () => {
      expect(median([1, 2, 3, 4, 5])).toBe(3);
    });
  });
  describe('최빈값 구하기', () => {
    it('최빈값이 하나일 경우', () => {
      expect(mode([1, 2, 2, 2, 3])).toBe(2);
    });
    it('최빈값이 없을 경우', () => {
      expect(mode([1, 2, 3])).toBe(null);
    });
    it('최빈값이 여러 개일 경우', () => {
      expect(mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
    });
  });
});
