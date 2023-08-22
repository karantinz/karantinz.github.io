import React from "react";
import { S } from "../Menu_styles";

type MenuItemsType = {
  title: string;
  href: string;
};

export const Menu: React.FC<{menuItems: Array<MenuItemsType>}> = ({menuItems}) => {
  return (
    <S.MenuWrapper>
      {menuItems.map((item, index) => {
        return (
          <li key={index}>
            <S.MenuLink to={item.href} smooth={true}>
              {item.title}
            </S.MenuLink>
          </li>
        );
      })}
    </S.MenuWrapper>
  );
};
