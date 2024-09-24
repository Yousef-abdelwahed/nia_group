import { MenuItem } from "@chakra-ui/menu";

const MenuItemSubMenu = ({ children }) => {
  return (
    <MenuItem
      boxShadow="0px 2px 0px 0px transparent"
      as="div"
      p={0}
      _focus={{
        boxShadow: "0px 2px 0px 0px #47bae6",
      }}
    >
      {children}
    </MenuItem>
  );
};

export default MenuItemSubMenu;
