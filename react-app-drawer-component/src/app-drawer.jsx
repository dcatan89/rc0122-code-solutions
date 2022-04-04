import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    };
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  handleDrawer() {
    this.setState(prev => ({
      isDrawerOpen: !prev.isDrawerOpen
    })
    );
  }

  render() {
    const { isDrawerOpen } = this.state;
    let isHidden;
    if (isDrawerOpen) {
      isHidden = 'display';
    } else {
      isHidden = 'hidden';
    }
    return (
      <div>
        <div className={`overlay row ${isHidden}`} onClick={this.handleDrawer}>
          <div className="drawer-block slide-in">
            <h2 className='margin-left row'>Menu</h2>
            <ul>
              <li>About</li>
              <li>Menu</li>
              <li>Sign In</li>
            </ul>
          </div>
        </div>
        <div className="fas fa-bars margin-left bars-icon" onClick={this.handleDrawer}></div>
      </div>
    );
  }
}

export default AppDrawer;
