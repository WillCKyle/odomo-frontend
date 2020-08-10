import React from 'react';
import IssuesList from '../../components/IssuesList.js';
import issueContent from '../issuePages/issue-content';

const HomeFeed = () => (

  <>
  <h1>Home</h1>
  <IssuesList issues={issueContent} />
  </>

);

export default HomeFeed;
