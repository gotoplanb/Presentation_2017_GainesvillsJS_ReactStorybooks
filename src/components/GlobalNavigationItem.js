import React from 'react';
import {
  Col,
} from 'react-lightning-design-system';

const GlobalNavigationItem = (props) => {
  return (
    <Col>
      {props.itemName}
    </Col>
  )
}

GlobalNavigationItem.propTypes = {
  itemName: React.PropTypes.string.isRequired
};

export default GlobalNavigationItem;
