import{_ as n,o as s,c as a,a as p}from"../app.99e1ebfc.mjs";const e={},t=p(`<h1 id="\u5251\u6307-offer-25-\u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u5251\u6307-offer-25-\u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868" aria-hidden="true">#</a> \u5251\u6307 Offer 25. \u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868</h1><ol><li>\u9996\u5148\u53EF\u4EE5\u60F3\u5230\u6B63\u5E38\u573A\u666F\u4E0B\uFF0C\u76F4\u63A5\u6BD4\u8F83\u4E24\u4E2A\u8282\u70B9\u503C\uFF0C\u7136\u540E\u8C01\u5C0F\u5C31\u5148\u53D6\u8C01\uFF0C\u8DDF\u5F52\u5E76\u6392\u5E8F\u7684merge\u4E00\u4E2A\u505A\u6CD5</li><li>\u4F46\u662F\u4F1A\u5B58\u5728\u67D0\u4E2A\u94FE\u8868\u63D0\u524D\u4E3A\u7A7A\u7684\u573A\u666F\uFF0C\u6B64\u65F6\u76F4\u63A5\u5C06\u4E0D\u4E3A\u7A7A\u7684\u94FE\u8868\u8FFD\u52A0\u5230\u672B\u5C3E</li></ol><h2 id="approach-1" tabindex="-1"><a class="header-anchor" href="#approach-1" aria-hidden="true">#</a> approach 1</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> l1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>l1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> l2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> head <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> l2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                head<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>
                l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                head<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>
                l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>l1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>l2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[t];function l(c,i){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","\u5251\u6307 Offer 25. \u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868.html.vue"]]);export{r as default};
