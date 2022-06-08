import React from 'react';

const Cards=(props)=>
{
    return (
          <div className="cards">
              <img src={props.obj.src} alt="loadingPic" className="card_img" />
              <div className="card_info">
                  <span className="card_category" style={props.obj.color}>{props.obj.category}</span>
                  <h3 className="card_title">{props.obj.title}</h3>
                  <a href={props.obj.link} target="_blank">
                      <button>Watch Now</button>
                  </a>
              </div>
          </div>
    );
}

export default Cards;