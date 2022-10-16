import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
    let [count, setCount] = useState(10);
    return (
        <article className="card">
            <div className="card__authorFlex">
                <div className="card__authorBox">
                    <img className="card__authorImg" src={props.author.photo} alt="" />
                    <p className="card__authorName">{props.author.name}</p>
                </div>
                <div className="card__contentBox">
                    <span className="card__contentNik">{props.author.nickname}</span>
                    <p className="card__contentText">{props.content}</p>
                    <span className="card__contentDate">{props.date}</span>
                </div>
            </div>
            <div className="card__postBox">
                <img className="card__postImg" src={props.image} alt="" />
                <div className="card__ikonBox">
                    <FontAwesomeIcon icon={faComment} className="sociaIcon" />
                    <FontAwesomeIcon icon={faPaperPlane} className="sociaIcon" />
                    <FontAwesomeIcon icon={faHome} className="sociaIcon" />
                    <FontAwesomeIcon icon={faHeart} className="sociaIcon" onClick={() => setCount((count += 1))} /> <span className="likeCount">{count}</span>
                </div>
            </div>
        </article>
    );
};
export default Post;
