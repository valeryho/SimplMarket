import React from 'react';

class Time extends React.Component {

    state=
    {   hour:'',
        minute:''}

    render() {
       
        setInterval(() => {

            var d = new Date();
            var h= d.getHours();
            var m= d.getMinutes();
            if (m<10)m='0'+m;
            this.setState({minute:m,hour:h})
        }, 1000);
        return (
        <div className="time_display">{this.state.hour}:{this.state.minute}</div>
        )
    }
}
export default Time;