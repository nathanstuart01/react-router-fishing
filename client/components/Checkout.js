import React from 'react';

class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { license: {}, checkout: {} };
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

  render() {
    let checkout = this.state.checkout 
    let license = this.state.license 
    return(
      <div>
        <h1>Checkout</h1>
        <ul>
          <li>{checkout.first_name}</li>
        </ul>
        <h1>License</h1> 
        <ul>
          <li>{license.license_type}</li>
        </ul>

      </div>
    )
  }
}

export default Checkout;