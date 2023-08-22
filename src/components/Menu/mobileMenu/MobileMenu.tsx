import React, { useState } from "react";
import { ImageBlock } from "../../imageBlock/ImageBlock";
import { Menu } from "../menu/Menu";
import { S } from "../Menu_styles";

const MobileMenuItems = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "Tech Stack",
    href: "skills",
  },
  {
    title: "Projects",
    href: "projects",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.NavMenu>
      <S.BurgerMenu isOpen={isOpen} onClick={toggleMenu}>
        <span></span>
      </S.BurgerMenu>

      <S.MobileMenuPopup isOpen={isOpen} onClick={toggleMenu}>
        <Menu menuItems={MobileMenuItems} />

        <ImageBlock />
      </S.MobileMenuPopup>
    </S.NavMenu>
  );
};
