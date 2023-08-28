import classes from './NewsCard.module.scss'

const NewsCard = ({data}) => {
    return ( <div className={classes.Card}>
        <div><img alt="news" src={data.image}/></div>
        <div>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
            <span>{data.date}</span>
        </div>
    </div> );
}
 
export default NewsCard;