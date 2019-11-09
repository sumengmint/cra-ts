// less module
declare module '*.module.less' {
  const content: { [className: string]: string };
  export default content;
}

// png module
declare module '*.png';
// jpg module
declare module '*.jpg';
