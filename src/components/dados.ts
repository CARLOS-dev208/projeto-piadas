export const getDadosListaNegra = (): string => {
  const listaNegs = [
    "nsfw",
    "religious",
    "political",
    "racist",
    "sexist",
    "explicit",
  ];

  const listaNeg = [...document.querySelectorAll("input")]
    .filter((item) => item.checked)
    .map((res) => res.value)
    .filter((item) => listaNegs.includes(item))
    .toString();

  return listaNeg;
};

export const getDadosCategoria = (): string => {
  const Categorias = [
    "Any",
    "Programming",
    "Miscellaneous",
    "Dark",
    "Pun",
    "Spooky",
    "Christmas",
  ];

  const Categoria = [...document.querySelectorAll("input")]
    .filter((item) => item.checked)
    .map((res) => res.value)
    .filter((item) => Categorias.includes(item))
    .toString();
  return Categoria;
};
