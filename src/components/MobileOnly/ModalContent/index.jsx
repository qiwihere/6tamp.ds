import React from "react";
import PropTypes from "prop-types";
import ModalContent from "./style";

const MobileModalContent = ({ height, children }) => {
  return (
    <ModalContent height={height}>
      <div>{children}</div>
    </ModalContent>
  );
};

MobileModalContent.defaultProps = {
  height: "100px",
};

MobileModalContent.propTypes = {
  height: PropTypes.string,
};

export default MobileModalContent;
