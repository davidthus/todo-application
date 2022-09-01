import { createGlobalStyle } from 'styled-components';

export const lighttheme = {
  colorBg: "rgb(250 250 250)",
  colorSurface: "rgb(255 255 255)",
  colorBorder: "rgb(227 228 241)",
  colorTextActive: "rgb(72 75 106)",
  colorTextCompleted: "rgb(210 211 219)",
  colorText1: "rgb(147 148 165)",
  boxShadow: "0px 35px 50px -15px rgb(194 195 214 / 50%)",
};

export const darktheme = {
  colorBg: 'rgb(22 23 34)',
  colorSurface: 'rgb(37 39 60)',
  colorBorder: 'rgb(57 58 75)',
  colorTextActive: 'rgb(202 205 232)',
  colorTextCompleted: 'rgb(77 80 102)',
  colorText1: 'rgb(92 95 127)',
  boxShadow: '0px 35px 50px -15px rgb(0 0 0 / 50%)'
};

export const GlobalStyles = createGlobalStyle`
  
`;
