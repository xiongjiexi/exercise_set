import{_ as n,o as s,c as a,a as e}from"../app.99e1ebfc.mjs";const p={},t=e(`<h1 id="_1812-\u5224\u65AD\u56FD\u9645\u8C61\u68CB\u68CB\u76D8\u4E2D\u4E00\u4E2A\u683C\u5B50\u7684\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#_1812-\u5224\u65AD\u56FD\u9645\u8C61\u68CB\u68CB\u76D8\u4E2D\u4E00\u4E2A\u683C\u5B50\u7684\u989C\u8272" aria-hidden="true">#</a> 1812. \u5224\u65AD\u56FD\u9645\u8C61\u68CB\u68CB\u76D8\u4E2D\u4E00\u4E2A\u683C\u5B50\u7684\u989C\u8272</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">squareIsWhite</span><span class="token punctuation">(</span><span class="token class-name">String</span> coordinates<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token punctuation">(</span>coordinates<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> coordinates<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> b <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,r){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","1812. \u5224\u65AD\u56FD\u9645\u8C61\u68CB\u68CB\u76D8\u4E2D\u4E00\u4E2A\u683C\u5B50\u7684\u989C\u8272.html.vue"]]);export{u as default};
