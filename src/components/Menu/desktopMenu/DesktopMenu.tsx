import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../Menu_styles";

type MenuItemsType = {
  title: string;
  href: string;
};

export const DesktopMenu: React.FC<{ menuItems: Array<MenuItemsType> }> = ({
  menuItems,
}) => {
  return (
    <S.NavMenu>
      <Menu menuItems={menuItems} />
    </S.NavMenu>
  );
};
