import{_ as s,c as n,o as a,d as l}from"./app.493d50a8.js";const C=JSON.parse('{"title":"Motoren ansteuern","description":"","frontmatter":{},"headers":[{"level":2,"title":"Motor starten und stoppen (schwierig \u{1F98A})","slug":"motor-starten-und-stoppen-schwierig-fox-face"}],"relativePath":"projekt_2/projekt_2_3.md"}'),o={name:"projekt_2/projekt_2_3.md"},p=l(`<h1 id="motoren-ansteuern" tabindex="-1">Motoren ansteuern <a class="header-anchor" href="#motoren-ansteuern" aria-hidden="true">#</a></h1><h2 id="motor-starten-und-stoppen-schwierig-fox-face" tabindex="-1">Motor starten und stoppen (schwierig \u{1F98A}) <a class="header-anchor" href="#motor-starten-und-stoppen-schwierig-fox-face" aria-hidden="true">#</a></h2><p>Dr\xFCckst du den Touch-Sensor das erste Mal, so soll der Motor starten. Dr\xFCckst du den Touch-Sensor ein zweites Mal, soll der Motor wieder stoppen. Beim dritten Mal wieder starten, beim vierten Mal wieder stoppen, usw.</p><p>Tipp: Du brauchst zwei Hilfsvariablen. Die eine Hilfsvariable sorgt daf\xFCr, dass ein Knopfdruck nur einmal erkannt wird (<a href="./../projekt_1/projekt_1_6.html">bereits bekannt</a>). Die andere Hilfsvariable gibt Auskunft dar\xFCber, ob den Motor gerade l\xE4uft oder nicht (und dann entsprechend bei Knopfdruck gestoppt oder gestartet werden muss).</p><details class="details custom-block"><summary>m\xF6gliche L\xD6SUNG</summary><div class="language-python line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/usr/bin/env pybricks-micropython</span></span>
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
<span class="line"><span style="color:#A6ACCD;">buttonAlreadyDown </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># Knopf schon vorher unten?</span></span>
<span class="line"><span style="color:#A6ACCD;">motorRun </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span><span style="color:#A6ACCD;">                        </span><span style="color:#676E95;font-style:italic;"># L\xE4uft der Motor bereits?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> touch_sensor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pressed</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> buttonAlreadyDown</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># Knopf wird neu gedr\xFCckt</span></span>
<span class="line"><span style="color:#A6ACCD;">            buttonAlreadyDown </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># \u2026also ist der Knopf jetzt unten.</span></span>
<span class="line"><span style="color:#A6ACCD;">            motorRun </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> motorRun     </span><span style="color:#676E95;font-style:italic;"># Wahrheitswert wird invertiert\u2026</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> motorRun</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># \u2026und der Motor gestartet\u2026</span></span>
<span class="line"><span style="color:#A6ACCD;">                motor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">                       </span><span style="color:#676E95;font-style:italic;"># \u2026oder angehalten.</span></span>
<span class="line"><span style="color:#A6ACCD;">                motor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stop</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        buttonAlreadyDown </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># Knopf wird wieder losgelassen</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">wait</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                           </span><span style="color:#676E95;font-style:italic;"># 1/10 Sekunde warten</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></details><p>Weitere Informationen zu Motoren findest du unter <a href="https://pybricks.com/ev3-micropython/ev3devices.html#motors" target="_blank" rel="noopener noreferrer">Docs&gt;Motors</a>.</p>`,6),e=[p];function t(r,c,i,D,y,F){return a(),n("div",null,e)}var u=s(o,[["render",t]]);export{C as __pageData,u as default};
