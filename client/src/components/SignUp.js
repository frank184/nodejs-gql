import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LinkContainer from "react-router-bootstrap/LinkContainer";
import "./Forms.css"

function SignUp() {
  return (
    <div className="form-border border rounded-0">
      <h2>Create an Account</h2>
      <hr />
      <Form>
        <div className="row mb-3 text-right">
          <div className="col-lg-6">
            <Form.Label className=" col-form-label">Name</Form.Label>
            <div>
              <Form.Control type="email" placeholder="First name" className="form-control rounded-0" id="firstName" />
            </div>
          </div>

          <div className="col-lg-6">
            <Form.Label className=" col-form-label">&nbsp;</Form.Label>
            <div>
              <Form.Control type="email" placeholder="Last name" className="form-control rounded-0" id="lastName" />
            </div>
          </div>
        </div>

        <div className="row mb-3 text-right">
          <Form.Label className=" col-form-label">Email</Form.Label>
          <div>
            <Form.Control type="email" placeholder="Enter email" className="form-control rounded-0" id="email" />
          </div>
        </div>

        <div className="row mb-3">
          <Form.Label className=" col-form-label">Password</Form.Label>
          <div>
            <Form.Control type="password" placeholder="Password" className="form-control rounded-0" id="password"  />
          </div>
        </div>

        <div className="row mb-3">
          <div>
            <Form.Control type="password" placeholder="Confirm Password" className="form-control rounded-0" id="password"  />
          </div>
        </div>

        <div className="row mb-3">
          <div></div>
          <div className="d-grid gap-2">
            <Button type="submit" variant="primary" size="md" className="rounded-0">Sign Up</Button>
          </div>
        </div>

        <div className="row">
          <LinkContainer to="/sign-in">
            <p className="mb-0 text-center">
              Already have an account?&nbsp;
              <a href="#sign-in">Sign In</a>
            </p>
          </LinkContainer>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;