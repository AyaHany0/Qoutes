var qoutes = [
  (qoute = {
    content: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
    img: "https://images.gr-assets.com/authors/1673611182p5/3565.jpg",
  }),
  (qoute = {
    content:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "― Marilyn Monroe",
    img: "https://hips.hearstapps.com/hmg-prod/images/marilyn_monroe_photo_alfred_eisenstaedt_pix_inc_the_life_picture_collection_getty_images_53376357_cropped.jpg",
  }),
  (qoute = {
    content: "“So many books, so little time.”",
    author: "― Frank Zappa",
    img: "https://images.gr-assets.com/authors/1696236573p5/22302.jpg",
  }),
  (qoute = {
    content:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
    img: "https://images.gr-assets.com/authors/1429114964p5/9810.jpg",
  }),
  (qoute = {
    content:
      "“The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.”",
    author: "― Isaac Asimov    ",
    img: "https://images.gr-assets.com/authors/1341965730p5/16667.jpg",
  }),
  (qoute = {
    content: "“Never memorize something that you can look up.”  ",
    author: "― Albert Einstein    ",
    img: "https://images.gr-assets.com/authors/1429114964p5/9810.jpg",
  }),
  (qoute = {
    content: "“Somewhere, something incredible is waiting to be known.”",
    author: "― Carl Sagan    ",
    img: "https://images.gr-assets.com/authors/1475953320p5/10538.jpg",
  }),
  (qoute = {
    content: "“Time is a drug. Too much of it kills you.”",
    author: "― Terry Pratchett",
    img: "https://images.gr-assets.com/authors/1235562205p5/1654.jpg",
  }),
  (qoute = {
    content: "“Life would be tragic if it weren't funny.”",
    author: "― Stephen Hawking    ",
    img: "https://images.gr-assets.com/authors/1557493340p5/1401.jpg",
  }),
  (qoute = {
    content: "“We are an impossibility in an impossible universe.”  ",
    author: "― Ray Bradbury    ",
    img: "https://images.gr-assets.com/authors/1445955959p5/1630.jpg",
  }),
];

var lastnum;
var visited = [];
function getQoute() {
  if (visited.length == qoutes.length) {
    visited = [];
  }
  do {
    var num = Math.floor(Math.random() * qoutes.length);
  } while (lastnum == num || visited.includes(num));
  visited.push(num);
  lastnum = num;

  document.getElementById("qoute-content").innerHTML = qoutes[num].content;
  document.getElementById("qoute-author").innerHTML = qoutes[num].author;
  document.getElementById("qoute-img").setAttribute("src", qoutes[num].img);
}
