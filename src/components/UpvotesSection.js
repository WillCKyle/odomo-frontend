import React from 'react';

const UpvotesSection = ({issueName, upvotes, setIssueInfo}) => {

  const upvoteIssue = async () => {
    const result = await fetch(`/api/issues/${issueName}/upvote`,{
      method: 'post',
    });
    const body = await result.json();
    setIssueInfo(body);
  }

  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteIssue()}>Upvote</button>
      <p>This issue has been upvoted {upvotes} times</p>
    </div>
  );
};

export default UpvotesSection;
