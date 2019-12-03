import React from 'react';

export default function FamilyMember(props) {
    return <div>
        <p>name: {props.member.name}</p>
        <p>age: {props.member.age}</p>
    </div>;;
  }

// this is a stateless React component. It is simpler, and it is good for when the component's 
// only job is to display information it receives as props. 
// note that we still have to import React even if we don't explicitly use it. 