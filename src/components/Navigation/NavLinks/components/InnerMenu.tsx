import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import React, { useRef, useEffect, useCallback } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import MenuItemSubMenu from "./MenuItemSubMenu";
import { Link } from "react-router-dom";
import { useData } from "@/context/DataContext";

function addEL(ref, event, handler) {
  if (ref) ref.addEventListener(event, handler);
}
function remEL(ref, event, handler) {
  if (ref) ref.removeEventListener(event, handler);
}

const InnerMenu = ({ title, childrenItems }) => {
  const refSubMenuButton = useRef();
  const refSubMenuList = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const subMenuButtonEnterHandle = useCallback(() => {
    onOpen();
    // fix bug with list animation
    refSubMenuList.current.style.pointerEvents = "auto";
  }, [onOpen]);
  const subMenuButtonLeaveHandle = useCallback(() => {
    onClose();
  }, [onClose]);

  // fix bug with list animation,
  // hide it when menu closed and open only if button menu is hovered
  useEffect(() => {
    if (!isOpen) {
      refSubMenuList.current.style.pointerEvents = "none";
    } else {
    }
  }, [isOpen]);

  useEffect(() => {
    addEL(refSubMenuButton.current, "mouseenter", subMenuButtonEnterHandle);
    addEL(refSubMenuList.current, "mouseenter", subMenuButtonEnterHandle);
    addEL(refSubMenuButton.current, "mouseleave", subMenuButtonLeaveHandle);
    addEL(refSubMenuList.current, "mouseleave", subMenuButtonLeaveHandle);

    return () => {
      remEL(refSubMenuButton.current, "mouseenter", subMenuButtonEnterHandle);
      remEL(refSubMenuList.current, "mouseenter", subMenuButtonEnterHandle);
      remEL(refSubMenuButton.current, "mouseleave", subMenuButtonLeaveHandle);
      remEL(refSubMenuList.current, "mouseleave", subMenuButtonLeaveHandle);
    };
  }, [subMenuButtonEnterHandle, subMenuButtonLeaveHandle]);
  const theme = useTheme();
  const { currentLanguage } = useData();
  return (
    <Menu
      autoSelect={false}
      offset={[0, 0]}
      isOpen={isOpen}
      placement={currentLanguage === "ar" ? "left" : "right"}
    >
      <MenuButton
        ref={refSubMenuButton}
        rightIcon={<ChevronDownIcon />}
        as={Button}
        w="full"
        textAlign="left"
        borderRadius="false"
        bg="white"
        zIndex={999}
        textTransform={"capitalize"}
        _hover={{
          bg: "white",
        }}
        _focus={{
          boxShadow: "none",
        }}
        _expanded={{
          // bg: "blue.300",
          color: "#8D8D8D",
        }}
        fontWeight={600}
        borderBottom={`1px solid ${theme.colors.orange[500]}`}
      >
        {title}
      </MenuButton>
      <MenuList
        minW={0}
        ref={refSubMenuList}
        top={0}
        zIndex={999}
        _hover={{ zIndex: 1000 }}
      >
        {childrenItems.map((item, i) => {
          if (typeof item.label === "string") {
            return (
              <Link to={item.url} key={i} className="bg-black">
                <MenuItem
                  borderBottom="1px solid #F07D00"
                  key={item.label}
                  textTransform={"capitalize"}
                  color="black"
                  fontWeight={600}
                >
                  {item.label}
                </MenuItem>
              </Link>
            );
          }
          return (
            <MenuItemSubMenu key={item.label}>{item.label}</MenuItemSubMenu>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default InnerMenu;
