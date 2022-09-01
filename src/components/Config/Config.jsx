import { StyledContainer, StyledSpan, StyledButton, StyledFilter, StyledDiv } from './Config.style';

function Config() {
  return (
    <StyledContainer>
      <StyledSpan>
        0 items left
      </StyledSpan>

      <StyledDiv>
        <StyledFilter onClick={(e) => {}}>All</StyledFilter>
        <StyledFilter>Active</StyledFilter>
        <StyledFilter>Completed</StyledFilter>
      </StyledDiv>

      <StyledButton>
        Clear Completed
      </StyledButton>
    </StyledContainer>
  )
}

export default Config;