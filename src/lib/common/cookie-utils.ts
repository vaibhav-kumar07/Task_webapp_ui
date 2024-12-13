import "server-only"; // https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
import { cookies } from "next/headers"; // https://nextjs.org/docs/app/api-reference/functions/cookies
import Logger from "@/utils/logger";

const logger = new Logger("lib/common/cookie-utils");
export function getCookieValue(key: string) {
  const token = cookies().get(key);
  if (!token) {
    log("cookie not found with key", key);
    return "";
  } else {
    // log("cookie found with key", key, token);
    return token.value;
  }
}

export function setCookie(key: string, value: string) {
  cookies().set({
    name: key,
    value: value,
    httpOnly: true,
    path: "/",
  });
  log("cookie set with key", key, value);
}
export function hasCookie(key: string) {
  const cookiesList = cookies();
  const hasCookie = cookiesList.has(key);
  log("cookie found with key", key, hasCookie);
  return hasCookie;
}

export function deleteCookie(key: string) {
  cookies().delete(key);
  log("cookie deleted with key", key);
}

// eslint-disable-next-line
function log(msg: string, ...args: any) {
  logger.log(msg, "debug", ...args);
}
