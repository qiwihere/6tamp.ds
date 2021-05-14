import styled from "styled-components";
import loader from "./loader.svg";

const Overlay = styled.div`
  display: ${(state) => (!state.visible ? "none" : "flex")};
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.15);

  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${loader});
  background-repeat: no-repeat;
  background-position: center;
`;

export { Overlay, Spinner };
