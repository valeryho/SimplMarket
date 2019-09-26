import React from 'react';

class Table extends React.Component
{
    
    render(){
        console.log('Table props',this.props)
        return( 
            
            <li>
            <i className="fa fa-times fa-x" aria-hidden="true"></i>
                {this.props.product_name}
            </li>
            
        )
    }
}
export default Table;