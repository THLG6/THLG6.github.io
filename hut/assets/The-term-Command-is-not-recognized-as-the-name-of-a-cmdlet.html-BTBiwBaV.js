import{_ as s,c as i,o as a,a as e}from"./app-D-p4E5p2.js";const t="/hut/assets/error-xgalaEIM.png",n={},l=e('<p>某一天,启动项目后，项目无法正常启动，报错如下 ......</p><h2 id="报错截图" tabindex="-1"><a class="header-anchor" href="#报错截图"><span>报错截图</span></a></h2><p><img src="'+t+`" alt="报错截图"></p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>打开 VSCode 的设置文件（settings.json）</p><p>添加如下配置</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // ....</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">terminal.integrated.shell.windows</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">C:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Windows</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">System32</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cmd.exe</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">terminal.integrated.defaultProfile.windows</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">C:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Windows</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">System32</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cmd.exe (migrated)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">terminal.integrated.profiles.windows</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">C:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\\</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Windows</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\\</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">System32</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\\</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cmd.exe (migrated)</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">path</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">C:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Windows</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">System32</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cmd.exe</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">args</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> []</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),h=[l];function p(d,k){return a(),i("div",null,h)}const o=s(n,[["render",p],["__file","The-term-Command-is-not-recognized-as-the-name-of-a-cmdlet.html.vue"]]),c=JSON.parse(`{"path":"/The-term-Command-is-not-recognized-as-the-name-of-a-cmdlet.html","title":"The term '-Command' is not recognized as the name of a cmdlet","lang":"zh-CN","frontmatter":{"title":"The term '-Command' is not recognized as the name of a cmdlet","tags":["error","cmd","vscode"],"categories":["报错的解决方案"],"copyright":true,"abbrlink":60363,"date":"2021-07-13T11:31:03.000Z","createTime":"2021-07-13T11:31:03.000Z","top":null,"description":"某一天,启动项目后，项目无法正常启动，报错如下 ...... 报错截图 报错截图 解决方案 打开 VSCode 的设置文件（settings.json） 添加如下配置 或者","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://blog.thlg.xyz/hut/The-term-Command-is-not-recognized-as-the-name-of-a-cmdlet.html"}],["meta",{"property":"og:site_name","content":"天火流光"}],["meta",{"property":"og:title","content":"The term '-Command' is not recognized as the name of a cmdlet"}],["meta",{"property":"og:description","content":"某一天,启动项目后，项目无法正常启动，报错如下 ...... 报错截图 报错截图 解决方案 打开 VSCode 的设置文件（settings.json） 添加如下配置 或者"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"error"}],["meta",{"property":"article:tag","content":"cmd"}],["meta",{"property":"article:tag","content":"vscode"}],["meta",{"property":"article:published_time","content":"2021-07-13T11:31:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"The term '-Command' is not recognized as the name of a cmdlet\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-13T11:31:03.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"报错截图","slug":"报错截图","link":"#报错截图","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"readingTime":{"minutes":0.41,"words":123},"git":{"updatedTime":null,"contributors":[]},"autoDesc":true,"filePathRelative":"The-term-Command-is-not-recognized-as-the-name-of-a-cmdlet.md","categoryList":[]}`);export{o as comp,c as data};
