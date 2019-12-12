import React from 'react';
import * as data from '../../temp_data/user_profile.json';
import Family from './Family'

export default class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {profile: {name: '', age: '', languages: []}}
    }

    // if you are curious aobut how this works, read up on the React component lifecycle
    componentDidMount() {
        // this is where you would request the data from the api, most likely.
        this.setState({profile: data.default })
        // running this.setState will cause the render() function to re-run.
    }
    render() {
      const profile = this.state.profile
      return <div>
          <h1>My profile:</h1>
            <p>name: {profile.name}</p>
            <p>age: {profile.age}</p>
            <p>description: {profile.description}</p>
            <p>languages:</p>
            <ul>
            {profile.languages.map((lg) => {
                return <li>{lg}</li>
            })}
            </ul>
            {profile.family ? <Family family={profile.family}/> : null}
            
          </div>;
    }
  }
