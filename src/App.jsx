import { signalData } from "./signals/data";
import {
  isPanelEnabled,
  isPanelHovered,
  isTooltipEnabled,
  isExported,
  modalType,
} from "./signals/states";
import Tooltip from "./components/Tooltip";
import Card from "./components/Card";
import { showInput } from "./utils/showInput";
import { useSignals } from "@preact/signals-react/runtime";
import { effect } from "@preact/signals-react";
import React, { Suspense, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const Panel = React.lazy(() => import("./components/Panel"));
const Modal = React.lazy(() => import("./components/Modal"));

function App() {
  useSignals();

  let data = signalData.value;

  const [targetID, setTargetID] = useState(null);

  effect(() => {
    const panelTrigger = (event) => {
      isPanelEnabled.value = event.clientX < 30 || isPanelHovered.value;
    };
    window.addEventListener("mousemove", panelTrigger);
    return () => {
      window.removeEventListener("mousemove", panelTrigger);
    };
  });

  const handleShowCard = (id, type) => {
    setTargetID(id);
    modalType.value = type;
  };

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        {modalType.value !== "blank" && (
          <Modal
            show={modalType.value !== "blank"}
            onHide={() => (modalType.value = "blank")}
            id={targetID}
            modalType={modalType.value}
          />
        )}
        {isPanelEnabled.value && <Panel />}
      </Suspense>

      {isTooltipEnabled.value && <Tooltip />}
      <main id="pageContent" className={`container`}>
        <header className="row">
          <div className="col-md-7 text-start">
            <h1 id="name" className="hoverFX" onClick={(e) => showInput(e)}>
              {/* First and last name */}
              {data.name.value}
            </h1>

            <h2 id="role" className="hoverFX" onClick={(e) => showInput(e)}>
              {/* Role */}
              {data.role.value}
            </h2>

            <p id="education" className="hoverFX" onClick={(e) => showInput(e)}>
              {/* Education */}
              <strong>{data.education.value}</strong>
            </p>
          </div>

          <div className="col-md-5 text-end">
            <span
              id="contactLink_1"
              className="hoverFX"
              onClick={(e) => showInput(e)}
            >
              {/* Contacts[] */}
              {data.contactLink_1.value}
            </span>
            <br />

            <span
              id="contactLink_2"
              className="hoverFX"
              onClick={(e) => showInput(e)}
            >
              {/* Contacts[] */}
              {data.contactLink_2.value}
            </span>
            <br />

            <span
              id="contactLink_3"
              className="hoverFX"
              onClick={(e) => showInput(e)}
            >
              {/* Contacts[] */}
              {data.contactLink_3.value}
            </span>
          </div>
        </header>

        <section className="row m-auto">
          <h3
            id="summaryTitle"
            className="text-center hoverFX"
            onClick={(e) => showInput(e)}
          >
            {/* Summary title */}
            {data.summaryTitle.value}
          </h3>

          <p
            id="summaryText"
            className="text-center hoverFX"
            onClick={(e) => showInput(e)}
          >
            {/* Summary itself */}
            {data.summaryText.value}
          </p>
        </section>

        <section className="row">
          <div className="col-md-7">
            <h3
              id="stackTitle"
              className=" hoverFX"
              onClick={(e) => showInput(e)}
            >
              {/* Title for stack section */}
              {data.stackTitle.value}
            </h3>
            <div
              className="hoverFX"
              onClick={() => handleShowCard("stackList", "dynamic")}
            >
              {/* Stack section filler */}
              {data.stackList.values.map((item, key) => {
                return (
                  <p key={key} className="mb-0 hoverFX">
                    <strong>{item[0]}</strong>
                    {/* add whitespace */}
                    {` ${item[1]}`}
                    <br />
                  </p>
                );
              })}
            </div>
          </div>

          <div className="col-md-5 text-end">
            <h3
              id="langTitle"
              className=" hoverFX"
              onClick={(e) => showInput(e)}
            >
              {/* Title for languages section */}
              {data.langTitle.value}
            </h3>
            <div
              className="hoverFX"
              onClick={() => handleShowCard("langList", "dynamic")}
            >
              {/* Languages section filler */}
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
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 id="projectsSectionTitle" onClick={(e) => showInput(e)}>
                {/* Title for projects section */}
                {data.projectsSectionTitle.value}
              </h3>
              {/* Projects section summary (if provided) */}
              {data.projectsSectionSummary.value && (
                <span id="projectsSectionSummary" onClick={(e) => showInput(e)}>
                  {data.projectsSectionSummary.value}
                </span>
              )}
            </div>
          </div>
          {/* Projects itself */}
          <div className="row d-flex flex-row">
            <Card
              content={data.project_1}
              isExported={isExported.value}
              handleClick={() => handleShowCard("project_1", "static")}
            />
            <Card
              content={data.project_2}
              isExported={isExported.value}
              handleClick={() => handleShowCard("project_2", "static")}
            />
            <Card
              content={data.project_3}
              isExported={isExported.value}
              handleClick={() => handleShowCard("project_3", "static")}
            />
          </div>
        </section>

        <section>
          {/* Title for experience section */}
          <h3 className="text-center">{data.experienceTitle.value}</h3>
          {/* Summary for experience section (if provided) */}
          {data.experienceSubtitle.value && (
            <p>{data.experienceSubtitle.value}</p>
          )}
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
