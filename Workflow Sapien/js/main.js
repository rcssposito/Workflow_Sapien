function exibirSenha() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  }
  else {
    x.type = "password";
  }
}

function apagarValor() {
  document.getElementByClass("fields").value = " ";
}


function login() {
  let userm = "master";
  let passm = "master";
  let userd = "dev";
  let passd = "dev";

  let username = document.loginform.user.value;
  let password = document.loginform.pass.value;

  if (username == userm && password == passm) {
    window.location = "master.html";
  }
  if (username == userd && password == passd) {
    window.location = "dev.html";
    alert("dev access");
  }
  else {
    alert('Senha ou usuário incorretos');
  }
  apagarValor()
}

function openModal(){
  document.getElementById('id01').style.display = 'block';
}
function closeModal() {
  document.getElementById('id01').style.display = 'none';
}
function openModal2(){
  document.getElementById('id02').style.display = 'block';
}
function closeModal2() {
  document.getElementById('id02').style.display = 'none';
}
function openModal3(){
  document.getElementById('id03').style.display = 'block';
}
function closeModal3() {
  document.getElementById('id03').style.display = 'none';
}