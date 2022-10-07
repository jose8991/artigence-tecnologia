setTimeout(() => {
  let head = document.head || document.getElementsByTagName("head")[0];

  let style_responsive = document.createElement("style");

  let lerps = {};

  document.querySelectorAll("*").forEach(function (node) {
    let replaces = {
      P: "%", //porcent
      L: "(", //leftBracket
      R: ")", //rightBracket
      C: ",", //comma
      D: ".", //dot
    };
    let clases = Array.from(node.classList);
    for (const clase of clases) {
      if (clase.match(/lerpw--.+--i-\d+D?\d*px-.+--f-\d+D?\d*px-.+--.+/gi)) {
        let input = clase;
        for (const r in replaces) {
          input = input.replaceAll(r, replaces[r]);
        }
        let sections = input.split("--");
        let property = sections[1];
        let init_w = +sections[2].replace("i-", "").replace("px", "");
        let init_value = sections[3].replaceAll("_", " ");
        let final_w = +sections[4].replace("f-", "").replace("px", "");
        let final_value = sections[5].replaceAll("_", " ");
        let type = sections[6];
        lerps[clase] = {
          property,
          init_w,
          init_value,
          final_w,
          final_value,
          type,
        };
      }
    }
  });

  window.addEventListener("resize", actualizar);
  actualizar();

  function lerp_projection(vi, vf,w,init_w,final_w) {
    let p = (w - init_w) / (final_w - init_w);
    return {
      p,
      lerp: (vf - vi) * p + vi,
    };
  }

  function lerp_ends(vi, vf,w,init_w,final_w) {
    let p = (w - init_w) / (final_w - init_w);
    return {
      p,
      lerp: p < 0 ? vi : p > 1 ? vf : (vf - vi) * p + vi,
    };
  }


  function actualizar() {
    let w = window.innerWidth;
    let html = "";
    for (const clase in lerps) {
      let claseObj = lerps[clase];
      let { init_w, final_w, init_value, final_value, type } = claseObj;
      let init_value_indexes_numbers_of_lerp = [];
      let final_value_indexes_numbers_of_lerp = [];
      const regex = /\d+\.?\d*/g;
      {
        let ocurrencia;
        let start_index;
        let end_index;
        while ((ocurrencia = regex.exec(init_value)) !== null) {
          start_index = regex.lastIndex - ocurrencia[0].length;
          end_index = regex.lastIndex - 1;
          init_value_indexes_numbers_of_lerp.push({
            start_index,
            end_index,
            value: +init_value.substring(start_index, end_index + 1),
          });
        }
      }
      {
        let ocurrencia;
        let start_index;
        let end_index;
        while ((ocurrencia = regex.exec(final_value)) !== null) {
          start_index = regex.lastIndex - ocurrencia[0].length;
          end_index = regex.lastIndex - 1;
          final_value_indexes_numbers_of_lerp.push({
            start_index,
            end_index,
            value: +final_value.substring(start_index, end_index + 1),
          });
        }
      }
      let lineal_interpolation_between_init_and_final = [];


      for (const i in init_value_indexes_numbers_of_lerp) {
        let init = init_value_indexes_numbers_of_lerp[i].value;
        let final = final_value_indexes_numbers_of_lerp[i].value;
        let index_init = init_value_indexes_numbers_of_lerp[i].start_index;
        let index_final = init_value_indexes_numbers_of_lerp[i].end_index;
        let lerp;
        switch (type) {
          case "ends":
            lerp = lerp_ends(init, final,w,init_w,final_w);
            break;
          case "projection":
          default:
            lerp = lerp_projection(init, final,w,init_w,final_w);
            break;
        }
        lineal_interpolation_between_init_and_final.push({
          new_value: lerp.lerp,
          start_index: index_init,
          end_index: index_final,
        });
      }

      lineal_interpolation_between_init_and_final.reverse();
      let new_state_css_lerped = init_value;
      for (const l of lineal_interpolation_between_init_and_final) {
        let left_string = new_state_css_lerped.substring(0, l.start_index);
        let right_string = new_state_css_lerped.substring(
          l.end_index + 1,
          new_state_css_lerped.length
        );
        new_state_css_lerped = left_string + l.new_value + right_string;
      }
      console.log(init_value, final_value, new_state_css_lerped);
      html += `
                .${clase}{
                    ${claseObj.property}:${new_state_css_lerped} !important
                }
            `;
    }
    style_responsive.innerHTML = html;
  }

  // style_responsive.innerHTML = medias

  head.appendChild(style_responsive);
}, 0);
