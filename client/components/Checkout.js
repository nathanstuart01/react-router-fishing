import React from 'react';

class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { license: {}, checkout: {}, editing: false };
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  }

  componentDidMount() {
    $.ajax({
      url: `/api/licenses/1/checkouts/${this.props.params.id}`,
      type: 'GET'
    }).done( data => {
      this.setState({ license: data.license, checkout: data.checkout})
    }).fail( error => {
      console.log(error)
    })
  }

  deleteCheckout = (id) => {
    let license_id = this.state.license.id
    $.ajax({
      url: `/api/licenses/${license_id}/checkouts/${id}`,
      type: 'DELETE'
    }).done( checkout => {
      let checkouts = this.state.checkouts.filter( checkout => 
        { return checkout.id !== id })
      this.setState({ checkouts });
    }).fail( data => {
      console.log(data);
    })
  }

  updateCheckout = (first_name, last_name, street, city, state, zip, credit_number, id) => {
    let license_id = this.state.license.id
    $.ajax({ 
      url: `/api/licenses/${license_id}/checkouts/${id}`,
      type: 'PUT',
      data: { checkout: { first_name, last_name, street, city, state, zip, credit_number, id } }
    }).done( data => {
      let checkouts = this.props.checkouts.map( checkout => {
        if(checkout.id === id )
          return data 
        else 
          return checkout
      })
      this.setState({ checkouts })
    }).fail(data => {
      console.log(data);
    });
  }

  handleSubmit = (e) => {
    let checkout = this.state.checkout
    e.preventDefault();
    let first_name = this.refs.first_name.value
    let last_name = this.refs.last_name.value
    let street = this.refs.street.value
    let city = this.refs.city.value
    let state = this.refs.state.value
    let zip = this.refs.zip.value
    let credit_number = this.refs.credit_number.value
    this.updateCheckout( first_name, last_name, street, city, state, zip, credit_number, checkout.id )
    this.setState({ editing: false });
  }


  render() {
    let checkout = this.state.checkout 
    let license = this.state.license 
    if(!this.state.editing) {
      return(
        <div>
          <h1>Confirm Checkout Info</h1>
          <ul>
            <li>Name: {checkout.first_name} {checkout.last_name}</li>
            <li>Address: {checkout.street}</li>
            <li>{checkout.city}, {checkout.state} {checkout.zip}</li>
            <li>Credit Card: {checkout.credit_number}</li>
            <button type='button' data-target="modal1" className="btn" onClick={ this.modalDisplay }>Confirm</button>
            <button type='submit' className='btn' onClick={ this.toggleEdit }>Edit Info</button><br />
            <button type='button' className='btn' onClick={ () => this.deleteCheckout(checkout.licence_id, checkout.id ) }>Cancel Purchase</button>
          </ul>
        </div>
      );
    } else {
      return(
        <form onSubmit={ this.handleSubmit }>
          <h1>Editing Info</h1>
          <input ref='first_name' type='text' defaultValue={ checkout.first_name } required />
          <input ref='last_name' type='text' defaultValue={ checkout.last_name } required />
          <input ref='street' type='text' defaultValue={ checkout.street } required />
          <input ref='city' type='text' defaultValue={ checkout.city } required />
          <input ref='state' type='text' defaultValue={ checkout.state } required />
          <input ref='zip' type='text' defaultValue={ checkout.zip } required />
          <input ref='credit_number' type='text' defaultValue={ checkout.credit_number } required />
          <input type='submit' className='btn' />
          <button type='button' className='btn' onClick={ this.toggleEdit}>Cancel Edit</button>
        </form>
      )};
  }
}

export default Checkout;