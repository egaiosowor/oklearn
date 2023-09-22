export default function Modulecard({ title, coverImg }){
    return(
        <article>
            <div>
                <img src={ coverImg } alt={ title } />
            </div>
            <div>
                <h2>{ title }</h2>
            </div>
        </article>
    )
}