angular.module("app")
.service("mainService", function(){

  var red = [
    "https://i.ytimg.com/vi/qZMfouM2sH4/maxresdefault.jpg",
    "http://1.bp.blogspot.com/-krw0fzyHEuQ/T0T_pkJIyQI/AAAAAAAAAx0/InxfKI0ddcM/s1600/One_Piece_Title_9.PNG"
  ]

  var orange = [
    "https://static.hummingbird.me/gallery_images/images/000/000/305/original/305.jpg?1375598156",
    "http://is4.mzstatic.com/image/thumb/Music6/v4/f6/b6/d1/f6b6d1b6-2132-10d1-72d4-c823a7ee4969/source/400x400-75.jpg",
    "http://my-anime-music.com/wp-content/uploads/2011/03/lucky-star.jpg"
  ];

  var yellow = [
    // log horizon death parade
  ]

  var green = [
    //
  ]
  var blue = [
    //princess tutu?
  ]
  var indigo = [
    //
  ]
  var black = [
    // attack on titan death note black lagoon
  ]

this.getcolor = function(arr){

  if (arr === 'red'){
    return red;
  }

  if (arr === 'orange'){
    return orange;
  }
  else if(arr === 'yellow'){
    return yellow;
  }
  else if(arr === 'green'){
    return green;
  }
  else if(arr === 'blue'){
    return blue;
  }
  else if(arr === 'indigo'){
    return indigo;
  }
  else if(arr === 'black'){
    return black;
  }
}

})
