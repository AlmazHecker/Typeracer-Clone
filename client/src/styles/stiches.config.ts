import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      Roboto: "Roboto",
    },
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
      3: "17px",
      4: "20px",
      5: "24px",
    },
    sizes: {
      desktop: "60%",
    },
  },

  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    paddingX: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: string) => ({ paddingTop: value, paddingBottom: value }),
  },
});
