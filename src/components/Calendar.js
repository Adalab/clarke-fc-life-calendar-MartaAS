import React from 'react';

export default class Calendar extends React.Component {
  render(){
    return(
      <div>
        <ul className="">
			{
				this.props.infoCalendar.map(
					d =><li>
		          {d.date}<br/>
              {d.message}<br/>
              {d.face}             

					</li>
					)
				}
			</ul>

      </div>

    );
  }
}
