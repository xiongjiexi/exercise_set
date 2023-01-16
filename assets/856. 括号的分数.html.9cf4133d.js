import{_ as n,o as s,c as a,a as p}from"../app.99e1ebfc.mjs";const t={},o=p(`<h1 id="_856-\u62EC\u53F7\u7684\u5206\u6570" tabindex="-1"><a class="header-anchor" href="#_856-\u62EC\u53F7\u7684\u5206\u6570" aria-hidden="true">#</a> 856. \u62EC\u53F7\u7684\u5206\u6570</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">scoreOfParentheses</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> stack <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> pop <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> c <span class="token operator">:</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">[</span><span class="token operator">++</span>pop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> t <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>pop <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>pop<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    t <span class="token operator">+=</span> stack<span class="token punctuation">[</span>pop<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>pop <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>pop<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> pop<span class="token operator">--</span><span class="token punctuation">;</span>
                stack<span class="token punctuation">[</span><span class="token operator">++</span>pop<span class="token punctuation">]</span> <span class="token operator">=</span> t <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> t <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>pop <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">+=</span> stack<span class="token punctuation">[</span>pop<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","856. \u62EC\u53F7\u7684\u5206\u6570.html.vue"]]);export{k as default};
