import{_ as s,c as n,o,d as a}from"./app.5fc5fd90.js";const C=JSON.parse('{"title":"Motoren ansteuern","description":"","frontmatter":{},"headers":[{"level":2,"title":"Motor starten","slug":"motor-starten"}],"relativePath":"projekt_2/projekt_2_1.md"}'),l={name:"projekt_2/projekt_2_1.md"},p=a(`<h1 id="motoren-ansteuern" tabindex="-1">Motoren ansteuern <a class="header-anchor" href="#motoren-ansteuern" aria-hidden="true">#</a></h1><h2 id="motor-starten" tabindex="-1">Motor starten <a class="header-anchor" href="#motor-starten" aria-hidden="true">#</a></h2><p>Verbinde einen grossen Motor mit dem Port A des EV3-Bricks. Im Programm soll der Motor den Namen <code>motor</code> tragen:</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">motor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Motor</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Port</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">A</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>Schreibe ein Programm, welches die folgende Anforderung erf\xFCllt. Sobald der Touch-Sensor gedr\xFCckt wird, soll der Motor mit einer Geschwindigkeit von einer halben Umdrehung pro Sekunde laufen. Letzteres erreichst du mit dem Befehl <code>run()</code>. Der Motor dreht mit einer Geschwindigkeit von 180\xB0 pro Sekunde:</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">motor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">180</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>...oder mit derselben Geschwindigkeit in die andere Richtung...</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">motor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">(-</span><span style="color:#F78C6C;">180</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>L\xD6SUNG</summary><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/usr/bin/env pybricks-micropython</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> ev3brick </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> brick</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hubs </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> EV3Brick</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ev3devices </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Motor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> TouchSensor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ColorSensor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> InfraredSensor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> UltrasonicSensor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> GyroSensor</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parameters </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Port</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Stop</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Direction</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Button</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Color</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tools </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> wait</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> StopWatch</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> DataLog</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">robotics </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> DriveBase</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">media</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ev3dev </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> SoundFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ImageFile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">touch_sensor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TouchSensor</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Port</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">S1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">motor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Motor</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Port</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">A</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> touch_sensor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pressed</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">        motor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">180</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># Motor l\xE4uft mit 180\xB0 / Sekunde</span></span>
<span class="line"></span></code></pre></div></details><p>Weitere Informationen zu Motoren findest du unter <a href="https://pybricks.com/ev3-micropython/ev3devices.html#motors" target="_blank" rel="noopener noreferrer">Docs&gt;Motors</a>.</p>`,10),e=[p];function t(r,c,D,y,i,F){return o(),n("div",null,e)}var d=s(l,[["render",t]]);export{C as __pageData,d as default};
