import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  type?: "header" | "footer" | "mobile";
  classes?: string;
}

const routes = [
  { name: "Home", url: "/" },
  { name: "about us", url: "about-us" },
  { name: "our services", url: "" },
  { name: "our works", url: "our-works" },
  { name: "news", url: "news" },
];

const className =
  "font-medium lg:text-sm xl:text-xl 2xl:mx-4   lg:mx-2   capitalize hover:text-orange-400 py-3 transition ";

const NavItems = ({ type = "header" }) => {
  const location = useLocation();
  const linkPages = routes?.map((item, index) => {
    const { url, name } = item;
    if (name === "our services") {
      return (
        <div key={uuidv4()}>
          <Center>
            <Menu variant="roundRight">
              <MenuButton
                px={0}
                py={0}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="0px"
                _hover={{ bg: "" }}
                // _expanded={{ bg: "orange.500" }}
                _focus={{ boxShadow: "none" }}
              >
                <span className={`${className} text-white`}> Service</span>
                <ChevronDownIcon color="#ffffff" />
              </MenuButton>
              <MenuList
                minW={207}
                textAlign={"center"}
                justifyContent={"center"}
              >
                <MenuItem
                  sx={{
                    backgroundColor: "transparent",
                  }}
                  command=""
                >
                  New Tab
                </MenuItem>
                <MenuItem
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                  command=""
                >
                  New Tab
                </MenuItem>
                <MenuItem
                  sx={{
                    backgroundColor: "transparent",
                  }}
                  command=""
                >
                  New Tab
                </MenuItem>
                <MenuItem
                  sx={{
                    backgroundColor: "transparent",
                  }}
                  command=""
                >
                  New Tab
                </MenuItem>
              </MenuList>
            </Menu>
          </Center>
        </div>
      );
    }
    const isactiveLink = location.pathname === url;
    return (
      <li key={uuidv4()} className={` `}>
        <a
          href={"#" + url}
          className={
            className +
            " " +
            ` relative text-white  transition duration-300 ${
              isactiveLink ? "active" : ""
            }`
          }
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <>
      <ul
        className={` flex  ${
          type === "header"
            ? "2xl:translate-x-[6.4%] lg:translate-x-[6.4%] lg:translate-y-[90%]  "
            : ""
        } items-center`}
      >
        {linkPages}
      </ul>
    </>
  );
};

export default NavItems;
