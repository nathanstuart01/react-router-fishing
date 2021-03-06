import React from 'react';
import { Link } from 'react-router';
import Checkout from './Checkout';

class License extends React.Component {
  constructor(props) {
    super(props);
    this.state = {licenses: [], checkout: false, checkouts: [] }
  }

  componentDidMount() {
    $.ajax({
      url: '/api/licenses',
      type: 'GET'
    }).done( data => {
     
    }).fail(data => {
      console.log(data);
    });
  }

  toggleCheckout = () => {
    this.setState({ checkout: !this.state.checkout});
  }

  display() {
    return(
      <div>
        <h2>Fishing Licenses and Deals</h2><hr />
        <h5>Here you can select which license you would like to buy! Each individual license is $15.00. 
          If you have a group of 3, buy the group license package to get a discounted rate!</h5><br /><br />
        <div className='card'>
          <h3>Individual License</h3>
          <br />
          <img
           width='200px'
           src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFpkOS9XGH_By-YUIw_GD9tSkPRfCi0b_3xDYGbFYD_ZuEeA2O'
         />
         <br />
         <p>$15</p>
         <br />
         <button
         onClick={this.toggleCheckout}
         className='btn'>Purchase License</button><br /><br />
        </div>
        <div className='card'>
           <h3>Group License</h3>
           <br />
           <img
              width='200px'
              src='https://thumbs.dreamstime.com/t/family-camping-woods-44608806.jpg'
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

  handlePurchase = (e) => {
    e.preventDefault();
    $.ajax({
      url: '/api/licenses/1/checkouts',
      type: 'POST',
      data: { checkout: { first_name: this.refs.first_name.value,
                         last_name: this.refs.last_name.value,
                         street: this.refs.street.value,
                         city: this.refs.city.value,
                         state: this.refs.state.value,
                         zip: this.refs.zip.value,
                         credit_number: this.refs.credit_number.value
                        }
      }
    }).done(checkout => {
      this.props.history.push(`license/1/checkout/${checkout.id}`)
    }).fail( data => {
      console.log(data);
    });
  } 


  checkout = () => {
    return(
      <div className='col s12 m4'>
        <form onSubmit={ this.handlePurchase }>
          <h3>Enter Information for your fishing license</h3><hr />
          <input type='text' ref='first_name' required placeholder='first_name' autoFocus/>
          <input type='text' ref='last_name' required placeholder='last_name' /><br />
          <input type='text' ref='street' required placeholder='street' />
          <input type='text' ref='city' required placeholder='city' />
          <input type='text' ref='state' required placeholder='state' />
          <input type='text' ref='zip' required placeholder='zip' />
          <input type='text' ref='credit_number' required placeholder='credit_number' />
          <input type='submit' className='btn' value='Purchase'/>
          <button className='btn' onClick={ this.toggleCheckout }>Cancel</button>
        </form>
      </div>
    );
  }

  //toggle each to their checkout form
  //subit edit delete

  render() {
    if (this.state.checkout) {
      return this.checkout()
      this.displayReceipt()
    } else {
      return this.display();
    }
  }
}

export default License;
