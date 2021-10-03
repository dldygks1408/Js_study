import { Link } from "react-router-dom";

function Header(){
  return(
    <header className="black_nav">
      Yohan
      <nav id='topMenu'>
        <ul>
          <li><Link className='menuLink' to='/about'>About Me</Link></li>
          <li><Link className='menuLink' to='/study'>Study</Link></li>
          <li><Link className='menuLink' to='/'>Project</Link></li>
          <li><a className='menuLink' href='#'>Git</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;