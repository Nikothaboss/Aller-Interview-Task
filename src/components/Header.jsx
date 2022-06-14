import styled from "styled-components";

const HeaderStyled = styled.header`
  background: #d60000;
  padding: 0.6rem;
  color: white;

  h2 {
    font-size: 1.2rem;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h2>Nikolai Reed-Larsen | Aller Inteview Test</h2>
    </HeaderStyled>
  );
};

export default Header;
