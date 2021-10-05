import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Card extends Component {
  render() {
    return(
      <div className="col-md-6">
        <div className="card text-center">
            <img src={this.props.imageUrl} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 class="card-title">{this.props.title}</h5>
                <p>{this.props.subtitle}</p>
                <Link href="#" className="btn buttonAction">Mulai Belajar</Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Card;