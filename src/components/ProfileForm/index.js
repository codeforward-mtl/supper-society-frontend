import React from 'react';
import * as data from '../../temp_data/user_profile.json';
import Form from './Form'
import FormHeader from './FormHeader'

export default class ProfileForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {profile: {name: '', age: '', languages: []}}
        this.update = this.update.bind(this)
    }

    update(state) {
        console.log('updating to: ', state)
    }

    componentDidMount() {
        console.log(data.default)
        this.setState({profile: data.default })
    }

    render() {
      return <div>
          <FormHeader />

          <Form update={this.update} profile={this.state.profile} />
            
          </div>;
    }
  }
