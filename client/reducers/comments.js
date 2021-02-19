//a reducer needs 2 things
//1. the action (info about what happened)
//2. copy of current state

function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          user: action.author,
          text: action.comment,
        },
      ];
    case "REMOVE_COMMENT":
      console.log("Remove Comment");
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
}

export default function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action),
    };
  }
  return state;
}