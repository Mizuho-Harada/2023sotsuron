var repo_site = "https://10.41.238.6/Dynabook Pictures/";

var iat_instruction_test = {
    type: "html-keyboard-response",
    stimulus:"<img src='" + repo_site + "Picture03.png' widt='60%'>"+"<p style = 'font-size:1.5em; text-aligin:center'>練習です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「よい」</b>または<b>「虫」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「わるい」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
    choice: ["space"]
};

//実験内容

timeline.push(endmessage);
