const axios = require('axios');

const githubEventDictionary = {
  'IssuesEvent': 7,
  'IssueCommentEvent': 6,
  'PushEvent': 5,
  'PullRequestReviewCommentEvent': 4,
  'WatchEvent': 3,
  'CreateEvent': 2
};

const scoreGithubEvents = () => {
  axios.get('https://api.github.com/users/dhh/events/public')

    .then(response => {
      const score = response.data.reduce((a, c) => {
        return a + (githubEventDictionary[c.type] || 1);
      }, 0);
      console.log(
        `DHH\'s github score is ${score}`
      );
    })
    
    .catch(err => {
      console.log(err);
    });
};

module.exports = scoreGithubEvents();