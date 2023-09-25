import { Link } from "react-router-dom"



export default function Modulecard({ title, coverImg }){


    return(
        <Link to={`/${title}`} className="module-card" >
            <img src={ coverImg } alt={ title } />
            <h2 className="text-lg font-medium" >{ title }</h2>
        </Link>
    )
}