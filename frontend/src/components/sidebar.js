import React, { Component } from 'react';
import DropDown from './form-dropdown-select';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Newest", "Authors", "Score - Highest First"],
      categories: ["React", "Redux", "Udacity"],
    }
  }

  render() {
    console.log('Category List: ', this.props.categories);
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
            <DropDown
              labelStyle={{fontSize: '1.3em'}}
              label="Filter"
              options={this.props.categories}
            />
            <DropDown
              labelStyle={{fontSize: '1.3em'}}
              label="Sort"
              options={this.state.options}
            />
        </div>
      </div>
    </div>
  );
  }
}

export default Sidebar
;
