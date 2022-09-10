import styled from "styled-components";

export const DefaultButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: 1px solid white;
  outline: none;
  background-color: rgba(255, 255, 255, 0.75);

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

export const HighlightButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: 1px solid white;
  outline: none;
  background-color: rgba(255, 255, 255, 0.75);

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
