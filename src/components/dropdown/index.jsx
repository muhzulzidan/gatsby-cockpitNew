
import React from 'react'
import {  navigate } from "gatsby"
import Select from 'react-select';

const options = [
    { value: '', label: 'Semua' },
    { value: 'kurikulum/', label: 'Pendidikan' },
    { value: 'corona/', label: 'Corona' },

];

class DropDown extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
        navigate(`/${selectedOption.value}`)
    };
    render() {
        const { selectedOption } = this.state;
        return (
            <h3> 
                <Select
                classNamePrefix="react-select"
                className='react-select-container'
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                placeholder="Category.."
                // menuIsOpen={true}
                />
            </h3>
           
        );
    }
}

export default DropDown