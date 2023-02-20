export const setCookie = (name: string, value: string, day: number) => {
  const date = new Date();
  date.setTime(date.getTime() + day);
  document.cookie =
    name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

export const getCookie = (name: string) => {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
};

export const deleteCookie = (name: string) => {
  const date = new Date();
  document.cookie =
    name + '= ' + '; expires=' + date.toUTCString() + '; path=/';
};
