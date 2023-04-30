import { data } from "./seed";
export default function (id) {
  return data.find((e) => id == e.id);
}
