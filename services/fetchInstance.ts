import Cookies from "js-cookie";
const fetchUtil = async (endpoint: string, method: string, params: Record<string, any> = {}, body?: any) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/v1${endpoint}`);

  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    credentials: "include"
  };
  // let accessToken: string | undefined;
  // if (typeof window !== "undefined") {
  //   accessToken = Cookies.get("accessToken");
  // }
  // if (accessToken) {
  //   headers.Authorization = `Bearer ${accessToken}`;
  // }
  const response = await fetch(url.toString(), {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.message || `Status: ${response.status}`;
    throw new Error(errorMessage);
  }

  return response.json();
};

const fetchInstance = {
  get: (endpoint: string, params: Record<string, any> = {}) => {
    return fetchUtil(endpoint, "GET", params);
  },
  post: (endpoint: string, body: any) => {
    return fetchUtil(endpoint, "POST", {}, body);
  },
  put: (endpoint: string, body: any) => {
    return fetchUtil(endpoint, "PUT", {}, body);
  },
  delete: (endpoint: string, body?: any) => {
    return fetchUtil(endpoint, "DELETE", {}, body);
  },
  patch: (endpoint: string, body: any, params: Record<string, any> = {}) => {
    return fetchUtil(endpoint, "PATCH", params, body);
  }
};

export default fetchInstance;
