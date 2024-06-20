import { Cookie } from "next/font/google";
export const setCookie = (name, value, daysToLive) => {
  const cookieValue = encodeURIComponent(value);
  const maxAge = daysToLive * 24 * 60 * 60;
  document.cookie = `${name}=${cookieValue}; max-age=${maxAge}; path=/`;
};

export const deleteCookie = (name) => {
  document.cookie = `${name}=; Max-Age=0; path=/`;
};

export const getCookie = (name) => {
  const cDecode = decodeURIComponent(document.cookie);
  const cArray = cDecode.split("; ");
  let ret ;
  cArray.forEach((el, idx) => {
    if(el.indexOf(name) == 0){
      ret = el.substring(name.length + 1);
    }
  })
  return ret;
}
export const getCookie2 = (name) => {
  const cDecode = document.Cookie;
  const cArray = cDecode.split("; ");
  let ret ;
  cArray.forEach((el, idx) => {
    if(el.indexOf(name) == 0){
      ret = el.substring(name.length + 1);
    }
  })
  return ret;
}
