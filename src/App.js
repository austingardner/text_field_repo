import React, { Component } from 'react';
import './App.css';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@material-ui/core";

class App extends Component {
  state = {
    value: ""
  };

  onChange = e => {
    this.setState({value: e.target.value});
  };

  render() {
    const {value} = this.state;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Value
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField data-testid="test-field"
                value={value}
                onChange={e => this.onChange(e)}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default App;
