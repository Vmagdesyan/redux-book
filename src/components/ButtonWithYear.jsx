import React from 'react';

export class ButtonWithYear extends React.PureComponent {
  render() {
    const { onBtnClick, year } = this.props;  
    return (
      <>
        <button className="btn" onClick={onBtnClick}>
            {year}
        </button>{' '}
      </>
    )
  }
}