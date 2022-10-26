let chocolate = 0;
let fresa = 0;
let limon = 0;
let vainilla = 0;
let betun = 0;
let frutas = 0;
let figuras = 0;
let dibujo = 0;
document.getElementById("amountdibujo").innerHTML = dibujo;
document.getElementById("amountbetun").innerHTML = betun;
document.getElementById("amountfrutas").innerHTML = frutas;
document.getElementById("amountfiguras").innerHTML = figuras;
document.getElementById("amountvainilla").innerHTML = vainilla;
document.getElementById("amountChocolate").innerHTML = chocolate;
document.getElementById("amountfresa").innerHTML = fresa;
document.getElementById("amountlimon").innerHTML = limon;

chocolatePlus = () => {
  chocolate++;
  document.getElementById("amountChocolate").innerHTML = chocolate;
};

chocolateMinus = () => {
  if (chocolate != 0) {
    chocolate--;
    document.getElementById("amountChocolate").innerHTML = chocolate;
  } else {
    document.getElementById("amountChocolate").innerHTML = 0;
  }
};

fresaPlus = () => {
  fresa++;
  document.getElementById("amountfresa").innerHTML = fresa;
};

fresaMinus = () => {
  if (fresa != 0) {
    fresa--;
    document.getElementById("amountfresa").innerHTML = fresa;
  } else {
    document.getElementById("amountfresa").innerHTML = 0;
  }
};

limonPlus = () => {
  limon++;
  document.getElementById("amountlimon").innerHTML = limon;
};

limonMinus = () => {
  if (limon != 0) {
    limon--;
    document.getElementById("amountlimon").innerHTML = limon;
  } else {
    document.getElementById("amountlimon").innerHTML = 0;
  }
};

vainillaPlus = () => {
  vainilla++;
  document.getElementById("amountvainilla").innerHTML = vainilla;
};

vainillaMinus = () => {
  if (vainilla != 0) {
    vainilla--;
    document.getElementById("amountvainilla").innerHTML = vainilla;
  } else {
    document.getElementById("amountvainilla").innerHTML = 0;
  }
};

betunPlus = () => {
  betun++;
  document.getElementById("amountbetun").innerHTML = betun;
};

betunMinus = () => {
  if (betun != 0) {
    betun--;
    document.getElementById("amountbetun").innerHTML = betun;
  } else {
    document.getElementById("amountbetun").innerHTML = 0;
  }
};

frutasPlus = () => {
  frutas++;
  document.getElementById("amountfrutas").innerHTML = frutas;
};

frutasMinus = () => {
  if (frutas != 0) {
    frutas--;
    document.getElementById("amountfrutas").innerHTML = frutas;
  } else {
    document.getElementById("amountfrutas").innerHTML = 0;
  }
};

figurasPlus = () => {
  figuras++;
  document.getElementById("amountfiguras").innerHTML = figuras;
};

figurasMinus = () => {
  if (figuras != 0) {
    figuras--;
    document.getElementById("amountfiguras").innerHTML = figuras;
  } else {
    document.getElementById("amountfiguras").innerHTML = 0;
  }
};

dibujoPlus = () => {
  dibujo++;
  document.getElementById("amountdibujo").innerHTML = dibujo;
};

dibujoMinus = () => {
  if (dibujo != 0) {
    dibujo--;
    document.getElementById("amountdibujo").innerHTML = dibujo;
  } else {
    document.getElementById("amountdibujo").innerHTML = 0;
  }
};
