
import './StarRating.css'
const StarRating= (props) =>{
    return(
        <div className="crop" style={{width:props.rating*78/5}}>
            <div style={{width:96}}>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>

            </div>
        </div>
    )
}

export default StarRating;