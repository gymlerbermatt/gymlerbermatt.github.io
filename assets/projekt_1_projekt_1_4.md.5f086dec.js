import{_ as e,c as s,o as n,a}from"./app.9a4af19a.js";const F=JSON.parse('{"title":"Der \u{1F916}-Loop","description":"","frontmatter":{},"headers":[{"level":2,"title":"Erste Schritte - Touch/Beep III","slug":"erste-schritte-touch-beep-iii"}],"relativePath":"projekt_1/projekt_1_4.md"}'),o={name:"projekt_1/projekt_1_4.md"},r=a(`<h1 id="der-robot-loop" tabindex="-1">Der \u{1F916}-Loop <a class="header-anchor" href="#der-robot-loop" aria-hidden="true">#</a></h1><h2 id="erste-schritte-touch-beep-iii" tabindex="-1">Erste Schritte - Touch/Beep III <a class="header-anchor" href="#erste-schritte-touch-beep-iii" aria-hidden="true">#</a></h2><p>Beim vorangehenden Programm f\xFChrt ein einmaliges Dr\xFCcken auf den Touch-Sensor automatisch zum Ende des Programms. Dies k\xF6nnen wir \xE4ndern, indem wir die while-Schleife nie beenden und mit einer if-Bedingung st\xE4ndig nachfragen, ob der Touch-Sensor gedr\xFCckt wurde.<br> Die Zeile <code>brick.sound.beep(440,1000)</code> ist doppelt einger\xFCckt, weil sie sowohl in der while-Schleife wie auch in der if-Bedingung steht.</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">touch_sensor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TouchSensor</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Port</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">S1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> touch_sensor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pressed</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">        brick</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">sound</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">440</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">FRAGE</p><p>Welche \xABUnsch\xF6nheit\xBB hat dieses Programm?</p></div><details class="details custom-block"><summary>ANTWORT</summary><p>Die Schleife l\xE4uft so rasch immer und immer wieder durch, dass ein Druck auf den Touch-Sensor gleich mehrmals registriert wird. Die Anforderung zum Spielen des Tons, wird also mehrmals erteilt und der Ton ist l\xE4nger als eine Sekunde h\xF6rbar.</p></details>`,6),t=[r];function l(p,c,i,d,h,u){return n(),s("div",null,t)}var _=e(o,[["render",l]]);export{F as __pageData,_ as default};
