import styled from "styled-components";
import { lighten, darken } from "polished";
import { teal, elevation } from "../utilities";

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
  padding: 5px 20px;
  margin: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  background: ${teal};
  transition: box-shadow background 0.3s ease;
  ${elevation[1]};
  &:hover {
    background: ${darken(0.2, teal)};
    ${elevation[2]};
  }
  ${({ size }) => {
    if (size === "small") {
      return `
      font-size: 1rem;
      padding: 3px 10px;
      `;
    }
  }}
  ${({ type }) => {
    if (type === "cancel") {
      return `
      background: red;
      &:hover {
        background: ${darken(0.2, "red")};
      }
      `;
    }
  }}
`;

export const CancelButton = styled(Button)`
  background: red;
`;
