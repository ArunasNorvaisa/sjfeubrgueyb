import React, { Component } from 'react';
import Button from './Button';
import ButtonMore from './ButtonMore';

class Form extends Component {
    state = {
        options: [
            { amount: '$422+', text: 'Small', selected: false },
            { amount: '$433+', text: 'Medium', selected: false },
            { amount: '$422+', text: 'Large', selected: false },
            { amount: '$525+', text: 'SUV', selected: false },
            { amount: '$649+', text: 'Van', selected: false },
            { amount: '$594', text: 'Pickup Truck', selected: false },
            { amount: '$626', text: 'Luxury', selected: false },
            { amount: '$1248', text: 'Commercial', selected: false },
            { amount: '$1607', text: 'Convertible', selected: false },
        ]
    }

    // This is how many buttons you would like to have displayed onscreen.
    // Hardcoded in this particular case, but can be changed dynamically
    // depending on the user's viewport. Can be even some constant + dynamic
    // value if you would like some buttons displayed no matter what. :)
    buttonsOnScreen = 5;

    handleAllButtonClick = event => {
        event.preventDefault();

        // We are going through every option.selected and making it false
        this.setState(prevState => {
            const options = prevState.options.map(option => {
                return { ...option, selected: false };
            });

            return { options: options };
        });
    }

    // Handles every button click, except ALL
    handleButtonClick = (index, event) => {
        event.preventDefault();

        // (Un)selecting the button
        this.setState(prevState => {
            let options = [...prevState.options];
            options[index] = { ...options[index], selected: !options[index].selected };

            return { options };
        });
    }

    render() {
        const { options } = this.state;

        const isAllButtonSelected = options.every(option => !option.selected);

        return <div className="container">
            <Button
                id="All"
                selected={ isAllButtonSelected }
                onClick={ this.handleAllButtonClick.bind(this) }
            />

            {
                options.slice(0, this.buttonsOnScreen).map((option, index) => {
                    return <Button
                        key={ index }
                        id={ option.text }
                        selected={ option.selected }
                        amount={ option.amount }
                        onClick={ this.handleButtonClick.bind(this, index) }
                    />;
                })
            }

            <ButtonMore
                /* # of checkboxes inside MORE button */
                options={ options.slice(this.buttonsOnScreen) }
                handleClick={ (index, event) => { this.handleButtonClick(index + this.buttonsOnScreen, event) } }
            />
        </div>;
    }
}

export default Form;
