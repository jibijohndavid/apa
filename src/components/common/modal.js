import React, { Component } from "react"

export default class modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-toggle"></div>
        <div className="modal-body">Helllo</div>
      </div>
    )
  }
}
