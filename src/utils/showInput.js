import { signalData } from "../signals/data";

const data = signalData.value;

export const showInput = (e) => {
  const inputField = document.createElement("input");
  const parentId = e.target.id;
  const parent = data[parentId];

  inputField.type = "text";
  inputField.value = parent.value;
  inputField.placeholder = parent.description;

  e.target.textContent = "";

  e.target.appendChild(inputField);

  inputField.focus();

  const inputListener = () => {
    parent.value = inputField.value;
  };

  const blurListener = () => {
    inputField.removeEventListener("input", inputListener);
    inputField.removeEventListener("blur", blurListener);

    e.target.removeChild(inputField);
    e.target.textContent = parent.value;
  };

  inputField.addEventListener("input", inputListener);

  inputField.addEventListener("blur", blurListener);
};
