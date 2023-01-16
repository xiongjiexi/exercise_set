import{_ as n,o as s,c as a,a as p}from"../app.99e1ebfc.mjs";const t={},o=p(`<h1 id="_1665-\u5B8C\u6210\u6240\u6709\u4EFB\u52A1\u7684\u6700\u5C11\u521D\u59CB\u80FD\u91CF" tabindex="-1"><a class="header-anchor" href="#_1665-\u5B8C\u6210\u6240\u6709\u4EFB\u52A1\u7684\u6700\u5C11\u521D\u59CB\u80FD\u91CF" aria-hidden="true">#</a> 1665. \u5B8C\u6210\u6240\u6709\u4EFB\u52A1\u7684\u6700\u5C11\u521D\u59CB\u80FD\u91CF</h1><h2 id="approach-1-\u81EA\u5B9A\u4E49\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#approach-1-\u81EA\u5B9A\u4E49\u6392\u5E8F" aria-hidden="true">#</a> approach 1\uFF0C\u81EA\u5B9A\u4E49\u6392\u5E8F</h2><p>\u6211\u770B\u4E0D\u61C2\u7684\u3002\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minimumEffort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tasks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>tasks<span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> t <span class="token operator">:</span> tasks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> sum <span class="token operator">+</span> t<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            sum <span class="token operator">+=</span> t<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","1665. \u5B8C\u6210\u6240\u6709\u4EFB\u52A1\u7684\u6700\u5C11\u521D\u59CB\u80FD\u91CF.html.vue"]]);export{k as default};
