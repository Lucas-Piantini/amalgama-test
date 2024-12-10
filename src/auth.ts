export const loginUser = async (
  email: string,
  password: string
): Promise<string | null> => {
  const url =
    "https://2v234d7xc7.execute-api.us-east-1.amazonaws.com/default/login";

  const params = new URLSearchParams();
  params.append("email", email);
  params.append("password", password);

  const response = await fetch(url, {
    method: "POST",
    body: params,
  });

  if (response.status === 200) {
    const data = await response.json();
    return data.token;
  } else if (response.status === 401) {
    throw new Error("Unauthorized: Invalid credentials");
  }

  throw new Error("Unknown Error");
};
