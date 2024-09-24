import { MenuItem } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const StyledMenuItem = ({ children, closeSubMenu }) => {
  const refMenuItem = useRef({ current: null });

  useEffect(() => {
    if (refMenuItem.current && closeSubMenu) {
      refMenuItem.current.addEventListener("mouseenter", closeSubMenu);
    }

    return () => {
      if (refMenuItem.current && closeSubMenu) {
        refMenuItem.current.removeEventListener("mouseenter", closeSubMenu);
      }
    };
  }, [closeSubMenu]);
  return (
    <MenuItem
      as={Button}
      px={4}
      mb={1}
      w="full"
      ref={refMenuItem}
      boxShadow="0px 2px 0px 0px transparent"
      borderRadius={0}
      
      justifyContent="flex-start"
      bg="transparent"
      _hover={{
        bg: "blue.50",
      }}
      _focus={{
        boxShadow: "0px 2px 0px 0px #47bae6",
      }}
    >
      {children}
    </MenuItem>
  );
};

export default StyledMenuItem;
