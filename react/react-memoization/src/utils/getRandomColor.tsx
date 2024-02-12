export const getRandomColor = () => {
  const colors = [
    "red",
    "yellow",
    "orange",
    "green",
    "skyblue",
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Bisque"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}