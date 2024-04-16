import { useEffect, useState,useContext } from "react";
import PostCard from "../PostCard";
import axios from "axios";
import PostContext from "../../Providers/PostProvider";


export default function PostCardList(){
    const{posts,setPosts}=useContext(PostContext);
    return (
        (posts.length==0)?
            "loading....":
            posts.map((post)=>
            <PostCard 
            content = {post.text}
            image = {post.image}
            authorFirstName = {post.owner.firstName}
            key={post.id}
        />)
    )
}