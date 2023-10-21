export const limitString = (texto: string, limite: number = 100): string => {
  if (texto.length <= limite) {
    return texto;
  } else {
    return texto.slice(0, limite - 3) + "...";
  }
};
