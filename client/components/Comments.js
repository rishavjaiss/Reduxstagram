import React from "react";

class Comments extends React.Component {
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      const postId = this.props.params.postId;
      const author = this.refs.author.value;
      const comment = this.refs.comment.value;
      this.props.addComment(postId, author, comment);
      this.refs.commentForm.reset();
    };

    return (
      <div className="comments">
        {this.props.postComments.map((comment, i) => (
          <div className="comment" key={i}>
            <p>
              <strong>{comment.user}</strong>
              {comment.text}
              <button
                className="remove-comment"
                onClick={this.props.removeComment.bind(
                  null,
                  this.props.params.postId,
                  i
                )}
              >
                &times;
              </button>
            </p>
          </div>
        ))}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="text" ref="author" placeholder="author"></input>
          <input type="text" ref="comment" placeholder="comment"></input>
          <input type="submit" hidden></input>
        </form>
      </div>
    );
  }
}

export default Comments;
