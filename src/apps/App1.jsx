import Input from "./components/Input";
import { useEffect } from "react";

function App() {
  const print = () => window.print();

  useEffect(() => {
    print();
  }, []);

  return (
    <main className="container">
      <header className="row">
        <div className="col-md-7 text-start">
          <h1 style={{ fontSize: "2rem" }}>
            <Input text={"Petrychuk Oleksandr"} placeholder={"Name"} />
          </h1>
          <h4>
            <Input text={"Frontend Developer"} placeholder={"Role"} />
          </h4>
          <p>
            <strong>
              <Input
                text={"Kharkiv Petro Vasylenko National Technical University"}
                placeholder={"Education"}
              />
            </strong>
          </p>
        </div>

        <div className="col-md-5 text-end">
          <a href="mailto:sashko.sashko@yahoo.com" className="">
            sashko.sashko@yahoo.com
          </a>
          <br />
          <a
            href="https://github.com/petalser"
            target="_blank"
            rel="noreferrer"
          >
            github.com/petalser
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/oleksandr-petrychuk/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/oleksandr-petrychuk
          </a>
        </div>
      </header>

      <section className="row m-auto">
        <h4 className="text-center">Summary</h4>
        <p className="text-center">
          I am a switcher. Currently I&#39;m combining part-time development
          with non-related to software full-time job. Looking for a full-time
          frontend (or even fullstack trainee) role.
        </p>
      </section>

      <section className="row">
        <div className="col-md-7">
          <h4>Techs I use</h4>
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
            <strong>Codewars rates:</strong>
            <br />
            Python - 5kyu (23%), JS - 6kyu (61%)
          </p>
        </div>

        <div className="col-md-5 text-end">
          <h4>Languages I speak</h4>
          <p>
            <strong>English</strong> (C1)
            <br />
            <strong>Ukrainian</strong> (C2)
            <br />
            <strong>Russian</strong> (C2)
            <br />
            <strong>Polish</strong> (B1)
          </p>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="col-md-12 text-center">
            <h4>Projects</h4>
            <p>
              For last few years I&#39;ve participated a bunch of projects and
              made some by my own. Here&#39;s a few:
            </p>
          </div>
        </div>

        <div className="row d-flex">
          <div className="col">
            <h4 className="card-title">Password Store</h4>
            <p className="card-text">
              Built with React.js (TS) and GCP (Google Auth and Firestore).
              <br />
              Provide 1-3 inputs and &#34;secret key&#34; and your data will be
              encoded and sent to DB.
              <br />
              <a
                href="https://passwordstash.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
          </div>
          <div className="col">
            <h4 className="card-title">News App</h4>
            <p className="card-text">
              Built with React.js and Sass in black-and-white color scheme.
              Search, choose language for your results. Hover over element to
              see description, click to read
              <br />
              <a
                href="https://rapid-news-react.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
          </div>
          <div className="col">
            <h4 className="card-title">Quiz</h4>
            <p className="card-text">
              Built with React.js and Bootstrap (no custom styles). Press
              &#34;Start&#34;, get 10 questions and try your best!.
              <br />
              <a
                href="https://tangerine-twilight-004269.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
          </div>
        </div>

        <p>
          See more on my GitHub. It doesn&#39;t contain my real projects, but
          shows approximate level of my knowledge
        </p>
      </section>
      <section>
        <h4 className="text-center">Experience:</h4>
        <p>
          <strong>Irrelevant experience. </strong>I have previously held (for
          10+ years) various roles both as an employee (in teams of different
          sizes) and as a self-employed person in various industries.
        </p>
        <p>
          <strong>Web Developer</strong> Freelance (2022-present)
        </p>
        <li className="mb-2">
          Creating landing pages, web-portfolios and web-applications of any
          comlexity. Familiar with “Pixel Perfect”-methodology. Flexibility and
          accessibility – by default.
        </li>
        <p>
          <strong>Software Developer</strong> Freelance (2021-2022)
        </p>
        <li className="mb-2">
          Designing and developing python-based bots and desktop apps.
          Collecting and processing data.
        </li>
      </section>
    </main>
  );
}

export default App;
