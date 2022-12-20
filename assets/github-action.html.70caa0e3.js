import{_ as r,r as l,o as i,a as t,b as n,d as a,F as o,f as b,e}from"./app.22872cfe.js";const p={},c=b(`<p>\u76EE\u7684\uFF1A\u5C1D\u8BD5\u5B83\u7684CI</p><h2 id="github-action-\u8E29\u5751\u8BB0" tabindex="-1"><a class="header-anchor" href="#github-action-\u8E29\u5751\u8BB0" aria-hidden="true">#</a> Github Action \u8E29\u5751\u8BB0</h2><h3 id="github-action\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#github-action\u662F\u4EC0\u4E48" aria-hidden="true">#</a> Github Action\u662F\u4EC0\u4E48</h3><p>Github Action \u662F github \u63A8\u51FA\u7684\u6301\u7EED\u96C6\u6210\u5DE5\u5177\uFF1B</p><p>\u6301\u7EED\u96C6\u6210\u7531\u5F88\u591A\u64CD\u4F5C\u7EC4\u6210\uFF0C\u6BD4\u5982\u6293\u53D6\u4EE3\u7801\u3001\u8FD0\u884C\u6D4B\u8BD5\u3001\u767B\u5F55\u8FDC\u7A0B\u670D\u52A1\u5668\uFF0C\u53D1\u5E03\u5230\u7B2C\u4E09\u65B9\u670D\u52A1\u7B49\u7B49\u3002GitHub \u628A\u8FD9\u4E9B\u64CD\u4F5C\u5C31\u79F0\u4E3A actions</p><p>\u5982\u679C\u4F60\u9700\u8981\u67D0\u4E2A action\uFF0C\u4E0D\u5FC5\u81EA\u5DF1\u5199\u590D\u6742\u7684\u811A\u672C\uFF0C\u76F4\u63A5\u5F15\u7528\u4ED6\u4EBA\u5199\u597D\u7684 action \u5373\u53EF\uFF0C\u6574\u4E2A\u6301\u7EED\u96C6\u6210\u8FC7\u7A0B\uFF0C\u5C31\u53D8\u6210\u4E86\u4E00\u4E2A actions \u7684\u7EC4\u5408\u3002\u8FD9\u5C31\u662F GitHub Actions \u6700\u7279\u522B\u7684\u5730\u65B9\u3002</p><blockquote><p>\u5728\u6211\u770B\u6765\u8FD9\u4E2A\u8DDF Gitlab Runner \u662F\u5DEE\u4E0D\u591A\u7684\u4E00\u4E2A\u4EA7\u54C1\uFF0C\u6709\u7A7A\u6574\u7406\u4E00\u4E0B Gitlab Runner</p></blockquote><h3 id="\u57FA\u7840\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u6982\u5FF5" aria-hidden="true">#</a> \u57FA\u7840\u6982\u5FF5</h3><p>GitHub Actions \u6709\u4E00\u4E9B\u81EA\u5DF1\u7684\u672F\u8BED\u3002</p><ol><li>workflow \uFF08\u5DE5\u4F5C\u6D41\u7A0B\uFF09\uFF1A\u6301\u7EED\u96C6\u6210\u4E00\u6B21\u8FD0\u884C\u7684\u8FC7\u7A0B\uFF0C\u5C31\u662F\u4E00\u4E2A workflow\u3002 Workflow \u662F\u7531\u4E00\u4E2A\u6216\u591A\u4E2A job \u7EC4\u6210\u7684\u53EF\u914D\u7F6E\u7684\u81EA\u52A8\u5316\u8FC7\u7A0B\u3002\u6211\u4EEC\u901A\u8FC7\u521B\u5EFA YAML \u6587\u4EF6\u6765\u521B\u5EFA Workflow \u914D\u7F6E\u3002 \u540E\u9762\u6709\u6211\u8FD9\u4E2A\u535A\u5BA2\u4F7F\u7528\u7684 Workflow <a href="#%E9%99%84workflow">\u53EF\u4EE5\u53C2\u7167</a></li><li>job \uFF08\u4EFB\u52A1\uFF09\uFF1A\u4E00\u4E2A workflow \u7531\u4E00\u4E2A\u6216\u591A\u4E2A jobs \u6784\u6210\uFF0C\u542B\u4E49\u662F\u4E00\u6B21\u6301\u7EED\u96C6\u6210\u7684\u8FD0\u884C\uFF0C\u53EF\u4EE5\u5B8C\u6210\u591A\u4E2A\u4EFB\u52A1\u3002</li><li>step\uFF08\u6B65\u9AA4\uFF09\uFF1A\u6BCF\u4E2A job \u7531\u591A\u4E2A step \u6784\u6210\uFF0C\u4E00\u6B65\u6B65\u5B8C\u6210\u3002</li><li>action \uFF08\u52A8\u4F5C\uFF09\uFF1A\u6BCF\u4E2A step \u53EF\u4EE5\u4F9D\u6B21\u6267\u884C\u4E00\u4E2A\u6216\u591A\u4E2A\u547D\u4EE4\uFF08action\uFF09\u3002</li></ol><h3 id="\u6211\u7684\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u6211\u7684\u6B65\u9AA4" aria-hidden="true">#</a> \u6211\u7684\u6B65\u9AA4</h3><ol><li>\u65B0\u5EFA\u4ED3\u5E93</li><li>settings/tokens\u8BBE\u7F6E\u5BC6\u94A5</li><li>\u5728\u65B0\u5EFA\u4ED3\u5E93\u4E2D\u7684 settings/repository-secrets \u52A0\u5165\u521A\u521A\u5EFA\u7684\u5BC6\u94A5 \u6CE8\u610F\u53D8\u91CF\u540D\u8981\u548C yaml\u4E2D\u7684\u5339\u914D</li><li>\u5728\u6587\u4EF6\u5939.github/workflows/\u5199\u5165.yaml\u6587\u4EF6</li><li>\u63D0\u4EA4\u7136\u540E\u5C31\u7B49github action\u5B8C\u6210\u4EFB\u52A1\u4E86</li></ol><h3 id="\u5751" tabindex="-1"><a class="header-anchor" href="#\u5751" aria-hidden="true">#</a> \u5751</h3><ol><li>\u8BBE\u7F6Etokens\u51FA\u9519\uFF0C\u76F4\u63A5\u5728 \u4ED3\u5E93\u4E2D\u7684 settings/repository-secrets \u968F\u4FBF\u8BBE\u7F6E\u4E86\u4E2A\u503C</li><li>yaml \u4E0D\u719F\u6089</li><li>yaml \u4E2D\u7684\u547D\u4EE4\u542B\u4E49\u4E0D\u6E05\u6670</li><li>uses \u7684 actions \u4E0D\u660E\u767D\u662F\u4E2A\u4EC0\u4E48\u4E1C\u897F</li></ol><h3 id="\u9644workflow" tabindex="-1"><a class="header-anchor" href="#\u9644workflow" aria-hidden="true">#</a> \u9644Workflow</h3><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code># name\u5B57\u6BB5\u662F workflow \u7684\u540D\u79F0
name: GitHub Actions Build and Deploy Demo
# on\u5B57\u6BB5\u6307\u5B9A\u89E6\u53D1 workflow \u7684\u6761\u4EF6\uFF0C\u901A\u5E38\u662F\u67D0\u4E9B\u4E8B\u4EF6
# \u8FD9\u91CC\u7684\u89E6\u53D1\u6761\u4EF6\u662Fpush\u4EE3\u7801\u5230master\u7684\u65F6\u5019\u89E6\u53D1
on:
  push:
    branches:
      - master
# workflow \u6587\u4EF6\u7684\u4E3B\u4F53\u662Fjobs\u5B57\u6BB5\uFF0C\u8868\u793A\u8981\u6267\u884C\u7684\u4E00\u9879\u6216\u591A\u9879\u4EFB\u52A1
jobs:
  # job-id
  main:
    # job-name \u4F1A\u663E\u793A\u5728action\u4E2D
    name: start
    # runs-on\u5B57\u6BB5\u6307\u5B9A\u8FD0\u884C\u6240\u9700\u8981\u7684\u865A\u62DF\u673A\u73AF\u5883\u3002\u5B83\u662F\u5FC5\u586B\u5B57\u6BB5\u3002\u76EE\u524D\u53EF\u7528\u7684\u865A\u62DF\u673A\u5982\u4E0B\uFF1Aubuntu-latest\uFF0Cwindows-latest\uFF0CmacOS-latest
    runs-on: ubuntu-latest
    # steps\u5B57\u6BB5\u6307\u5B9A\u6BCF\u4E2A Job \u7684\u8FD0\u884C\u6B65\u9AA4\uFF0C\u53EF\u4EE5\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A\u6B65\u9AA4
    steps:
      # \u83B7\u53D6\u6E90\u7801\uFF0C\u4F7F\u7528\u7684 action \u662Factions/checkout
    - name: Checkout
      uses: actions/checkout@v2
      with:
        persist-credentials: false

    # react\u9879\u76EE\u4E3Anpm run-script build\uFF0Cvue\u9879\u76EE\u6539\u4E3Anpm run build
    - name: Install and Build
      # \u8BE5\u6B65\u9AA4\u8FD0\u884C\u7684\u547D\u4EE4\u6216\u8005 action\u3002
      #\u6784\u5EFA\u811A\u672C
      run: |
        npm install
        npm run docs:build

    # \u6784\u5EFA\u548C\u90E8\u7F72\uFF0C\u4F7F\u7528\u7684 action \u662FJamesIves/github-pages-deploy-action
    # react\u9879\u76EE\u7684FOLDER\u4E3Abuild\uFF0Cvue\u9879\u76EE\u6539\u4E3Adist
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@releases/v3
      with:
        # GitHub \u5BC6\u94A5
        ACCESS_TOKEN: \${{ secrets.ACCESS_TOKEN }}
        # \u53D1\u5E03\u5206\u652F
        BRANCH: gh-pages
        # \u6784\u5EFA\u6210\u679C\u6240\u5728\u76EE\u5F55
        FOLDER: dist
    # \u6307\u5B9A\u8FD0\u884C\u4F4D\u7F6E
    # - name: Clean temp directory
    #     run: rm -rf *
    #     working-directory: ./temp
    # \u4F7F\u7528 shell \u5173\u952E\u5B57\uFF0C\u6765\u6307\u5B9A\u7279\u5B9A\u7684 shell\uFF1A
    # - name: Display the path
    #    run: echo $PATH
    #    shell: bash

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h3 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h3>`,17),u={href:"https://zhuanlan.zhihu.com/p/164744104",target:"_blank",rel:"noopener noreferrer"},h=e("Github Action \u7CBE\u534E\u6307\u5357"),m={href:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"},d=e("GitHub Actions \u5165\u95E8\u6559\u7A0B"),f={href:"https://wangdaodao.com/20200721/github-actions-demo.html",target:"_blank",rel:"noopener noreferrer"},w=e("GitHub Action\u5B9E\u64CD\u4E4BVue Demo");function g(_,k){const s=l("ExternalLinkIcon");return i(),t(o,null,[c,n("ul",null,[n("li",null,[n("a",u,[h,a(s)])]),n("li",null,[n("a",m,[d,a(s)])]),n("li",null,[n("a",f,[w,a(s)])])])],64)}var x=r(p,[["render",g]]);export{x as default};
