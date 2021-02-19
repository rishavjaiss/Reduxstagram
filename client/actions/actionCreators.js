// increment likes
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index: index,
  };
}

//add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId: postId,
    author: author,
    comment: comment,
  };
}

//delete comment
export function removeComment(postId, comment) {
  return {
    type: "REMOVE_COMMENT",
    postId: postId,
    comment: comment,
  };
}
