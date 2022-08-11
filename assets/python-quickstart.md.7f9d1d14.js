import{_ as s,c as e,o as n,d as a}from"./app.cb89926c.js";const h=JSON.parse('{"title":"Python-Quickstart","description":"","frontmatter":{},"headers":[{"level":2,"title":"Kommentare","slug":"kommentare"},{"level":2,"title":"Variablen","slug":"variablen"},{"level":2,"title":"Bedingungen","slug":"bedingungen"},{"level":2,"title":"while Schleife","slug":"while-schleife"},{"level":2,"title":"for Schleife","slug":"for-schleife"},{"level":2,"title":"Mehr","slug":"mehr"}],"relativePath":"python-quickstart.md"}'),l={name:"python-quickstart.md"},o=a(`<h1 id="python-quickstart" tabindex="-1">Python-Quickstart <a class="header-anchor" href="#python-quickstart" aria-hidden="true">#</a></h1><h2 id="kommentare" tabindex="-1">Kommentare <a class="header-anchor" href="#kommentare" aria-hidden="true">#</a></h2><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># druckt &quot;hello&quot; auf der Konsole aus</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">so k\xF6nnen auch Zeilen\xFCbergreifende</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">Kommentare geschrieben werden</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&#39;&#39;&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="variablen" tabindex="-1">Variablen <a class="header-anchor" href="#variablen" aria-hidden="true">#</a></h2><p>Mit Hilfe von Variablen k\xF6nnen verschiedene Dinge, z.B. Zahlen oder Zeichenketten gespeichert werden. Das ist ein bisschen so, wie wenn die Zahl oder die Zeichenkette in eine angeschriebene Schachtel verpackt w\xFCrde \u{1F4E6}. Die Zuweisung funktioniert mit dem <em>Zuweisungsoperator</em> <code>=</code>:</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">jahr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2022</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;"># Ganzzahl</span></span>
<span class="line"><span style="color:#A6ACCD;">tag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Montag</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># Zeichenkette</span></span>
<span class="line"><span style="color:#A6ACCD;">sonnig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># Wahrheitswert (\`True\` oder \`False\`)</span></span>
<span class="line"></span></code></pre></div><p>Die gespeicherten Werte von Variablen k\xF6nnen verwendet werden, in dem einfach die Variablen-Namen aufgerufen werden. Die angeschriebenen Schachteln werden quasi ge\xF6ffnet):</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">jahr</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">tag</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">sonnig</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>Dank Variablen kann ein Programm \xFCberschtlicher geschrieben werden, vor allem, wenn eine Variable mehrmals verwendet wird. Die folgende Zeile aus dem <a href="https://pybricks.com/ev3-micropython/examples/stair_climber.html" target="_blank" rel="noopener noreferrer">StairClimber</a> zeigt das recht sch\xF6n:</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">front_motor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Motor</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Port</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">B</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> Direction</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">COUNTERCLOCKWISE</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>^ statt mit <code>Motor(Port.B, Direction.COUNTERCLOCKWISE)</code> kann der Motor nun einfach mit <code>front_motor</code> angesprochen werden.</p><p>Dank Variablen kann ein Programm flexibler geschrieben werden. \xC4ndert zum Beispiel das Wetter, muss das nur bei der Variablen-Zuweisung ge\xE4ndert werden:</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sonnig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>\u{1F4A1} Reservierte Keywords</summary><p>Die folgenden W\xF6rter sind reservierte \xABKeywords\xBB, und k\xF6nnen nicht als Variablennamen verwendet werden:</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">False</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">pass</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">None</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">except</span></span>
<span class="line"><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">raise</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">finally</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">continue</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lambda</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">nonlocal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">assert</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">del</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">elif</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">yield</span></span>
<span class="line"></span></code></pre></div></details><h2 id="bedingungen" tabindex="-1">Bedingungen <a class="header-anchor" href="#bedingungen" aria-hidden="true">#</a></h2><p>Ein Teilprogramm wird nur ausgef\xFChrt, wenn eine Bedingung erf\xFCllt ist:</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> heute </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Montag</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Heute ist Montag</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>Mit <code>if</code> ... <code>else</code> kann zudem angegeben werden, was andernfalls passieren soll:</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> sonnig</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Es ist sonnig.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Es ist nicht sonnig.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>Mit <code>if</code> ... <code>elif</code> ... <code>else</code> k\xF6nnen noch mehr F\xE4lle unterschieden werden:</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9001</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9000</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x ist kleiner als 9000.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">elif</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9000</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x ist genau 9000.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x ist gr\xF6sser als 9000.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>\u{1F4A1} Logische Operatoren (<code>&gt;</code>, <code>&lt;</code>, <code>==</code>, <code>!=</code>, <code>&gt;=</code>, <code>&lt;=</code>)</summary><table><thead><tr><th>Operator</th><th>Ausdruck</th><th>Beschreibung</th><th>Liefert <code>True</code>, wenn...</th></tr></thead><tbody><tr><td><code>&gt;</code></td><td><code>a &gt; b</code></td><td>gr\xF6sser als</td><td>a gr\xF6sser ist als b.</td></tr><tr><td><code>&lt;</code></td><td><code>a &lt; b</code></td><td>kleiner als</td><td>a kleiner ist als b.</td></tr><tr><td><code>==</code></td><td><code>a == b</code></td><td>gleich</td><td>a und b denselben Wert haben.</td></tr><tr><td><code>!=</code></td><td><code>a != b</code></td><td>ungleich</td><td>a und b ungleiche Werte haben.</td></tr><tr><td><code>&gt;=</code></td><td><code>a &gt;= b</code></td><td>gr\xF6sser oder gleich</td><td>a gr\xF6sser oder gleich b ist.</td></tr><tr><td><code>&lt;=</code></td><td><code>a &lt;= b</code></td><td>kleiner oder gleich</td><td>a kleiner oder gleich b ist.</td></tr></tbody></table></details><details class="details custom-block"><summary>\u{1F4A1} Noch mehr logische Operatoren (<code>and</code>, <code>or</code>, <code>not</code>)</summary><table><thead><tr><th>Operator</th><th>Ausdruck</th><th>Liefert <code>True</code>, wenn...</th></tr></thead><tbody><tr><td><code>and</code></td><td><code>a and b</code></td><td>sowohl <code>a</code> als auch <code>b</code> wahr sind.</td></tr><tr><td><code>or</code></td><td><code>a or b</code></td><td>mindestens a oder <code>b</code> wahr sind.</td></tr><tr><td><code>not</code></td><td><code>not a</code></td><td>a falsch ist</td></tr></tbody></table><table><thead><tr><th><code>a</code></th><th>b</th><th>\u27A1\uFE0F</th><th><code>a or b</code></th><th><code>a and b</code></th></tr></thead><tbody><tr><td><code>True</code></td><td><code>True</code></td><td></td><td><code>True</code></td><td><code>True</code></td></tr><tr><td><code>True</code></td><td><code>False</code></td><td></td><td><code>True</code></td><td><code>False</code></td></tr><tr><td><code>False</code></td><td><code>True</code></td><td></td><td><code>True</code></td><td><code>False</code></td></tr><tr><td><code>false</code></td><td><code>False</code></td><td></td><td><code>False</code></td><td><code>False</code></td></tr></tbody></table></details><h2 id="while-schleife" tabindex="-1"><code>while</code> Schleife <a class="header-anchor" href="#while-schleife" aria-hidden="true">#</a></h2><p>Das Teilprogramm innerhalb einer <code>while</code> Schleife (der \xABK\xF6rper\xBB) l\xE4uft so lange, wie der Test im \xABKopf\xBB der Schleife wahr ist (<code>True</code>):</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9000</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># Kopf der Schleife</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># Ab hier: K\xF6rper der Schleife</span></span>
<span class="line"><span style="color:#A6ACCD;">    x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># Der Wert von \`x\` wird bei jedem Schleifendurchgang um 1 erh\xF6ht</span></span>
<span class="line"></span></code></pre></div><p>F\xFCr die Robotik besonders spannend sind Endlosschleifen. Ist die Bedingung im Schleifenkopf immer wahr, l\xE4uft die Schleife \xABewig\xBB (bis der Roboter abgestellt oder das Programm abgebrochen wird):</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True:</span><span style="color:#A6ACCD;">                                     </span><span style="color:#676E95;font-style:italic;"># Kopf der Schleife</span></span>
<span class="line"><span style="color:#A6ACCD;">    echo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Gib eine Nachricht ein: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Ab hier: K\xF6rper der Schleife</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">echo</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="for-schleife" tabindex="-1"><code>for</code> Schleife <a class="header-anchor" href="#for-schleife" aria-hidden="true">#</a></h2><p>Die folgende <code>for</code> Schleife bewirkt dasselbe wie die <code>while</code> Schleife weiter oben. Oft ist die entsprechende <code>for</code> Schleife k\xFCrzer zum schreiben; <code>while</code> Schleifen sind allerdings flexibler. \u{1F4A1} Statt <code>x</code> k\xF6nnte ein beliebiger Variablenname stehen.</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">9000</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># Kopf der Schleife</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># K\xF6rper der Schleife</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>\u{1F4A1} <code>range(start, stop, step)</code></summary><ul><li>statt nur einem Parameter k\xF6nnen bei <code>range()</code> auch mehrere stehen:</li><li><code>start</code> (dem Start-Wert; optional; Standard ist <code>0</code>)</li><li><code>stop</code> (dem Stop-Wwert (nicht enthalten); <em>nicht optional</em>)</li><li><code>step</code> (der Schrittgr\xF6sse; optional; Standard ist <code>1</code> )</li></ul></details><h2 id="mehr" tabindex="-1">Mehr <a class="header-anchor" href="#mehr" aria-hidden="true">#</a></h2><p>\u{1F517} <a href="https://informatik.lerbermatt.ch" target="_blank" rel="noopener noreferrer">informatik.lerbermatt.ch</a> &gt; (anmelden) &gt; Programmieren 1</p>`,34),t=[o];function p(c,r,i,d,y,D){return n(),e("div",null,t)}var A=s(l,[["render",p]]);export{h as __pageData,A as default};
