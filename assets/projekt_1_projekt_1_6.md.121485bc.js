import{_ as e,c as s,o as n,d as a}from"./app.5fc5fd90.js";const h=JSON.parse('{"title":"Der \u{1F916}-Loop","description":"","frontmatter":{},"headers":[{"level":2,"title":"Erste Schritte - gebremste Schleife","slug":"erste-schritte-gebremste-schleife"}],"relativePath":"projekt_1/projekt_1_6.md"}'),l={name:"projekt_1/projekt_1_6.md"},o=a(`<h1 id="der-robot-loop" tabindex="-1">Der \u{1F916}-Loop <a class="header-anchor" href="#der-robot-loop" aria-hidden="true">#</a></h1><h2 id="erste-schritte-gebremste-schleife" tabindex="-1">Erste Schritte - gebremste Schleife <a class="header-anchor" href="#erste-schritte-gebremste-schleife" aria-hidden="true">#</a></h2><p>Meist reicht es, wenn die while-Scheife zum Beispiel zehnmal pro Sekunde durchlaufen wird (also alle 100 Millisekunden einmal). Das erreichst du, indem bei jedem Schleifendurchlauf der Befehl <code>wait(111)</code> ausgef\xFChrt wird, der das Programm 100 Millisekunden ruhen l\xE4sst.</p><p>Soll ein Druck auf den Touch-Sensor nur einmal registriert werden, so m\xFCssen wir eine zus\xE4tzliche Variable als Hilfe beiziehen. Diese speichert, ob der Sensor bereits im vorangehenden Schleifendurchlauf gedr\xFCckt war. Wir nennen sie deshalb <code>buttonAlreadyDown</code> und setzen ihren Wert anf\xE4nglich auf <code>False</code> (falsch). Wenn der Touch-Sensor bet\xE4tigt wird, dann fragen wir den Wert dieser Variablen ab. Falls der Knopf vorher noch nicht unten war (<code>not buttonAlreadyDown</code>), spielen wir den Ton ab und setzen die Variable <code>buttonAlreadyDown</code> auf <code>True</code> (wahr). Nun wird der Ton beim n\xE4chsten Schleifendurchlauf nicht mehr abgespielt. Erst wenn wir den Touch-Sensor loslassen, wird die Variable <code>buttonAlreadyDown</code> wieder auf <code>False</code> gesetzt und ein neuerliches Dr\xFCcken der Touch-Sensor l\xE4sst den Ton wieder erklingen.</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">touch_sensor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TouchSensor</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Port</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">S1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">buttonAlreadyDown </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> touch_sensor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pressed</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> buttonAlreadyDown</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            brick</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">sound</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">440</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            buttonAlreadyDown </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        buttonAlreadyDown </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,5),r=[o];function t(p,c,i,d,D,F){return n(),s("div",null,r)}var u=e(l,[["render",t]]);export{h as __pageData,u as default};
