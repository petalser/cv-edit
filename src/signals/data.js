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
});
