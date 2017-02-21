import React from 'react';

const GlobalNavigationItem = (props) => {
  return (
    <div>
      {props.itemName}
    </div>
  )
}

GlobalNavigationItem.propTypes = {
  itemName: React.PropTypes.string.isRequired
};

export default GlobalNavigationItem;
