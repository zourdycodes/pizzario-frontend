import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components/macro";

export const SidebarContainer = styled.div`
  background: #ffc500;
  position: fixed;
  top: 0;
  right: ${({
    // @ts-ignore
    isOpen,
  }) => (isOpen ? "0" : "-1000px")};
  bottom: 0;
  width: 24%;
  padding: 1rem 2rem;
  z-index: 10;

  display: flex;
  flex-direction: column;
  transition: 0.3s ease-in-out;
  gap: 20rem;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #222;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translateY(80%);
  text-transform: uppercase;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.65rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  padding: 10px;

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
    text-decoration: underline;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarButton = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
