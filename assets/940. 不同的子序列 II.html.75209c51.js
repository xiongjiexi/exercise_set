import{_ as n,o as s,c as a,a as p}from"../app.99e1ebfc.mjs";const t={},o=p(`<h1 id="_940-\u4E0D\u540C\u7684\u5B50\u5E8F\u5217-ii" tabindex="-1"><a class="header-anchor" href="#_940-\u4E0D\u540C\u7684\u5B50\u5E8F\u5217-ii" aria-hidden="true">#</a> 940. \u4E0D\u540C\u7684\u5B50\u5E8F\u5217 II</h1><h2 id="approach-1-\u52A8\u6001\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#approach-1-\u52A8\u6001\u89C4\u5212" aria-hidden="true">#</a> approach 1\uFF0C\u52A8\u6001\u89C4\u5212</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> mod <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">distinctSubseqII</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> last <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>last<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
            f<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">26</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>last<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    f<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> f<span class="token punctuation">[</span>last<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            last<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">26</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>last<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> ans <span class="token operator">=</span> <span class="token punctuation">(</span>ans <span class="token operator">+</span> f<span class="token punctuation">[</span>last<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans <span class="token operator">%</span> mod<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="approach-2" tabindex="-1"><a class="header-anchor" href="#approach-2" aria-hidden="true">#</a> approach 2</h2><p>\u6839\u636E\u9898\u610F\u6211\u4EEC\u8BBEdp[i]\u4E3A\u524Di\u4E2A\u5B57\u7B26\u53EF\u4EE5\u7EC4\u6210\u7684\u4E0D\u540C\u7684\u5B50\u5E8F\u5217\uFF0C\u5219\u6709</p><p>dp[i] = dp[i - 1] + newCount - repeatCount \u5176\u4E2DnewCount\u4E3A\u52A0\u4E0As[i]\u540E\u65B0\u589E\u7684\u5B50\u5E8F\u5217\u4E2A\u6570\uFF0CrepeatCount\u4E3A\u91CD\u590D\u7684\u5B50\u5E8F\u5217\u4E2A\u6570</p><p>\u53EF\u6EDA\u52A8\uFF0C\u4F18\u5316\u6210\u5E38\u91CF\u7A7A\u95F4\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> mod <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span> 
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">distinctSubseqII</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> last <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> cur <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        last<span class="token punctuation">[</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            cur <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pre <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">%</span> mod <span class="token operator">-</span> last<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">%</span> mod <span class="token operator">+</span> mod<span class="token punctuation">)</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
            last<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> cur <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","940. \u4E0D\u540C\u7684\u5B50\u5E8F\u5217 II.html.vue"]]);export{k as default};
