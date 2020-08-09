import styled from "styled-components";
import { fixedTop } from "../utilities";

export const Button = styled.button`
  color: #fff;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  background: indigo;
`;

export const CancelButton = styled(Button)`
  background: red;
  ${fixedTop};
`;
