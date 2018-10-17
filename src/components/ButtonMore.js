import React, { Component } from 'react';

class ButtonMore extends Component {

    state = {
        dropdownVisible: false
    }

    handleDropdown = () => {
        this.setState(prevState => {
            if (!prevState.dropdownVisible) {
                document.addEventListener('click', this.handleOutsideClick, false);
            } else {
                document.removeEventListener('click', this.handleOutsideClick, false);
            }
            return { dropdownVisible: !prevState.dropdownVisible };
        });
    }

    handleOutsideClick = event => {
        if (this.node.contains(event.target)) {
            return;
        }
        this.handleDropdown();
    }

    render() {
        const { options, handleClick } = this.props;
        const { dropdownVisible } = this.state;

        let menuContentClass = 'menuContent';
        if (dropdownVisible) { menuContentClass += ' showMenu'; }

        const anyOptionSelected = options.some(option => option.selected);
        const buttonMoreSelected = dropdownVisible || anyOptionSelected;

        return <span id="dropdownMenu" ref={node => { this.node = node; }}>
            <button
                id="buttonMore"
                onClick={ this.handleDropdown }
                className={ buttonMoreSelected ? 'selected' : ''}
            >
            <span className="buttonText">More</span>
            <span className="buttonIcon">
                <i className={ dropdownVisible ? "fas fa-chevron-up" : "fas fa-chevron-down" }>
                </i>
            </span>
            </button>

            <div className={ menuContentClass }>
                {
                    options.map((option, index) => {
                        return (
                            <div key={ index } onClick={ event => { handleClick(index, event) }}>
                                <input
                                    type="checkbox"
                                    checked={ option.selected }
                                    readOnly={ true }
                                />

                                <label>
                                    <span className="dropdownText">{ option.text }</span>
                                    <span className="dropdownAmount">{ option.amount }</span>
                                </label>
                            </div>
                        );
                    })
                }
            </div>
        </span>;
    }
}

export default ButtonMore;
