import {Overlay, Spinner} from "./style";
import React from "react";
import PropTypes from 'prop-types';

const Loader = ({visible}) => {
    return <Overlay visible={visible}>
        <Spinner/>
    </Overlay>
}

Loader.defaultProps = {
    visible: false
}
Loader.propTypes = {
    visible: PropTypes.bool.isRequired
}

export default Loader