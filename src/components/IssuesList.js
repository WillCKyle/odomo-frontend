import React from 'react';
import { Link } from 'react-router-dom';

const IssuesList = ({ issues }) => (
  <>
  {issues.map((issue, key) => (
    <Link key={key} to={`/issue/${issue.name}`}>
      <h3>{issue.title}</h3>
    </Link>
  ))}
  </>
);

export default IssuesList;
