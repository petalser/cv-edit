import { data } from "../signals/data";

export const showInput = (e) => {
  const inputField = document.createElement("input");
  const parent = e.target.id;

  inputField.value = data.value[parent].value;
  inputField.placeholder = data.value[parent].description;
  inputField.type = "text";

  e.target.textContent = "";

  e.target.appendChild(inputField);

  inputField.focus();

  const inputListener = () => {
    data.value[parent].value = inputField.value;
  };

  const blurListener = () => {
    inputField.removeEventListener("input", inputListener);
    inputField.removeEventListener("blur", blurListener);

    e.target.removeChild(inputField);
    e.target.textContent = data.value[parent].value;
  };

  inputField.addEventListener("input", inputListener);

  inputField.addEventListener("blur", blurListener);
};
