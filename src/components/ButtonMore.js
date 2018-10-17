import React, { Component } from 'react';

class ButtonMore extends Component {

    state = {
        dropdownVisible: false
    }

    handleMoreButtonClick = () => {
        if (!this.state.dropdownVisible) {
          document.addEventListener('click', this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
        this.setState(prevState => ({
           dropdownVisible: !prevState.dropdownVisible
        }));
        document.getElementById("buttonMore").classList.toggle("selected");
        document.getElementById("dropMenu").classList.toggle("showMenu");
      }

      handleOutsideClick = event => {
        if (this.node.contains(event.target)) {
          return;
        }
        this.handleMoreButtonClick();
      }

    render() {
        return (
            <span id="dropdownMenu" ref={node => { this.node = node; }}>
                <button id="buttonMore" onClick={ this.handleMoreButtonClick }>
                    <span className="buttonText">More</span>
                    <span className="buttonIcon">
                        <i className={ this.state.dropdownVisible ? "fas fa-chevron-up" : "fas fa-chevron-down" }>
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
