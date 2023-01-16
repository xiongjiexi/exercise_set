import{_ as n,o as s,c as a,a as p}from"../app.99e1ebfc.mjs";const t={},o=p(`<h1 id="_646-\u6700\u957F\u6570\u5BF9\u94FE" tabindex="-1"><a class="header-anchor" href="#_646-\u6700\u957F\u6570\u5BF9\u94FE" aria-hidden="true">#</a> 646. \u6700\u957F\u6570\u5BF9\u94FE</h1><ol><li>\u5148\u4ECE\u9898\u4E2D\u627E\u5173\u952E\u70B9 <ol><li>\u6570\u5BF9\uFF08a\uFF0Cb\uFF09\u4E2D\uFF0Cb &gt; a</li><li>\u6570\u5BF9\u94FE(a, b) (c, d)\u4E2D\uFF0Cc &gt; b</li><li>\u7B54\u6848\u662F\u627E\u6700\u957F\u7684\u6570\u5BF9\u94FE\u7684\u957F\u5EA6</li></ol></li><li>\u53EF\u4EE5\u5148\u5C1D\u8BD5\u5C06\u6240\u6709\u6570\u5BF9\u6392\u5E8F\uFF0C\u770B\u662F\u5426\u80FD\u627E\u5230\u6700\u957F\u7684\u6570\u5BF9\u94FE\u3002 <ol><li>\u53EF\u4EE5\u5206\u7C7B\u8BA8\u8BBA\uFF0C\u5C06\u6570\u5BF9\u6309\u7B2C\u4E00\u4E2A\u6570\u6392\u5E8F\u540E\uFF0C\u5728\u6570\u5BF9(a, b) (c, d)\u4E2D <ol><li>\u82E5c &gt; b\uFF0C\u90A3\u6B63\u597D\u5F62\u6210\u6570\u5BF9\u94FE</li><li>\u82E5d &lt; b\uFF0C\u5728\u6700\u957F\u6570\u5BF9\u94FE\u4E2D(c, d)\u53EF\u4EE5\u53D6\u4EE3(a, b)</li></ol></li><li>\u56E0\u6B64\u7528stack\u6216list\u7ED3\u6784\u5B58\u50A8\u6700\u957F\u6570\u5BF9\u94FE\uFF0C\u904D\u5386\u6392\u5E8F\u540E\u7684\u6570\u5BF9</li><li>\u5148\u770B\u662F\u5426c &gt; b\uFF0C\u5927\u4E8E\u5C31\u653E\u5165\u6570\u5BF9\u94FE\u4E2D\uFF1B</li><li>\u82E5\u4E0D\u5927\u4E8E\uFF0C\u5219\u770B\u662F\u5426\u53EF\u4EE5\u53D6\u4EE3\uFF0C\u4E5F\u5C31\u662F d &lt; b</li><li>\u82E5\u53EF\u4EE5\u53D6\u4EE3\u5219\u53D6\u4EE3\uFF0C\u4E0D\u884C\u5219\u7EE7\u7EED\u904D\u5386</li><li>\u5982\u6B64\u4E00\u6B21\u904D\u5386\u5C31\u53EF\u4EE5\u627E\u5230\u6700\u957F\u7684\u6570\u5BF9\u94FE</li><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A\u6392\u5E8F\u7528\u4E86O(nlogn)\uFF0C\u540E\u9762\u518D\u904D\u5386\u4E00\u6B21O(n)\uFF0C\u6240\u4EE5\u662FO(nlogn)</li></ol></li><li>\u4E5F\u53EF\u4EE5\u7528DP\u6765\u505A <ol><li>\u5C06\u6570\u5BF9\u6309\u7B2C\u4E00\u4E2A\u6570\u6392\u5E8F\u540E</li><li>\u7528<code>int[] dp</code>\u8BB0\u5F55\u4EE5\u6BCF\u4E2A\u6570\u5BF9\u7ED3\u5C3E\u7684\u6570\u5BF9\u94FE\u7684\u957F\u5EA6\uFF0C<code>dp[i]</code>\u7684\u957F\u5EA6\u5C31\u662F\u524D\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\u7684<code>dp[j]+1</code></li><li>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n^2)</li></ol></li></ol><h2 id="approach-1-\u6392\u5E8F-\u8D2A\u5FC3" tabindex="-1"><a class="header-anchor" href="#approach-1-\u6392\u5E8F-\u8D2A\u5FC3" aria-hidden="true">#</a> approach 1\uFF0C\u6392\u5E8F+\u8D2A\u5FC3</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findLongestChain</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pairs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>pairs<span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Stack</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> p <span class="token operator">:</span> pairs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> peek <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> peek<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>peek<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="approach-2-\u6392\u5E8F-dp" tabindex="-1"><a class="header-anchor" href="#approach-2-\u6392\u5E8F-dp" aria-hidden="true">#</a> approach 2\uFF0C\u6392\u5E8F+DP</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findLongestChain</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pairs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>pairs<span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> pairs<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>pairs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> pairs<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            res <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[o];function e(l,u){return s(),a("div",null,c)}const k=n(t,[["render",e],["__file","646. \u6700\u957F\u6570\u5BF9\u94FE.html.vue"]]);export{k as default};
