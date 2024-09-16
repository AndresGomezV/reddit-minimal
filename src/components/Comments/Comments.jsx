import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
                if (response.ok) {
                    const jsonResponse = await response.json();
                    setComments(jsonResponse[1].data.children.map((child) => child.data));
    
                } else {
                    console.error("Failed to fetch comments");
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchComments();
    }, [postId]);// para que el fetch se ejecute cada vez que cambie el postId


  return (
    <div>
        <div>
        {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
        ))}
        </div>
    </div>
  )
}

export default Comments