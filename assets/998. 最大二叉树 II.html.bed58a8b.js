import{_ as n,o as s,c as a,a as e}from"../app.99e1ebfc.mjs";const t={},p=e(`<h1 id="_998-\u6700\u5927\u4E8C\u53C9\u6811-ii" tabindex="-1"><a class="header-anchor" href="#_998-\u6700\u5927\u4E8C\u53C9\u6811-ii" aria-hidden="true">#</a> 998. \u6700\u5927\u4E8C\u53C9\u6811 II</h1><h2 id="approach-1-\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#approach-1-\u9012\u5F52" aria-hidden="true">#</a> Approach 1\uFF0C\u9012\u5F52</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">insertIntoMaxTree</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&gt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">TreeNode</span> cur <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">;</span>
            <span class="token keyword">return</span> cur<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">insertIntoMaxTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","998. \u6700\u5927\u4E8C\u53C9\u6811 II.html.vue"]]);export{r as default};
