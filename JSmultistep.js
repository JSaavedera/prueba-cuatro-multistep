let Form1 = document.getElementById("Form1");
let Form2 = document.getElementById("Form2");
let Form3 = document.getElementById("Form3");
let Form4 = document.getElementById("Form4");

let Next1 = document.getElementById("Next1");
let Next2 = document.getElementById("Next2");
let Back1 = document.getElementById("Back1");
let Back2 = document.getElementById("Back2");
let Back3 = document.getElementById("Back3");
let end = document.getElementById("end");

let progress = document.getElementById("progress");

let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

Next1.addEventListener("click", function () {
  if ($("#email").val().length == 0) {
    alert("Ingrese email");
    return false;
  }

  if ($("#pass").val().length == 0) {
    alert("Ingrese una contraseña");
    return false;
  }

  if ($("#passconfirm").val().length == 0) {
    alert("Confirme su Contraseña");
    return false;
  }

  if (Form1.pass.value != Form1.passconfirm.value) {
    alert("Las contraseñas deben ser iguales");
    return false;
  }

  if (!filter.test(email.value)) {
    alert("Ingrese una direccion email valida");
    email.focus;
    return false;
  } else {
    document.getElementById("list1").innerHTML = email.value;

    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progress.style.width = "240px";
  }
});

Next2.addEventListener("click", function () {
  if ($("#nombre").val().length == 0) {
    alert("Ingrese nombre");
    return false;
  }

  if ($("#apellido").val().length == 0) {
    alert("Ingrese apellido");
    return false;
  }

  if ($("#celular").val().length == 0) {
    alert("Ingrese celular");
    return false;
  } else {
    document.getElementById("list2").innerHTML = nombre.value;
    document.getElementById("list3").innerHTML = apellido.value;
    document.getElementById("list4").innerHTML = celular.value;

    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    progress.style.width = "360px";
  }
});

end.addEventListener("click", function () {
  if ($("#calle").val().length == 0) {
    alert("Ingrese calle");
    return false;
  }

  if ($("#comuna").val().length == 0) {
    alert("Ingrese comuna");
    return false;
  }

  if ($("#ciudad").val().length == 0) {
    alert("Ingrese ciudad");
    return false;
  } else {
    document.getElementById("list5").innerHTML = calle.value;
    document.getElementById("list6").innerHTML = comuna.value;
    document.getElementById("list7").innerHTML = ciudad.value;
    Form3.style.left = "-450px";
    Form4.style.left = "40px";
  }
});

Back1.onclick = () => {
  Form1.style.left = "40px";
  Form2.style.left = "450px";
  progress.style.width = "120px";
};
Back2.onclick = () => {
  Form2.style.left = "40px";
  Form3.style.left = "450px";
  progress.style.width = "240px";
};
Back3.onclick = () => {
  Form3.style.left = "40px";
  Form4.style.left = "450px";
};
const btn = document.getElementById("reload");
btn.addEventListener("click", () => {
  location.reload();
});
