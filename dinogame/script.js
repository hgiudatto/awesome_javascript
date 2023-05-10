const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;

const worldElem = document.querySelector("[data-world");

const update = (time) => {
  window.requestAnimationFrame(update);
};
window.requestAnimationFrame(update);

const setPixelToWorldScale = () => {
  let worldToPixelScale;
  window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT
    ? (worldToPixelScale = window.innerWidth / WORLD_WIDTH)
    : (worldToPixelScale = window.innerHeight / WORLD_HEIGHT);

  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
};

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);
