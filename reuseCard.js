import React from 'react';

class reuseCard extends React.Component {
    render() {
        var { category, name, address, description, image } = this.props; 
        return ( <div class= "card"> 
        <img src= {require('./img/' + image)} alt="Avatar" style="width:100%"> 
        <div class= "container">
            <h2>category</h2>
            <h4> name</h4>
            <h5> address</h5>
            <p> description
            </p>
                </div>
            </img>
            </div> ) ;
           
            
                    
    }

}

export default reuseCard; 