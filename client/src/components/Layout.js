import Navigation from './Navigation';

const Layout = (props) => (
  <div className="Layout mt-5 pt-5">
    <Navigation />
    {props.children}
  </div>
);

export default Layout