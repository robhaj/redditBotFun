RedditStream = require('reddit-stream');

var comment_stream = new RedditStream ('comments', 'all', 'unique user agent for my-supercool-bot');

//optionally log in
auth = {
  username: 'my-supercool-bot',
  password: 'password',
  app: {
    id: 'your-app-id',
    secret: 'your-app-secret'
}
};

comment_stream.login(auth).then(

    console.log('logged in for comment stream')

    comment_stream.start();

    console.log ('failed to log in!');

// do stuff with new items here
comment_stream.on('new', (comments {
  console.log('found', comments.length, 'comment(s)');
});
