import { signal, effect } from "@preact/signals-react";

export const isPanelEnabled = signal(false);

export const isPanelHovered = signal(false);

export const isTooltipEnabled = signal(true);

export const isExported = signal(false);

export const modalType = signal("blank");

effect(() => {
  if (isExported.value) {
    setTimeout(() => {
      isExported.value = false;
    }, 500);
  }
});

effect(() => {
  if (isPanelEnabled.value) {
    isTooltipEnabled.value = false;
  }
});
