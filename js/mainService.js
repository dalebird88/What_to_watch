angular.module("app")
.service("mainService", function(){

  var red = [
    "https://i.ytimg.com/vi/qZMfouM2sH4/maxresdefault.jpg",
    "http://1.bp.blogspot.com/-krw0fzyHEuQ/T0T_pkJIyQI/AAAAAAAAAx0/InxfKI0ddcM/s1600/One_Piece_Title_9.PNG",
    "https://kakeracomplex.files.wordpress.com/2011/01/baccano1.jpg",
    "http://vignette3.wikia.nocookie.net/toonami/images/4/4f/Qyzm02.jpg/revision/latest?cb=20130102093559",
    "http://cdn2.artofthetitle.com/assets/sm/upload/6n/on/ii/gy/cowboy_bebop_t.jpg?k=1e8fc07403"

  ]

  var orange = [
    "https://static.hummingbird.me/gallery_images/images/000/000/305/original/305.jpg?1375598156",
    "http://is4.mzstatic.com/image/thumb/Music6/v4/f6/b6/d1/f6b6d1b6-2132-10d1-72d4-c823a7ee4969/source/400x400-75.jpg",
    "http://my-anime-music.com/wp-content/uploads/2011/03/lucky-star.jpg",
    "https://www.madman.com.au/news/wp-content/uploads/2011/04/kon.jpg",
    "https://upload.wikimedia.org/wikipedia/en/a/a7/Haruhi_Suzumiya_character_album_cover.jpg"
  ];

  var yellow = [
    "http://img1.ak.crunchyroll.com/i/spire3/3e0c95cae25237cea24cb3299044e2ee1380926820_full.jpg",
    "http://ib1.huluim.com/show/21464?region=US&size=952x536",
    "http://www.blogcdn.com/massively.joystiq.com/media/2012/12/header.jpg",
    "http://goldenarmmedia.com/wp-content/uploads/2015/07/neon-genesis-evangelion.jpg",
    "http://static.zerochan.net/Re-l.Mayer.full.160192.jpg"
  ]

  var green = [
    "http://afistfulofculture.com/wp-content/uploads/2012/12/1477-series-header.jpg",
    "https://marblesforpolish.files.wordpress.com/2014/07/1478-series-header.jpg",
    "http://orig03.deviantart.net/129b/f/2009/025/c/0/spirited_away_opening_title_by_shad_wolf.jpg",
    "https://thebookwars.files.wordpress.com/2014/06/thewindrises.jpg",
    "http://4.bp.blogspot.com/-pi4WqjbTJzQ/UWktcN7453I/AAAAAAAARuA/mdngxp1JPj0/s1600/castle_in_the_sky_wallpaper_by_swfan1977-d32r1f5.jpg"
  ]
  var blue = [
    "http://cdn.shopify.com/s/files/1/0228/9021/products/RWBY_Pocket_800_Art.png?v=1463156024",
    "http://vignette2.wikia.nocookie.net/princesstutu/images/b/b5/Banner.jpg/revision/latest?cb=20130726213839",
    "https://uploads.disquscdn.com/images/6115cfe3138b523647de9f2ffe99d562047b1dc78758bb1a09ee62bada6bbb05.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/60/5a/e4/605ae48922873f36c22b54cbaf294ad7.jpg",
    "http://img1.ak.crunchyroll.com/i/spire4/b9899d2d541ebb802d1d2b5a091460511309282622_fwide.jpg"
  ]
  var indigo = [
    "http://cdn.paper4pc.com/images/clannad-wallpaper-6.jpg",
    "https://himesempai.files.wordpress.com/2014/10/toradora_1600x900.jpg",
    "http://www.garytay.com/eleventsuki/wp-content/uploads/2015/12/Ore-Monogatari.png",
    "http://assets.huluim.com/shows/key_art_fruits_basket.jpg",
    "http://when-will.net/images/artikel/2015/march/Wolf-Girl-and-Black-Prince.jpg"
  ]
  var black = [
    "http://actionagogo.com.previewdns.com/wp-content/uploads/2014/11/aot.jpg",
    "https://i.ytimg.com/vi/P-xrIw5gGGo/maxresdefault.jpg",
    "http://vignette1.wikia.nocookie.net/lagooncompany/images/b/b1/Black_Lagoon.jpg/revision/latest?cb=20110718042001",
    "http://blog.neo-amusement.com/wp-content/uploads/2011/02/berserk.59919.jpg",
    "http://www.absoluteanime.com/hellsing_ultimate/wallpaper/hellsing4_1280.jpg"
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
