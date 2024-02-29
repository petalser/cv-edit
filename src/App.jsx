import { useState, useEffect } from "react";
import { signalData } from "./signals/data";
import Panel from "./components/Panel";
import Tooltip from "./components/Tooltip";
import { showInput } from "./utils/showInput";

const data = signalData.value;

function App() {
  const [panel, setPanel] = useState(false);
  const [tooltip, setTooltip] = useState(true);
  const [exportStatus, setExportStatus] = useState(true);

  useEffect(() => {
    const showPanel = (e) => {
      setPanel(e.clientX < 40);
    };
    window.addEventListener("mousemove", showPanel);

    return () => {
      removeEventListener("mousemove", showPanel);
    };
  });

  useEffect(() => {
    if (panel) {
      setTooltip(false);
    }
  }, [panel]);

  return (
    <>
      {tooltip && <Tooltip setter={setTooltip} />}
      {panel && <Panel />}
      <main id="pageContent" className="container">
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
            <a
              id="link_1"
              // style={{ color: "blue", textDecoration: "underline" }}
              // href={exportStatus ? data.link_1.value : null}
              onClick={(e) => showInput(e)}
            >
              {data.link_1.value}
            </a>
            <br />
            <a
              href={exportStatus ? data.link_2.value : null}
              style={{ color: "blue", textDecoration: "underline" }}
              onClick={(e) => showInput(e)}
              target="_blank"
              rel="noreferrer"
            >
              {data.link_2.value}
            </a>
            <br />
            <a
              href={exportStatus ? data.link_3.value : null}
              style={{ color: "blue", textDecoration: "underline" }}
              onClick={(e) => showInput(e)}
              target="_blank"
              rel="noreferrer"
            >
              {data.link_3.value}
            </a>
          </div>
        </header>

        <section className="row m-auto">
          <h4 className="text-center">Про мене</h4>
          <p className="text-center">
            У розробці приблизно з 2020-2021рр. Наразі поєдную парт-тайм
            розробку з роботою поза IT. Шукаю посаду фронт-енда (або навіть
            фул-стек трейні) на повний день. Маю інвалідність (бронь від
            призову,вільний виїзд/в&#39;їзд). Також це плюс з точки зору КЗпП
          </p>
        </section>

        <section className="row">
          <div className="col-md-7">
            <h4>Мій арсенал</h4>
            <p>
              <strong>HTML5/CSS3 </strong>
              Bootstrap, Tailwind, SASS, LESS, CSS modules
              <br />
              <strong>Javascript/Typescript </strong>
              ES6+, npm, React.js, React Styled comp-s, React-redux (+toolkit),
              Node.js (Express.js, MongoDB)
              <br />
              <strong>Python </strong>
              Django, tkinter, pyQT
              <br />
            </p>
          </div>

          <div className="col-md-5 text-end">
            <h4>Мої мови</h4>
            <p>
              <strong>Англійська</strong> (C1, сертифікат)
              <br />
              <strong>Українська</strong> (C2)
              <br />
              <strong>Російська</strong> (C2)
              <br />
              <strong>Польська</strong> (B1)
            </p>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-md-12 text-center">
              <h4>Проєкти</h4>
              <p>
                Протягом останніх кількох років я брав участь у різних проєктах,
                а також побудував кілька власноруч. Наприклад:
              </p>
            </div>
          </div>

          <div className="row d-flex">
            <div className="col">
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
