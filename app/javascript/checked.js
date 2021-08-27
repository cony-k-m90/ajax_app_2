// 1.checkという名前で関数を定義しましょう。
//  DOMの取得からエンドポイントへのリクエストなどは、すべてこのcheck関数へ記述することにします。
//  window.addEventListener("load", check);で、
//  window（ページ）をload（読み込み）した時に実行します。
//////////////////////////////////////////////////
// function check() {}
// window.addEventListener("load", check);
//////////////////////////////////////////////////

// 2.checked.jsに、クリック時のイベントを定義しましょう
//  [index.html.erb]7行目〜14行目がメモ部分のブロックになります。
//  この部分を「クリックした時」にイベントを発火させたいので、
//  クリックされる部分の要素を取得するためにchecked.jsへ下記のように記述します。
//  querySelectorAllメソッドで、postをクラス名にもつ要素を取得できます。
//  postというクラス名を持つ要素はメモの数だけ存在します。
//////////////////////////////////////////////////
// function check() {
//   const posts = document.querySelectorAll(".post");
// }
// window.addEventListener("load", check);
//////////////////////////////////////////////////

// 3.checked.jsに、「メモクリックのイベント時」に動作する処理を記述しましょう
//  要素1つずつに対して、「クリック」した際に動作する処理を記述します。
//  まずは、forEachを記述して、それぞれの要素への処理を記述する場所を用意します。
//////////////////////////////////////////////////
// function check() {
//   const posts = document.querySelectorAll(".post");
//   posts.forEach(function (post) {});
// }
// window.addEventListener("load", check);
//////////////////////////////////////////////////
//  次に処理としてaddEventListenerメソッドを使用し、引数にclickの指定をします。
function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
    post.addEventListener("click", () => { });
  });
}
window.addEventListener("load", check);
// これで、「要素1つずつに対して、
// 『クリック』した際に動作するイベント駆動」を設定することができました。

function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
    post.addEventListener("click", () => { });
  });
}
window.addEventListener("load", check);