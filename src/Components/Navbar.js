import PropTypes from 'prop-types'



function Navbar(props){
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className={`form-check form-switch ms-auto text-${props.mode==='dark'?'light':'dark'}`}>
              <input className={`form-check-input bg-${props.mode==='dark'?'dark':'light'}`} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    home : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
  }