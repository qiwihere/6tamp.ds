import styled, { css } from "styled-components";
import style from "../style";
import { Link as RouterLink } from "react-router-dom";

const baseStyle = css`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  margin: 10px 0;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  border-radius: 12px;
  padding: 15px;

  color: ${(state) => style.buttons[state.type].text};
  background: ${(state) => style.buttons[state.type].background};
  border: 1px solid ${(state) => style.buttons[state.type].border};

  :hover {
    color: ${(state) => style.buttons[`${state.type}_inverse`].text};
    background: ${(state) => style.buttons[`${state.type}_inverse`].background};
    border: 1px solid
      ${(state) => style.buttons[`${state.type}_inverse`].border};
  }
  :disabled {
    color: ${(state) => style.buttons[`${state.type}_disabled`].text};
    background: ${(state) =>
      style.buttons[`${state.type}_disabled`].background};
    border: 1px solid
      ${(state) => style.buttons[`${state.type}_disabled`].border};
  }

  text-decoration: none;
  display: ${(state) => state.display};
  width: ${(state) => (state.display === "block" ? "100%" : "initial")};
  cursor: ${(state) => (state.disabled ? "" : "pointer")};
`;

export const Btn = styled.button`
  ${baseStyle}
`;
export const Link = styled(RouterLink)`
  ${baseStyle}
`;
export const A = styled.a`
  ${baseStyle}
`;
