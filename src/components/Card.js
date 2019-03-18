import React, {Component} from 'react';

class Card extends Component {
  render() {
    return(      
      <div className="cards">
        <img src={this.props.info.image} alt="info"/>
        <h2>{this.props.info.title}</h2>
        <p>{this.props.info.information}</p>
      </div>      
    )
  }
}

export default Card;