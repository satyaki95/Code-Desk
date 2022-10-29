import React from "react";
import { createContext } from "react";

interface PopupFields {
  value: boolean;
  type: string;
  identifier: {
    folderId: string;
    cardId: string;
  };
}
interface ModalContextType {
  isOpen: PopupFields;
  openModal: (value: PopupFields) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider({ children }: { children: any }) {
  const intialPopupFields: PopupFields = {
    value: false,
    type: "",
    identifier: {
      folderId: "",
      cardId: "",
    },
  };

  const [isOpen, setIsOpen] = React.useState<PopupFields>({
    ...intialPopupFields,
  });
  const openModal = (value: PopupFields) => {
    setIsOpen(value);
  };
  const closeModal = () => {
    setIsOpen({ ...intialPopupFields });
  };

  const makeAvailableGlobally: ModalContextType = {
    isOpen: isOpen,
    openModal: openModal,
    closeModal: closeModal,
  };

  return (
    <ModalContext.Provider value={makeAvailableGlobally}>
      {children}
    </ModalContext.Provider>
  );
}
