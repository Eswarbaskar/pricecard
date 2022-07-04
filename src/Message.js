function Message(props){
    return(
 
    
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.pricecard.plan}</h5>
            <h6 className="card-price text-center">${props.pricecard.price}<span className="period">/{props.pricecard.year}</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.pricecard.isUser?"":"text-muted"}><span className="fa-li"><i className={props.pricecard.isUser?"fas fa-check":"fas fa-times"}></i></span>{props.pricecard.user}</li>
              <li className={props.pricecard.isStorage?"":"text-muted"}><span className="fa-li" ><i className={props.pricecard.isStorage?"fas fa-check":"fas fa-times"}></i></span>{props.pricecard.storage}</li>
              <li className={props.pricecard.isProjects?"":"text-muted"}><span className="fa-li" ><i className={props.pricecard.isProjects?"fas fa-check":"fas fa-times"}></i></span>{props.pricecard.projects}</li>
              <li className={props.pricecard.isPrivate?"":"text-muted"}><span className="fa-li"><i className={props.pricecard.isPrivate?"fas fa-check":"fas fa-times"}></i></span>{props.pricecard.community}</li>
              <li className={props.pricecard.isCommunity ?"":"text-muted"}><span className="fa-li"><i className={props.pricecard.isCommunity?"fas fa-check":"fas fa-times"}></i></span>{props.pricecard.private}</li>
              <li className={props.pricecard.isFree?"":"text-muted"}><span className="fa-li"><i className={props.pricecard.isFree?"fas fa-check":"fas fa-times"}></i></span>{props.pricecard.free}</li>
              <li className={props.pricecard.isStatus?"":"text-muted"}><span className="fa-li"><i className={props.pricecard.isStatus?"fas fa-check":"fas fa-times"}></i></span>{props.pricecard.status}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
     
    
        
    );
}

export default Message;