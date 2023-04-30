import validator from "validator";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
export function isEmailValid(email) {
  return isEmail(email);
}

export function isStrongPassword(password) {
  return isStrongPassword(password);
}
