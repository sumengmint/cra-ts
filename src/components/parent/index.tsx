import React, { useRef, MutableRefObject } from 'react';
import { Child } from '../child/index';

export const Parent: React.FC = () => {
  const myRef: MutableRefObject<any> = useRef<HTMLDivElement>(null);
  const onParent = () => {
    myRef.current.handlerFn();
  };
  return (
    <div>
      <div onClick={onParent}>This is the Parent</div>
      <Child ref={myRef}></Child>
    </div>
  );
};
