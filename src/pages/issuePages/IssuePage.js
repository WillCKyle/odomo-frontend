import React, { useState, useEffect } from 'react';
import IssuesList from '../../components/IssuesList';
import issueContent from './issue-content';
import NotFoundPage from '../mainPages/NotFoundPage';
import CommentsList from '../../components/CommentsList';
import UpvotesSection from '../../components/UpvotesSection';
import AddCommentForm from '../../components/AddCommentForm';

const IssuePage = ({ match }) => {
  const name = match.params.name;
  const issue = issueContent.find( issue => issue.name === name );

  const [issueInfo, setIssueInfo] = useState({ upvotes:0, comments: [] });

  const otherIssues = issueContent.filter(issue => issue.name !== name);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/issues/${name}`);
      const body = await response.json();
      setIssueInfo(body);
    }
    fetchData();
  }, [name]);

  return (
    <>

    <div class="container-fluid">
      <h1>Issue</h1>
      <h1>{issue.title}</h1>

      <UpvotesSection issueName={name} upvotes={issueInfo.upvotes} setIssueInfo={setIssueInfo} />

      {issue.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}

      <CommentsList comments={issueInfo.comments} />
      <AddCommentForm issueName={name} setIssueInfo={setIssueInfo} />

      <h3>Other Issues</h3>
      <IssuesList issues={otherIssues} />
    </div>

    </>
  );

  if (!issue) { return <NotFoundPage /> };
};

export default IssuePage;
