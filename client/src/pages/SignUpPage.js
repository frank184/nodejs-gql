import Container from 'react-bootstrap/Container';
import Layout from '../components/Layout';
import SignUp from '../components/SignUp'
import "./Pages.css"

const SignUpPage = () => (
  <Layout>
    <Container className="mt-lg-5 p-lg-5 w-100 d-flex justify-content-center">
      <SignUp />
    </Container>
  </Layout>
);

export default SignUpPage;