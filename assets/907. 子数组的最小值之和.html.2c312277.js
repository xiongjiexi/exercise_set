import{_ as n,o as s,c as a,a as p}from"../app.99e1ebfc.mjs";const t={},o=p(`<h1 id="_907-\u5B50\u6570\u7EC4\u7684\u6700\u5C0F\u503C\u4E4B\u548C" tabindex="-1"><a class="header-anchor" href="#_907-\u5B50\u6570\u7EC4\u7684\u6700\u5C0F\u503C\u4E4B\u548C" aria-hidden="true">#</a> 907. \u5B50\u6570\u7EC4\u7684\u6700\u5C0F\u503C\u4E4B\u548C</h1><ol><li>\u6C42\u6240\u6709\u5B50\u6570\u7EC4\u7684\u6700\u5C0F\u503C\uFF0C\u53EF\u4EE5\u8F6C\u6362\u4E3A\uFF0C\u6C42\u6BCF\u4E2A\u6570\u80FD\u5728\u5B50\u6570\u7EC4\u4E2D\u4F5C\u4E3A\u6700\u5C0F\u503C\u7684\u8D21\u732E\u6B21\u6570\u3002</li><li>\u6240\u4EE5\u9700\u8981\u77E5\u9053\u6BCF\u4E2A\u6570\u80FD\u5728\u5DE6\u8FB9\u6709\u591A\u5C11\u6B21\u6570\uFF0C\u5728\u53F3\u8FB9\u6709\u591A\u5C11\u6B21\u6570\u3002 <ol><li>\u53EF\u4EE5\u5229\u7528\u5355\u8C03\u6808</li><li>\u5F53<code>arr[i] &gt;= stack.peek()</code>\u65F6\uFF0C\u4E0B\u6807<code>i</code>\u5165\u6808</li><li>\u5F53<code>arr[i]\xA0&lt; stack.peek()</code>\u65F6\uFF0C\u5C06\u6808\u9876\u5143\u7D20\u51FA\u6808<code>int\xA0pop\xA0= stack.pop()</code></li><li><code>pop</code>\u4F5C\u4E3A\u6700\u5C0F\u503C\u7684\u8303\u56F4\u4E3A\uFF0C\u5DE6\u8FB9<code>[stack.peek(), pop]</code>\uFF0C\u53F3\u8FB9<code>[pop, i-1]</code></li><li>\u904D\u5386\u5B8C\u6570\u7EC4\u540E\uFF0C\u82E5\u6808\u4E2D\u4E0D\u4E3A\u7A7A\uFF0C\u5C06\u5143\u7D20\u51FA\u6808</li><li>\u51FA\u6808\u7684\u6BCF\u4E2A\u6570\uFF0C\u5B83\u4EEC\u7684\u8303\u56F4\u4E3A\uFF0C\u5DE6\u8FB9<code>[stack.peek(), pop]</code>\uFF0C\u53F3\u8FB9<code>[pop, arr.length]</code></li></ol></li><li>\u6839\u636E\u7EC4\u5408\u539F\u7406\uFF0C\u5C06\u5DE6\u53F3\u6B21\u6570\u76F8\u4E58\uFF0C\u5373\u5F97\u8BE5\u6570\u4F5C\u4E3A\u5B50\u6570\u7EC4\u7684\u8D21\u732E\u6B21\u6570</li></ol><h2 id="approach-1-\u5355\u8C03\u6808-\u4E58\u6CD5\u7EC4\u5408\u8FD0\u7528" tabindex="-1"><a class="header-anchor" href="#approach-1-\u5355\u8C03\u6808-\u4E58\u6CD5\u7EC4\u5408\u8FD0\u7528" aria-hidden="true">#</a> approach 1\uFF0C\u5355\u8C03\u6808+\u4E58\u6CD5\u7EC4\u5408\u8FD0\u7528</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sumSubarrayMins</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> l <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                l<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                l<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        stack<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> arr<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                r<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                r<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> mod <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> <span class="token number">1L</span> <span class="token operator">*</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> l<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>r<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> i<span class="token punctuation">)</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
            res <span class="token operator">%=</span> mod<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sumSubarrayMins</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> mod <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">long</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> arr<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> p <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> left <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> right <span class="token operator">=</span> i<span class="token punctuation">;</span>
                ans <span class="token operator">+=</span> <span class="token number">1L</span> <span class="token operator">*</span> <span class="token punctuation">(</span>p <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> p<span class="token punctuation">)</span> <span class="token operator">*</span> arr<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> p <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> left <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> right <span class="token operator">=</span> n<span class="token punctuation">;</span>
            ans <span class="token operator">+=</span> <span class="token number">1L</span> <span class="token operator">*</span> <span class="token punctuation">(</span>p <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> p<span class="token punctuation">)</span> <span class="token operator">*</span> arr<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ans <span class="token operator">%</span> mod<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528\u4E24\u4E2A\u6570\u7EC4\u5C06\u5F53\u524D\u503C\u4F5C\u4E3A\u5DE6\u53F3\u4E24\u8FB9\u6700\u5C0F\u503C\u7684\u8FB9\u754C\u8DDD\u79BB\u8BB0\u5F55\u4E0B\u6765\uFF0C\u6700\u540E\u4E58\u8D77\u6765\u5373\u53EF</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> mod <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sumSubarrayMins</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> left <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> p <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> pop <span class="token operator">=</span> stack<span class="token punctuation">[</span>p<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                right<span class="token punctuation">[</span>pop<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">-</span> pop<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            left<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> p <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> stack<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            stack<span class="token punctuation">[</span><span class="token operator">++</span>p<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> pop <span class="token operator">=</span> stack<span class="token punctuation">[</span>p<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            right<span class="token punctuation">[</span>pop<span class="token punctuation">]</span> <span class="token operator">=</span> n <span class="token operator">-</span> pop<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
            ans <span class="token operator">=</span> <span class="token punctuation">(</span>ans <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">1L</span> <span class="token operator">*</span> left<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> right<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> mod<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> mod<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","907. \u5B50\u6570\u7EC4\u7684\u6700\u5C0F\u503C\u4E4B\u548C.html.vue"]]);export{k as default};
