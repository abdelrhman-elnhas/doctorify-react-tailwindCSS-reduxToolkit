import { refreshAccessToken } from "@store/authSlice";

export const apiRequest = async (endpoint, options, dispatch, getState) => {
  const { accessToken } = getState().auth; // Get current access token from state

  const response = await fetch(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    // If unauthorized, attempt to refresh the token
    const refreshResponse = await dispatch(refreshAccessToken());

    if (refreshResponse.error) {
      // If refresh failed, return error or log out the user
      throw new Error("Session expired, please log in again.");
    }

    // Retry the original request with the new access token
    const { accessToken: newAccessToken } = refreshResponse.payload;
    const retryResponse = await fetch(endpoint, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${newAccessToken}`,
      },
    });

    return retryResponse;
  }

  return response; // Return original response if no 401
};
