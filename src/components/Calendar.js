import React from 'react';

export default class Calendar extends React.Component {
  render(){
    const info = this.props.infoCalendar;

    return(
      <div>
        <ul className="">
			{
				info.map(
					d =><li><p title={d.date}><img className={`face face--${d.face}`} /></p>
        <span >{d.message} </span>
		     	</li>
					)
				}
			</ul>

      </div>

    );
  }
}
