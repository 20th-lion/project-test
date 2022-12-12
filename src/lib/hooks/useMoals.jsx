import React, { useContext } from "react";
import { ModalsDispatchContext } from "../../component/modal/ModalsContext";

export default function useMoals() {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (Component, props) => {
    open(Component, props);
  };
  const closeModal = (Component) => {
    close(Component);
  };
  return {
    openModal,
    closeModal,
  };
}
