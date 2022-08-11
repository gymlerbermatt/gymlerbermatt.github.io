import{_ as s,c as n,o as a,d as e}from"./app.cb89926c.js";var o="/assets/ussensor.fecfb998.jpg";const d=JSON.parse('{"title":"Entfernungssensor","description":"","frontmatter":{},"headers":[{"level":2,"title":"Beispiel: Einparkhilfe","slug":"beispiel-einparkhilfe"}],"relativePath":"sensoren/entfernungs_sensor.md"}'),l={name:"sensoren/entfernungs_sensor.md"},p=e(`<h1 id="entfernungssensor" tabindex="-1">Entfernungssensor <a class="header-anchor" href="#entfernungssensor" aria-hidden="true">#</a></h1><h2 id="beispiel-einparkhilfe" tabindex="-1">Beispiel: Einparkhilfe <a class="header-anchor" href="#beispiel-einparkhilfe" aria-hidden="true">#</a></h2><p>Der Ultraschall-Sensor (auch Distanzsensor) misst, wie weit das n\xE4chste Objekt von ihm entfernt ist. Diese Distanz gibt er in der Einheit Millimeter zur\xFCck. Im folgenden Beispiel wird dieser Abstand in der Variablen <code>dist</code> gespeichert.<br> Das Programm imitiert die akustische Einparkhilfe eines Autos. Je schneller diese piepst, desto n\xE4her ist das Hindernis. Die Piep-Frequenz wird \xFCber die <code>wait</code>-Funktion gesteuert. Sie wartet gerade die Anzahl der gemessenen Millimeter Abstand in Form von Millisekunden.</p><p>Die <code>print</code>-Funktion dient nur der Kontrolle. Bei jedem Schleifendurchlauf wird der Abstand in Zentimeter in der Konsole von Visual Studio Code ausgegeben. Alternativ w\xE4re auch eine Ausgabe auf dem Display des EV-Bricks denkbar.</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/usr/bin/env pybricks-micropython</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> ev3brick </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> brick</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hubs </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> EV3Brick</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ev3devices </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Motor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> TouchSensor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ColorSensor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> InfraredSensor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> UltrasonicSensor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> GyroSensor</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parameters </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Port</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Stop</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Direction</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Button</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Color</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tools </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> wait</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> StopWatch</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> DataLog</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">robotics </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> DriveBase</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pybricks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">media</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ev3dev </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> SoundFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ImageFile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dist_sensor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">UltrasonicSensor</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Port</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">S1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True:</span></span>
<span class="line"><span style="color:#A6ACCD;">    dist </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> dist_sensor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">distance</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># Distanz in mm</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Distanz:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> dist</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;"># Ausgabe der Distanz zu Kontrolle</span></span>
<span class="line"><span style="color:#A6ACCD;">    brick</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">sound</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beep</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">800</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;"># 800 Hz, 100 Millisekunden</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">dist</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                         </span></span>
<span class="line"></span></code></pre></div><p>Weitere Informationen zum Entfernungssensor findest du unter <a href="https://pybricks.com/ev3-micropython/ev3devices.html#ultrasonic-sensor" target="_blank" rel="noopener noreferrer">Docs&gt;Ultrasonic Sensor</a>.</p><p><img src="`+o+'" alt="Entfernungssensor"></p>',7),t=[p];function r(c,i,D,y,F,A){return a(),n("div",null,t)}var f=s(l,[["render",r]]);export{d as __pageData,f as default};
