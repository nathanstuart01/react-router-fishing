import React from 'react';
import { Link } from 'react-router';

class License extends React.Component {
  state = { license: {}, checkout: false };

  componentDidMount() {
    $.ajax({
      url: '/license',
      type: 'GET'
    }).done( data => {
      <div>

      </div>
    }).fail(data => {
      console.log(data);
    });
  }

  toggleCheckout = () => {
    this.setState({ checkout: !this.state.checkout});
  }

  checkout

  //toggle each to their checkout form
  //subit edit delete

  render() {
    return(
      <div>
        <div>
          <h3>Individual License</h3>
          <br />
          <img
           width='200px'
           src=''
         />
         <br />
         <p>$15</p>
         <br />
         <button
         onClick={this.toggleCheckout}
         className='btn'>Purchase License</button>
        </div>
        <div>
           <h3>Group License</h3>
           <br />
           <img
              width='200px'
              src=''
              />
            <br />
          <p>$35</p>
          <br />
          <button
          onClick={this.toggleCheckout}
          className='btn'>Purchase License</button>
        </div>
      </div>
    );
  }

}

export default License;
