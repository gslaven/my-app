import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBarItem extends React.Component {
  constructor(paramPath) {
    super();
  }

  render() {
    return (
      <NavLink
        activeClassName="selected">
      </NavLink>
    );
  }
}
