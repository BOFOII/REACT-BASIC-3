import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Intro extends Component {
  render() {
    return(
      <div className="col-md-6" style={styles.box450}>
        <h4 style={styles.greyText}>
            {this.props.content}
        </h4>
        <Link to="/" className="btn buttonAction" >
            Pelajari Detail Program
        </Link>
      </div>
    );
  }
}

const styles = {
  box450: {
      height: '450px'
  },
  greyText: {
      color: '#808080',
  }
}

export default Intro;