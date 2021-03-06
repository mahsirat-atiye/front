import React from "react";
import { Fa }  from "mdbreact";
import {Col} from "react-bootstrap";
//import "./style.css";

class Searchbox extends React.Component {
    render() {
        return (
            <Col md="6">
                <div className="input-group md-form form-sm form-1 pl-0">
                    <div className="input-group-prepend">
            <span className="input-group-text purple lighten-3" id="basic-text1" >
              <Fa className="text-white" icon="search"  />
            </span>
                    </div>
                    <input
                        className="form-control my-0 py-1"
                        type="text"
                        placeholder="جستجوی لیگ"
                        aria-label="Search"
                    />
                </div>
            </Col>
        );
    }
}

export default Searchbox;