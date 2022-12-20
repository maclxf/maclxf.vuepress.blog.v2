import{_ as r,r as p,o as t,a as l,b as n,d as a,F as c,f as o,e}from"./app.22872cfe.js";var i="/images/docker-compose-file-flow.jpg";const u={},m=o('<p>\u76EE\u7684\uFF1A\u5C1D\u8BD5\u7528\u5B83\u8FD0\u884C\u4E00\u4E2A\u9879\u76EE</p><h2 id="docker-compose-\u8E29\u5751\u8BB0" tabindex="-1"><a class="header-anchor" href="#docker-compose-\u8E29\u5751\u8BB0" aria-hidden="true">#</a> Docker-compose \u8E29\u5751\u8BB0</h2><h3 id="docker-compose\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#docker-compose\u662F\u4EC0\u4E48" aria-hidden="true">#</a> Docker-compose\u662F\u4EC0\u4E48</h3><p>\u901A\u8FC7docker\u8FD0\u884C\u5404\u79CD\u5BB9\u5668\uFF0C\u4F46\u662F\u4E00\u4E2A\u9879\u76EE\u5F80\u5F80\u8981\u591A\u4E2A\u5BB9\u5668\u652F\u6301\uFF0C\u591A\u4E2A\u5BB9\u5668\u7684\u8FD0\u884C\u4EE5\u53CA\u4E4B\u95F4\u5173\u7CFB\u6BCF\u6B21\u542F\u52A8\u90FD\u8981\u8F93\u5165\u4E00\u5806\u547D\u4EE4\u8FC7\u4E8E\u590D\u6742\u7136\u540E\u5C31\u6709 docker-compose\uFF0C\u7F16\u6392\u5404\u79CDdocker\u5BB9\u5668\u7684\u670D\u52A1</p><blockquote><p>Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application\u2019s services. Then, with a single command, you create and start all the services from your configuration.</p></blockquote><h3 id="\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u7A0B" aria-hidden="true">#</a> \u8FC7\u7A0B</h3><ol start="0"><li>\u6587\u4EF6\u7ED3\u6784 <img src="'+i+`" alt="docker-compose-file-flow" loading="lazy"></li><li>\u7F16\u5199compose.yaml</li><li>\u8FD0\u884C<code>docker-compose up -d</code> \u542F\u52A8</li></ol><h3 id="docker-compose\u7684\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#docker-compose\u7684\u547D\u4EE4" aria-hidden="true">#</a> docker-compose\u7684\u547D\u4EE4</h3><ul><li><code>docker-compose up -d</code> \u7F16\u6392\u5BB9\u5668\uFF0C\u53C2\u6570-d \u8868\u793A\u540E\u53F0\u8FD0\u884C\uFF08\u4E0D\u628A\u542F\u52A8\u65E5\u5FD7\u8F93\u51FA\u51FA\u6765\uFF09</li><li><code>docker-compose down</code> \u505C\u7528\u5E76\u5220\u9664\u5BB9\u5668</li><li><code>docker-compose restart|start|stop xxx</code> \u91CD\u542F\u67D0\u4E2A\u5BB9\u5668</li><li><code>docker-compose logs xxx</code> View output from containers</li></ul><h3 id="\u9644compose-yaml" tabindex="-1"><a class="header-anchor" href="#\u9644compose-yaml" aria-hidden="true">#</a> \u9644Compose.yaml</h3><p>mysql\u5728\u5BBF\u4E3B\u673A</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>version: &quot;3&quot; # \u6307\u5B9Acompose\u7248\u672C\uFF0C \u76EE\u524D\u4E3B\u6D41\u7248\u672C3.x\uFF0C\u652F\u6301docker1.13.0\u53CA\u4EE5\u4E0A\u7684\u7248\u672C
services: # \u5B9A\u4E49\u670D\u52A1\u4FE1\u606F
    nginx: # nginx\u548Cphp: \u7528\u6237\u81EA\u5B9A\u4E49\uFF0C\u8868\u793A\u670D\u52A1\u540D\u79F0
        image: nginx:latest # \u4F7F\u7528\u7684\u955C\u50CF
        container_name: &quot;compose-nginx&quot; # \u5BB9\u5668\u540D\u79F0
        # \u5B9A\u4E49\u91CD\u542F\u7B56\u7565
            # no\uFF1A\u662F\u9ED8\u8BA4\u7684\u91CD\u542F\u7B56\u7565\uFF0C\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\u90FD\u4E0D\u4F1A\u91CD\u542F\u5BB9\u5668\u3002
            # always\uFF1A\u5BB9\u5668\u603B\u662F\u91CD\u65B0\u542F\u52A8\u3002
            # on-failure\uFF1A\u5728\u5BB9\u5668\u975E\u6B63\u5E38\u9000\u51FA\u65F6\uFF08\u9000\u51FA\u72B6\u6001\u975E0\uFF09\uFF0C\u624D\u4F1A\u91CD\u542F\u5BB9\u5668\u3002
        restart: always
        ports: # \u8BBE\u7F6E\u5BBF\u4E3B\u673A\u548C\u5BB9\u5668\u4E4B\u95F4\u7684\u7AEF\u53E3\u6620\u5C04\u5173\u7CFB
            - &quot;8001:80&quot;
            - &quot;4431:443&quot;
        environment: # \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF(TZ=Asia/Shanghai:\u8BBE\u7F6E\u65F6\u533A)
           - TZ=Asia/Shanghai
        depends_on: # \u8BBE\u7F6E\u4F9D\u8D56\u5173\u7CFB\uFF0C\u53EF\u4EE5\u8BA9docker-compose\u6309\u4F9D\u8D56\u5173\u7CFB\u542F\u52A8
           - &quot;php&quot;
        volumes: # \u6570\u636E\u5377\uFF0C\u5B9A\u4E49\u6620\u5C04\u5173\u7CFB,\u5C06\u76EE\u5F55\u6216\u6587\u4EF6\u6302\u8F7D\u5230\u5BB9\u5668
           - &quot;/home/docker-compose/nginx-php8/nginx/conf.d:/etc/nginx/conf.d&quot;
           - &quot;/home/docker-compose/nginx-php8/www:/usr/share/nginx/html&quot;
           - &quot;/home/docker-compose/nginx-php8/nginx/log:/var/log/nginx&quot;
        networks: # \u5B9A\u4E49\u7F51\u7EDC\u4FE1\u606F,\u8BE6\u7EC6\u7684\u53EF\u4EE5\u53BB\u8FD9\u91CC\u770B\u770Bhttps://deepzz.com/post/docker-compose-file.html#toc_31
           - net-app
    php:
        build: &#39;./php&#39; # build \u8FD9\u91CC\u6211\u7406\u89E3\u4E3A\uFF1A\u6307\u5B9Abuild Dockerfile\u751F\u6210\u955C\u50CF\u7684\u540D\u79F0
        image: maclxf:php8.1.12-bc
        container_name: &quot;compose-php&quot;
        restart: always
        ports:
            - &quot;9002:9000&quot;
        environment:
            - TZ=Asia/Shanghai
        volumes:
            - &quot;/home/docker-compose/nginx-php8/www:/usr/share/nginx/html&quot;
        networks:
           - net-app

networks:
    net-app:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>mysql\u5728docker\u4E0A</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>version: &quot;3&quot;
services:
    nginx:
        image: nginx:latest
        container_name: &quot;compose-nginx&quot;
        restart: always
        ports:
            - &quot;8001:80&quot;
            - &quot;4431:443&quot;
        environment:
           - TZ=Asia/Shanghai
        depends_on:
           - &quot;php&quot;
        volumes:
           - &quot;/home/docker-compose/nginx-php8/nginx/conf.d:/etc/nginx/conf.d&quot;
           - &quot;/home/docker-compose/nginx-php8/www:/usr/share/nginx/html&quot;
           - &quot;/home/docker-compose/nginx-php8/nginx/log:/var/log/nginx&quot;
        networks:
           - net-app
    php:
        build: &#39;./php&#39;
        image: maclxf:php8.1.12-bc
        container_name: &quot;compose-php&quot;
        restart: always
        ports:
           - &quot;9002:9000&quot;
        environment:
           - TZ=Asia/Shanghai
        volumes:
           - &quot;/home/docker-compose/nginx-php8/www:/usr/share/nginx/html&quot;
        networks:
           - net-app
    mysql:
        image: mysql:5.7
        container_name: &quot;compose-mysql&quot;
        restart: always
        ports:
           - &quot;3307:3306&quot;
        volumes:
           - &quot;/home/docker-compose/nginx-php8/mysql/data:/var/lib/mysql&quot;
           - &quot;/home/docker-compose/nginx-php8/mysql/conf/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf&quot;
        environment:
           - &quot;MYSQL_ROOT_PASSWORD=111111&quot;
        networks:
           - net-app
networks:
    net-app:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p>redis\u5728docker\u4E0A</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>version: &quot;3&quot;
services:
    nginx:
        image: nginx:latest
        container_name: &quot;compose-nginx&quot;
        restart: always
        ports:
            - &quot;8001:80&quot;
            - &quot;4431:443&quot;
        environment:
           - TZ=Asia/Shanghai
        depends_on:
           - &quot;php&quot;
        volumes:
           - &quot;/home/docker-compose/nginx-php8/nginx/conf.d:/etc/nginx/conf.d&quot;
           - &quot;/home/docker-compose/nginx-php8/www:/usr/share/nginx/html&quot;
           - &quot;/home/docker-compose/nginx-php8/nginx/log:/var/log/nginx&quot;
        networks:
           - net-app
    php:
        build: &#39;./php&#39;
        image: maclxf:php8.1.12-bc
        container_name: &quot;compose-php&quot;
        restart: always
        ports:
           - &quot;9002:9000&quot;
        environment:
           - TZ=Asia/Shanghai
        volumes:
           - &quot;/home/docker-compose/nginx-php8/www:/usr/share/nginx/html&quot;
        networks:
           - net-app
    mysql:
        image: mysql:5.7
        container_name: &quot;compose-mysql&quot;
        restart: always
        ports:
           - &quot;3307:3306&quot;
        volumes:
           - &quot;/home/docker-compose/nginx-php8/mysql/data:/var/lib/mysql&quot;
           - &quot;/home/docker-compose/nginx-php8/mysql/conf/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf&quot;
        environment:
           - &quot;MYSQL_ROOT_PASSWORD=111111&quot;
        networks:
           - net-app
    redis:
        image: redis:latest
        container_name: compose-redis
        restart: always
        command: redis-server --requirepass 111111
        ports:
            - &quot;6380:6379&quot;
        volumes:
            - &quot;/home/docker-compose/nginx-php8/redis/data:/data&quot;
        networks:
           - net-app
networks:
    net-app:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h3 id="\u7279\u522B\u8BF4\u660E\u5751" tabindex="-1"><a class="header-anchor" href="#\u7279\u522B\u8BF4\u660E\u5751" aria-hidden="true">#</a> \u7279\u522B\u8BF4\u660E\u5751</h3><h4 id="\u5173\u4E8E\u9002\u7528\u6570\u636E\u5E93\u6709\u4E24\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u9002\u7528\u6570\u636E\u5E93\u6709\u4E24\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> \u5173\u4E8E\u9002\u7528\u6570\u636E\u5E93\u6709\u4E24\u79CD\u65B9\u5F0F</h4><p>\u65B9\u5F0F\u4E00 \u4F7F\u7528\u5BBF\u4E3B\u673A\u7684mysql \u6211\u5C1D\u8BD5\u7684\u662F\u8FD9\u79CD\u65B9\u5F0F\u7528\u51E0\u4E2A\u5751\u89E3\u51B3\u65B9\u5F0F\u53C2\u8003\u4E86\u8FD9\u91CC https://www.cnblogs.com/haiton/p/11064727.html 1. \u5BBF\u4E3B\u673Aip \u548C \u5BB9\u5668\u7684ip * \u4EE3\u7801\u8FD0\u884C\u5728\u5BB9\u5668\u4E2D\u8C03\u7528\u5BBF\u4E3B\u7684mysql \u76F8\u5F53\u4E8E\u5C31\u662F\u8BBF\u95EE\u8FDC\u7A0B\u7684\u6570\u636E\u5E93\uFF08\u6240\u4EE5\u4E0D\u7528\u6784\u5EFAmysql\u7684\u5BB9\u5668\uFF09\uFF0C\u90A3\u4E48\u5BB9\u5668\u4E2D\u4EE3\u7801\u914D\u7F6E\u8FDC\u7A0B\u6570\u636E\u6570\u636E\u5E93\u7684ip\u5E94\u8BE5\u600E\u4E48\u586B \u8FD9\u91CC\u8981\u7528\u5230\u4E24\u4E2A\u547D\u4EE4 \u5BBF\u4E3B\u673A <code>ifconfig</code> \u627E\u5230 <code>docker0 172.17.0.1</code>\uFF0C\u5BBF\u4E3B\u673A <code>docker network inspect networknamexxxx</code> \u627E\u5230 <code>Gateway 192.168.144.1</code>\uFF0C\u4EE3\u7801\u914D\u7F6E\u4E2D\u586B\u5165 172.17.0.1\uFF0C\u5BBF\u4E3B\u673A\u5141\u8BB8 192.168.144.1 \u8BBF\u95EE\uFF0C\u90A3\u4E48\u8FD9\u6837\u5C31\u628Amysql\u8BF7\u6C42\u53D1\u51FA\u6765\u4E86 * \u4E0A\u9762\u8FD9\u79CD\u505A\u6CD5\uFF0C\u6211\u5728\u91CD\u542F\u8FC7\u7535\u8111\u4E4B\u540E\u5C31\u4E0D\u884C\u4E86\uFF08\u627E\u4E0D\u5230\uFF09\uFF0C\u6539\u4E86\u534A\u5929\u5C06\u4EE3\u7801\u914D\u7F6E\u586B\u5165 172.18.0.1\uFF0C\u5BBF\u4E3B\u673A\u5141\u8BB8 172.18.0.2 \u5C31\u53EF\u4EE5\u4E86 <code>json $ docker network inspect nginx-php8_net-app [ { &quot;Name&quot;: &quot;nginx-php8_net-app&quot;, &quot;Id&quot;: &quot;68aac6a9843a4159efce63e8bb2c06b431da735f9cb24708a002c67818607967&quot;, &quot;Created&quot;: &quot;2022-12-10T10:32:14.4382743+08:00&quot;, &quot;Scope&quot;: &quot;local&quot;, &quot;Driver&quot;: &quot;bridge&quot;, &quot;EnableIPv6&quot;: false, &quot;IPAM&quot;: { &quot;Driver&quot;: &quot;default&quot;, &quot;Options&quot;: null, &quot;Config&quot;: [ { &quot;Subnet&quot;: &quot;172.18.0.0/16&quot;, &quot;Gateway&quot;: &quot;172.18.0.1&quot; } ] }, &quot;Internal&quot;: false, &quot;Attachable&quot;: false, &quot;Ingress&quot;: false, &quot;ConfigFrom&quot;: { &quot;Network&quot;: &quot;&quot; }, &quot;ConfigOnly&quot;: false, &quot;Containers&quot;: { &quot;12ae94d5000117d726aeb90df3bc1a16a5c6c0a2fc2fd5ad9342ed843d022deb&quot;: { &quot;Name&quot;: &quot;compose-nginx&quot;, &quot;EndpointID&quot;: &quot;ab0abe224db399bc691f476cf1c7e78d0fcfd5e6e12a0451769d23213b816567&quot;, &quot;MacAddress&quot;: &quot;02:42:ac:12:00:03&quot;, &quot;IPv4Address&quot;: &quot;172.18.0.3/16&quot;, &quot;IPv6Address&quot;: &quot;&quot; }, &quot;94efe0e8b9d9f619655ea1562101a7887643f683a94d58bbeafc50ed0bb50a1d&quot;: { &quot;Name&quot;: &quot;compose-php&quot;, &quot;EndpointID&quot;: &quot;ef1c466d0a5cb4799cebce1118f7cf3bb9013fe6f23edb311f34b221b40fbd8b&quot;, &quot;MacAddress&quot;: &quot;02:42:ac:12:00:02&quot;, &quot;IPv4Address&quot;: &quot;172.18.0.2/16&quot;, &quot;IPv6Address&quot;: &quot;&quot; } }, &quot;Options&quot;: {}, &quot;Labels&quot;: { &quot;com.docker.compose.network&quot;: &quot;net-app&quot;, &quot;com.docker.compose.project&quot;: &quot;nginx-php8&quot;, &quot;com.docker.compose.version&quot;: &quot;2.12.2&quot; } } ] </code> &gt; \u4E0A\u9762\u8FD9\u6BB5json\u53EF\u4EE5\u770B\u51FA Containers 12ae94d5000117d726aeb90df3bc1a16a5c6c0a2fc2fd5ad9342ed843d022deb \u5BF9\u5E94 compose-nginx 94efe0e8b9d9f619655ea1562101a7887643f683a94d58bbeafc50ed0bb50a1d \u5BF9\u5E94 94efe0e8b9d9f619655ea1562101a7887643f683a94d58bbeafc50ed0bb50a1d\uFF0C\u8BFB\u6570\u636E\u7684\u8BF7\u6C42\u4ECE compose-php \u7684ip 172.18.0.2\u7ED9\u5230 172.18.0.1\uFF0C\u7531\u8FD9\u4E2A\u5728\u7EDF\u4E00\u53D1\u51FA\u53BB\u5230\u5916\u90E8\uFF08\u8FC7\u7A0B\u662F\u6211\u731C\u7684\u53EA\u505A\u53C2\u8003\uFF09 https://m.tongfu.net/home/35/blog/513305.html https://m.tongfu.net/home/35/blog/513355.html 2. \u6CE8\u610F\u8981\u53BB\u6389 /etc/mysql/mysql.conf/mysql.cof\u4E2Dbind address 127.0.0.1\u5426\u5219\u4F1A\u88ABmysql\u62D2\u7EDD 3. grant all privileges on <em>.</em> to &#39;root&#39;@&#39;172.17.0.1&#39; identified by &#39;pswd&#39; with grant option; \u5F00\u653E\u6240\u6709\u6743\u9650\u7ED9root,\u5F53root\u4EE5pswd(\u4E0D\u4E00\u5B9A\u662Froot\u767B\u5F55\u5BC6\u7801,\u4EC5\u4F5C\u4E3A\u60C5\u666F\u4E0B\u767B\u5F55\u7684\u5BC6\u7801)\u5BC6\u7801\u4ECE 172.17.0.1 \u767B\u5165\u7684\u65F6\u5019,\u5141\u8BB8\u5176\u64CD\u4F5C\u6240\u6709\u6570\u636E\u5E93\u4E0B\u7684\u6240\u6709\u8868(\u4E5F\u53EF\u4EE5\u5C06 <em>.</em> \u6539\u6210\u7279\u5B9A\u6570\u636E\u5E93\u4E0B\u7684\u7279\u5B9A\u8868,\u8FD9\u4E2A\u968F\u610F). 4. \u5BBF\u4E3B\u673A\u8FD9\u79CD\u81F3\u5C11\u5728wsl2\u7684docker\u8BBF\u95EE\u4E3B\u673A\u7684mysql\u4E0A\u4F1A\u6162\u4E00\u70B9 https://www.cnblogs.com/haiton/p/11064727.html https://blog.csdn.net/xs18952904/article/details/106518424 https://blog.csdn.net/u010953609/article/details/89445367 https://www.jianshu.com/p/3e1fd311ba87 https://www.jianshu.com/p/0561d3cfccda \u65B9\u5F0F\u4E8C \u4F7F\u7528\u5BB9\u5668\u7684mysql \u89C1\u4E0A\u9762yaml</p><h4 id="\u4F7F\u7528composer" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528composer" aria-hidden="true">#</a> \u4F7F\u7528composer</h4>`,20),b=e("\u65B9\u5F0F\u4E00 "),d={href:"https://blog.csdn.net/dfsgwe1231/article/details/105993717",target:"_blank",rel:"noopener noreferrer"},h=e("\u53C2\u8003\u7684\u7F51\u9875"),q=e(" \u76F4\u63A5\u5728yaml\u4E2D\u52A0\u5165\u5982\u4E0B"),g=o(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="composer" tabindex="-1"><a class="header-anchor" href="#composer" aria-hidden="true">#</a> composer:</h1><h1 id="image-composer-latest" tabindex="-1"><a class="header-anchor" href="#image-composer-latest" aria-hidden="true">#</a> image: composer:latest</h1><h1 id="container-name-compose-composer" tabindex="-1"><a class="header-anchor" href="#container-name-compose-composer" aria-hidden="true">#</a> container_name: &quot;compose-composer&quot;</h1><h1 id="depends-on-\u8BBE\u7F6E\u4F9D\u8D56\u5173\u7CFB-\u53EF\u4EE5\u8BA9docker-compose\u6309\u4F9D\u8D56\u5173\u7CFB\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#depends-on-\u8BBE\u7F6E\u4F9D\u8D56\u5173\u7CFB-\u53EF\u4EE5\u8BA9docker-compose\u6309\u4F9D\u8D56\u5173\u7CFB\u542F\u52A8" aria-hidden="true">#</a> depends_on: # \u8BBE\u7F6E\u4F9D\u8D56\u5173\u7CFB\uFF0C\u53EF\u4EE5\u8BA9docker-compose\u6309\u4F9D\u8D56\u5173\u7CFB\u542F\u52A8</h1><h1 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> - &quot;php&quot;</h1><h1 id="volumes" tabindex="-1"><a class="header-anchor" href="#volumes" aria-hidden="true">#</a> volumes:</h1><h1 id="home-docker-compose-nginx-php8-www-ci4-app-\u5FC5\u987B\u8981\u5C06composer-json-\u6240\u5728\u6587\u4EF6\u5939\u6302\u5230-app-\u4E0A\u5426\u5219\u62A5\u627E\u4E0D\u5230composer-json" tabindex="-1"><a class="header-anchor" href="#home-docker-compose-nginx-php8-www-ci4-app-\u5FC5\u987B\u8981\u5C06composer-json-\u6240\u5728\u6587\u4EF6\u5939\u6302\u5230-app-\u4E0A\u5426\u5219\u62A5\u627E\u4E0D\u5230composer-json" aria-hidden="true">#</a> - &quot;/home/docker-compose/nginx-php8/www/ci4:/app&quot; # \u5FC5\u987B\u8981\u5C06composer.json \u6240\u5728\u6587\u4EF6\u5939\u6302\u5230 /app \u4E0A\u5426\u5219\u62A5\u627E\u4E0D\u5230composer.json</h1><h1 id="command-composer-install-\u6267\u884Ccomposer-install\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#command-composer-install-\u6267\u884Ccomposer-install\u547D\u4EE4" aria-hidden="true">#</a> command: [&quot;composer&quot;, &quot;install&quot;] # \u6267\u884Ccomposer install\u547D\u4EE4</h1><p>\u8FD9\u91CC\u6709\u4E2A\u5F0A\u7AEF\u5373\u4F7F\u7528\u4E86 depends_on \u8BA9php\u542F\u52A8\u540E\u5728\u6267\u884C\uFF0C\u4F46\u662Fphp\u542F\u52A8\u5230\u5B89\u88C5\u597D\u4F9D\u8D56\u4F9D\u65E7\u6709\u6BB5\u65F6\u95F4\uFF0C\u5BFC\u81F4\u5728 up \u65F6\uFF0C\u4E00\u76F4\u62A5\u9519\uFF0C\u8BF4\u6CA1\u5F97intl\u7B49php \u63D2\u4EF6 \u6240\u4EE5\u8FD9\u91CC\u53EA\u597D\u653E\u5F03 \u540E\u7EED\u627E\u4E86\u4E2A\u65B9\u6CD5\u53CA\u65B9\u6CD5\u56DB\u8FD8\u6CA1\u6709\u8BD5\u8FC7\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4EE5\u4E0B</p><p>\u65B9\u5F0F\u4E8C \u7B28\u529E\u6CD5\u529E\u6CD5\u6765\u5B89\u88C5composer</p><p>\u8FDB\u5165composer-php\uFF0C\u4F46\u662F\u4E0D\u59A5\uFF0C\u5404\u79CD\u5DEE\u4E1C\u897F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php -r &quot;copy(&#39;https://install.phpcomposer.com/installer&#39;, &#39;composer-setup.php&#39;);&quot;
php composer-setup.php
mv composer.phar /usr/local/bin/composer
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
composer selfupdate
cd /usr/shared/nginx/html/ci4
composer install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u65B9\u5F0F\u4E09 \u518D\u7F16\u6392\u4E00\u4E2A\u5BB9\u5668</p><p>\u65B9\u5F0F\u56DB \u4F7F\u7528wait-for-it https://www.jianshu.com/p/9446f210e327</p><h4 id="redis-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#redis-\u5B89\u88C5" aria-hidden="true">#</a> redis \u5B89\u88C5</h4><p>\u95EE\u9898\u4E3B\u8981\u96C6\u4E2D\u5728php \u5B89\u88C5 redis\u6269\u5C55\u4E0A \u672C\u6765\u662F\u5E0C\u671B\u7528 predis \u4F46\u662F\u6700\u540E\u51B3\u5B9A\u7528php\u7684redis\u6269\u5C55\uFF0C\u76EE\u524D\u7684\u95EE\u9898\u662F\u6B7B\u6D3B\u5B89\u4E0D\u4E0A\u6269\u5C55 https://blog.csdn.net/weixin_39873598/article/details/123088978 https://www.cnblogs.com/Kuju/p/15977101.html</p><h3 id="\u4E0D\u660E\u767D" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u660E\u767D" aria-hidden="true">#</a> \u4E0D\u660E\u767D</h3><ul><li>networks \u5982\u4F55\u4F7F\u7528\u4E0D\u660E\u767D</li></ul><h3 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h3>`,20),f={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"},x=e("Docker ComposeOverview"),k={href:"https://docs.docker.com/compose/compose-file/#depends_on",target:"_blank",rel:"noopener noreferrer"},w=e("depends_no \u7684\u4F7F\u7528"),_={href:"https://docs.docker.com/compose/compose-file/",target:"_blank",rel:"noopener noreferrer"},v=e("compose.yaml \u6587\u6863"),y={href:"https://deepzz.com/post/docker-compose-file.html",target:"_blank",rel:"noopener noreferrer"},A=e("compose.yaml \u600E\u4E48\u5199"),S={href:"https://www.cnblogs.com/trblog/p/14065905.html",target:"_blank",rel:"noopener noreferrer"},j=e("docker-compose\u642D\u5EFAnginx+php\u73AF\u5883"),L={href:"https://www.jianshu.com/p/0561d3cfccda",target:"_blank",rel:"noopener noreferrer"},M=e("docker-compose\u642D\u5EFAnginx+php\u73AF\u5883"),I={href:"http://www.ruanyifeng.com/blog/2018/02/docker-wordpress-tutorial.html",target:"_blank",rel:"noopener noreferrer"},C=e("Docker \u5FAE\u670D\u52A1\u6559\u7A0B"),D={href:"https://blog.csdn.net/weixin_47032745/article/details/117034496",target:"_blank",rel:"noopener noreferrer"},T=e("\u8FD9\u4E00\u4EFDdocker-compose\u8BF4\u660E\u66F4\u8BE6\u7EC6");function Y(O,N){const s=p("ExternalLinkIcon");return t(),l(c,null,[m,n("p",null,[b,n("a",d,[h,a(s)]),q]),g,n("ul",null,[n("li",null,[n("a",f,[x,a(s)])]),n("li",null,[n("a",k,[w,a(s)])]),n("li",null,[n("a",_,[v,a(s)])]),n("li",null,[n("a",y,[A,a(s)])]),n("li",null,[n("a",S,[j,a(s)])]),n("li",null,[n("a",L,[M,a(s)])]),n("li",null,[n("a",I,[C,a(s)])]),n("li",null,[n("a",D,[T,a(s)])])])],64)}var Z=r(u,[["render",Y]]);export{Z as default};
