import { signal } from "@preact/signals-react";

export const data = signal({
  name: {
    description: "Your name",
    value: "Oleksandr Petrychuk",
  },
  role: {
    description: "Role you're looking for",
    value: "Front-end dev",
  },
});
