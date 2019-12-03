import React from 'react';
import FamilyMember from './FamilyMember'

export default class Family extends React.Component {
    render() {
      return <div>
          <h2>My family: </h2>
          {this.props.family.map((member) => {
              return <FamilyMember member={member} key={member.name}/>
          })}
            
          </div>;
    }
  }

  // when we use .map to generate components from an array, they should have a unique 'key' property. Usually that would 
  // be an id, but here I have very dumb data