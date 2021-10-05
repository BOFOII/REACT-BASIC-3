import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
      <div style={styles.container}>
        <img 
            style={styles.imageCover}
            src="https://images.unsplash.com/photo-1531741403586-c19915ad5d0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="belajarcoding"
        />
        <div style={styles.blockText}>
            <h1>Belajar Coding Sekarang</h1>
            <h4>
              Lebih dari 2.000 modul belajar pemrograman dalam beragam format yang bisa kamu pelajari.
            </h4>
        </div>
    </div>
    );
  }
}

const styles = {
  container: {
      position: 'relative',
      textAlign: 'center',
  },
  imageCover: {
      width: '100%'
  },
  blockText: {
      width: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white'
  }
}

export default Home;