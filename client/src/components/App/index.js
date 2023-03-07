import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import Container from 'react-bootstrap/Container';
import DebugPrint from '../ui/DebugPrint'
import Layout from '../Layout'

import logo from './logo.svg';
import './index.css';

const TasksQuery = loader('./tasks.gql');

function App() {
  const { loading, error, data } = useQuery(TasksQuery);
  const [showLoading, setShowLoading] = useState(false);
  
  const showError = error ? <p>Error: {error}</p> : null;

  return (
    <Layout>
      <Container className="mt-4">
        <div className="App">
          <header className="App-header">
            {showError}
            <DebugPrint show={!showLoading} blocks={[data]} onClick={() => { setShowLoading(!showLoading) }} />
            {loading || showLoading ? (
              <div className="App-loading">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
            ) : null}
          </header>
        </div>
      </Container>
    </Layout>
  );
}

export default App;
