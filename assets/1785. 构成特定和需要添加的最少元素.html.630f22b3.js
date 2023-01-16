import{_ as n,o as s,c as a,a as p}from"../app.99e1ebfc.mjs";const t={},e=p(`<h1 id="_1785-\u6784\u6210\u7279\u5B9A\u548C\u9700\u8981\u6DFB\u52A0\u7684\u6700\u5C11\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_1785-\u6784\u6210\u7279\u5B9A\u548C\u9700\u8981\u6DFB\u52A0\u7684\u6700\u5C11\u5143\u7D20" aria-hidden="true">#</a> 1785. \u6784\u6210\u7279\u5B9A\u548C\u9700\u8981\u6DFB\u52A0\u7684\u6700\u5C11\u5143\u7D20</h1><h2 id="approach-1-\u7B80\u5355\u8D2A\u5FC3" tabindex="-1"><a class="header-anchor" href="#approach-1-\u7B80\u5355\u8D2A\u5FC3" aria-hidden="true">#</a> approach 1\uFF0C\u7B80\u5355\u8D2A\u5FC3</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minElements</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> limit<span class="token punctuation">,</span> <span class="token keyword">int</span> goal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> nums<span class="token punctuation">)</span> sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
        <span class="token keyword">long</span> d <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>goal <span class="token operator">-</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>d <span class="token operator">/</span> limit<span class="token punctuation">)</span><span class="token punctuation">;</span>
        d <span class="token operator">%=</span> limit<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>d <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> ans<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","1785. \u6784\u6210\u7279\u5B9A\u548C\u9700\u8981\u6DFB\u52A0\u7684\u6700\u5C11\u5143\u7D20.html.vue"]]);export{r as default};
