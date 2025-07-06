import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getAllUsers = async () => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const users: any = await api.get("/users");
    return users.data;
  } catch (err) {
    console.log("error:", err);
  }
};

export const getUserDetails = async (id: number | string) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const users: any = await api.get(`/users/${id}`);
    console.log("users", users.data);
    return users.data;
  } catch (err) {
    console.log("error:", err);
  }
};
