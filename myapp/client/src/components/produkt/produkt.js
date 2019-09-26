import React from 'react';
import Table from "../Table/Table";
import API from '../../API/api_product'

class product extends React.Component
{
   state={
       data:'',
       isloaded:false
   }
   componentDidMount(){
       const request = new API;
       request.getProduct('/product')
           .then((res) => {
              
               this.setState({data:res,isloaded:true
            })
           })

   }
    render(){
        //  console.log("res",this.state.data)
    let Tableitem = ()=>{
                return(< Table key="1" product_name = {"false dawnload"}/>)}

       
        if (this.state.isloaded)
        {
            Tableitem = this.state.data.map((item)=>{console.log("item",item)
                return(<Table key={item.id} product_name = {item.post_name}/>)
            })
        }
        
     return(
        <div>
            <div className="col-md-10 offset-md-1 row-block">
	        <ul id="sortable" className="contactList">
               { Tableitem}
            </ul>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        </div>
        
    );
        
    }


}
export default product;