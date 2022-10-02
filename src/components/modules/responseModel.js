import axios from "axios";
export async function postPost(post) {
    console.log("entro")
    console.log(post)
    let data={
      "post":"",
      "recarga":false
    }
    // let respuesta=""
    const result= await axios.post(`https://in.markingall.com/`, post)
    
    let respuesta=result.data.respuesta
    data={
      "post":respuesta,
      "recarga":false
    }
    return data
  }