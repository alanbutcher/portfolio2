// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'reactstrap';
import PortInput from '../../components/form/PortInput';


const validateInputs = (values) => {
  let errors = {};
  const keyArray = Object.keys(values);

  keyArray.forEach((key) => {

  if (!values[key]) {
    errors[key] = `${key} is required`;
  }
  })

    return errors;
}

const INITIAL_VALUES = {
  title: '',
  languages: '',
  description: ''
}

const PortfolioCreateForm = (props) => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}

      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>

          <Field type="text"
            name="title"
            label="Title"
            component={PortInput} />

          <Field type="text"
            name="languages" 
            label="Languages"
            component={PortInput} />

          <Field type="textarea"
            name="description"
            label="Description"
            component={PortInput} />

          <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;






// import React from 'react';

// export default class PortfolioCreateForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       description: '',
//       language: ''
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const field = event.target.name;
//     this.setState({
//       [field]: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A form was submitted: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.language + ' ');
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <Label>
//           Name:
//           <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
//         </Label>
//         <Label>
//           Description:
//           <textarea name="description" value={this.state.desciption} onChange={this.handleChange} />
//         </Label>
//         <Label>
//           Pick your favorite programming language
        
//             <select name="language" value={this.state.language} onChange={this.handleChange}>
//             <option value="javascript">Javascript</option>
//             <option value="java">Java</option>
//             <option selected value="c++">C++</option>
//             <option value="c#">C#</option>
//             </select>
           
//         </Label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }