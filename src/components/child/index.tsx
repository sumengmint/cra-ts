import React, {
  useRef,
  MutableRefObject,
  forwardRef,
  useImperativeHandle
} from 'react';
import { SubChild } from '../subChild/index';

export interface Cprops {
  className?: string;
  ref: HTMLDivElement;
}

export interface CRefs {
  handlerFn(): void;
}

export const Child = forwardRef<CRefs, Cprops>((props, ref) => {
  const ChildRef: MutableRefObject<any> = useRef<HTMLDivElement>(null!);
  const subClick = () => {
    ChildRef.current.handlerFn();
  };
  const clickMe = () => subClick();
  useImperativeHandle(ref, () => ({
    handlerFn: clickMe
  }));
  return (
    <div>
      <div onClick={subClick}>This is the Child</div>
      <SubChild ref={ChildRef}></SubChild>
    </div>
  );
});
Child.displayName = 'child';
