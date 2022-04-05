import React from 'react';
class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicId: null
    };
  }

  handlePopUp(id) {
    this.state.topicId === id
      ? this.setState({ topicId: null })
      : this.setState({ topicId: id });
  }

  render() {
    const { topicId } = this.state;
    const randomdex = this.props.dex;
    const listDex = randomdex.map(dex => {
      return <div className="" key={dex.id}>
        <h2 className="lgrey-bgc topics" onClick={() => { this.handlePopUp(dex.id); }}>{dex.topic}</h2>
        <p className="names" >{topicId === dex.id ? dex.name : null}</p>
      </div>;
    }
    );
    return listDex;
  }
}
export default Accordion;
