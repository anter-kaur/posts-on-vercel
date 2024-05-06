import classes from './header.module.css'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return(
        <nav>
            <div className={classes.web_name}>
                Logo
            </div>
            <ul>
                <li><NavLink to='/addpost' className={classes.header_links}>Add Post</NavLink></li>
                <li><NavLink to='/posts' className={classes.header_links}>Posts</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header