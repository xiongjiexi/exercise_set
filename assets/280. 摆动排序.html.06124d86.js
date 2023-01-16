import{_ as n,o as s,c as a,a as p}from"../app.99e1ebfc.mjs";const t={},o=p(`<h1 id="_280-\u6446\u52A8\u6392\u5E8F-vip" tabindex="-1"><a class="header-anchor" href="#_280-\u6446\u52A8\u6392\u5E8F-vip" aria-hidden="true">#</a> 280. \u6446\u52A8\u6392\u5E8F\uFF08vip\uFF09</h1><p>\u7ED9\u4F60\u4E00\u4E2A\u7684\u6574\u6570\u6570\u7EC4 nums, \u5C06\u8BE5\u6570\u7EC4\u91CD\u65B0\u6392\u5E8F\u540E\u4F7F nums[0] &lt;= nums[1] &gt;= nums[2] &lt;= nums[3]...</p><p>\u8F93\u5165\u6570\u7EC4\u603B\u662F\u6709\u4E00\u4E2A\u6709\u6548\u7684\u7B54\u6848\u3002</p><p>\u793A\u4F8B 1:</p><p>\u8F93\u5165\uFF1Anums = [3,5,2,1,6,4] \u8F93\u51FA\uFF1A[3,5,1,6,2,4] \u89E3\u91CA\uFF1A[1,6,2,5,3,4]\u4E5F\u662F\u6709\u6548\u7684\u7B54\u6848 \u793A\u4F8B 2:</p><p>\u8F93\u5165\uFF1Anums = [6,6,5,6,3,8] \u8F93\u51FA\uFF1A[6,6,5,6,3,8]</p><p>\u63D0\u793A\uFF1A</p><p>1 &lt;= nums.length &lt;= 5 * 104 0 &lt;= nums[i] &lt;= 104 \u8F93\u5165\u7684 nums \u4FDD\u8BC1\u81F3\u5C11\u6709\u4E00\u4E2A\u7B54\u6848\u3002</p><p>\u8FDB\u9636\uFF1A\u4F60\u80FD\u5728 O(n) \u65F6\u95F4\u590D\u6742\u5EA6\u4E0B\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5417\uFF1F</p><h2 id="approach-1-\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#approach-1-\u6392\u5E8F" aria-hidden="true">#</a> approach 1\uFF0C\u6392\u5E8F</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wiggleSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","280. \u6446\u52A8\u6392\u5E8F.html.vue"]]);export{k as default};
