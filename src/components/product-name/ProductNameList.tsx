import React, { useContext } from "react";
import { UserSelected } from "../../App";
import { NameListComponentProp } from "../../assets/interface";

const ProductNameList: React.VFC<NameListComponentProp> = ({ name }) => {
  const { setUserSelected } = useContext(UserSelected);
  return <div>ProductNameList</div>;
};

export default ProductNameList;
