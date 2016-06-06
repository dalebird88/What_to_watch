angular.module("app")
.service("mainService", function(){

  var orange = [
    "https://static.hummingbird.me/gallery_images/images/000/000/305/original/305.jpg?1375598156",
    "http://is4.mzstatic.com/image/thumb/Music6/v4/f6/b6/d1/f6b6d1b6-2132-10d1-72d4-c823a7ee4969/source/400x400-75.jpg",
    "http://my-anime-music.com/wp-content/uploads/2011/03/lucky-star.jpg"
  ];

this.getcolor = function(arr){
  if (arr === 'orange'){
    return orange;
  }

}

})
