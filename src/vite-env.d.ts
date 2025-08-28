// Для SVG
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// Добавляем декларацию для всех CSS-модулей
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}