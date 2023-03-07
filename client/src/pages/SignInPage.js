import Container from 'react-bootstrap/Container';
import Layout from '../components/Layout';
import SignIn from '../components/SignIn'
import "./Pages.css"

const SignInPage = () => (
  <Layout>
    <Container className="mt-5 p-5 w-150 d-flex justify-content-center">
      <SignIn />
    </Container>
  </Layout>
);

export default SignInPage;