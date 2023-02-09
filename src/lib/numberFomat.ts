// 천 이상 숫자 줄일 때 사용
export const overThousand = (num: number) => {
  if (num >= 1000) {
    return '999+';
  } else {
    return num;
  }
};
