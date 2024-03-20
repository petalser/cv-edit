import { signalData } from "./signals/data";
import {
  isPanelEnabled,
  isTooltipEnabled,
  isModalEnabled,
} from "./signals/states";
import Tooltip from "./components/Tooltip";
import { showInput } from "./utils/showInput";
import { useSignals } from "@preact/signals-react/runtime";
import { effect } from "@preact/signals-react";
import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Panel = React.lazy(() => import("./components/Panel"));
const Modal = React.lazy(() => import("./components/Modal"));

const data = signalData.value;

function App() {
  useSignals();

  effect(() => {
    const tooltipTrigger = (event) => {
      isPanelEnabled.value = event.clientX < 30;
    };

    window.addEventListener("mousemove", tooltipTrigger);

    return () => {
      window.removeEventListener("mousemove", tooltipTrigger);
    };
  });

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Modal
          show={isModalEnabled.value}
          onHide={() => (isModalEnabled.value = false)}
        />
        {isPanelEnabled.value && <Panel />}
      </Suspense>

      {isTooltipEnabled.value && <Tooltip />}
      <main id="pageContent" className={`container`}>
        <header className="row">
          <div className="col-md-7 text-start">
            <h1
              style={{ fontSize: "2rem" }}
              id="name"
              onClick={(e) => showInput(e)}
            >
              {data.name.value}
            </h1>

            <h4 id="role" onClick={(e) => showInput(e)}>
              {data.role.value}
            </h4>

            <p id="education" onClick={(e) => showInput(e)}>
              <strong>{data.education.value}</strong>
            </p>
          </div>

          <div className="col-md-5 text-end">
            <span id="contactLink_1" onClick={(e) => showInput(e)}>
              {data.contactLink_1.value}
            </span>
            <br />

            <span id="contactLink_2" onClick={(e) => showInput(e)}>
              {data.contactLink_2.value}
            </span>
            <br />

            <span id="contactLink_3" onClick={(e) => showInput(e)}>
              {data.contactLink_3.value}
            </span>
          </div>
        </header>

        <section className="row m-auto">
          <h4
            id="summaryTitle"
            className="text-center"
            onClick={(e) => showInput(e)}
          >
            {data.summaryTitle.value}
          </h4>

          <p
            id="summaryText"
            className="text-center"
            onClick={(e) => showInput(e)}
          >
            {data.summaryText.value}
          </p>
        </section>

        <section className="row">
          <div className="col-md-7">
            <h4 id="stackTitle" onClick={(e) => showInput(e)}>
              {data.stackTitle.value}
            </h4>

            {data.stackList.values.map((item, key) => {
              return (
                <p key={key} className="mb-0">
                  <strong>{item[0]}</strong>
                  {/* add whitespace */}
                  {` ${item[1]}`}
                  <br />
                </p>
              );
            })}
          </div>

          <div className="col-md-5 text-end">
            <h4 id="langTitle" onClick={(e) => showInput(e)}>
              {data.langTitle.value}
            </h4>
            {data.langList.values.map((item, key) => {
              return (
                <p key={key} className="mb-0">
                  <strong>{item[0]}</strong>
                  {/* add whitespace and brackets */}
                  {` (${item[1]})`}
                  <br />
                </p>
              );
            })}
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-md-12 text-center">
              <h4 id="projectsSectionTitle" onClick={(e) => showInput(e)}>
                {data.projectsSectionTitle.value}
              </h4>{" "}
              <span id="projectsSectionSummary" onClick={(e) => showInput(e)}>
                {data.projectsSectionSummary.value}
              </span>
            </div>
          </div>

          <div className="row d-flex">
            <div id="project_1" className="col">
              <h4 className="card-title">PasswordStash</h4>
              <p className="card-text">
                Побудовано на React.js (TS) із Google Auth та Firestore. Приймає
                текст, шифрує &#34;секретом&#34;, зберігає у БД.
                <br />
                <a
                  href="https://passwordstash.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Лінк
                </a>
              </p>
            </div>

            <div className="col">
              <h4 className="card-title">News</h4>
              <p className="card-text">
                Побудовано з React.js та Sass у чорно-білому стилі. Пошук новин
                з вибором мови.
                <br />
                <a
                  href="https://rapid-news-react.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Лінк
                </a>
              </p>
            </div>

            <div className="col">
              <h4 className="card-title">Quiz</h4>
              <p className="card-text">
                Побудовано (знов) з React.js та Bootstrap. Натисніть
                &#34;Start&#34; та перевірте себе!
                <br />
                <a
                  href="https://tangerine-twilight-004269.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Лінк
                </a>
              </p>
            </div>
          </div>

          <p></p>
          <p>Шукайте ще у моєму гітхабі.</p>
        </section>

        <section>
          <h4 className="text-center">Досвід:</h4>
          <p>
            <strong>Нерелевантний досвід: </strong> Я маю 10+ років досвіду
            роботи як у командах різного розміру, так і соло. Маю досвід
            керування персоналом, але подібні ролі не розглядаю.
          </p>
          <p>
            <strong>Frontend Dev</strong> WebCrafters (2023-сьогодні)
          </p>
          <li className="mb-2">
            Як молодший розробник, я будую окремі React-компоненти для існуючих
            додатків, виконую ручне тестування та інші мануальні задачі.
          </li>
          <p>
            <strong>Web Developer</strong> Freelance (2022-2023)
          </p>
          <li className="mb-2">
            Розробляв веб-додатки різноманітного маштабу від крихітних лендінгів
            до сайтів із широким функціоналом. Гнучкість, респонсивність та
            доступність - основні приоритети.
          </li>
        </section>
      </main>
    </>
  );
}

export default App;
