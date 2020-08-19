const responses = [];

const submitHandler = e => {
  e.preventDefault();
  const subreddit = document.getElementById('subreddit').value;
  fetchPosts(subreddit);
};

const fetchPosts = async (subreddit) => {
  const response = await fetch(
    `https://www.reddit.com/r/programmerhumor/top.json?limit=100`
  );
  const responseJSON = await response.json();
  responses.push(responseJSON);
  showPosts(responses[0]);
};

const showPosts = responses => {
  const container = document.getElementById('posts');
  for (var i=0 ; i< responses.data.children.length; i++)
  { 
    const title = responses.data.children[i].data.title;
    const link = responses.data.children[i].data.permalink;
    const linkPost = document.createElement('a');
    linkPost.href = "https://www.reddit.com"+link;
    linkPost.classList.add('reddit-post');
    linkPost.innerText = title;
    container.appendChild(linkPost);
  }
}
const subredditSelect = document.getElementById('subreddit');
subredditSelect.addEventListener('submit', submitHandler);

$(document).ready(function() {
    $("#posts").css("opacity", 0.5);
    $("#posts").hover(function() {
        $(this).animate({opacity: 1.0}, 500);
    }, function() {
        $(this).animate({opacity: 0.5}, 500);
    });
});

$(document).ready(function(){
    $("button").hover(function(){
      $(this).css("background-color", "#149EF0");
      }, function(){
      $(this).css("background-color", "#0077D6");
    });
  });