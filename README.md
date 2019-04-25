# 石衫架构笔记
[![original](https://badgen.net/badge/original/%E4%B8%AD%E5%8D%8E%E7%9F%B3%E6%9D%89/orange)]
[![open-source-organization](https://badgen.net/badge/organization/join%20us/138c7b)]
[![reading](https://badgen.net/badge/books/read%20together/cyan)]
[![coding](https://badgen.net/badge/leetcode/coding%20together/cyan)]
[![sharing](https://badgen.net/badge/readers/share%20together/cyan)]
[![stars](https://badgen.net/github/stars/doocs/wulimax/reactApp)]
[![forks](https://badgen.net/github/forks/wulimax/reactApp)]
[![contributors](https://badgen.net/github/contributors/wulimax/reactApp)]
[![help-wanted](https://badgen.net/github/label-issues/wulimax/reactApp/help%20wanted/open)]
[![issues](https://badgen.net/github/open-issues/wulimax/reactApp)]
[![PRs Welcome](https://badgen.net/badge/PRs/welcome/green)](http://makeapullrequest.com)



本文档根据中华石杉老师面试突击一二季、java架构师课程、亿级流量课程、顶级elasticsearch课程以及经典的《深入jvm原理》书籍为主要背景编写，此为第一版，后续会继续更新。

## 编写目的

为了可以在面试前有一份资料能够帮助我们以最快的速度复习较为全面的知识点，一开始初衷想着只列出技术要点，能帮助回忆技术知识体系就行了。但是发现越整理知识越多，技术体系就越庞大。所以就想着分享出来，希望对大家有所帮助吧，哪怕一点点我也很高兴了，哈哈哈

##分布式系统

###	系统拆分

###	如何进行系统拆分

### 	拆分后不用dubbo可以吗？

## 分布式服务框架dubbo

### 	说一下的dubbo的工作原理？注册中心挂了可以继续通信吗？

### 	dubbo支持哪些序列化协议？

### 	PB知道吗？为什么PB的效率是最高的？

### 	dubbo负载均衡策略和高可用策略都有哪些？动态代理策略呢？

### 	dubbo的spi思想是什么？

### 	如何基于dubbo进行服务治理、服务降级、失败重试以及超时重试？

### 	如何自己设计一个类似dubbo的rpc框架？

## 分布式锁

### 	zookeeper 都有哪些使用场景？

### 	使用redis如何设计分布式锁？使用zk来设计分布式锁可以吗？这两种分布式锁的实现方式哪种效率比较高？

## 分布式事务

### 	分布式事务了解吗？你们如何解决分布式事务问题的？TCC如果出现网络连不通怎么办？XA的一致性如何保证？

## 分布式会话

### 	集群部署时的分布式session如何实现？

## 分布式接口幂等性

### 	为什么会出现一个接口会调用2次？

### 	分布式服务接口的幂等性如何设计（比如不能重复扣款）？

## 分布式接口顺序性

### 	分布式服务接口请求的顺序性如何保证？

## 高并发架构

##      消息队列MQ

	### 	为什么使用消息队列？

### 	消息队列有什么优点和缺点？

### 	Kafka、ActiveMQ、RabbitMQ、RocketMQ 都有什么区别，以及适合哪些场景？

### 	如何保证消息不被重复消费？或者说，如何保证消息消费时的幂等性？

### 	如何保证消息的可靠性传输？或者说，如何处理消息丢失的问题？

### 	如何保证消息的顺序性？

### 	消息队列快写满了以后该怎么处理？有几百万消息持续积压几小时

### 	mq 中的消息过期失效了

### 	如果让你写一个消息队列，该如何进行架构设计？说一下你的思路。

## elasticsearch分布式搜索

### 	es 的分布式架构原理能说一下么（es 是如何实现分布式的啊）？

### 	es document数据路由原理

### 	es写数据过程的底层原理

### 	es 读数据过程的底层原理

### 	es 删除/修改数据的底层原理

### 	倒排索引组成结构以及其索引不可变原因揭秘 40、67

### 	正排索引doc value核心原理 56、高级53

### 	相关度评分TF&IDF算法 55 高级25、26

### 	es并发冲突问题 基于version乐观锁的并发控制 18-22

### 	deep paging 深分页问题 36  

### 	ngram分词机制实现index-time搜索推荐 高级24

### 	常见的相关度分数优化方法 高级27

### 	elasticsearch性能调优 高级121-125

### 	search timeout机制揭秘 （了解）34

### 	聚合数据分析_bucket与metric两个核心概念 （了解）高级33

### 	es生产集群部署之硬件配置、jvm以及集群规划建议 （了解）高级93

### 	es生产集群部署之针对生产集群的脑裂问题专门定制的重要参数 （了解）高级97

### 	各种常用搜索语法

### 	filter执行原理深度剖析（bitset机制与caching机制）高级03

### 	es 生产集群的部署架构是什么？每个索引的数据量大概有多少？每个索引大概有多少个分片？

## redis缓存

### 	项目中缓存是如何使用的？为什么要用缓存？缓存使用不当会造成什么后果？

### 	redis 和 memcached 有什么区别？

### 	redis 的线程模型是什么？为什么 redis 单线程却能支撑高并发？

### 	redis 都有哪些数据类型？分别在哪些场景下使用比较合适？

### 	redis 的过期策略都有哪些？内存淘汰机制都有哪些？手写一下 LRU 代码实现？

### 	如何保证 redis 的高并发和高可用？

### 	Redis 主从架构和数据复制的完整流程

### 	Redis 哨兵集群实现高可用

### 	redis 的持久化有哪几种方式？不同的持久化机制都有什么优缺点？持久化机制具体底层是如何实现的？

### 	redis 集群模式的工作原理能说一下么？在集群模式下，redis 的 key 是如何寻址的？分布式寻址都有哪些算法？了解一致性 hash 算法吗？

### 	了解什么是 redis 的雪崩和穿透？redis 崩溃之后会怎么样？系统该如何应对这种情况？如何处理 redis 的穿透？

### 	如何保证缓存与数据库的双写一致性？

### 	redis 的并发竞争问题是什么？如何解决这个问题？了解 redis 事务的 CAS 方案吗？

###  	生产环境中的 redis 是怎么部署的？

## 分库分表

### 	为什么要分库分表？（设计高并发系统的时候，数据库层面该如何设计？）

### 	用过哪些分库分表中间件？不同的分库分表中间件都有什么优点和缺点？

### 	你们具体是如何对数据库如何进行垂直拆分或水平拆分的？

### 	现在有一个未分库分表的系统，未来要分库分表，如何设计才可以让系统从未分库分表动态切换到分库分表上？

### 	如何设计可以动态扩容缩容的分库分表方案？

### 	分库分表之后，id 主键如何处理？

## 读写分离

### 	如何实现 MySQL 的读写分离？

### 	MySQL 主从复制原理的是啥？

### 	读写分离架构为什么会出现数据延时的情况？

### 	主库突然宕机，从库未来得及同步数据造成的数据丢失问题怎么解决？

### 	如何解决 MySQL 主从同步的延时问题？

## 如何设计一个高并发系统？

## 高可用架构 

## 	 如何设计一个高可用系统？

## 	 限流

## 	 熔断

## 	 降级

# 计算机基础

## 	 网络

### 	说一下TCP/IP的四层网络模型？那么七层网络模型呢？

### 	用浏览器请求一个链接的时候，经历了哪些过程（DNS解析过程）？

### 	TCP三次握手和四次挥手的工作流程是什么？画一下流程图？为什么不是两次握手？

### 	说说socket通信的原理？

### 	说一下http的工作流程？http 1.0、http 1.1、http 2.0具体有哪些区别？

### 	http长连接的原理是什么？

##  CPU

### 	线上服务器的cpu使用达到100%了，如何排查、定位和解决该问题？