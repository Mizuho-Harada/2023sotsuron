var inst = {
    type: "instructions",
    pages: [
        '<p>これから、Task1を始めます。</p>',
        '<p>あなたは自分以外の一人とペアを組んだとします。</p><p>この人はあなたの知っている人ではなく、お互いに匿名な状態です。</p><p>以降、この人を「他者」と表記します。</p><p>よろしければ、「次へ」をクリックしてください。</p>',
        '<p>あなたにはこれから，あなたと他者との間における資源の分配を決定していただきます。</p><p>以下の質問のそれぞれについて，<strong>あなたが最も好む配分</strong>をコンピュータ上の選択肢から選択してください。</p><p>資源の量はポイント (pt) で表記されており，<strong><font color="red">1ptあたり100円</font></strong>の価値があります。</p><p>これらの質問に正解・不正解はありませんのであなたの思うままに回答してください。</p><p>あなたの選択は、<strong><font color="red">他者が受け取るポイントだけでなく，あなたが受け取るポイントにも影響を与える</font></strong>ことに注意してください。</p><p>よろしければ、「次へ」をクリックしてください。</p>',
    ],
    show_clickable_nav: true,
    allow_backward: false,
    button_label_next: "次へ"
};

var slider_1 = {
    type: "html-slider-response",
    stimulus: `<div style="width:500px;">
            <p style="text-align: left">第1問</p>
        </div>
        <div style="text-align:center;">
            <p>あなたと他者の配分を決定してください。</p>
        <div style="margin-bottom:3em;">
            <p><strong><font color="red">上の段はあなた</font></strong>が受け取り、<strong><font color="red">下の段は他者</font></strong>が受け取ることに注意してください。</p>
        </div>
        </div>`,
    prompt: `<div style="margin-top:3em;">
        <p>回答したら、「次へ」をクリックしてください。</p>
        <p><strong>スライダーを動かさないと次へ進めません</strong>ので注意してください。</p>
        </div>`,
    labels: ['85</br>|</br>85','85</br>|</br>76','85</br>|</br>68','85</br>|</br>59','85</br>|</br>50','85</br>|</br>41','85</br>|</br>33','85</br>|</br>24','85</br>|</br>15'],
    min: 0,
    max: 100,
    start: 50,
    step: 12.5,
    slider_width: 400,
    require_movement: true
};

var slider_2 = {
    type: "html-slider-response",
    stimulus: `<div style="width:500px;">
            <p style="text-align: left">第2問</p>
        </div>
        <div style="text-align:center;">
            <p>あなたと他者の配分を決定してください。</p>
        <div style="margin-bottom:3em;">
            <p><strong><font color="red">上の段はあなた</font></strong>が受け取り、<strong><font color="red">下の段は他者</font></strong>が受け取ることに注意してください。</p>
        </div>
        </div>`,
    prompt: `<div style="width=500px;">
        <p>回答したら、「次へ」をクリックしてください。</p>
        <p><strong>スライダーを動かさないと次へ進めません</strong>ので注意してください。</p>
        </div>`,
    labels: ['85</br>|</br>15','87</br>|</br>19','89</br>|</br>24','91</br>|</br>28','93</br>|</br>33','94</br>|</br>37','96</br>|</br>41','98</br>|</br>46','100</br>|</br>50'],
    min: 0,
    max: 100,
    start: 50,
    step: 12.5,
    slider_width: 750,
    require_movement: true
};

var slider_3 = {
    type: "html-slider-response",
    stimulus: `<div style="width:500px;">
            <p style="text-align: left">第3問</p>
        </div>
        <div style="text-align:center;">
            <p>あなたと他者の配分を決定してください。</p>
        <div style="margin-bottom:3em;">
            <p><strong><font color="red">上の段はあなた</font></strong>が受け取り、<strong><font color="red">下の段は他者</font></strong>が受け取ることに注意してください。</p>
        </div>
        </div>`,
    prompt: `<div style="width=500px;">
        <p>回答したら、「次へ」をクリックしてください。</p>
        <p><strong>スライダーを動かさないと次へ進めません</strong>ので注意してください。</p>
        </div>`,
    labels: ['50</br>|</br>100','54</br>|</br>98','59</br>|</br>96','63</br>|</br>94','68</br>|</br>93','72</br>|</br>91','76</br>|</br>89','81</br>|</br>87','85</br>|</br>85'],
    min: 0,
    max: 100,
    start: 50,
    step: 12.5,
    slider_width: 750,
    require_movement: true
};

var slider_4 = {
    type: "html-slider-response",
    stimulus: `<div style="width:500px;">
            <p style="text-align: left">第4問</p>
        </div>
        <div style="text-align:center;">
            <p>あなたと他者の配分を決定してください。</p>
        <div style="margin-bottom:3em;">
            <p><strong><font color="red">上の段はあなた</font></strong>が受け取り、<strong><font color="red">下の段は他者</font></strong>が受け取ることに注意してください。</p>
        </div>
        </div>`,
    prompt: `<div style="width=500px;">
        <p>回答したら、「次へ」をクリックしてください。</p>
        <p><strong>スライダーを動かさないと次へ進めません</strong>ので注意してください。</p>
        </div>`,
    labels: ['50</br>|</br>100','54</br>|</br>89','59</br>|</br>79','63</br>|</br>68','68</br>|</br>58','72</br>|</br>47','76</br>|</br>36','81</br>|</br>26','85</br>|</br>15'],
    min: 0,
    max: 100,
    start: 50,
    step: 12.5,
    slider_width: 750,
    require_movement: true
};

var slider_5 = {
    type: "html-slider-response",
    stimulus: `<div style="width:500px;">
            <p style="text-align: left">第5問</p>
        </div>
        <div style="text-align:center;">
            <p>あなたと他者の配分を決定してください。</p>
        <div style="margin-bottom:3em;">
            <p><strong><font color="red">上の段はあなた</font></strong>が受け取り、<strong><font color="red">下の段は他者</font></strong>が受け取ることに注意してください。</p>
        </div>
        </div>`,
    prompt: `<div style="width=500px;">
        <p>回答したら、「次へ」をクリックしてください。</p>
        <p><strong>スライダーを動かさないと次へ進めません</strong>ので注意してください。</p>
        </div>`,
    labels: ['100</br>|</br>50','94</br>|</br>56','88</br>|</br>63','81</br>|</br>69','75</br>|</br>75','69</br>|</br>81','63</br>|</br>88','56</br>|</br>94','50</br>|</br>100'],
    min: 0,
    max: 100,
    start: 50,
    step: 12.5,
    slider_width: 750,
    require_movement: true
};

var slider_6 = {
    type: "html-slider-response",
    stimulus: `<div style="width:500px;">
            <p style="text-align: left">第6問</p>
        </div>
        <div style="text-align:center;">
            <p>あなたと他者の配分を決定してください。</p>
        <div style="margin-bottom:3em;">
            <p><strong><font color="red">上の段はあなた</font></strong>が受け取り、<strong><font color="red">下の段は他者</font></strong>が受け取ることに注意してください。</p>
        </div>
        </div>`,
    prompt: `<div style="width=500px;">
        <p>回答したら、「次へ」をクリックしてください。</p>
        <p><strong>スライダーを動かさないと次へ進めません</strong>ので注意してください。</p>
        </div>`,
    labels: ['100</br>|</br>50','98</br>|</br>54','96</br>|</br>59','94</br>|</br>63','93</br>|</br>68','91</br>|</br>72','89</br>|</br>76','87</br>|</br>81','85</br>|</br>85'],
    min: 0,
    max: 100,
    start: 50,
    step: 12.5,
    slider_width: 750,
    require_movement: true
};

//timelineの設定
var timeline = [];
timeline.push(inst);
timeline.push(slider_1);
timeline.push(slider_2);
timeline.push(slider_3);
timeline.push(slider_4);
timeline.push(slider_5);
timeline.push(slider_6);