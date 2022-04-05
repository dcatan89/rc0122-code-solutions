import React from 'react';
class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: null
    };
  }

  handlePopUp(id) {
    this.setState({ topic: id });
  }

  render() {
    const randomdex = this.props.dex;
    const listDex = randomdex.map(dex =>
      <div className="row" key={dex.id}>
        <h2 className="lgrey-bgc topics col-full ">{dex.topic} onClick={() => { this.handlePopUp(dex.id); }}</h2>
        <p className="full-height col-full" >{dex.name}</p>
      </div>
    );
    return listDex;
  }
}
export default Accordion;
