import { $host } from "./http";

export const authAPI = async (tma: string) => {
  try {
    const { data } = await $host.get("user/auth", { headers: { "Authorization": `tma ${tma}` } });
    if (data.userData) localStorage.setItem("tma", tma);
    return data;
  } catch (e) {
    return console.error(e);
  }
}