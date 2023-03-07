import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { ThemeContext, themes } from '../../../contexts/ThemeContext';
import styles from './index.css'

function DebugPrint(props) {
  const [show, setShow] = useState(props.show);

  const toggle = (next) => {
    setShow(!show);
    next();
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={`DebugPrint-${theme === themes.dark ? themes.light : themes.dark}`}>
          <Button
            className={"rounded-0 "}
            size="lg"
            variant="dark"
            id="toggle-check"
            type="checkbox"
            onClick={() => toggle(props.onClick)}
          >
            <span style={{fontFamily: 'monospace'}}>Debugger</span>
          </Button>

          {show
            ? (
              props.blocks.map((block, key) => {
                return <pre key={key} style={styles.pre}>
                  {JSON.stringify(block, null, 2) }
                </pre>
              })
            ) : null
          }
        </div>
      )}
    </ThemeContext.Consumer>
  )
};

export default DebugPrint