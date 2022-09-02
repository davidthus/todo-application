import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  margin-bottom: 6rem;

  @media screen and (min-width: 600px) {
    & {
      margin-bottom: 3rem;
    }
  }
`;

export const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const StyledUl = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
`;
