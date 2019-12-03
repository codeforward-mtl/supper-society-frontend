import React from 'react';

// this is as simpole as React Components get (aside from stateless components, like with FamilyMember)
// the only thing we absolutely need is the render() method that returns html
// the html it returns MUST be wrapped in a single tag. Inside that, all tags must close. Including things like
// <br> should be <br />
export default class About extends React.Component {
    render() {
      return <div>
          <h1>About Supper Society App</h1>
          <p>This contains information about the app.</p>
          </div>;
    }
  }