import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: ${(props) => props.theme.colorSurface};
  color: ${(props) => props.theme.colorText};
  padding: 0 1.5rem;
  font-size: 0.75rem;
  height: 3.125rem;
  line-height: 0.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (min-width: 600px) {
    & {
      font-size: 0.875rem;
    }
  }
`;

export const StyledSpan = styled.span`
  @media screen and (min-width: 600px) {
    & {
      font-size: 0.875rem;
    }
  }
`;

export const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colorText};
  transition: color 0.3s;

  @media screen and (min-width: 600px) {
    & {
      font-size: 0.875rem;
    }
  }

  &:hover {
    color: ${(props) => props.theme.colorTextActive};
  }
`;

export const StyledFilter = styled(StyledButton)`
  margin-right: 1rem;
  font-weight: 700;
  color: ${(props) =>
    props.active ? props.theme.blue : props.theme.colorText};

  @media screen and (min-width: 600px) {
    & {
      font-size: 0.875rem;
    }
  }
`;
export const StyledDiv = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  display: flex;
  width: 100%;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${(props) => props.theme.colorSurface};
  transition: background 1s, color 1s;

  @media screen and (min-width: 600px) {
    & {
      position: initial;
      display: initial;
      width: initial;
      height: initial;
      border-radius: initial;
      background: initial;
    }
  }
`;
