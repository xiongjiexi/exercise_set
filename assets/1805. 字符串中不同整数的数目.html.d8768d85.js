import{_ as n,o as s,c as a,a as t}from"../app.99e1ebfc.mjs";const p={},o=t(`<h1 id="_1805-\u5B57\u7B26\u4E32\u4E2D\u4E0D\u540C\u6574\u6570\u7684\u6570\u76EE" tabindex="-1"><a class="header-anchor" href="#_1805-\u5B57\u7B26\u4E32\u4E2D\u4E0D\u540C\u6574\u6570\u7684\u6570\u76EE" aria-hidden="true">#</a> 1805. \u5B57\u7B26\u4E32\u4E2D\u4E0D\u540C\u6574\u6570\u7684\u6570\u76EE</h1><h2 id="approach-1-\u54C8\u5E0C\u8868" tabindex="-1"><a class="header-anchor" href="#approach-1-\u54C8\u5E0C\u8868" aria-hidden="true">#</a> approach 1\uFF0C\u54C8\u5E0C\u8868</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">numDifferentIntegers</span><span class="token punctuation">(</span><span class="token class-name">String</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> word<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> w <span class="token operator">=</span> word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>w <span class="token operator">&lt;</span> <span class="token char">&#39;0&#39;</span> <span class="token operator">||</span> w <span class="token operator">&gt;</span> <span class="token char">&#39;9&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span>  <span class="token punctuation">(</span>start <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">while</span> <span class="token punctuation">(</span>word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;0&#39;</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">-</span> start <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> start<span class="token operator">++</span><span class="token punctuation">;</span>
                    set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>word<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    start <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// is number</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> start <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;0&#39;</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">-</span> start <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> start<span class="token operator">++</span><span class="token punctuation">;</span>
            set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>word<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> set<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","1805. \u5B57\u7B26\u4E32\u4E2D\u4E0D\u540C\u6574\u6570\u7684\u6570\u76EE.html.vue"]]);export{r as default};
