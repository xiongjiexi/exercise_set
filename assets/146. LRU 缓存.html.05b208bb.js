import{_ as n,o as s,c as a,a as p}from"../app.99e1ebfc.mjs";const t={},e=p(`<h1 id="_146-lru-\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_146-lru-\u7F13\u5B58" aria-hidden="true">#</a> 146. LRU \u7F13\u5B58</h1><h2 id="approach-1" tabindex="-1"><a class="header-anchor" href="#approach-1" aria-hidden="true">#</a> approach 1</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">LRUCache</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> cap<span class="token punctuation">;</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token class-name">Node</span> head<span class="token punctuation">;</span>
    <span class="token class-name">Node</span> tail<span class="token punctuation">;</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">LRUCache</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cap <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
        size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> tail<span class="token punctuation">;</span>
        tail<span class="token punctuation">.</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> n <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">insert</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> n<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cap <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> n <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cap <span class="token operator">==</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Node</span> p <span class="token operator">=</span> <span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                map<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                size<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        n<span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
        n<span class="token punctuation">.</span>val <span class="token operator">=</span> value<span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">insert</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> n <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

        <span class="token class-name">Node</span> next <span class="token operator">=</span> n<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        next<span class="token punctuation">.</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Node</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> pre <span class="token operator">=</span> n<span class="token punctuation">.</span>pre<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next <span class="token operator">=</span> n<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            next<span class="token punctuation">.</span>pre <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">Node</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> pre <span class="token operator">=</span> tail<span class="token punctuation">.</span>pre<span class="token punctuation">;</span>
        
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> n<span class="token punctuation">;</span>
        tail<span class="token punctuation">.</span>pre <span class="token operator">=</span> n<span class="token punctuation">;</span>
        n<span class="token punctuation">.</span>pre <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        n<span class="token punctuation">.</span>next <span class="token operator">=</span> tail<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> key<span class="token punctuation">;</span>
        <span class="token keyword">int</span> val<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> pre<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;[key:&quot;</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">&quot;; val:&quot;</span> <span class="token operator">+</span> val <span class="token operator">+</span> <span class="token string">&quot;; pre:&quot;</span> <span class="token operator">+</span> pre <span class="token operator">+</span> <span class="token string">&quot;; next:&quot;</span> <span class="token operator">+</span> next <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","146. LRU \u7F13\u5B58.html.vue"]]);export{k as default};
