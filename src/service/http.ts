import axios from "axios";

// const NODEJS_HOST = "http://192.168.0.103:4002";
const NODEJS_HOST = "https://tmaserver.online";

const baseURL = `${NODEJS_HOST}/api/`;

const $authHost = axios.create({ baseURL });
const $host = axios.create({ baseURL });

const authInterceptor = (config: any) => {
  config.headers.authorization = `tma ${localStorage.getItem("tma")}`;
  return config;
}
$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };