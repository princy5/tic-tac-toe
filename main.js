// !(function (t) {
//   var i = t(window);
//   t.fn.visible = function (t, e, o) {
//     if (!(this.length < 1)) {
//       var r = this.length > 1 ? this.eq(0) : this,
//         n = r.get(0),
//         f = i.width(),
//         h = i.height(),
//         o = o ? o : "both",
//         l = e === !0 ? n.offsetWidth * n.offsetHeight : !0;
//       if ("function" == typeof n.getBoundingClientRect) {
//         var g = n.getBoundingClientRect(),
//           u = g.top >= 0 && g.top < h,
//           s = g.bottom > 0 && g.bottom <= h,
//           c = g.left >= 0 && g.left < f,
//           a = g.right > 0 && g.right <= f,
//           v = t ? u || s : u && s,
//           b = t ? c || a : c && a;
//         if ("both" === o) return l && v && b;
//         if ("vertical" === o) return l && v;
//         if ("horizontal" === o) return l && b;
//       } else {
//         var d = i.scrollTop(),
//           p = d + h,
//           w = i.scrollLeft(),
//           m = w + f,
//           y = r.offset(),
//           z = y.top,
//           B = z + r.height(),
//           C = y.left,
//           R = C + r.width(),
//           j = t === !0 ? B : z,
//           q = t === !0 ? z : B,
//           H = t === !0 ? R : C,
//           L = t === !0 ? C : R;
//         if ("both" === o) return !!l && p >= q && j >= d && m >= L && H >= w;
//         if ("vertical" === o) return !!l && p >= q && j >= d;
//         if ("horizontal" === o) return !!l && m >= L && H >= w;
//       }
//     }
//   };
// })(jQuery);


$(".multiplayer").hide();
$(".singleplayer").hide(); /*singleplayer class for all that shows up after singleplayer button clicked  */

// to show
/*btn-singleplayer is class for singleplayer button*/
$(".btn-singleplayer").click(function () {
  $(".singleplayer").slideToggle();

  if ($(".multiplayer").is(':visible')) {
    $(".multiplayer").slideToggle();
  }
});

$(".btn-multiplayer").click(function () {
  $(".multiplayer").slideToggle();

  if ($(".singleplayer").is(':visible')) {
    $(".singleplayer").slideToggle();
  }
});

//fn called when confirm button clicked for singleplayer
function getValuesSingleplayer() {
  const playerName = document.getElementById("player").value;
  localStorage.setItem("Player", playerName);
//to set the players preference for symbol
  if ($("#X").prop("checked")) {
    localStorage.setItem("StartingMove", "X");
  } else {
    localStorage.setItem("StartingMove", "O");
  }

  return;
}

//fn called when confirm button clicked for multiplayer
function getValuesMultiplayer() {
  const playerName1 = document.getElementById("player1").value;
  const playerName2 = document.getElementById("player2").value;

  localStorage.setItem("Player1", playerName1);
  localStorage.setItem("Player2", playerName2);

  return;
}

if (!JSON.parse(localStorage.getItem("allScores"))) {
  var allScores = [];
  localStorage.setItem("allScores", JSON.stringify(allScores));
}
