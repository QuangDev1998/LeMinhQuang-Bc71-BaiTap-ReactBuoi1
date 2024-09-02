import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="container p-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/500x325"
                className="card-img-top"
                alt="Card image"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary w-100">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/500x325"
                className="card-img-top"
                alt="Card image"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary w-100">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/500x325"
                className="card-img-top"
                alt="Card image"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary w-100">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/500x325"
                className="card-img-top"
                alt="Card image"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary w-100">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
