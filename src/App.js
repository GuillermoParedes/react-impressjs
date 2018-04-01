import React, { Component } from 'react';
import { Impress, Step } from './components';
import './styles/_base.scss';
import '../styles/impress-sapm.css';

import demo from './sapm/impress-sapm';

class App extends Component {
  render() {
    return (
      <Impress progress={true}>
      {
        demo.map( (d, index ) => {
          return (
            React.createElement( Step, {
              id: d.id, 
              className: d.className,
              data: d.data,
              key: index
            }, 
            d.content.map( (child, index) => {
              return (
                React.cloneElement( child, {
                  id: child.id,
                  className: child.className,
                  key: index
                })
              );
            }))
            
          );
        })
      }
      </Impress>
    );
  }
}

export default App;
