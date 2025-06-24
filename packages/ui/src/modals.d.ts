import * as types from '@playbooks/types';
export declare const ModalWrapper: ({ name, open, onClose, tailwind, className, children, ...props }: types.ModalWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare const ModalBackdrop: ({ name, open, onClose, tailwind, ...props }: types.ModalBackdropProps) => import("react/jsx-runtime").JSX.Element;
export declare const Modal: ({ name, open, onClose, tailwind, className, children, ...props }: types.ModalProps) => import("react").ReactPortal;
export declare const ModalHeader: ({ name, onClose, tailwind, className, children, ...props }: types.ModalHeaderProps) => import("react/jsx-runtime").JSX.Element;
export declare const ModalTitle: ({ name, size, tailwind, className, children, ...props }: types.ModalTitleProps) => import("react/jsx-runtime").JSX.Element;
export declare const ModalSubtitle: ({ name, size, tailwind, className, children, ...props }: types.ModalSubtitleProps) => import("react/jsx-runtime").JSX.Element;
export declare const ModalBody: ({ name, size, tailwind, className, children, ...props }: types.ModalBodyProps) => import("react/jsx-runtime").JSX.Element;
export declare const ModalFooter: ({ name, tailwind, className, children, ...props }: types.ModalFooterProps) => import("react/jsx-runtime").JSX.Element;
