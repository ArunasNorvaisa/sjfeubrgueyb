import React, { Component } from 'react';
import Button from './Button';
import ButtonMore from './ButtonMore';

class Form extends Component {

        state = {
            isAllButtonSelected: true
        }

    handleAllButtonClick = event => {
        event.preventDefault();
        this.setState({
            isAllButtonSelected: true
        });
        const selectedButtons = document.getElementsByClassName("buttonNonAll");
        for(let i = 0; i < selectedButtons.length; i++) {
            if(selectedButtons[i].classList.contains("selected")) {
                selectedButtons[i].classList.remove("selected");
            }
        }
    }

    handleButtonClick = event => {
        event.preventDefault();
        this.setState({
            isAllButtonSelected: false
        });
        document.getElementById(`${event.currentTarget.id}`).classList.toggle("selected");
        const selectedButtons = document.getElementsByClassName("buttonNonAll selected");
        if(selectedButtons.length === 0) {
            this.setState({
                isAllButtonSelected: true
            });
        }
    }

    render() {
        return (
            <div className="container">
                <Button
                    className={ this.state.isAllButtonSelected ? "buttonAll selected" : "buttonAll" }
                    id="All"
                    onClick={ event => this.handleAllButtonClick(event) }
                />
                <Button
                    id="Small"
                    className="buttonNonAll"
                    amount="$422+"
                    onClick={ event => this.handleButtonClick(event) }
                />
                <Button
                    id="Medium"
                    className="buttonNonAll"
                    amount="$433+"
                    onClick={ event => this.handleButtonClick(event) }
                />
                <Button
                    id="Large"
                    className="buttonNonAll"
                    amount="$456+"
                    onClick={ event => this.handleButtonClick(event) }
                />
                <Button
                    id="SUV"
                    className="buttonNonAll"
                    amount="$525+"
                    onClick={ event => this.handleButtonClick(event) }
                />
                <Button
                    id="Van"
                    className="buttonNonAll"
                    amount="$649+"
                    onClick={ event => this.handleButtonClick(event) }
                />
                <ButtonMore />
            </div>
        );
    }
}

export default Form;
