import axios from "axios";
export async function postPost(post) {
  let data = {
    post: "",
    recarga: false,
  };
  const result = await axios.post(`https://in.markingall.com/`, post);

  let respuesta = result.data.respuesta;
  data = {
    post: respuesta,
    recarga: false,
  };
  return data;
}
