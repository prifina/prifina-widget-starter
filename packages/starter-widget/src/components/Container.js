import styled from "styled-components";
import { color, variant } from "styled-system";

export const Container = styled("div")(
  {
    boxShadow: 0,
    padding: 5,
    borderRadius: 10,
    background: "#100F0F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  variant({
    variants: {
      small: {
        height: 300,
        width: 300,
      },
      medium: {
        height: 616,
        width: 616,
      },
      mediumVertical: {
        height: 616,
        width: 300,
      },
      mediumHorizontal: {
        height: 300,
        width: 616,
      },
    },
  })
);
