import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return ( <
    div className = "ui container comments" >
    <
    ApprovalCard >
    <
    CommentDetail author = "Sam"
    timeAgo = " Today at 4:00am"
    commentText = "ok!"
    avatar = {
      faker.image.avatar()
    }
    / > < /
    ApprovalCard > <
    ApprovalCard > <
    CommentDetail author = "alex"
    timeAgo = " Today at 5:00am"
    commentText = "hello!"
    avatar = {
      faker.image.avatar()
    }
    / ></ApprovalCard >
    <
    ApprovalCard > <
    CommentDetail author = "ali"
    timeAgo = " Today at 1:00am"
    commentText = "Nice!"
    avatar = {
      faker.image.avatar()
    }
    / ></ApprovalCard >



    <
    /div>

  );
};

ReactDOM.render( < App / > , document.querySelector('#root'))
