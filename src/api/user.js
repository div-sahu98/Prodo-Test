import { cFetch, token } from "./api_utils";

export async function getUserDetails() {
  const api_token = await token();
  if (api_token)
    return cFetch(`${config.API_URL}/api/user-detail/`, {
      method: "GET",
      headers: {
        authorization: api_token,
      },
    });
  else return new Promise.resolve();
}
