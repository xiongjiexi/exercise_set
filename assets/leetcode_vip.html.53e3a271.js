import{_ as i,o as e,c as n,a as d}from"../app.99e1ebfc.mjs";const s={},l=d(`<h1 id="leetcode-vip\u9898" tabindex="-1"><a class="header-anchor" href="#leetcode-vip\u9898" aria-hidden="true">#</a> leetcode vip\u9898</h1><h2 id="_1858-\u5305\u542B\u6240\u6709\u524D\u7F00\u7684\u6700\u957F\u5355\u8BCD" tabindex="-1"><a class="header-anchor" href="#_1858-\u5305\u542B\u6240\u6709\u524D\u7F00\u7684\u6700\u957F\u5355\u8BCD" aria-hidden="true">#</a> 1858. \u5305\u542B\u6240\u6709\u524D\u7F00\u7684\u6700\u957F\u5355\u8BCD</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4 words\uFF0C\u627E\u51FA words \u4E2D\u6240\u6709\u7684\u524D\u7F00\u90FD\u5728 words \u4E2D\u7684\u6700\u957F\u5B57\u7B26\u4E32\u3002

\u4F8B\u5982\uFF0C\u4EE4 words = [&quot;a&quot;, &quot;app&quot;, &quot;ap&quot;]\u3002\u5B57\u7B26\u4E32 &quot;app&quot; \u542B\u524D\u7F00 &quot;ap&quot; \u548C &quot;a&quot; \uFF0C\u90FD\u5728 words \u4E2D\u3002
\u8FD4\u56DE\u7B26\u5408\u4E0A\u8FF0\u8981\u6C42\u7684\u5B57\u7B26\u4E32\u3002\u5982\u679C\u5B58\u5728\u591A\u4E2A\uFF08\u7B26\u5408\u6761\u4EF6\u7684\uFF09\u76F8\u540C\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u5B57\u5178\u5E8F\u4E2D\u6700\u5C0F\u7684\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u8FD9\u6837\u7684\u5B57\u7B26\u4E32\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE &quot;&quot;\u3002


\u793A\u4F8B 1:

\u8F93\u5165\uFF1A words = [&quot;k&quot;,&quot;ki&quot;,&quot;kir&quot;,&quot;kira&quot;, &quot;kiran&quot;]
\u8F93\u51FA\uFF1A &quot;kiran&quot;
\u89E3\u91CA\uFF1A &quot;kiran&quot; \u542B\u524D\u7F00 &quot;kira&quot;\u3001 &quot;kir&quot;\u3001 &quot;ki&quot;\u3001 \u548C &quot;k&quot;\uFF0C\u8FD9\u4E9B\u524D\u7F00\u90FD\u51FA\u73B0\u5728 words \u4E2D\u3002
\u793A\u4F8B 2:

\u8F93\u5165\uFF1A words = [&quot;a&quot;, &quot;banana&quot;, &quot;app&quot;, &quot;appl&quot;, &quot;ap&quot;, &quot;apply&quot;, &quot;apple&quot;]
\u8F93\u51FA\uFF1A &quot;apple&quot;
\u89E3\u91CA\uFF1A &quot;apple&quot; \u548C &quot;apply&quot; \u90FD\u5728 words \u4E2D\u542B\u6709\u5404\u81EA\u7684\u6240\u6709\u524D\u7F00\u3002
\u7136\u800C\uFF0C&quot;apple&quot; \u5728\u5B57\u5178\u5E8F\u4E2D\u66F4\u5C0F\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD4\u56DE\u4E4B\u3002
\u793A\u4F8B 3:

\u8F93\u5165\uFF1A words = [&quot;abc&quot;, &quot;bc&quot;, &quot;ab&quot;, &quot;qwe&quot;]
\u8F93\u51FA\uFF1A &quot;&quot;
 

\u63D0\u793A\uFF1A

1 &lt;= words.length &lt;= 105
1 &lt;= words[i].length &lt;= 105
1 &lt;= sum(words[i].length) &lt;= 105
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_759-\u5458\u5DE5\u7A7A\u95F2\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_759-\u5458\u5DE5\u7A7A\u95F2\u65F6\u95F4" aria-hidden="true">#</a> 759. \u5458\u5DE5\u7A7A\u95F2\u65F6\u95F4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7ED9\u5B9A\u5458\u5DE5\u7684 schedule \u5217\u8868\uFF0C\u8868\u793A\u6BCF\u4E2A\u5458\u5DE5\u7684\u5DE5\u4F5C\u65F6\u95F4\u3002

\u6BCF\u4E2A\u5458\u5DE5\u90FD\u6709\u4E00\u4E2A\u975E\u91CD\u53E0\u7684\u65F6\u95F4\u6BB5  Intervals \u5217\u8868\uFF0C\u8FD9\u4E9B\u65F6\u95F4\u6BB5\u5DF2\u7ECF\u6392\u597D\u5E8F\u3002

\u8FD4\u56DE\u8868\u793A \u6240\u6709 \u5458\u5DE5\u7684 \u5171\u540C\uFF0C\u6B63\u6570\u957F\u5EA6\u7684\u7A7A\u95F2\u65F6\u95F4 \u7684\u6709\u9650\u65F6\u95F4\u6BB5\u7684\u5217\u8868\uFF0C\u540C\u6837\u9700\u8981\u6392\u597D\u5E8F\u3002

\u793A\u4F8B 1\uFF1A

\u8F93\u5165\uFF1Aschedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
\u8F93\u51FA\uFF1A[[3,4]]
\u89E3\u91CA\uFF1A
\u5171\u6709 3 \u4E2A\u5458\u5DE5\uFF0C\u5E76\u4E14\u6240\u6709\u5171\u540C\u7684
\u7A7A\u95F4\u65F6\u95F4\u6BB5\u662F [-inf, 1], [3, 4], [10, inf]\u3002
\u6211\u4EEC\u53BB\u9664\u6240\u6709\u5305\u542B inf \u7684\u65F6\u95F4\u6BB5\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4E0D\u662F\u6709\u9650\u7684\u65F6\u95F4\u6BB5\u3002
 

\u793A\u4F8B 2\uFF1A

\u8F93\u5165\uFF1Aschedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
\u8F93\u51FA\uFF1A[[5,6],[7,9]]
 

\uFF08\u5C3D\u7BA1\u6211\u4EEC\u7528 [x, y] \u7684\u5F62\u5F0F\u8868\u793A Intervals \uFF0C\u5185\u90E8\u7684\u5BF9\u8C61\u662F Intervals \u800C\u4E0D\u662F\u5217\u8868\u6216\u6570\u7EC4\u3002\u4F8B\u5982\uFF0Cschedule[0][0].start = 1, schedule[0][0].end = 2\uFF0C\u5E76\u4E14 schedule[0][0][0] \u662F\u672A\u5B9A\u4E49\u7684\uFF09

\u800C\u4E14\uFF0C\u7B54\u6848\u4E2D\u4E0D\u5305\u542B [5, 5] \uFF0C\u56E0\u4E3A\u957F\u5EA6\u4E3A 0\u3002

 

\u6CE8\uFF1A

schedule \u548C schedule[i] \u4E3A\u957F\u5EA6\u8303\u56F4\u5728 [1, 50]\u7684\u5217\u8868\u3002
0 &lt;= schedule[i].start &lt; schedule[i].end &lt;= 10^8\u3002
\u6CE8\uFF1A\u8F93\u5165\u7C7B\u578B\u4E8E 2019 \u5E74 4 \u6708 15 \u65E5 \u6539\u53D8\u3002\u8BF7\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u4EE3\u7801\u7684\u5B9A\u4E49\u4EE5\u83B7\u53D6\u65B0\u65B9\u6CD5\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_323-\u65E0\u5411\u56FE\u4E2D\u8FDE\u901A\u5206\u91CF\u7684\u6570\u76EE" tabindex="-1"><a class="header-anchor" href="#_323-\u65E0\u5411\u56FE\u4E2D\u8FDE\u901A\u5206\u91CF\u7684\u6570\u76EE" aria-hidden="true">#</a> 323. \u65E0\u5411\u56FE\u4E2D\u8FDE\u901A\u5206\u91CF\u7684\u6570\u76EE</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F60\u6709\u4E00\u4E2A\u5305\u542B n \u4E2A\u8282\u70B9\u7684\u56FE\u3002\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570 n \u548C\u4E00\u4E2A\u6570\u7EC4 edges \uFF0C\u5176\u4E2D edges[i] = [ai, bi] \u8868\u793A\u56FE\u4E2D ai \u548C bi \u4E4B\u95F4\u6709\u4E00\u6761\u8FB9\u3002

\u8FD4\u56DE \u56FE\u4E2D\u5DF2\u8FDE\u63A5\u5206\u91CF\u7684\u6570\u76EE \u3002

 

\u793A\u4F8B 1:



\u8F93\u5165: n = 5, edges = [[0, 1], [1, 2], [3, 4]]
\u8F93\u51FA: 2
\u793A\u4F8B 2:



\u8F93\u5165: n = 5, edges = [[0,1], [1,2], [2,3], [3,4]]
\u8F93\u51FA:  1
 

\u63D0\u793A\uFF1A

1 &lt;= n &lt;= 2000
1 &lt;= edges.length &lt;= 5000
edges[i].length == 2
0 &lt;= ai &lt;= bi &lt; n
ai != bi
edges \u4E2D\u4E0D\u4F1A\u51FA\u73B0\u91CD\u590D\u7684\u8FB9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),v=[l];function a(u,r){return e(),n("div",null,v)}const c=i(s,[["render",a],["__file","leetcode_vip.html.vue"]]);export{c as default};
