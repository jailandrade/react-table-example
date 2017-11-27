import React, { Component } from 'react';
import 'react-table/react-table.css'
import ReactTable from 'react-table';
import FileReaderInput from 'react-file-reader-input';

class App extends Component {
  constructor(){
    super();
    this.state = {
      file: {}
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (event, results) => {
    const [e, file] = results[0];
    this.setState({file: e.target.result});
  }

  render() {

    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    },
    {
      name: 'Mary Anne',
      age: 21,
      friend: {
        name: 'Jay Tunder',
        age: 25,
      }
    }]

    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]

    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
        />
        <FileReaderInput
          as="text"
          id="file-input" 
          onChange={this.handleInput}>
          <button>Select a file</button>
        </FileReaderInput>
      </div>
    );
  }
}

export default App;
