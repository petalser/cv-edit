import { signal } from "@preact/signals-react";

export const signalData = signal({
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
  contactLink_1: {
    description: "Contact link #1 (email?)",
    value: "petrichuck.a@gmail.com",
  },
  contactLink_2: {
    description: "Contact link #2",
    value: "github.com/petalser",
  },
  contactLink_3: {
    description: "Contact link #3",
    value: "petrichuck.a@gmail.com",
  },
  summaryTitle: {
    description: 'Title for "summary" section',
    value: "Про мене",
  },
  summaryText: {
    description: 'Actual "summary"',
    value: `У розробці приблизно з 2020-2021рр. Наразі поєдную парт-тайм
    розробку з роботою поза IT. Шукаю посаду фронт-енда (або навіть
    фул-стек трейні) на повний день. Маю інвалідність (бронь від
    призову,вільний виїзд/в&#39;їзд). Також це плюс з точки зору КЗпП`,
  },
  stackTitle: {
    description: 'Title for "my stack" section',
    value: "Мій арсенал",
  },
  stackList: {
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
  langTitle: {
    description: 'Title for "my languages" section',
    value: "Мої мови",
  },
  langList: {
    placeholders: ["Language", "Level, certificate"],
    values: [
      ["Англійська", "C1, сертифікат"],
      ["Українська", "C2"],
      ["Російська", "C2"],
      ["Польська", "B1"],
    ],
  },
  projectsSectionTitle: {
    description: 'Title for "my projects" section',
    value: "Мої проєкти",
  },
  projectsSectionSummary: {
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
      description: 'Link (with "http")',
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
      description: 'Link (with "http")',
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
      description: 'Link (with "http")',
      value: "",
    },
  },
  experienceTitle: {
    description: 'Title for "Experience" section ("Experience" recommended)',
    value: "",
  },
  experienceSubtitle: {
    description: 'Description for "Experience" section',
    value: "",
  },
  experiencePeriodLatest: {
    role: "",
    company: "",
    period: "",
    description: "",
  },
  experiencePeriodPreviaus: {
    role: "",
    company: "",
    period: "",
    description: "",
  },
});

console.log(Object.keys(signalData.value));
