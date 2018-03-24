import React from 'react';

export default class Calendar extends React.Component {
  render(){
    const info = this.props.infoCalendar;

    return(
      <div>
        <ul className="container_calendar">
			{
				info.map(
					d =><li className="calendar_item"><p title={d.date}><img className={`face face--${d.face}`} /></p>
        <span className="calendar_message" title={`${d.message}`}>{d.message} </span>
		     	</li>
					)
				}
			</ul>

      </div>

    );
  }
}
