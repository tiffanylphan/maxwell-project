const axios = require('axios');

const scoreDictionary = {
  'IssuesEvent': 7,
  'IssueCommentEvent': 6,
  'PushEvent': 5,
  'PullRequestReviewCommentEvent': 4,
  'WatchEvent': 3,
  'CreateEvent': 2
};

const scoreGithubEvents = () => {
  // make get request
  axios.get('https://api.github.com/users/dhh/events/public')
    .then(response => {
      // parse results and sum score
      console.log(response.data.reduce((a, c) => {
        return a + (scoreDictionary[c.type] || 1);
      }, 0));
    })
};

module.exports = scoreGithubEvents();


