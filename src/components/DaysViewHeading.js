import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { persianNumber } from '../utils/persian';
import { leftArrow, rightArrow } from '../utils/assets';

export default class Heading extends Component {
  static propTypes = {
    month: PropTypes.object.isRequired
  };

  static contextTypes = {
    styles: PropTypes.object,
    nextMonth: PropTypes.func.isRequired,
    prevMonth: PropTypes.func.isRequired,
    setCalendarMode: PropTypes.func.isRequired
  };

  handleMonthClick(event) {
    const { setCalendarMode } = this.context;
    event.preventDefault();
    setCalendarMode('monthSelector');
  }

  render() {
    const { nextMonth, prevMonth } = this.context;
    const { month, styles } = this.props;

    return (
      <div className={styles ? styles.heading : "heading"}>
        <button className={styles ? styles.title :"title"} onClick={this.handleMonthClick.bind(this)}>
          { persianNumber(month.format('jMMMM jYYYY')) }
        </button>
        <button
          type="button"
          title="ماه قبل"
          className={styles ? styles.prev :"prev"}
          onClick={prevMonth}
          dangerouslySetInnerHTML={rightArrow}
        />
        <button
          type="button"
          title="ماه بعد"
          className={styles ? styles.next : "next"}
          onClick={nextMonth}
          dangerouslySetInnerHTML={leftArrow}
        />
      </div>
    );
  }
}
