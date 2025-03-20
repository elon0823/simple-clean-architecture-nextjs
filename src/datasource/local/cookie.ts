import { Cookies, getCookieConsentValue}  from "react-cookie-consent";

export function getCookie(key: string): string | null {
  return getCookieConsentValue(key) ?? null;
}

export function setCookie(key: string, value: string): void {
  Cookies.set(key, value);
}


