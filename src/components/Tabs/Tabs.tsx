import React, { ReactElement, useCallback, useState } from "react";
import TabContent from "./components/TabContent";
import TabButtons from "./components/TabButtons";

interface IProps {
  type: string;
  children: any | ReactElement | ReactElement[];
  selectedTabIndex: any;
}
const location = ["saudi", "egypt"];
const Tabs = (props: IProps) => {
  const { children, type, selectedTabIndex } = props;

  return (
    <>
      <>{React.Children.toArray(children)[selectedTabIndex]}</>
    </>
  );
};

export default Tabs;
