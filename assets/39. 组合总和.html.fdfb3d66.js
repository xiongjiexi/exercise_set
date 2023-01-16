import{_ as n,o as s,c as a,a as t}from"../app.99e1ebfc.mjs";const p={},c=t(`<h1 id="_39-\u7EC4\u5408\u603B\u548C" tabindex="-1"><a class="header-anchor" href="#_39-\u7EC4\u5408\u603B\u548C" aria-hidden="true">#</a> 39. \u7EC4\u5408\u603B\u548C</h1><h2 id="approach-1-\u56DE\u6EAF" tabindex="-1"><a class="header-anchor" href="#approach-1-\u56DE\u6EAF" aria-hidden="true">#</a> approach 1\uFF0C\u56DE\u6EAF</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> ans<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">combinationSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> candidates<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> candidates<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>candidates<span class="token punctuation">,</span> target<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cd<span class="token punctuation">,</span> <span class="token keyword">int</span> t<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> path<span class="token punctuation">,</span> <span class="token keyword">int</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">==</span> cd<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cd<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">+</span> cd<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                path<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cd<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">dfs</span><span class="token punctuation">(</span>cd<span class="token punctuation">,</span> t<span class="token punctuation">,</span> i<span class="token punctuation">,</span> path<span class="token punctuation">,</span> sum <span class="token operator">+</span> cd<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                path<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[c];function o(l,u){return s(),a("div",null,e)}const k=n(p,[["render",o],["__file","39. \u7EC4\u5408\u603B\u548C.html.vue"]]);export{k as default};
