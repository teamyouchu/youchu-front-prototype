// 천 단위마다 쉼표 찍어주는 코드
export const numberComma = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 천 이상 숫자 줄일 때 사용
export const overThousand = (num) => {
  if (num >= 1000) {
    return '999+';
  } else {
    return num;
  }
};

// 구독자 수 한글로 줄여주는 코드
export const numToKorean = (num) => {
  if (num < 1000) {
    return num;
  } else if (num < 10000) {
    return Math.floor((num / 1000) * 100) / 100 + '천';
  } else if (num < 100000) {
    return Math.floor((num / 10000) * 100) / 100 + '만';
  } else if (num < 1000000) {
    return Math.floor((num / 10000) * 10) / 10 + '만';
  } else if (num < 10000000) {
    return Math.floor(num / 10000) + '만';
  } else if (num < 100000000) {
    return numberComma(Math.floor(num / 100000) * 10) + '만';
  } else if (num < 1000000000) {
    return Math.floor((num / 100000000) * 100) / 100 + '억';
  } else if (num < 10000000000) {
    return Math.floor((num / 100000000) * 10) / 10 + '억';
  } else if (num < 100000000000) {
    return Math.floor(num / 100000000) + '억';
  } else if (num < 1000000000000) {
    return numberComma(Math.floor((num / 1000000000) * 10)) + '억';
  } else if (num < 10000000000000) {
    return Math.floor((num / 1000000000000) * 100) / 100 + '조';
  }
};
