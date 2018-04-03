import axios from 'axios';

const scoreDictionary = {
  'IssuesEvent': 7,
  'IssueCommentEvent': 6,
  'PushEvent': 5,
  'PullRequestReviewCommentEvent': 4,
  'WatchEvent': 3,
  'CreateEvent': 2
};

const translateScore = (dataType) => {
  // should return score of single event
};

export const scoreGithubEvents = () => {
  // make get request
  // parse results and sum score
  // return score
};
