import { createGlobalStyle } from 'styled-components';

export const lighttheme = {
  colorBg: "rgb(250 250 250)",
  colorSurface: "rgb(255 255 255)",
  colorBorder: "rgb(227 228 241)",
  colorTextActive: "rgb(72 75 106)",
  colorTextCompleted: "rgb(210 211 219)",
  colorText: "rgb(147 148 165)",
  boxShadow: "0px 35px 50px -15px rgb(194 195 214 / 50%)",
  gradient: "linear-gradient(to bottom right, rgb(87 221 255), rgb(192 88 243))",
  blue: "rgb(58 123 253)",
  bgImageDesktop: "url('https://github.com/ApplePieGiraffe/todo-app/blob/main/public/assets/img/bg-desktop-light.jpg?raw=true')",
  bgImageMobile: "url('https://github.com/ApplePieGiraffe/todo-app/blob/main/public/assets/img/bg-mobile-light.jpg?raw=true')"
};

export const darktheme = {
  colorBg: 'rgb(22 23 34)',
  colorSurface: 'rgb(37 39 60)',
  colorBorder: 'rgb(57 58 75)',
  colorTextActive: 'rgb(202 205 232)',
  colorTextCompleted: 'rgb(77 80 102)',
  colorText: 'rgb(92 95 127)',
  boxShadow: '0px 35px 50px -15px rgb(0 0 0 / 50%)',
  gradient: "linear-gradient(to bottom right, rgb(87 221 255), rgb(192 88 243))",
  blue: "rgb(58 123 253)",
  bgImageDesktop: "url('https://github.com/ApplePieGiraffe/todo-app/blob/main/public/assets/img/bg-desktop-dark.jpg?raw=true')",
  bgImageMobile: "url('https://github.com/ApplePieGiraffe/todo-app/blob/main/public/assets/img/bg-mobile-dark.jpg?raw=true')"
};

export const GlobalStyles = createGlobalStyle`
  *:focus {
    outline: 2px dotted ${props => props.theme.colorTextActive}
  }

  * {
    transition: 0.5s ease-in-out;
    overflow-x: hidden;
  }
`;
