import{_ as p,o as t,c as o,b as n,d as e,e as s,a as c,r as l}from"../app.99e1ebfc.mjs";const u={},i=n("h1",{id:"_899-\u6709\u5E8F\u961F\u5217",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_899-\u6709\u5E8F\u961F\u5217","aria-hidden":"true"},"#"),s(" 899. \u6709\u5E8F\u961F\u5217")],-1),k=s("\u5F53 k = 1 \u65F6\uFF0C\u53EA\u80FD\u79FB\u52A8\u7B2C\u4E00\u4E2A\u5B57\u7B26\u5230\u6700\u540E\u4E00\u4F4D\uFF0C\u4E5F\u5C31\u5F62\u6210\u4E86\u4E00\u4E2A\u5934\u5C3E\u76F8\u8FDE\u7684\u94FE\u8868 "),r=n("li",null,"\u53EF\u4EE5\u66B4\u529B\u6BD4\u8F83\u6BCF\u4E00\u79CD\u60C5\u51B5",-1),d=s("\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6700\u4F18\u89E3\u6CD5\uFF1A"),v={href:"https://mp.weixin.qq.com/s/JXVI9WHcjUS6jjjvoY788w",target:"_blank",rel:"noopener noreferrer"},m=s("\u6700\u5C0F\u8868\u793A\u6CD5"),b=n("li",null,[s("\u5F53 k = 2 \u65F6 "),n("ol",null,[n("li",null,"\u53EF\u4EE5\u5047\u8BBE\u56FA\u5B9A\u7B2C\u4E00\u4F4D\uFF0C\u5C06\u540E\u9762\u7684\u770B\u4F5C\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32\u6574\u4F53"),n("li",null,"\u540E\u9762\u7684\u5B57\u7B26\u4E32\u6EE1\u8DB3 k = 1 \u7684\u573A\u666F\uFF0C\u5F62\u6210\u4E86\u4E00\u4E2A\u5934\u5C3E\u76F8\u8FDE\u7684\u94FE\u8868\uFF0C\u53EF\u4EE5\u6BD4\u4F5C\u8F6E\u76D8"),n("li",null,"\u540E\u9762\u8F6E\u76D8\u4E0D\u505C\u8F6C\u52A8\uFF0C\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u4EE5\u5C06\u56FA\u5B9A\u7684\u7B2C\u4E00\u4F4D\u63D2\u5165\u5230\u8F6E\u76D8\u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u62FF\u5F53\u524D\u7684\u7B2C\u4E8C\u4F4D\u66FF\u6362\u4E4B\u524D\u7684\u7B2C\u4E00\u4F4D"),n("li",null,"\u53EF\u4EE5\u53D1\u73B0\u5728\u8FD9\u6837\u7684\u89C4\u5219\u4E0B\uFF0C\u53EF\u4EE5\u5C06\u4EFB\u610F\u6570\u5B57\u79FB\u5230\u4EFB\u610F\u4F4D\u7F6E"),n("li",null,"\u90A3\u6700\u5C0F\u5B57\u5178\u5E8F\u5C31\u662F\u6574\u4E2A\u5B57\u7B26\u4E32\u7684\u6700\u5C0F\u5B57\u5178\u5E8F")])],-1),h=n("li",null,"\u5F53 k > 2 \u65F6\uFF0C\u4E0E k = 2 \u4E00\u6837",-1),y=c(`<h2 id="approach-1-\u5206\u7C7B\u8BA8\u8BBA-k-1\u66B4\u529B" tabindex="-1"><a class="header-anchor" href="#approach-1-\u5206\u7C7B\u8BA8\u8BBA-k-1\u66B4\u529B" aria-hidden="true">#</a> approach 1\uFF0C\u5206\u7C7B\u8BA8\u8BBA\uFF0Ck=1\u66B4\u529B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">orderlyQueue</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">StringBuilder</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> res <span class="token operator">=</span> s<span class="token punctuation">;</span>
            <span class="token keyword">int</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">char</span> first <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                str<span class="token punctuation">.</span><span class="token function">deleteCharAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                str<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> res<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cs <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>cs<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>cs<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="approach-2-\u6700\u5C0F\u8868\u793A\u6CD5" tabindex="-1"><a class="header-anchor" href="#approach-2-\u6700\u5C0F\u8868\u793A\u6CD5" aria-hidden="true">#</a> approach 2\uFF0C\u6700\u5C0F\u8868\u793A\u6CD5</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">orderlyQueue</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cs <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cs<span class="token punctuation">[</span>i <span class="token operator">+</span> n<span class="token punctuation">]</span> <span class="token operator">=</span> cs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> k <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cs<span class="token punctuation">[</span>i <span class="token operator">+</span> k<span class="token punctuation">]</span> <span class="token operator">==</span> cs<span class="token punctuation">[</span>j <span class="token operator">+</span> k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    k<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>cs<span class="token punctuation">[</span>i <span class="token operator">+</span> k<span class="token punctuation">]</span> <span class="token operator">&gt;</span> cs<span class="token punctuation">[</span>j <span class="token operator">+</span> k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    i <span class="token operator">=</span> i <span class="token operator">+</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    j <span class="token operator">=</span> j <span class="token operator">+</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> j<span class="token punctuation">)</span> j<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>cs<span class="token punctuation">,</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cs <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>cs<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>cs<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function w(_,f){const a=l("ExternalLinkIcon");return t(),o("div",null,[i,n("ol",null,[n("li",null,[k,n("ol",null,[r,n("li",null,[d,n("a",v,[m,e(a)])])])]),b,h]),y])}const j=p(u,[["render",w],["__file","899. \u6709\u5E8F\u961F\u5217.html.vue"]]);export{j as default};
