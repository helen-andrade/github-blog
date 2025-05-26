import { css } from "styled-components";

export const mixins = {
  fonts: {
    titleL: css`
      font-family: "Nunito", sans-serif;
      font-size: 24px;
      line-height: 130%;
      font-weight: 800;
    `,

    titleM: css`
      font-family: "Nunito", sans-serif;
      font-size: 20px;
      line-height: 160%;
      font-weight: 100;
    `,

    titleS: css`
      font-family: "Nunito", sans-serif;
      font-size: 18px;
      line-height: 160%;
      font-weight: 800;
    `,

    textM: css`
      font-family: "Nunito", sans-serif;
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;
    `,

    textS: css`
      font-family: "Nunito", sans-serif;
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
    `,

    link: css`
      font-family: "Nunito", sans-serif;
      font-size: 0.625rem;
      line-height: 130%;
      font-weight: 700;
    `,
  },
};
