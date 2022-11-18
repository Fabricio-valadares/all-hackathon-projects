import axios from "axios";

/**
 *
 * No lugar de "192.168.1.9" você deve colocar o número de ip de sua máquina.
 */

const api = axios.create({
  baseURL: "http://192.168.1.9:3000",
});

export { api };
