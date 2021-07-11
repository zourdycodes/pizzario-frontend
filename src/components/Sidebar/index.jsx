import {
  SidebarContainer,
  IconContainer,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  ButtonContainer,
  SidebarButton,
} from "./styles/Sidebar";

export const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <SidebarContainer
      // @ts-ignore
      isOpen={isOpen}
    >
      <IconContainer onClick={() => setIsOpen(false)}>
        <CloseIcon />
      </IconContainer>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Croissant</SidebarLink>
        <SidebarLink to="/">All Menu</SidebarLink>
      </SidebarMenu>
      <ButtonContainer>
        <SidebarButton to="/">Order now</SidebarButton>
      </ButtonContainer>
    </SidebarContainer>
  );
};
