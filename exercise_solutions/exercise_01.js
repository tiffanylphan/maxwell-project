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
      const totalScore = response.data.reduce((accumulator, event) => {
        return accumulator + (githubEventDictionary[event.type] || 1);
      }, 0);
      console.log(
        `DHH\'s github score is ${totalScore}`
      );
    })

    .catch(err => {
      console.log(err);
    });
};

scoreGithubEvents();