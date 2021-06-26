import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Day of week names for use in date-picker heading
const dayOfWeekNames = ['شنبه', '1شنبه', '2شنبه', '3شنبه', '4شنبه', '5شنبه', 'جمعه'];

export default class DaysOfWeek extends Component {
  static propTypes = {
    styles: PropTypes.object
  };

  render() {
    const { styles } = this.props;

    return (
      <div className={ styles ? styles.daysOfWeek :"daysOfWeek"}>
        { dayOfWeekNames.map((name, key) => <div key={key}>{name}</div>) }
      </div>
    );
  }
}
