import * as types from '@playbooks/types';
export declare const SlideWrapper: ({ name, open, onClose, tailwind, className, children, ...props }: types.SlideWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare const SlideBackdrop: ({ name, open, onClose, tailwind, ...props }: types.SlideBackdropProps) => import("react/jsx-runtime").JSX.Element;
export declare const Slide: ({ name, open, placement, onClose, tailwind, className, children, ...props }: types.SlideProps) => import("react").ReactPortal;
export declare const SlideHeader: ({ name, onClose, tailwind, className, children, ...props }: types.SlideHeaderProps) => import("react/jsx-runtime").JSX.Element;
export declare const SlideTitle: ({ name, tailwind, className, children, ...props }: types.SlideTitleProps) => import("react/jsx-runtime").JSX.Element;
export declare const SlideBody: ({ name, tailwind, className, children, ...props }: types.SlideBodyProps) => import("react/jsx-runtime").JSX.Element;
export declare const SlideFooter: ({ name, tailwind, className, children, ...props }: types.SlideFooterProps) => import("react/jsx-runtime").JSX.Element;
