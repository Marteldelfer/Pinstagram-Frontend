import { useEffect, useState } from "react"
import FeedPost from "../components/FeedPost"
//import { mockPostResponse } from "../utils/mockData"
import { jwtKey } from "../utils/keys"
import type { PostResponseType } from "../types/PostResponseType"
import axios from "axios"

export default function Test() {

  const jwt = jwtKey;
  const [t, setT] = useState<PostResponseType[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/post", {headers: {Authorization: `Bearer ${jwt}`}})
      .then((response) => response.data)
      .then((data) => setT(data))
      .catch((err) => console.error(err));
  }, []);

  return (
		<>
        <div className={"bg-gray-200 h-full dark:bg-gray-950"}>
          <div style={{width: "450px", margin: "auto", backgroundColor: "white"}}>
            {t.map(p => <FeedPost post={p}></FeedPost>)}
          </div>
        </div>
		</>
	)
}