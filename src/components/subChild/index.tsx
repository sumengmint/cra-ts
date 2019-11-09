import React, { useImperativeHandle, forwardRef } from 'react';

export interface Cprops {
  className?: string;
  ref: HTMLDivElement;
}

export interface CRefs {
  handlerFn(): void;
}

export const SubChild = forwardRef<CRefs, Cprops>((props, ref) => {
  const clickMe = () => {
    console.log('sub clicked');
  };
  useImperativeHandle(ref, () => ({
    handlerFn: clickMe
  }));
  return <div>This is the SubChild</div>;
});
SubChild.displayName = 'subChild';
