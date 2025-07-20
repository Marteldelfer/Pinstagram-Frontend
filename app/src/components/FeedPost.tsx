import { useState, useEffect } from "react";
//import axios from "axios";
import type { PostResponseType } from "../types/PostResponseType";
import type { AccountResponseType } from "../types/AccountResponseType";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { jwtKey } from "../utils/keys";

import getTimeDiference from "../utils/dateHandling";
import axios from "axios";

type FeedPostProps = {
  post: PostResponseType,
  className?: string
};

export default function FeedPost({post, className}: FeedPostProps) {

  const jwt = jwtKey;

  function handleLike() {
    if (liked) {
      //axios.put(`http://localhost:8000/like/${post.id}`, {}, {headers: {Authorization: `Bearer ${jwt}`}})
      //  .catch(err => console.error(err));
    } else {
      //axios.put(`http://localhost:8000/dislike/${post.id}`, {}, {headers: {Authorization: `Bearer ${jwt}`}})
      //  .catch(err => console.error(err));
    }
    setLiked(!liked);
  };

  function handleComment() {
      // TODO open comment pop up
      console.log("Commenting...");
  };
  
  const [liked, setLiked] = useState(post.likedByCurrentUser);
  const [expandedDescription, setExpandedDescription] = useState(false);
  const timeDif = getTimeDiference(post.postedAt);

  const [loadingUser, setLoadingUser] = useState(true);
  const [accountResponse, setAccountResponse] = useState<AccountResponseType>();
  
    useEffect(() => {
      axios.get(`http://localhost:8000/api/account/${post.authorId}`, {headers: {Authorization: `Bearer ${jwt}`}})
        .then((response) => response.data)
        .then((data) => {setAccountResponse(data); console.log(data)})
        .then(() => setLoadingUser(false))
        //.catch((e) => console.error(e));
    }, [])

  return (
		<>
      <div className={"dark:bg-gray-950 dark:text-white " + className}>
        { !loadingUser ?
          <div className={"flex items-center p-1 pt-3"}>
            {
              <img src={
                accountResponse?.avatarUrl === null || accountResponse?.avatarUrl === undefined ?
                "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" :
                accountResponse?.avatarUrl
              } width={"32px"} className={"rounded-2xl m-1"}/>
            }
            <span>
              <strong className={"pr-3"}>{accountResponse?.username}</strong>·
              <span className={"pl-3 text-gray-700 dark:text-gray-300"}>{timeDif}</span>
            </span>
         </div> :
         <div className={"flex items-center p-1 pt-3"}>
            <div className={"w-8 h-8 m-1 rounded-2xl bg-gray-300 dark:bg-gray-700 animate-pulse"}></div>
            <div className="h-3 w-16 rounded-xs bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
         </div>
        }

        <img src={post.imageUrl} alt={post.description} className={"w-full rounded-md"}/>

        <div className={"p-2 border-b-1 border-gray-300 dark:border-gray-700"}>
          <div className={"flex mb-2"}>
            { !liked ?
              <FaRegHeart className={"m-1 mr-3 hover:text-gray-700 dark:hover:text-gray-300"} size={"28px"} onClick={handleLike}></FaRegHeart> :
              <FaHeart className={"m-1 mr-3 text-red-600 hover:text-red-500"} size={"28px"} onClick={handleLike}></FaHeart>
            }
            <FaRegComment className={"m-1 mr-3 hover:text-gray-700 dark:hover:text-gray-300"} size={"28px"} onClick={handleComment}></FaRegComment>
          </div>
          <p className={"text-sm"}><strong>{post.likeCount} likes</strong></p>
          <p className={`text-sm ${expandedDescription ? "" : "line-clamp-2"}`}><strong className={"pr-2"}>User</strong>{post.description}</p> {/* TODO change username */}
            {expandedDescription ? 
              null :
              <p className={"text-sm pl-2 text-gray-700 dark:text-gray-300"} onClick={() => setExpandedDescription(true)}>read more</p>
            }
        </div>
      </div>
		</>
	);
}