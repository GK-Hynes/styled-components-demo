import styled from "styled-components";
import { Button } from "./Buttons";
import { elevation } from "../utilities";

export const Card = styled.div`
  max-width: 450px;
  border-radius: 6px;
  padding: 10px;
  ${elevation[1]};
`;

const CardButton = styled(Button)`
  width: 100%;
`;

Card.Button = CardButton;
