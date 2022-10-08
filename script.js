elemento(11);

function elemento(valor) {
  for (i = 0; i <= valor; i++)
    if (i % 2 === 0) console.log(i, "Par");
    else {
      console.log(i, "Impar");
    }
}
