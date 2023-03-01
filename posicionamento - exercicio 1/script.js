// animando os produtos 

function handleClickSobre() {
  const btn = document.querySelector(".action1");
  btn.classList.add("clicked");

  setTimeout(() => {
    btn.classList.remove("clicked");
  }, 100);
}
function handleClickProdutos() {
  const btn = document.querySelector(".action2");
  btn.classList.add("clicked");

  setTimeout(() => {
    btn.classList.remove("clicked");
  }, 100);
}
function handleClickProdutos() {
  const btn = document.querySelector(".action2");
  btn.classList.add("clicked");

  setTimeout(() => {
    btn.classList.remove("clicked");
  }, 100);
}
function handleClickLojas() {
  const btn = document.querySelector(".action3");
  btn.classList.add("clicked");

  setTimeout(() => {
    btn.classList.remove("clicked");
  }, 100);
}
function handleClickContato() {
  const btn = document.querySelector(".action4");
  btn.classList.add("clicked");

  setTimeout(() => {
    btn.classList.remove("clicked");
  }, 100);
}
function handleClickVerMais() {
  const btn = document.querySelector(".action5");
  btn.classList.add("clicked");

  setTimeout(() => {
    btn.classList.remove("clicked");
  }, 100);
}

// animando a image 

function amplifyImage() {
  const img = document.querySelector(".amplify")
  img.classList.add("hover")
}

function decreaseImage() {
  const img = document.querySelector(".amplify")
  img.classList.remove("hover")
}

