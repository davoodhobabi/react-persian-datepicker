import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { persianNumber } from '../utils/persian';

const styles = {
  wrapper: {},
  button: {
    outline: 'none',
    cursor: 'pointer'
  }
};

export default class Day extends Component {
  static propTypes = {
    day: PropTypes.object.isRequired,
    isCurrentMonth: PropTypes.bool,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    onClick: PropTypes.func
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.selected !== this.props.selected ||
      nextProps.disabled !== this.props.disabled ||
      nextProps.isCurrentMonth !== this.props.isCurrentMonth;
  }

  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    const { onClick, day } = this.props;

    if (onClick) {
      onClick(day);
    }
  }

  render() {
    const { day, disabled, selected, isCurrentMonth, onClick, styles, ...rest } = this.props;

    const className = classnames((styles ? styles.dayWrapper : "dayWrapper"), {
      [styles ? styles.selected : "selected"]: selected,
      [styles ? styles.currentMonth : "currentMonth"]: isCurrentMonth
    });

    return (
      <div className={className}>
        <button
          type="button"
          onClick={this.handleClick.bind(this) }
          disabled={disabled}
          {...rest}
        >
          { persianNumber(day.format('jD')) }
        </button>
      </div>
    );
  }
}
