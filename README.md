# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

### Screenshot
[Screen Shoot1](./next-js/public/images/Screenshot%202023-04-09%20at%2014-30-01%20QR%20Code%20FrontEnd%20Challenge.png)


### Built with

- Semantic HTML5 markup
- tailwind
- [Next.js](https://nextjs.org/) - React framework

### What I learned
I learn how to add and use a local font into your project using tailwind 

```js
export const outfit_400 = localFont({
    src: [
      {
        path: "../../public/fonts/Outfit-VariableFont_wght.ttf",
        weight: "400",
      },
    ],
    variable: "--font-outfit-400",
  });
```
```tailwind
      fontFamily: {
        merryWeather_400: ["var(--font-outfit-400)"],
        merryWeather_700: ["var(--font-outfit-700)"],
      },
```
