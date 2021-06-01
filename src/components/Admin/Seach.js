import React, { Component } from "react";

export class Seach extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }

  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.onSeach();
      }
    );
  };

  onSeach = () => {
    this.props.onSeach(this.state.keyword);
  };

  render() {
    let { keyword } = this.state;

    return (
      <nav>
        <div className="container-fluid">
          <div className="navbar-wrapper">
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <form className="navbar-form">
              <div className="input-group no-border">
                <input
                  type="text"
                  defaultValue
                  className="form-control"
                  placeholder="Search..."
                  name="keyword"
                  value={keyword}
                  onChange={this.onChange}
                />
                <button
                  type="submit"
                  className="btn btn-white btn-round btn-just-icon"
                >
                  <i className="material-icons">search</i>
                  <div className="ripple-container" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Seach;
