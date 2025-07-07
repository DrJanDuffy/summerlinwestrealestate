import { useState, useCallback } from "react";

export function useLeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("Website");

  const openModal = useCallback((modalSource = "Website") => {
    setSource(modalSource);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    source,
    openModal,
    closeModal,
  };
}
