import { StyledFooter, StyledAnchor, StyledP } from "./Footer.style";

function Footer() {
  return (
    <StyledFooter>
      <StyledP>Drag and drop to reorder list.</StyledP>
      <StyledP>
        Challenge by  
        <StyledAnchor
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"> Frontend Mentor</StyledAnchor>.
           Coded by <StyledAnchor href="https://github.com/davidthus" target="_blank">davidthus</StyledAnchor>.
      </StyledP>
    </StyledFooter>
  );
}

export default Footer;
