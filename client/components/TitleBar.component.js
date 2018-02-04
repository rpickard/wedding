/**
 * Implements the title bar with the bride and groom names and the wedding date.
 *
 * id (string): Identifier for the element
 */

'use strict';

import React from 'react';

class TitleBar extends React.Component {

    render() {
        return (
            <header id={this.props.id} className="titlebar">
                <span className="bride-name">Fan</span>
                <span className="groom-name">&nbsp;
                    <span>&amp;</span> Raleigh's
                </span>
                <br/>
                <a href="img/fanandral.jpg"><img className="hero" src="img/fanandral.jpg" alt="Fan and Ral" /></a>
                <div className="wedding-date">WEDDING <br/> 8<sup>th</sup> September, 2018</div>
            </header>

        );
    }
}

export default TitleBar;
