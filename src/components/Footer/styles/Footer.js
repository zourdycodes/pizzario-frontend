import styled from "styled-components/macro";

export const FooterContainer = styled.footer`
  background-color: #0d0909;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 4rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const Logo = styled.h1`
  color: white;
  font-size: 2.2rem;

  padding-right: 20px;
  box-shadow: 2px 4px #ffc500;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  > svg {
    cursor: pointer;

    &:hover {
      color: #ffc500 !important;
      transition: all 0.2s ease-in-out;
    }
  }
`;
