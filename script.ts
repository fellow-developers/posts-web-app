import { clickHandler } from "./src/main";

window.onload = () => {
  const button = document.getElementById(
    "fetch-api-button"
  ) as HTMLButtonElement;
  button.addEventListener("click", clickHandler);
};
