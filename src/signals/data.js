import { signal } from "@preact/signals-react";

export const signalData = signal({
  personal: {
    name: {
      description: "Your name",
      value: "Oleksandr Petrychuk",
    },
    role: {
      description: "Role you're looking for",
      value: "Front-end dev",
    },
    education: {
      description: "Education (university, college, courses)",
      value: "ХНТУСГ",
    },
  },
  contacts: {
    link_1: {
      description: "Contact link #1 (email?)",
      value: "petrichuck.a@gmail.com",
    },
    link_2: {
      description: "Contact link #2",
      value: "github.com/petalser",
    },
    link_3: {
      description: "Contact link #3",
      value: "petrichuck.a@gmail.com",
    },
  },
  summary: {
    title: {
      description: 'Title for "summary" section',
      value: "Про мене",
    },
    text: {
      description: 'Actual "summary"',
      value: `У розробці приблизно з 2020-2021рр. Наразі поєдную парт-тайм
    розробку з роботою поза IT. Шукаю посаду фронт-енда (або навіть
    фул-стек трейні) на повний день. Маю інвалідність (бронь від
    призову,вільний виїзд/в&#39;їзд). Також це плюс з точки зору КЗпП`,
    },
  },
  stack: {
    title: {
      description: 'Title for "my stack" section',
      value: "Мій арсенал",
    },
    list: {
      placeholders: [
        "Title (programming language, field of knowledge",
        "Details (frameworks, libraries, etc",
      ],
      values: [
        ["HTML5/CSS3", "Bootstrap, Tailwind, SASS, LESS, CSS modules"],
        [
          "Javascript/Typescript",
          "ES6+, npm, React.js, React Styled comp-s, React-redux (+toolkit), Node.js (Express.js, MongoDB)",
        ],
        ["Python", "Django, tkinter, pyQT"],
      ],
    },
  },
  languages: {
    title: {
      description: 'Title for "my languages" section',
      value: "Мої мови",
    },
    list: {
      placeholders: ["Language", "Level, certificate"],
      values: [
        ["Англійська", "C1, сертифікат"],
        ["Українська", "C2"],
        ["Російська", "C2"],
        ["Польська", "B1"],
      ],
    },
  },
  projects: {
    title: {
      description: 'Title for "my projects" section',
      value: "Мої проєкти",
    },
    summary: {
      description: 'Summary for "my projects" section',
      value:
        "Протягом останніх кількох років я брав участь у різних проєктах, а також побудував кілька власноруч. Наприклад:",
    },
    project_1: {
      title: {
        description: "Project name",
        value: "",
      },
      subtitle: {
        description: "Few words about that project",
        value: "",
      },
      link: {
        description: 'with "http"',
        value: "",
      },
    },
    project_2: {
      title: {
        description: "Project name",
        value: "",
      },
      subtitle: {
        description: "Few words about that project",
        value: "",
      },
      link: {
        description: 'with "http"',
        value: "",
      },
    },
    project_3: {
      title: {
        description: "Project name",
        value: "",
      },
      subtitle: {
        description: "Few words about that project",
        value: "",
      },
      link: {
        description: 'with "http"',
        value: "",
      },
    },
  },
  experience: {
    title: {
      description: 'Title for "Experience" section ("Experience" recommended)',
      value: "",
    },
    subtitle: {
      description: 'Description for "Experience" section',
      value: "",
    },
    periodLatest: {
      role: "",
      company: "",
      period: "",
      description: "",
    },
    periodPreviaus: {
      role: "",
      company: "",
      period: "",
      description: "",
    },
  },
});
