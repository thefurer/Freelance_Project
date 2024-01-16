//Función para agregar un comentario a la lista
function agregarComentario(event) {
    event.preventDefault();
    let nombre = document.getElementById("user_name").value;
    let comentario = document.getElementById("comment").value;
    if (nombre == "" || comentario == "") {
      alert("Por favor, rellene todos los campos");
    } else {
      let li = document.createElement("li");
      li.className = "comment-item";
      let pUser = document.createElement("p");
      pUser.className = "comment-user";
      let fecha = new Date();
      let dia = fecha.getDate();
      let mes = fecha.getMonth() + 1;
      let año = fecha.getFullYear();
      let fechaStr = dia + "/" + mes + "/" + año;
      pUser.textContent = nombre + " - " + fechaStr;
      let pComment = document.createElement("p");
      pComment.className = "comment-text";
      pComment.textContent = comentario;
      li.appendChild(pUser);
      li.appendChild(pComment);
      let ul = document.querySelector(".comments-list");
      ul.appendChild(li);
      document.getElementById("user_name").value = "";
      document.getElementById("comment").value = "";
    }
  }

  let boton = document.getElementById("enviar");
  boton.onclick = agregarComentario;