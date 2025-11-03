import { useEffect } from "react";

interface ModalWrapperClassTogglerProps {
  classes?: string[];
}

export default function ModalWrapperClassToggler({
  classes = [],
}: ModalWrapperClassTogglerProps) {
  useEffect(() => {
    const modalWrapper = document.querySelector<HTMLElement>(".modals-wrapper");
    if (!modalWrapper) return;

    classes.forEach((className) => {
      modalWrapper.classList.add(className);
    });

    return () => {
      classes.forEach((className) => {
        modalWrapper.classList.remove(className);
      });
    };
  }, [classes]); // rerun effect if class list changes

  return null;
}
