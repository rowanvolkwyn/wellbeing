const Article = (props) => {
    
    const { photo, title, description, author, date } = props;
    
    return (
        <div id="article">
            <div className="photo">
                <img src={photo} alt="Article" />
            </div>
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="information">
                <p>{author}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Article;