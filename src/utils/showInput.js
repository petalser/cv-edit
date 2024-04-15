import { signalData } from "../signals/data";

const data = signalData.value;

export const showInput = (e) => {
  const parentId = e.target.id;
  const parent = data[parentId];
  const inputField = document.createElement("input");
  inputField.type = "text";
  console.log(inputField);
  inputField.placeholder = parent.description;
  inputField.classList.add("form-control", "me-2");
  inputField.value = parent.value;

  e.target.textContent = "";

  e.target.appendChild(inputField);

  inputField.focus();

  const inputListener = () => {
    parent.value = inputField.textContent;
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
