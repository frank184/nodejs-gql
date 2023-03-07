import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LinkContainer from "react-router-bootstrap/LinkContainer";
import "./Forms.css"

function SignIn() {
  return (
    <div className="form-border border rounded-0">
      <h2>Sign In</h2>
      <hr />
      <Form>
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
          <div className="col d-flex justify-content-center">
            <Form.Check type="checkbox" label="Remember me" className="rounded-0" id="remember"/> 
          </div>

          <div className="col">
            <LinkContainer to="/sign-up">
              <a href="#!">Forgot password?</a>
            </LinkContainer>
          </div>
        </div>

        <div className="row mb-3">
          <div></div>
          <div className="d-grid gap-2">
            <Button type="submit" variant="primary" size="md" className="rounded-0">Sign In</Button>
          </div>
        </div>

        <div className="row">
          <p className="mb-0 text-center">
            <LinkContainer to="/sign-up">
              <a href="#sign-up">Create an account</a>
            </LinkContainer>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default SignIn;