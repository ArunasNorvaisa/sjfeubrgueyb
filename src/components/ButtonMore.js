import React, { Component } from 'react';

/* window.addEventListener("click", function(event) {
    if (!event.target.matches('.menuContent')) {
        const myDropdown = document.getElementById("dropMenu");
        if (myDropdown.classList.contains('showMenu')) {
            myDropdown.classList.remove('showMenu');
        }
    }
}); */

class ButtonMore extends Component {

    state = {
        isMoreButtonClicked: false
    }

    handleButtonMoreClick = event => {
        event.preventDefault();
        this.setState({
            isMoreButtonClicked: !this.state.isMoreButtonClicked
        });
        document.getElementById("buttonMore").classList.toggle("selected");
        document.getElementById("dropMenu").classList.toggle("showMenu");
    }

    render() {
        return (
            <span id="dropdownMenu">
                <button id="buttonMore" onClick={ event => this.handleButtonMoreClick(event) }>
                    <span className="buttonText">More</span>
                    <span className="buttonIcon">
                        <i className={ this.state.isMoreButtonClicked ? "fas fa-chevron-up" : "fas fa-chevron-down" }>
                        </i>
                    </span>
                </button>
                <div class="menuContent" id="dropMenu">
                    <input type="checkbox" id="box-1" />
                    <label for="box-1">
                        <span className="dropdownText">Pickup truck</span>
                        <span className="dropdownAmount">$594</span>
                    </label>

                    <input type="checkbox" id="box-2" />
                    <label for="box-2">
                        <span className="dropdownText">Luxury</span>
                        <span className="dropdownAmount">$626</span>
                    </label>

                    <input type="checkbox" id="box-3" />
                    <label for="box-3">
                        <span className="dropdownText">Commercial</span>
                        <span className="dropdownAmount">$1248</span>
                    </label>

                    <input type="checkbox" id="box-4" />
                    <label for="box-4">
                        <span className="dropdownText">Convertible</span>
                        <span className="dropdownAmount">$1607</span>
                    </label>
                </div>
            </span>
        );
    }
}

export default ButtonMore;
