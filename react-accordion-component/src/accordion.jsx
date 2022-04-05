import React from 'react';
class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicId: null
    };
  }

  handlePopUp(id) {
    if (this.state.topicId === id) {
      this.setState({ topicId: null });
    } else {
      this.setState({ topicId: id });
    }
  }

  render() {
    let name = null;
    const { topicId } = this.state;
    const randomdex = this.props.dex;
    const listDex = randomdex.map(dex => {
      if (topicId === dex.id) {
        name = dex.name;
      }
      return <div className="row" key={dex.id}>
        <h2 className="lgrey-bgc topics col-full " onClick={() => { this.handlePopUp(dex.id); }}>{dex.topic}</h2>
        <p className="full-height col-full" >{name}</p>
      </div>;
    }
    );
    return listDex;
  }
}
export default Accordion;
