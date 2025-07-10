declare module 'react-modal' {
  import { ComponentType, ReactNode } from 'react';

  export interface ModalProps {
    isOpen: boolean;
    onRequestClose?: () => void;
    onAfterOpen?: () => void;
    onAfterClose?: () => void;
    shouldCloseOnOverlayClick?: boolean;
    shouldCloseOnEsc?: boolean;
    shouldReturnFocusAfterClose?: boolean;
    preventScroll?: boolean;
    bodyOpenClassName?: string;
    htmlOpenClassName?: string;
    ariaHideApp?: boolean;
    overlayClassName?: string | object;
    className?: string | object;
    portalClassName?: string;
    overlayRef?: (overlay: HTMLDivElement) => void;
    contentRef?: (content: HTMLDivElement) => void;
    overlayElement?: (props: any, contentEl: ReactNode) => ReactNode;
    contentElement?: (props: any, children: ReactNode) => ReactNode;
    parentSelector?: () => HTMLElement;
    role?: string;
    contentLabel?: string;
    aria?: object;
    data?: object;
    testId?: string;
    id?: string;
    children?: ReactNode;
    overlay?: boolean;
    overlayRef?: (overlay: HTMLDivElement) => void;
    contentRef?: (content: HTMLDivElement) => void;
    overlayElement?: (props: any, contentEl: ReactNode) => ReactNode;
    contentElement?: (props: any, children: ReactNode) => ReactNode;
    parentSelector?: () => HTMLElement;
    role?: string;
    contentLabel?: string;
    aria?: object;
    data?: object;
    testId?: string;
    id?: string;
    children?: ReactNode;
    overlay?: boolean;
  }

  const Modal: ComponentType<ModalProps>;
  export default Modal;

  export function setAppElement(element: HTMLElement | string): void;
} 