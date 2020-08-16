import styled from "styled-components";
import { lighten, darken } from "polished";
import { applyStyleModifiers } from "styled-components-modifiers";
import { teal, elevation } from "../utilities";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    padding: 3px 10px;
  `,

  cancel: ({ theme }) => `
    font-size: ${theme.fontSizes.large};
    background: ${theme.colors.secondary};
  `
};

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
  padding: 5px 20px;
  border-radius: 0.25rem;
  border: none;
  background: ${(props) => props.theme.colors.primary};
  transition: box-shadow 0.3s ease;
  ${elevation[1]};
  &:hover {
    ${elevation[2]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const CancelButton = styled(Button)`
  background: red;
`;
