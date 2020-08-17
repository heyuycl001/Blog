// 概念+实战应用+告阶应用+源码阅读+自己封装

/**
 * 概念：javaScript的单线程，与他的用途有关。javaScript的主要用途是与用户互动，以及操作DOM。
 *   这决定了他只能是单线程，否则会带来很多复杂的同步问题。
 *   比如：如果js是多线程的，一个线程在某个DOM上添加了内容，一个线程删除了这个DOM，这时浏览器以哪个线程为主。
 *
 * web Worker 跟 Service Worker
 * web Worker经常用于常见一个线程，后台运营处理大额计算
 * Service Worker是在web Worker的基础上增加了离线缓存的功能
 *
 *
 */
