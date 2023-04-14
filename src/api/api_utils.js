export async function handleResponse(response) {
  if (response.ok) return response.json();

  if (response.status === 204) return {};
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  if (response.status === 404) {
    throw new Error("Page not found");
  }

  throw new Error("Network Response was not Ok");
}

export function handleError(error) {
  throw error;
}

export function cFetch(baseUrl, headers = {}) {
  return fetch(baseUrl, headers).then(handleResponse).catch(handleError);
}
