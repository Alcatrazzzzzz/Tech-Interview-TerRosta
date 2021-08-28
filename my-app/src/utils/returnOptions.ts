import { apiKey } from "../constants";

export const returnOptions = (query: string) => {
  return {
    method: "POST",
    mode: "cors" as RequestMode,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + apiKey,
    },
    body: JSON.stringify({ query: query, count: 20 }),
  };
};
