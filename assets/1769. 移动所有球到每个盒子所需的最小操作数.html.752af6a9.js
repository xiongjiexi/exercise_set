import{_ as n,o as s,c as a,a as p}from"../app.99e1ebfc.mjs";const t={},o=p(`<h1 id="_1769-\u79FB\u52A8\u6240\u6709\u7403\u5230\u6BCF\u4E2A\u76D2\u5B50\u6240\u9700\u7684\u6700\u5C0F\u64CD\u4F5C\u6570" tabindex="-1"><a class="header-anchor" href="#_1769-\u79FB\u52A8\u6240\u6709\u7403\u5230\u6BCF\u4E2A\u76D2\u5B50\u6240\u9700\u7684\u6700\u5C0F\u64CD\u4F5C\u6570" aria-hidden="true">#</a> 1769. \u79FB\u52A8\u6240\u6709\u7403\u5230\u6BCF\u4E2A\u76D2\u5B50\u6240\u9700\u7684\u6700\u5C0F\u64CD\u4F5C\u6570</h1><h2 id="approach-1-\u53CC\u5411\u6A21\u62DF" tabindex="-1"><a class="header-anchor" href="#approach-1-\u53CC\u5411\u6A21\u62DF" aria-hidden="true">#</a> approach 1\uFF0C\u53CC\u5411\u6A21\u62DF</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">minOperations</span><span class="token punctuation">(</span><span class="token class-name">String</span> boxes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> boxes<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> left <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> one <span class="token operator">=</span> boxes<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;1&#39;</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> left<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> one<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>boxes<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;1&#39;</span><span class="token punctuation">)</span> one<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        one <span class="token operator">=</span> boxes<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;1&#39;</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> right<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> one<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>boxes<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;1&#39;</span><span class="token punctuation">)</span> one<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> left<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> right<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","1769. \u79FB\u52A8\u6240\u6709\u7403\u5230\u6BCF\u4E2A\u76D2\u5B50\u6240\u9700\u7684\u6700\u5C0F\u64CD\u4F5C\u6570.html.vue"]]);export{k as default};
