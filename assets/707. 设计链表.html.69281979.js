import{_ as n,o as s,c as a,a as p}from"../app.99e1ebfc.mjs";const e={},t=p(`<h1 id="_707-\u8BBE\u8BA1\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#_707-\u8BBE\u8BA1\u94FE\u8868" aria-hidden="true">#</a> 707. \u8BBE\u8BA1\u94FE\u8868</h1><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span>
    <span class="token class-name">Node</span> head<span class="token punctuation">;</span>
    <span class="token class-name">Node</span> tail<span class="token punctuation">;</span>
    <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> tail<span class="token punctuation">;</span>
        tail<span class="token punctuation">.</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> h <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> h <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            h <span class="token operator">=</span> h<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            index<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> h <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> h<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtHead</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> insert <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> insert<span class="token punctuation">;</span>
        insert<span class="token punctuation">.</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>

        insert<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        next<span class="token punctuation">.</span>pre <span class="token operator">=</span> insert<span class="token punctuation">;</span>

        size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtTail</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> insert <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> pre <span class="token operator">=</span> tail<span class="token punctuation">.</span>pre<span class="token punctuation">;</span>

        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> insert<span class="token punctuation">;</span>
        tail<span class="token punctuation">.</span>pre <span class="token operator">=</span> insert<span class="token punctuation">;</span>

        insert<span class="token punctuation">.</span>pre <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        insert<span class="token punctuation">.</span>next <span class="token operator">=</span> tail<span class="token punctuation">;</span>

        size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">addAtHead</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">addAtTail</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
            <span class="token class-name">Node</span> cur <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">Node</span> insert <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            cur<span class="token punctuation">.</span>pre <span class="token operator">=</span> insert<span class="token punctuation">;</span>
            insert<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            
            insert<span class="token punctuation">.</span>pre <span class="token operator">=</span> pre<span class="token punctuation">;</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> insert<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> del <span class="token operator">=</span> tail<span class="token punctuation">.</span>pre<span class="token punctuation">;</span>
            <span class="token class-name">Node</span> pre <span class="token operator">=</span> del<span class="token punctuation">.</span>pre<span class="token punctuation">;</span>
            
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> tail<span class="token punctuation">;</span>
            tail<span class="token punctuation">.</span>pre <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> del <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token class-name">Node</span> next <span class="token operator">=</span> del<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

            head<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
            next<span class="token punctuation">.</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
            <span class="token class-name">Node</span> cur <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">Node</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            pre<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
            next<span class="token punctuation">.</span>pre <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> val<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> pre<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next<span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            val <span class="token operator">=</span> v<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token string">&quot;[val:&quot;</span> <span class="token operator">+</span> val <span class="token operator">+</span> <span class="token string">&quot;; pre:&quot;</span> <span class="token operator">+</span> pre <span class="token operator">+</span> <span class="token string">&quot;; next:&quot;</span> <span class="token operator">+</span> next <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","707. \u8BBE\u8BA1\u94FE\u8868.html.vue"]]);export{r as default};
