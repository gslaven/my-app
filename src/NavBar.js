import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            Pages: [
                { PageName: `Home` },
                { PageName: `Contact` }
            ],
            activeIndex: 0
        }
    }

    render() {
        let NavLinks =
            this.state.Pages.map(function (varNavLink, index) {
                return (
                    <li key={`listItem${index}`}>
                        <NavLink exact to={`/${varNavLink.PageName}`}
                            activeClassName=".NavBar a.active"
                            className="listItem"
                            key={`listItem${index}`}>
                            {varNavLink.PageName}
                        </NavLink>
                    </li>
                )
            }
            )

        return (
            <div className="NavBar">
                Greg <span className="NavBarSpan">Slavens</span>
                {NavLinks}
            </div>
        );
    }
}
