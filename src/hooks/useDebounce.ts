import { useCallback, useEffect, useRef } from "react";

/**
   * 使用了useRef 之后每次组件render useRef创建的对象的引用都不会发生变化，只是里面的属性变化，起到保存timer的目的
   * @desc: 防抖函数
   * @param {*} fn
   * @param {*} delay
   */
 export function useDebounce(fn: Function, delay: number) {
    const {current} = useRef({fn, timer: null as unknown as NodeJS.Timeout});
    useEffect(function() {
      current.fn = fn;
    }, [current.fn, fn]);
 
    return useCallback(function(...args: any[]) {
      if (current.timer) {
        clearTimeout(current.timer);
      }
      current.timer = setTimeout(() => {
        current.fn.call(current.fn, ...args);
      }, delay);
    }, [current.fn, current.timer, delay]);
  }