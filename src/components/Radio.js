import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Radio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      radioClick: "name"
    };
  }

  onChange(type) {
    // on radio state change handler
    this.setState({ radioClick: type });
    this.props.sortBy(type);
  }

  render() {
    return (
      <div className='radioButtons'>
        <div className='left'>
          <input type='radio' value="name" checked={this.state.radioClick === 'name'} onChange={evt => this.onChange(evt.target.value)} />
          <label>&nbsp;&nbsp;Sort by name</label>
        </div>
        <div className='right'>
          <input type='radio' value="age" checked={this.state.radioClick === 'age'} onChange={evt => this.onChange(evt.target.value)} />
          <label>&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    );

  }
}

// Uncomment the snippet below
Radio.propTypes = {
  sortBy: PropTypes.func
}

export default Radio;
