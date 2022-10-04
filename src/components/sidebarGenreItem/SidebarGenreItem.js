import { Link } from 'react-router-dom';

const SidebarGenreItem = ({ title }) => {

   const designedTitile = title.charAt(0).toUpperCase() + title.slice(1)

   return (
      <Link className='sidebar__genre' to={`/genres/${title}`}>
         {designedTitile}
      </Link>
   )
}

export default SidebarGenreItem