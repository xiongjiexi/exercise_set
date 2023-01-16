import{_ as n,o as s,c as a,a as p}from"../app.99e1ebfc.mjs";const t={},o=p(`<h1 id="_1790-\u4EC5\u6267\u884C\u4E00\u6B21\u5B57\u7B26\u4E32\u4EA4\u6362\u80FD\u5426\u4F7F\u4E24\u4E2A\u5B57\u7B26\u4E32\u76F8\u7B49" tabindex="-1"><a class="header-anchor" href="#_1790-\u4EC5\u6267\u884C\u4E00\u6B21\u5B57\u7B26\u4E32\u4EA4\u6362\u80FD\u5426\u4F7F\u4E24\u4E2A\u5B57\u7B26\u4E32\u76F8\u7B49" aria-hidden="true">#</a> 1790. \u4EC5\u6267\u884C\u4E00\u6B21\u5B57\u7B26\u4E32\u4EA4\u6362\u80FD\u5426\u4F7F\u4E24\u4E2A\u5B57\u7B26\u4E32\u76F8\u7B49</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">areAlmostEqual</span><span class="token punctuation">(</span><span class="token class-name">String</span> s1<span class="token punctuation">,</span> <span class="token class-name">String</span> s2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> s2<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                a <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                b <span class="token operator">=</span> i<span class="token punctuation">;</span>
                <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cs <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">char</span> t <span class="token operator">=</span> cs<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
                cs<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> cs<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
                cs<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>
                <span class="token keyword">return</span> s2<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>cs<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> a <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> b <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","1790. \u4EC5\u6267\u884C\u4E00\u6B21\u5B57\u7B26\u4E32\u4EA4\u6362\u80FD\u5426\u4F7F\u4E24\u4E2A\u5B57\u7B26\u4E32\u76F8\u7B49.html.vue"]]);export{k as default};
