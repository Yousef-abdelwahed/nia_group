import React, { JSXElementConstructor, ReactElement } from "react";

interface IProps {
  children:
    | ReactElement
    | ReactElement<any, string | JSXElementConstructor<any>>[];
}

const TabContent = ({ children }: IProps): JSX.Element => {
  return <>{children}</>;
};

export default TabContent;
