import { defineComponent, mergeProps, useSSRContext, shallowRef, inject, computed, ref, onUnmounted, reactive, markRaw, readonly, nextTick, h, getCurrentScope, onScopeDispose, unref, toRef as toRef$1, customRef, watch, watchEffect, getCurrentInstance, onMounted, resolveComponent, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, provide, onUpdated, toHandlers, withKeys, watchPostEffect, useSlots, createElementBlock, normalizeClass, createElementVNode, onBeforeUnmount, Teleport, Transition, withDirectives, vShow, toRefs, onBeforeMount, createSlots, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderVNode, ssrRenderList, ssrRenderClass, ssrRenderStyle, renderToString } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import { ElButton, ElLink, ElTag, ElAvatar, ElPagination, ElAffix, ElImageViewer, ElIcon, ElAlert, ElCarousel, ElCarouselItem, ElImage } from "element-plus";
import { Comment, EditPen, AlarmClock, UserFilled, Clock, CollectionTag, Flag, CircleCloseFilled } from "@element-plus/icons-vue";
const index$1 = "";
const index = "";
const cssVars = "";
const fonts = "";
const vars = "";
const base = "";
const utils = "";
const customBlock = "";
const vpCode = "";
const vpCodeGroup = "";
const vpDoc = "";
const vpSponsor = "";
const _sfc_main$1A = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  __ssrInlineRender: true,
  props: {
    text: {},
    type: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["VPBadge", _ctx.type ?? "tip"]
      }, _attrs))} data-v-4f0048a1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(_ctx.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const VPBadge_vue_vue_type_style_index_0_scoped_4f0048a1_lang = "";
const _sfc_setup$1A = _sfc_main$1A.setup;
_sfc_main$1A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue");
  return _sfc_setup$1A ? _sfc_setup$1A(props, ctx) : void 0;
};
const VPBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1A, [["__scopeId", "data-v-4f0048a1"]]);
function deserializeFunctions(value) {
  if (Array.isArray(value)) {
    return value.map(deserializeFunctions);
  } else if (typeof value === "object" && value !== null) {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = deserializeFunctions(value[key]);
      return acc;
    }, {});
  } else if (typeof value === "string" && value.startsWith("_vp-fn_")) {
    return new Function(`return ${value.slice(7)}`)();
  } else {
    return value;
  }
}
const siteData = deserializeFunctions(JSON.parse('{"lang":"zh-cn","dir":"ltr","title":"二人与黑","description":"Er人与黑","base":"/MyBlog/","head":[],"appearance":true,"themeConfig":{"blog":{"pagesData":[{"route":"/msgLoop","meta":{"title":"浏览器的进程模型","description":"过去把消息队列简单分为宏队列和微队列 , 这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式.","sticky":1,"tag":["前端进阶"],"outline":[2,3],"top":1,"date":"2023-06-24 15:33:12","cover":"https://cdn.nlark.com/yuque/0/2023/jpeg/34997670/1681282803386-1d4edc94-29f2-43c4-b3ba-8e6f2584cce4.jpeg"}},{"route":"/oasisEngine","meta":{"title":"Oasis-Engine学习(2023.4.14已经更名为 Galacean)","description":"详细见官网 https://galacean.antgroup.com/#/","tag":["Galacean","Vue2"],"recommend":false,"date":"2023-06-24 15:33:12","cover":""}},{"route":"/v8GarbageCollection","meta":{"title":"V8引擎垃圾回收原理解析","description":"V8垃圾回收底层解析 , 包括闭包 , 作用域 , 预计内存泄漏","sticky":2,"tag":["前端进阶","Node.js"],"tags":["Node.js"],"outline":[2,3],"top":2,"date":"2023-07-07 14:45:30","cover":""}},{"route":"/virtualDomAndDiff","meta":{"title":"虚拟 Dom 和 diff 算法","description":"本篇讲述了snabbdom 的核心思想以及源码 , snabbdom 是一个虚拟 Dom 库也是 diff 算法的鼻祖, vue 的源码也是借鉴了它 , 并实现了建议版的 h 函数 以及 patch 函数 , 后续将继续更新...","sticky":3,"tag":["前端进阶","Vue"],"tags":["Vue"],"outline":[2,3],"top":3,"date":"2023-07-07 14:45:30","cover":""}}],"author":"二人与黑😎","hotArticle":{"title":"精选文章","nextText":"下一页","pageSize":3,"empty":false},"friend":[{"nickname":"Symbol wzc","des":"have u left","avatar":"https://avatars.githubusercontent.com/u/87292165?v=4","url":"https://github.com/Wzccccc"},{"nickname":"哈哈哈哈密瓜","des":"哈哈哈哈密瓜","avatar":"https://www.jamesy.cn/assets/img/avatar.png","url":"https://www.jamesy.cn"}],"recommend":{"showSelf":true},"search":false,"article":{"readingTime":true,"hiddenCover":true,"hidden":true}},"sidebar":[{"text":"","items":[]}],"lastUpdatedText":"上次更新于","footer":{"message":"本博客内容仅供个人学习使用","copyright":"GitHub | <a target=\\"_blank\\" href=\\"https://github.com/TwoPeopleAndHaHa\\"> @TwoPeopleAndHaHa </a><br/> <a target=\\"_blank\\" href=\\"https://beian.miit.gov.cn/\\"> 鄂ICP备2023011228号-1 </a>"},"socialLinks":[{"icon":"github","link":"https://github.com/TwoPeopleAndHaHa"}]},"locales":{},"scrollOffset":90,"cleanUrls":false}'));
const EXTERNAL_URL_RE = /^[a-z]+:/i;
const PATHNAME_PROTOCOL_RE = /^pathname:\/\//;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a2, _b, _c, _d, _e2, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a2 = siteData2.locales[localeIndex]) == null ? void 0 : _a2.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e2 = siteData2.locales[localeIndex]) == null ? void 0 : _e2.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => {
      return createTitle(site.value, route.data);
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    }),
    isDark: ref(false)
  };
}
function useData$1() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base2, path) {
  return `${base2}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || path.startsWith(".") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base2 = "/MyBlog/";
      pagePath = sanitizeFileName(pagePath.slice(base2.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      pagePath = `${base2}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
const RouterSymbol = Symbol();
const fakeHost = `http://a.com`;
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a2, _b;
    await ((_a2 = router.onBeforeRouteChange) == null ? void 0 : _a2.call(router, href));
    const url = new URL(href, fakeHost);
    if (!siteDataRef.value.cleanUrls) {
      if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
        url.pathname += ".html";
        href = url.pathname + url.search + url.hash;
      }
    }
    if (inBrowser && href !== location.href) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.querySelector(decodeURIComponent(targetLoc.hash));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link2 = e.target.closest("a");
      if (link2 && !link2.closest(".vp-raw") && (link2 instanceof SVGElement || !link2.download)) {
        const { target } = link2;
        const { href, origin, pathname, hash, search } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && target !== `_blank` && origin === currentUrl.origin && // don't intercept if non-html extension is present
        !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash) {
              if (hash !== currentUrl.hash) {
                history.pushState(null, "", hash);
                window.dispatchEvent(new Event("hashchange"));
              }
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.querySelector(decodeURIComponent(hash));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    const scrollOffset = siteDataRef.value.scrollOffset;
    let offset = 0;
    if (typeof scrollOffset === "number") {
      offset = scrollOffset;
    } else if (typeof scrollOffset === "string") {
      offset = tryOffsetSelector(scrollOffset);
    } else if (Array.isArray(scrollOffset)) {
      for (const selector of scrollOffset) {
        const res = tryOffsetSelector(selector);
        if (res) {
          offset = res;
          break;
        }
      }
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: "smooth"
      });
    }
  }
}
function tryOffsetSelector(selector) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + 24;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    return () => h(props.as, { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
const useData = useData$1;
function tryOnScopeDispose$1(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient$1 = typeof window !== "undefined";
const noop$1 = () => {
};
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop$1 }))) : ref(r);
}
function unrefElement$1(elRef) {
  var _a2;
  const plain = toValue(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow$1 = isClient$1 ? window : void 0;
function useEventListener$1(...args) {
  let target;
  let events;
  let listeners2;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners2, options] = args;
    target = defaultWindow$1;
  } else {
    [target, events, listeners2, options] = args;
  }
  if (!target)
    return noop$1;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners2))
    listeners2 = [listeners2];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement$1(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners2.map((listener) => register(el, event, listener, options2));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose$1(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance()) {
    onMounted(() => {
      isMounted.value = true;
    });
  }
  return isMounted;
}
function useSupported$1(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery$1(query, options = {}) {
  const { window: window2 = defaultWindow$1 } = options;
  const isSupported = useSupported$1(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update);
    else
      mediaQuery.removeListener(update);
  };
  const update = () => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toRef(query).value);
    matches.value = !!(mediaQuery == null ? void 0 : mediaQuery.matches);
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
  };
  watchEffect(update);
  tryOnScopeDispose$1(() => cleanup());
  return matches;
}
function useWindowScroll({ window: window2 = defaultWindow$1 } = {}) {
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const x = ref(window2.scrollX);
  const y = ref(window2.scrollY);
  useEventListener$1(
    window2,
    "scroll",
    () => {
      x.value = window2.scrollX;
      y.value = window2.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x, y };
}
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeoutId = setTimeout(fn, delay);
    }
  };
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink$1(url) {
  if (isExternal(url)) {
    return url.replace(PATHNAME_PROTOCOL_RE, "");
  }
  const { site } = useData();
  const { pathname, search, hash } = new URL(url, "http://example.com");
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
function getSidebar(sidebar, path) {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }
  if (sidebar == null) {
    return [];
  }
  path = ensureStartingSlash(path);
  const dir = Object.keys(sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  return dir ? sidebar[dir] : [];
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index2 in sidebar) {
    const item = sidebar[index2];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({ text: item.text, link: item.link });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function useSidebar() {
  const route = useRoute();
  const { theme: theme2, frontmatter } = useData();
  const is960 = useMediaQuery$1("(min-width: 960px)");
  const isOpen = ref(false);
  const sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = route.data.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme2.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = computed(() => {
    return isActive(page.value.relativePath, item.value.link);
  });
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
const _sfc_main$1z = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-bab92dc2></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-bab92dc2> Skip to content </a><!--]-->`);
    };
  }
});
const VPSkipLink_vue_vue_type_style_index_0_scoped_bab92dc2_lang = "";
const _sfc_setup$1z = _sfc_main$1z.setup;
_sfc_main$1z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$1z ? _sfc_setup$1z(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$1z, [["__scopeId", "data-v-bab92dc2"]]);
const _sfc_main$1y = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-8ca3e0f5></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPBackdrop_vue_vue_type_style_index_0_scoped_8ca3e0f5_lang = "";
const _sfc_setup$1y = _sfc_main$1y.setup;
_sfc_main$1y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$1y ? _sfc_setup$1y(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$1y, [["__scopeId", "data-v-8ca3e0f5"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
function useLangs({ removeCurrent = true, correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2 } = useData();
  const currentLang = computed(() => {
    var _a2, _b;
    return {
      label: (_a2 = site.value.locales[localeIndex.value]) == null ? void 0 : _a2.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => removeCurrent && currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls)
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link2, addPath, path, addExt) {
  return addPath ? link2.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)?index.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link2;
}
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$1x = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (_ctx.image) {
        _push(`<!--[-->`);
        if (typeof _ctx.image === "string" || "src" in _ctx.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({ class: "VPImage" }, typeof _ctx.image === "string" ? _ctx.$attrs : { ..._ctx.image, ..._ctx.$attrs }, {
            src: unref(withBase)(typeof _ctx.image === "string" ? _ctx.image : _ctx.image.src),
            alt: _ctx.alt ?? (typeof _ctx.image === "string" ? "" : _ctx.image.alt || "")
          }))} data-v-109e8427>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: _ctx.image.dark,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: _ctx.image.light,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPImage_vue_vue_type_style_index_0_scoped_109e8427_lang = "";
const _sfc_setup$1x = _sfc_main$1x.setup;
_sfc_main$1x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$1x ? _sfc_setup$1x(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$1x, [["__scopeId", "data-v-109e8427"]]);
const _sfc_main$1w = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-ed16efa4><a class="title"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(currentLang).link))} data-v-ed16efa4>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      if (unref(theme2).logo) {
        _push(ssrRenderComponent(VPImage, {
          class: "logo",
          image: unref(theme2).logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(theme2).siteTitle) {
        _push(`<!--[-->${ssrInterpolate(unref(theme2).siteTitle)}<!--]-->`);
      } else if (unref(theme2).siteTitle === void 0) {
        _push(`<!--[-->${ssrInterpolate(unref(site).title)}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});
const VPNavBarTitle_vue_vue_type_style_index_0_scoped_ed16efa4_lang = "";
const _sfc_setup$1w = _sfc_main$1w.setup;
_sfc_main$1w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$1w ? _sfc_setup$1w(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$1w, [["__scopeId", "data-v-ed16efa4"]]);
const style = "";
const _sfc_main$1v = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  __ssrInlineRender: true,
  props: {
    placeholder: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": "Search"
      }, _attrs))}><span class="DocSearch-Button-Container"><svg class="DocSearch-Search-Icon" width="20" height="20" viewBox="0 0 20 20" aria-label="search icon"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${ssrInterpolate(_ctx.placeholder)}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`);
    };
  }
});
const VPNavBarSearchButton_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1v = _sfc_main$1v.setup;
_sfc_main$1v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue");
  return _sfc_setup$1v ? _sfc_setup$1v(props, ctx) : void 0;
};
const _sfc_main$1u = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPLocalSearchBox = () => null;
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2, localeIndex } = useData();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    const buttonText = computed(() => {
      var _a2, _b, _c, _d, _e2, _f, _g;
      const options = ((_a2 = theme2.value.search) == null ? void 0 : _a2.options) ?? theme2.value.algolia;
      return ((_e2 = (_d = (_c = (_b = options == null ? void 0 : options.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c.translations) == null ? void 0 : _d.button) == null ? void 0 : _e2.buttonText) || ((_g = (_f = options == null ? void 0 : options.translations) == null ? void 0 : _f.button) == null ? void 0 : _g.buttonText) || "Search";
    });
    onMounted(() => {
      {
        return;
      }
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    const showSearch = ref(false);
    const metaKey = ref(`'Meta'`);
    onMounted(() => {
      metaKey.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? `'⌘'` : `'Ctrl'`;
    });
    const provider = "";
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPNavBarSearch",
        style: { "--vp-meta-key": metaKey.value }
      }, _attrs))}>`);
      if (unref(provider) === "local") {
        _push(`<!--[-->`);
        if (showSearch.value) {
          _push(ssrRenderComponent(unref(VPLocalSearchBox), {
            placeholder: buttonText.value,
            onClose: ($event) => showSearch.value = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div id="local-search">`);
        _push(ssrRenderComponent(_sfc_main$1v, {
          placeholder: buttonText.value,
          onClick: ($event) => showSearch.value = true
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else if (unref(provider) === "algolia") {
        _push(`<!--[-->`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), {
            algolia: ((_a2 = unref(theme2).search) == null ? void 0 : _a2.options) ?? unref(theme2).algolia,
            onVnodeBeforeMount: ($event) => actuallyLoaded.value = true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!actuallyLoaded.value) {
          _push(`<div id="docsearch">`);
          _push(ssrRenderComponent(_sfc_main$1v, {
            placeholder: buttonText.value,
            onClick: load
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const VPNavBarSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1u = _sfc_main$1u.setup;
_sfc_main$1u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$1u ? _sfc_setup$1u(props, ctx) : void 0;
};
const _sfc_main$1t = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px"
  }, _attrs))}><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path></svg>`);
}
const _sfc_setup$1t = _sfc_main$1t.setup;
_sfc_main$1t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconExternalLink.vue");
  return _sfc_setup$1t ? _sfc_setup$1t(props, ctx) : void 0;
};
const VPIconExternalLink = /* @__PURE__ */ _export_sfc(_sfc_main$1t, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$1s = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? props.href ? "a" : "span");
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        class: ["VPLink", { link: _ctx.href }],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: _ctx.target || (isExternal2.value ? "_blank" : void 0),
        rel: _ctx.rel || (isExternal2.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (isExternal2.value && !_ctx.noIcon) {
              _push2(ssrRenderComponent(VPIconExternalLink, { class: "icon" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
              isExternal2.value && !_ctx.noIcon ? (openBlock(), createBlock(VPIconExternalLink, {
                key: 0,
                class: "icon"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const VPLink_vue_vue_type_style_index_0_scoped_6fdf1ea4_lang = "";
const _sfc_setup$1s = _sfc_main$1s.setup;
_sfc_main$1s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$1s ? _sfc_setup$1s(props, ctx) : void 0;
};
const VPLink = /* @__PURE__ */ _export_sfc(_sfc_main$1s, [["__scopeId", "data-v-6fdf1ea4"]]);
const _sfc_main$1r = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        tabindex: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_7222e606_lang = "";
const _sfc_setup$1r = _sfc_main$1r.setup;
_sfc_main$1r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$1r ? _sfc_setup$1r(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$1r, [["__scopeId", "data-v-7222e606"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a2, _b, _c;
      if (el === options.el.value || ((_a2 = options.el.value) == null ? void 0 : _a2.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$1q = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>`);
}
const _sfc_setup$1q = _sfc_main$1q.setup;
_sfc_main$1q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronDown.vue");
  return _sfc_setup$1q ? _sfc_setup$1q(props, ctx) : void 0;
};
const VPIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$1q, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$1p = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="5" cy="12" r="2"></circle></svg>`);
}
const _sfc_setup$1p = _sfc_main$1p.setup;
_sfc_main$1p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoreHorizontal.vue");
  return _sfc_setup$1p ? _sfc_setup$1p(props, ctx) : void 0;
};
const VPIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$1p, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$1o = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-bbe0343c>`);
      _push(ssrRenderComponent(VPLink, {
        class: { active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch || _ctx.item.link, !!_ctx.item.activeMatch) },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const VPMenuLink_vue_vue_type_style_index_0_scoped_bbe0343c_lang = "";
const _sfc_setup$1o = _sfc_main$1o.setup;
_sfc_main$1o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$1o ? _sfc_setup$1o(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$1o, [["__scopeId", "data-v-bbe0343c"]]);
const _sfc_main$1n = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-44629626>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-44629626>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPMenuGroup_vue_vue_type_style_index_0_scoped_44629626_lang = "";
const _sfc_setup$1n = _sfc_main$1n.setup;
_sfc_main$1n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$1n ? _sfc_setup$1n(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1n, [["__scopeId", "data-v-44629626"]]);
const _sfc_main$1m = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenu" }, _attrs))} data-v-b3c92b68>`);
      if (_ctx.items) {
        _push(`<div class="items" data-v-b3c92b68><!--[-->`);
        ssrRenderList(_ctx.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPMenu_vue_vue_type_style_index_0_scoped_b3c92b68_lang = "";
const _sfc_setup$1m = _sfc_main$1m.setup;
_sfc_main$1m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$1m ? _sfc_setup$1m(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1m, [["__scopeId", "data-v-b3c92b68"]]);
const _sfc_main$1l = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-629cfc4e><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", _ctx.label)} data-v-629cfc4e>`);
      if (_ctx.button || _ctx.icon) {
        _push(`<span class="text" data-v-629cfc4e>`);
        if (_ctx.icon) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.icon), { class: "option-icon" }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(_ctx.button)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "text-icon" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(ssrRenderComponent(VPIconMoreHorizontal, { class: "icon" }, null, _parent));
      }
      _push(`</button><div class="menu" data-v-629cfc4e>`);
      _push(ssrRenderComponent(VPMenu, { items: _ctx.items }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const VPFlyout_vue_vue_type_style_index_0_scoped_629cfc4e_lang = "";
const _sfc_setup$1l = _sfc_main$1l.setup;
_sfc_main$1l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$1l ? _sfc_setup$1l(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["__scopeId", "data-v-629cfc4e"]]);
const _sfc_main$1k = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch,
            !!_ctx.item.activeMatch
          )
        },
        button: _ctx.item.text,
        items: _ctx.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
const _sfc_main$1j = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-7885e82a><span id="main-nav-aria-label" class="visually-hidden" data-v-7885e82a>Main Navigation</span><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(_sfc_main$1k, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarMenu_vue_vue_type_style_index_0_scoped_7885e82a_lang = "";
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["__scopeId", "data-v-7885e82a"]]);
const _sfc_main$1i = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>`);
}
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconLanguages.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const VPIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$1h = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: VPIconLanguages,
          label: unref(theme2).langMenuLabel || "Change language"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-df784c18${_scopeId}><p class="title" data-v-df784c18${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
              ssrRenderList(unref(localeLinks), (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "items" }, [
                  createVNode("p", { class: "title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarTranslations_vue_vue_type_style_index_0_scoped_df784c18_lang = "";
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["__scopeId", "data-v-df784c18"]]);
const VPSwitch_vue_vue_type_style_index_0_scoped_5dd03658_lang = "";
const _sfc_main$1g = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-5dd03658><span class="check" data-v-5dd03658>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-5dd03658>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-5dd03658"]]);
const _sfc_main$1f = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>`);
}
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconSun.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const VPIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$1e = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>`);
}
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const VPIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$1d = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, isDark } = useData();
    const checked = ref(false);
    const toggle = inBrowser ? useAppearance() : () => {
    };
    onMounted(() => {
      checked.value = document.documentElement.classList.contains("dark");
    });
    function useAppearance() {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      const classList = document.documentElement.classList;
      let userPreference = localStorage.getItem(APPEARANCE_KEY);
      let isDark2 = site.value.appearance === "dark" && userPreference == null || (userPreference === "auto" || userPreference == null ? query.matches : userPreference === "dark");
      query.onchange = (e) => {
        if (userPreference === "auto") {
          setClass(isDark2 = e.matches);
        }
      };
      function toggle2() {
        setClass(isDark2 = !isDark2);
        userPreference = isDark2 ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto";
        localStorage.setItem(APPEARANCE_KEY, userPreference);
      }
      function setClass(dark) {
        const css = document.createElement("style");
        css.type = "text/css";
        css.appendChild(
          document.createTextNode(
            `:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`
          )
        );
        document.head.appendChild(css);
        checked.value = dark;
        classList[dark ? "add" : "remove"]("dark");
        window.getComputedStyle(css).opacity;
        document.head.removeChild(css);
      }
      return toggle2;
    }
    watch(checked, (newIsDark) => {
      isDark.value = newIsDark;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPSwitch, mergeProps({
        title: "toggle dark mode",
        class: "VPSwitchAppearance",
        "aria-checked": checked.value,
        onClick: unref(toggle)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VPIconSun, { class: "sun" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VPIconMoon, { class: "moon" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VPIconSun, { class: "sun" }),
              createVNode(VPIconMoon, { class: "moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPSwitchAppearance_vue_vue_type_style_index_0_scoped_8fdd5eb0_lang = "";
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["__scopeId", "data-v-8fdd5eb0"]]);
const _sfc_main$1c = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-667defe9>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarAppearance_vue_vue_type_style_index_0_scoped_667defe9_lang = "";
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__scopeId", "data-v-667defe9"]]);
const icons = {
  discord: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  facebook: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  instagram: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
  linkedin: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  mastodon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
  slack: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
  twitter: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
  youtube: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
};
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props;
    const svg = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return icons[props.icon];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "VPSocialLink",
        href: _ctx.link,
        "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon === "string" ? _ctx.icon : ""),
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-019e80c6>${svg.value}</a>`);
    };
  }
});
const VPSocialLink_vue_vue_type_style_index_0_scoped_019e80c6_lang = "";
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["__scopeId", "data-v-019e80c6"]]);
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-1423aacf><!--[-->`);
      ssrRenderList(_ctx.links, ({ link: link2, icon, ariaLabel }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon,
          link: link2,
          ariaLabel
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPSocialLinks_vue_vue_type_style_index_0_scoped_1423aacf_lang = "";
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-1423aacf"]]);
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_c607adfa_lang = "";
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__scopeId", "data-v-c607adfa"]]);
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (hasExtraContent.value) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(localeLinks).length && unref(currentLang).label) {
                _push2(`<div class="group translations" data-v-c4899256${_scopeId}><p class="trans-title" data-v-c4899256${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
                ssrRenderList(unref(localeLinks), (locale) => {
                  _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(site).appearance) {
                _push2(`<div class="group" data-v-c4899256${_scopeId}><div class="item appearance" data-v-c4899256${_scopeId}><p class="label" data-v-c4899256${_scopeId}>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p><div class="appearance-action" data-v-c4899256${_scopeId}>`);
                _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(theme2).socialLinks) {
                _push2(`<div class="group" data-v-c4899256${_scopeId}><div class="item social-links" data-v-c4899256${_scopeId}>`);
                _push2(ssrRenderComponent(VPSocialLinks, {
                  class: "social-links-list",
                  links: unref(theme2).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "group translations"
                }, [
                  createVNode("p", { class: "trans-title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])) : createCommentVNode("", true),
                unref(site).appearance ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "group"
                }, [
                  createVNode("div", { class: "item appearance" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
                    createVNode("div", { class: "appearance-action" }, [
                      createVNode(VPSwitchAppearance)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                unref(theme2).socialLinks ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "group"
                }, [
                  createVNode("div", { class: "item social-links" }, [
                    createVNode(VPSocialLinks, {
                      class: "social-links-list",
                      links: unref(theme2).socialLinks
                    }, null, 8, ["links"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarExtra_vue_vue_type_style_index_0_scoped_c4899256_lang = "";
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["__scopeId", "data-v-c4899256"]]);
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: _ctx.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-acdd287e><span class="container" data-v-acdd287e><span class="top" data-v-acdd287e></span><span class="middle" data-v-acdd287e></span><span class="bottom" data-v-acdd287e></span></span></button>`);
    };
  }
});
const VPNavBarHamburger_vue_vue_type_style_index_0_scoped_acdd287e_lang = "";
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["__scopeId", "data-v-acdd287e"]]);
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const classes = computed(() => ({
      "has-sidebar": hasSidebar.value,
      fill: y.value > 0
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", classes.value]
      }, _attrs))} data-v-0f486eb2><div class="container" data-v-0f486eb2><div class="title" data-v-0f486eb2>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><div class="content" data-v-0f486eb2><div class="curtain" data-v-0f486eb2></div><div class="content-body" data-v-0f486eb2>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1u, { class: "search" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: _ctx.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const VPNavBar_vue_vue_type_style_index_0_scoped_0f486eb2_lang = "";
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["__scopeId", "data-v-0f486eb2"]]);
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPosition = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove2(el) {
  return locks.some(function(lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault2(rawEvent) {
  var e = rawEvent || window.event;
  if (allowTouchMove(e.target)) {
    return true;
  }
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden2(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + "px";
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
var restoreOverflowSetting = function restoreOverflowSetting2() {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
var setPositionFixed = function setPositionFixed2() {
  return window.requestAnimationFrame(function() {
    if (previousBodyPosition === void 0) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };
      var _window = window, scrollY = _window.scrollY, scrollX = _window.scrollX, innerHeight = _window.innerHeight;
      document.body.style.position = "fixed";
      document.body.style.top = -scrollY;
      document.body.style.left = -scrollX;
      setTimeout(function() {
        return window.requestAnimationFrame(function() {
          var bottomBarHeight = innerHeight - window.innerHeight;
          if (bottomBarHeight && scrollY >= innerHeight) {
            document.body.style.top = -(scrollY + bottomBarHeight);
          }
        });
      }, 300);
    }
  });
};
var restorePositionSetting = function restorePositionSetting2() {
  if (previousBodyPosition !== void 0) {
    var y = -parseInt(document.body.style.top, 10);
    var x = -parseInt(document.body.style.left, 10);
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;
    window.scrollTo(x, y);
    previousBodyPosition = void 0;
  }
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll2(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }
  if (isIosDevice) {
    targetElement.ontouchstart = function(event) {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function(event) {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = true;
    }
  }
};
var clearAllBodyScrollLocks = function clearAllBodyScrollLocks2() {
  if (isIosDevice) {
    locks.forEach(function(lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });
    if (documentListenerAdded) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
    initialClientY = -1;
  }
  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }
  locks = [];
};
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: "VPNavScreenMenuLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_04f685e2_lang = "";
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-04f685e2"]]);
const _sfc_main$14 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path></svg>`);
}
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconPlus.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const VPIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_4842d038_lang = "";
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-4842d038"]]);
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-8bb3a869>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-8bb3a869>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_8bb3a869_lang = "";
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-8bb3a869"]]);
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-fbc8c184><button class="button"${ssrRenderAttr("aria-controls", groupId.value)}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-fbc8c184><span class="button-text" data-v-fbc8c184>${ssrInterpolate(_ctx.text)}</span>`);
      _push(ssrRenderComponent(VPIconPlus, { class: "button-icon" }, null, _parent));
      _push(`</button><div${ssrRenderAttr("id", groupId.value)} class="items" data-v-fbc8c184><!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-fbc8c184>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, { item }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-fbc8c184>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_fbc8c184_lang = "";
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-fbc8c184"]]);
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-b0032a7d><p class="text" data-v-b0032a7d>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_b0032a7d_lang = "";
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-b0032a7d"]]);
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-dbef702c><button class="title" data-v-dbef702c>`);
        _push(ssrRenderComponent(VPIconLanguages, { class: "icon lang" }, null, _parent));
        _push(` ${ssrInterpolate(unref(currentLang).label)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "icon chevron" }, null, _parent));
        _push(`</button><ul class="list" data-v-dbef702c><!--[-->`);
        ssrRenderList(unref(localeLinks), (locale) => {
          _push(`<li class="item" data-v-dbef702c>`);
          _push(ssrRenderComponent(VPLink, {
            class: "link",
            href: locale.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(locale.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(locale.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenTranslations_vue_vue_type_style_index_0_scoped_dbef702c_lang = "";
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-dbef702c"]]);
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen
        }, _attrs))} data-v-b69fada5><div class="container" data-v-b69fada5>`);
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(_sfc_main$10, { class: "menu" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$Z, { class: "social-links" }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreen_vue_vue_type_style_index_0_scoped_b69fada5_lang = "";
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-b69fada5"]]);
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    provide("close-screen", closeScreen);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "VPNav" }, _attrs))} data-v-61c440af>`);
      _push(ssrRenderComponent(VPNavBar, {
        "is-screen-open": unref(isScreenOpen),
        onToggleScreen: unref(toggleScreen)
      }, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(VPNavScreen, { open: unref(isScreenOpen) }, {
        "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</header>`);
    };
  }
});
const VPNav_vue_vue_type_style_index_0_scoped_61c440af_lang = "";
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__scopeId", "data-v-61c440af"]]);
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery$1("(min-width: 960px)");
  const is1280 = useMediaQuery$1("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const PAGE_OFFSET = 71;
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (node.classList.contains("VPBadge") || node.classList.contains("header-anchor")) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  headers = headers.filter((h2) => h2.level >= high && h2.level <= low);
  const ret = [];
  outer:
    for (let i = 0; i < headers.length; i++) {
      const cur = headers[i];
      if (i === 0) {
        ret.push(cur);
      } else {
        for (let j = i - 1; j >= 0; j--) {
          const prev = headers[j];
          if (prev.level < cur.level) {
            (prev.children || (prev.children = [])).push(cur);
            continue outer;
          }
        }
        ret.push(cur);
      }
    }
  return ret;
}
function useActiveAnchor$1(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const links = [].slice.call(container.value.querySelectorAll(".outline-link"));
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => {
      return links.some((link2) => {
        return link2.hash === anchor.hash && anchor.offsetParent !== null;
      });
    });
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    if (anchors.length && isBottom) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        activateLink(hash);
        return;
      }
    }
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash !== null) {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 33 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - PAGE_OFFSET;
}
function isAnchorActive(index2, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index2 === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: _ctx.root ? "root" : "nested"
      }, _attrs))} data-v-43f5e1c1><!--[-->`);
      ssrRenderList(_ctx.headers, ({ children, link: link2, title }) => {
        _push(`<li data-v-43f5e1c1><a class="outline-link"${ssrRenderAttr("href", link2)}${ssrRenderAttr("title", title)} data-v-43f5e1c1>${ssrInterpolate(title)}</a>`);
        if (children == null ? void 0 : children.length) {
          _push(ssrRenderComponent(_component_VPDocOutlineItem, { headers: children }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const VPDocOutlineItem_vue_vue_type_style_index_0_scoped_43f5e1c1_lang = "";
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineItem.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-43f5e1c1"]]);
const _sfc_main$V = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"></path></svg>`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronRight.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPIconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  __ssrInlineRender: true,
  props: {
    headers: {}
  },
  setup(__props) {
    const { theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    ref();
    onContentUpdated(() => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPLocalNavOutlineDropdown",
        style: { "--vp-vh": vh.value + "px" }
      }, _attrs))} data-v-6b94c5dc>`);
      if (_ctx.headers.length > 0) {
        _push(`<button class="${ssrRenderClass({ open: open.value })}" data-v-6b94c5dc>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))} `);
        _push(ssrRenderComponent(VPIconChevronRight, { class: "icon" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<button data-v-6b94c5dc>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</button>`);
      }
      if (open.value) {
        _push(`<div class="items" data-v-6b94c5dc><a class="top-link" href="#" data-v-6b94c5dc>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</a>`);
        _push(ssrRenderComponent(VPDocOutlineItem, { headers: _ctx.headers }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const VPLocalNavOutlineDropdown_vue_vue_type_style_index_0_scoped_6b94c5dc_lang = "";
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPLocalNavOutlineDropdown.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-6b94c5dc"]]);
const _sfc_main$T = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path><path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path><path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path><path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path></svg>`);
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconAlignLeft.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const VPIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const { y } = useWindowScroll();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0 && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        fixed: empty.value,
        "reached-top": y.value >= 64
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(frontmatter).layout !== "home" && (!empty.value || unref(y) >= 64)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: classes.value }, _attrs))} data-v-3001ce39>`);
        if (unref(hasSidebar)) {
          _push(`<button class="menu"${ssrRenderAttr("aria-expanded", _ctx.open)} aria-controls="VPSidebarNav" data-v-3001ce39>`);
          _push(ssrRenderComponent(VPIconAlignLeft, { class: "menu-icon" }, null, _parent));
          _push(`<span class="menu-text" data-v-3001ce39>${ssrInterpolate(unref(theme2).sidebarMenuLabel || "Menu")}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPLocalNavOutlineDropdown, { headers: headers.value }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPLocalNav_vue_vue_type_style_index_0_scoped_3001ce39_lang = "";
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-3001ce39"]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(sectionTag.value), mergeProps({
        class: ["VPSidebarItem", classes.value]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.item.text) {
              _push2(`<div class="item"${ssrRenderAttr("role", itemRole.value)}${ssrRenderAttr("tabindex", _ctx.item.items && 0)} data-v-8ddd468c${_scopeId}><div class="indicator" data-v-8ddd468c${_scopeId}></div>`);
              if (_ctx.item.link) {
                _push2(ssrRenderComponent(VPLink, {
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent3, _scopeId2);
                    } else {
                      return [
                        (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                          class: "text",
                          innerHTML: _ctx.item.text
                        }, null, 8, ["innerHTML"]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent2, _scopeId);
              }
              if (_ctx.item.collapsed != null) {
                _push2(`<div class="caret" role="button" aria-label="toggle section" tabindex="0" data-v-8ddd468c${_scopeId}>`);
                _push2(ssrRenderComponent(VPIconChevronRight, { class: "caret-icon" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.item.items && _ctx.item.items.length) {
              _push2(`<div class="items" data-v-8ddd468c${_scopeId}>`);
              if (_ctx.depth < 5) {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.item.items, (i) => {
                  _push2(ssrRenderComponent(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.item.text ? (openBlock(), createBlock("div", mergeProps({
                key: 0,
                class: "item",
                role: itemRole.value
              }, toHandlers(_ctx.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {}, true), {
                tabindex: _ctx.item.items && 0
              }), [
                createVNode("div", { class: "indicator" }),
                _ctx.item.link ? (openBlock(), createBlock(VPLink, {
                  key: 0,
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                      class: "text",
                      innerHTML: _ctx.item.text
                    }, null, 8, ["innerHTML"]))
                  ]),
                  _: 1
                }, 8, ["tag", "href"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  key: 1,
                  class: "text",
                  innerHTML: _ctx.item.text
                }, null, 8, ["innerHTML"])),
                _ctx.item.collapsed != null ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "caret",
                  role: "button",
                  "aria-label": "toggle section",
                  onClick: onCaretClick,
                  onKeydown: withKeys(onCaretClick, ["enter"]),
                  tabindex: "0"
                }, [
                  createVNode(VPIconChevronRight, { class: "caret-icon" })
                ], 40, ["onKeydown"])) : createCommentVNode("", true)
              ], 16, ["role", "tabindex"])) : createCommentVNode("", true),
              _ctx.item.items && _ctx.item.items.length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "items"
              }, [
                _ctx.depth < 5 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.item.items, (i) => {
                  return openBlock(), createBlock(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, 8, ["item", "depth"]);
                }), 128)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPSidebarItem_vue_vue_type_style_index_0_scoped_8ddd468c_lang = "";
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPSidebarItem.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-8ddd468c"]]);
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { sidebarGroups, hasSidebar } = useSidebar();
    let navEl = ref(null);
    function lockBodyScroll() {
      disableBodyScroll(navEl.value, { reserveScrollBarGap: true });
    }
    function unlockBodyScroll() {
      clearAllBodyScrollLocks();
    }
    watchPostEffect(async () => {
      var _a2;
      if (props.open) {
        lockBodyScroll();
        (_a2 = navEl.value) == null ? void 0 : _a2.focus();
      } else {
        unlockBodyScroll();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", { open: _ctx.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-40dfef55><div class="curtain" data-v-40dfef55></div><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-40dfef55><span class="visually-hidden" id="sidebar-aria-label" data-v-40dfef55> Sidebar Navigation </span>`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push, _parent);
        _push(`<!--[-->`);
        ssrRenderList(unref(sidebarGroups), (item) => {
          _push(`<div class="group" data-v-40dfef55>`);
          _push(ssrRenderComponent(VPSidebarItem, {
            item,
            depth: 0
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push, _parent);
        _push(`</nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPSidebar_vue_vue_type_style_index_0_scoped_40dfef55_lang = "";
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-40dfef55"]]);
const _sfc_main$P = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPPage" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: {},
    size: {},
    theme: {},
    text: {},
    href: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      props.size ?? "medium",
      props.theme ?? "brand"
    ]);
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    const component = computed(() => {
      if (props.tag) {
        return props.tag;
      }
      return props.href ? "a" : "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
        class: ["VPButton", classes.value],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: isExternal2.value ? "_blank" : void 0,
        rel: isExternal2.value ? "noreferrer" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPButton_vue_vue_type_style_index_0_scoped_84beb485_lang = "";
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-84beb485"]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", { "has-image": _ctx.image || unref(heroImageSlotExists) }]
      }, _attrs))} data-v-a4affb2a><div class="container" data-v-a4affb2a><div class="main" data-v-a4affb2a>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, () => {
        if (_ctx.name) {
          _push(`<h1 class="name" data-v-a4affb2a><span class="clip" data-v-a4affb2a>${ssrInterpolate(_ctx.name)}</span></h1>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.text) {
          _push(`<p class="text" data-v-a4affb2a>${ssrInterpolate(_ctx.text)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.tagline) {
          _push(`<p class="tagline" data-v-a4affb2a>${ssrInterpolate(_ctx.tagline)}</p>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      if (_ctx.actions) {
        _push(`<div class="actions" data-v-a4affb2a><!--[-->`);
        ssrRenderList(_ctx.actions, (action) => {
          _push(`<div class="action" data-v-a4affb2a>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.image || unref(heroImageSlotExists)) {
        _push(`<div class="image" data-v-a4affb2a><div class="image-container" data-v-a4affb2a><div class="image-bg" data-v-a4affb2a></div>`);
        ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, () => {
          if (_ctx.image) {
            _push(ssrRenderComponent(VPImage, {
              class: "image-src",
              image: _ctx.image
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const VPHero_vue_vue_type_style_index_0_scoped_a4affb2a_lang = "";
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-a4affb2a"]]);
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), {
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info")
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const _sfc_main$L = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"></path></svg>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconArrowRight.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const VPIconArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: "VPFeature",
        href: _ctx.link,
        "no-icon": true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="box" data-v-48964c71${_scopeId}>`);
            if (typeof _ctx.icon === "object") {
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height,
                width: _ctx.icon.width
              }, null, _parent2, _scopeId));
            } else if (_ctx.icon) {
              _push2(`<div class="icon" data-v-48964c71${_scopeId}>${_ctx.icon}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="title" data-v-48964c71${_scopeId}>${_ctx.title}</h2>`);
            if (_ctx.details) {
              _push2(`<p class="details" data-v-48964c71${_scopeId}>${_ctx.details}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.linkText) {
              _push2(`<div class="link-text" data-v-48964c71${_scopeId}><p class="link-text-value" data-v-48964c71${_scopeId}>${ssrInterpolate(_ctx.linkText)} `);
              _push2(ssrRenderComponent(VPIconArrowRight, { class: "link-text-icon" }, null, _parent2, _scopeId));
              _push2(`</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", { class: "box" }, [
                typeof _ctx.icon === "object" ? (openBlock(), createBlock(VPImage, {
                  key: 0,
                  image: _ctx.icon,
                  alt: _ctx.icon.alt,
                  height: _ctx.icon.height,
                  width: _ctx.icon.width
                }, null, 8, ["image", "alt", "height", "width"])) : _ctx.icon ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "icon",
                  innerHTML: _ctx.icon
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode("h2", {
                  class: "title",
                  innerHTML: _ctx.title
                }, null, 8, ["innerHTML"]),
                _ctx.details ? (openBlock(), createBlock("p", {
                  key: 2,
                  class: "details",
                  innerHTML: _ctx.details
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                _ctx.linkText ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "link-text"
                }, [
                  createVNode("p", { class: "link-text-value" }, [
                    createTextVNode(toDisplayString(_ctx.linkText) + " ", 1),
                    createVNode(VPIconArrowRight, { class: "link-text-icon" })
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPFeature_vue_vue_type_style_index_0_scoped_48964c71_lang = "";
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-48964c71"]]);
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPFeatures" }, _attrs))} data-v-1371444c><div class="container" data-v-1371444c><div class="items" data-v-1371444c><!--[-->`);
        ssrRenderList(_ctx.features, (feature) => {
          _push(`<div class="${ssrRenderClass([[grid.value], "item"])}" data-v-1371444c>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details,
            link: feature.link,
            "link-text": feature.linkText
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFeatures_vue_vue_type_style_index_0_scoped_1371444c_lang = "";
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-1371444c"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPHome" }, _attrs))} data-v-663cec26>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$M, null, {
        "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
            ];
          }
        }),
        "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$I, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const VPHome_vue_vue_type_style_index_0_scoped_663cec26_lang = "";
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-663cec26"]]);
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(
        frontmatter.value.outline ?? theme2.value.outline
      );
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor$1(container, marker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }],
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-cd16eb18><div class="content" data-v-cd16eb18><div class="outline-marker" data-v-cd16eb18></div><div class="outline-title" data-v-cd16eb18>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</div><nav aria-labelledby="doc-outline-aria-label" data-v-cd16eb18><span class="visually-hidden" id="doc-outline-aria-label" data-v-cd16eb18> Table of Contents for current page </span>`);
      _push(ssrRenderComponent(VPDocOutlineItem, {
        headers: headers.value,
        root: true
      }, null, _parent));
      _push(`</nav></div></div>`);
    };
  }
});
const VPDocAsideOutline_vue_vue_type_style_index_0_scoped_cd16eb18_lang = "";
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-cd16eb18"]]);
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), { "carbon-ads": _ctx.carbonAds }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAside" }, _attrs))} data-v-5d395af7>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-5d395af7></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme2).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$F, {
          "carbon-ads": unref(theme2).carbonAds
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDocAside_vue_vue_type_style_index_0_scoped_5d395af7_lang = "";
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-5d395af7"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern: pattern2 = "" } = theme2.value.editLink || {};
    let url;
    if (typeof pattern2 === "function") {
      url = pattern2(page.value);
    } else {
      url = pattern2.replace(/:path/g, page.value.filePath);
    }
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a2, _b, _c, _d, _e2, _f;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const candidates = getFlatSideBarLinks(sidebar);
    const index2 = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    const hidePrev = ((_a2 = theme2.value.docFooter) == null ? void 0 : _a2.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index2 - 1]) == null ? void 0 : _c.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_d = candidates[index2 - 1]) == null ? void 0 : _d.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_e2 = candidates[index2 + 1]) == null ? void 0 : _e2.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_f = candidates[index2 + 1]) == null ? void 0 : _f.link)
      }
    };
  });
}
const _sfc_main$D = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"></path><path d="M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"></path></svg>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconEdit.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VPIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, lang } = useData();
    const date = computed(() => new Date(page.value.lastUpdated));
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        datetime.value = date.value.toLocaleString(lang.value);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-d4ac4f81>${ssrInterpolate(unref(theme2).lastUpdatedText || "Last updated")}: <time${ssrRenderAttr("datetime", isoDatetime.value)} data-v-d4ac4f81>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const VPDocFooterLastUpdated_vue_vue_type_style_index_0_scoped_d4ac4f81_lang = "";
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-d4ac4f81"]]);
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(() => {
      return theme2.value.editLink && frontmatter.value.editLink !== false;
    });
    const hasLastUpdated = computed(() => {
      return page.value.lastUpdated && frontmatter.value.lastUpdated !== false;
    });
    const showFooter = computed(() => {
      return hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e2, _f, _g;
      if (showFooter.value) {
        _push(`<footer${ssrRenderAttrs(mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-cadce847>`);
        ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
        if (hasEditLink.value || hasLastUpdated.value) {
          _push(`<div class="edit-info" data-v-cadce847>`);
          if (hasEditLink.value) {
            _push(`<div class="edit-link" data-v-cadce847>`);
            _push(ssrRenderComponent(VPLink, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VPIconEdit, {
                    class: "edit-link-icon",
                    "aria-label": "edit icon"
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(unref(editLink).text)}`);
                } else {
                  return [
                    createVNode(VPIconEdit, {
                      class: "edit-link-icon",
                      "aria-label": "edit icon"
                    }),
                    createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (hasLastUpdated.value) {
            _push(`<div class="last-updated" data-v-cadce847>`);
            _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_a2 = unref(control).prev) == null ? void 0 : _a2.link) || ((_b = unref(control).next) == null ? void 0 : _b.link)) {
          _push(`<div class="prev-next" data-v-cadce847><div class="pager" data-v-cadce847>`);
          if ((_c = unref(control).prev) == null ? void 0 : _c.link) {
            _push(`<a class="pager-link prev"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(control).prev.link))} data-v-cadce847><span class="desc" data-v-cadce847>${((_d = unref(theme2).docFooter) == null ? void 0 : _d.prev) || "Previous page"}</span><span class="title" data-v-cadce847>${unref(control).prev.text}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="${ssrRenderClass([{ "has-prev": (_e2 = unref(control).prev) == null ? void 0 : _e2.link }, "pager"])}" data-v-cadce847>`);
          if ((_f = unref(control).next) == null ? void 0 : _f.link) {
            _push(`<a class="pager-link next"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(control).next.link))} data-v-cadce847><span class="desc" data-v-cadce847>${((_g = unref(theme2).docFooter) == null ? void 0 : _g.next) || "Next page"}</span><span class="title" data-v-cadce847>${unref(control).next.text}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPDocFooter_vue_vue_type_style_index_0_scoped_cadce847_lang = "";
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-cadce847"]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const open = ref(false);
    onContentUpdated(() => {
      open.value = false;
    });
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(
        frontmatter.value.outline ?? theme2.value.outline
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (headers.value.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocOutlineDropdown" }, _attrs))} data-v-f91b6438><button class="${ssrRenderClass({ open: open.value })}" data-v-f91b6438>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))} `);
        _push(ssrRenderComponent(VPIconChevronRight, { class: "icon" }, null, _parent));
        _push(`</button>`);
        if (open.value) {
          _push(`<div class="items" data-v-f91b6438>`);
          _push(ssrRenderComponent(VPDocOutlineItem, { headers: headers.value }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPDocOutlineDropdown_vue_vue_type_style_index_0_scoped_f91b6438_lang = "";
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineDropdown.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPDocOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-f91b6438"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }]
      }, _attrs))} data-v-2ba08391>`);
      ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push, _parent);
      _push(`<div class="container" data-v-2ba08391>`);
      if (unref(hasAside)) {
        _push(`<div class="${ssrRenderClass([{ "left-aside": unref(leftAside) }, "aside"])}" data-v-2ba08391><div class="aside-curtain" data-v-2ba08391></div><div class="aside-container" data-v-2ba08391><div class="aside-content" data-v-2ba08391>`);
        _push(ssrRenderComponent(VPDocAside, null, {
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-2ba08391><div class="content-container" data-v-2ba08391>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocOutlineDropdown, null, null, _parent));
      _push(`<main class="main" data-v-2ba08391>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", pageName.value]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(VPDocFooter, null, {
        "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDoc_vue_vue_type_style_index_0_scoped_2ba08391_lang = "";
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-2ba08391"]]);
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    const { localeLinks } = useLangs({ removeCurrent: false });
    const root = ref("/");
    onMounted(() => {
      var _a2;
      const path = window.location.pathname.replace(site.value.base, "").replace(/(^.*?\/).*$/, "/$1");
      if (localeLinks.value.length) {
        root.value = ((_a2 = localeLinks.value.find(({ link: link2 }) => link2.startsWith(path))) == null ? void 0 : _a2.link) || localeLinks.value[0].link;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-2fb44dc2><p class="code" data-v-2fb44dc2>404</p><h1 class="title" data-v-2fb44dc2>PAGE NOT FOUND</h1><div class="divider" data-v-2fb44dc2></div><blockquote class="quote" data-v-2fb44dc2> But if you don&#39;t change your direction, and if you keep looking, you may end up where you are heading. </blockquote><div class="action" data-v-2fb44dc2><a class="link"${ssrRenderAttr("href", unref(withBase)(root.value))} aria-label="go to home" data-v-2fb44dc2> Take me home </a></div></div>`);
    };
  }
});
const NotFound_vue_vue_type_style_index_0_scoped_2fb44dc2_lang = "";
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-2fb44dc2"]]);
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-f500f210>`);
      if (unref(page).isNotFound) {
        ssrRenderSlot(_ctx.$slots, "not-found", {}, () => {
          _push(ssrRenderComponent(NotFound, null, null, _parent));
        }, _push, _parent);
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const VPContent_vue_vue_type_style_index_0_scoped_f500f210_lang = "";
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-f500f210"]]);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).footer) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", { "has-sidebar": unref(hasSidebar) }]
        }, _attrs))} data-v-8c572509><div class="container" data-v-8c572509>`);
        if (unref(theme2).footer.message) {
          _push(`<p class="message" data-v-8c572509>${unref(theme2).footer.message}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(theme2).footer.copyright) {
          _push(`<p class="copyright" data-v-8c572509>${unref(theme2).footer.copyright}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFooter_vue_vue_type_style_index_0_scoped_8c572509_lang = "";
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-8c572509"]]);
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    provide("close-sidebar", closeSidebar);
    provide("is-sidebar-open", isSidebarOpen);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      if (unref(frontmatter).layout !== false) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "Layout" }, _attrs))} data-v-04557aa4>`);
        ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
        _push(ssrRenderComponent(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPNav, null, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
              ];
            }
          }),
          "sidebar-nav-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPContent, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "not-found", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
              ];
            }
          }),
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPFooter, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_Content, _attrs, null, _parent));
      }
    };
  }
});
const Layout_vue_vue_type_style_index_0_scoped_04557aa4_lang = "";
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-04557aa4"]]);
const _sfc_main$u = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"></path></svg>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconHeart.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const VPIconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$2]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [props.size ?? "medium"]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: {},
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some((s) => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [
        { tier: props.tier, size: props.size, items: props.data }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [_ctx.mode ?? "normal"]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(sponsors.value, (sponsor, index2) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$t, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: {},
    actionText: {},
    actionLink: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-e6742545><div class="container" data-v-e6742545><div class="header" data-v-e6742545><div class="love" data-v-e6742545>`);
      _push(ssrRenderComponent(VPIconHeart, { class: "icon" }, null, _parent));
      _push(`</div>`);
      if (_ctx.message) {
        _push(`<h2 class="message" data-v-e6742545>${ssrInterpolate(_ctx.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-e6742545>`);
      _push(ssrRenderComponent(_sfc_main$s, { data: _ctx.data }, null, _parent));
      _push(`</div>`);
      if (_ctx.actionLink) {
        _push(`<div class="action" data-v-e6742545>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: _ctx.actionText ?? "Become a sponsor",
          href: _ctx.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const VPHomeSponsors_vue_vue_type_style_index_0_scoped_e6742545_lang = "";
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$s, {
        mode: "aside",
        tier: _ctx.tier,
        size: _ctx.size,
        data: _ctx.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPTeamPage_vue_vue_type_style_index_0_scoped_1abe6a9b_lang = "";
const _sfc_main$p = {};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const VPTeamPageTitle_vue_vue_type_style_index_0_scoped_696e07c3_lang = "";
const _sfc_main$o = {};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const VPTeamPageSection_vue_vue_type_style_index_0_scoped_0af373da_lang = "";
const _sfc_main$n = {};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: {},
    member: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [_ctx.size ?? "medium"]]
      }, _attrs))} data-v-db25e0aa><div class="profile" data-v-db25e0aa><figure class="avatar" data-v-db25e0aa><img class="avatar-img"${ssrRenderAttr("src", _ctx.member.avatar)}${ssrRenderAttr("alt", _ctx.member.name)} data-v-db25e0aa></figure><div class="data" data-v-db25e0aa><h1 class="name" data-v-db25e0aa>${ssrInterpolate(_ctx.member.name)}</h1>`);
      if (_ctx.member.title || _ctx.member.org) {
        _push(`<p class="affiliation" data-v-db25e0aa>`);
        if (_ctx.member.title) {
          _push(`<span class="title" data-v-db25e0aa>${ssrInterpolate(_ctx.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.title && _ctx.member.org) {
          _push(`<span class="at" data-v-db25e0aa> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.org) {
          _push(ssrRenderComponent(VPLink, {
            class: ["org", { link: _ctx.member.orgLink }],
            href: _ctx.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.member.org)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.desc) {
        _push(`<p class="desc" data-v-db25e0aa>${_ctx.member.desc}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.links) {
        _push(`<div class="links" data-v-db25e0aa>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: _ctx.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.member.sponsor) {
        _push(`<div class="sp" data-v-db25e0aa>`);
        _push(ssrRenderComponent(VPLink, {
          class: "sp-link",
          href: _ctx.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VPIconHeart, { class: "sp-icon" }, null, _parent2, _scopeId));
              _push2(` Sponsor `);
            } else {
              return [
                createVNode(VPIconHeart, { class: "sp-icon" }),
                createTextVNode(" Sponsor ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const VPTeamMembersItem_vue_vue_type_style_index_0_scoped_db25e0aa_lang = "";
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-db25e0aa"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: {},
    members: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      props.size ?? "medium",
      `count-${props.members.length}`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", classes.value]
      }, _attrs))} data-v-96fa9058><div class="container" data-v-96fa9058><!--[-->`);
      ssrRenderList(_ctx.members, (member) => {
        _push(`<div class="item" data-v-96fa9058>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: _ctx.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPTeamMembers_vue_vue_type_style_index_0_scoped_96fa9058_lang = "";
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+vitepress@1.0.0-beta.3_@algolia+client-search@4.18.0_sass@1.63.6_search-insights@2.6.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", VPBadge);
  }
};
function formatDate(d, fmt = "yyyy-MM-dd hh:mm:ss") {
  if (!(d instanceof Date)) {
    d = new Date(d);
  }
  const o = {
    "M+": d.getMonth() + 1,
    // 月份
    "d+": d.getDate(),
    // 日
    "h+": d.getHours(),
    // 小时
    "m+": d.getMinutes(),
    // 分
    "s+": d.getSeconds(),
    // 秒
    "q+": Math.floor((d.getMonth() + 3) / 3),
    // 季度
    S: d.getMilliseconds()
    // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      `${d.getFullYear()}`.substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      );
  }
  return fmt;
}
function isCurrentWeek(date, target) {
  const now = target || /* @__PURE__ */ new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const oneDay = 1e3 * 60 * 60 * 24;
  const nowWeek = today.getDay();
  const startWeek = today.getTime() - (nowWeek === 0 ? 6 : nowWeek - 1) * oneDay;
  return +date >= startWeek && +date <= startWeek + 7 * oneDay;
}
function formatShowDate(date) {
  const source = date ? +new Date(date) : +/* @__PURE__ */ new Date();
  const now = +/* @__PURE__ */ new Date();
  const diff = now - source;
  const oneSeconds = 1e3;
  const oneMinute = oneSeconds * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneWeek = oneDay * 7;
  if (diff < oneMinute) {
    return `${Math.floor(diff / oneSeconds)}秒前`;
  }
  if (diff < oneHour) {
    return `${Math.floor(diff / oneMinute)}分钟前`;
  }
  if (diff < oneDay) {
    return `${Math.floor(diff / oneHour)}小时前`;
  }
  if (diff < oneWeek) {
    return `${Math.floor(diff / oneDay)}天前`;
  }
  return formatDate(new Date(date), "yyyy-MM-dd");
}
const pattern = /[a-zA-Z0-9_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff\u0400-\u04ff]+|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
function countWord(data) {
  const m2 = data.match(pattern);
  let count = 0;
  if (!m2) {
    return 0;
  }
  for (let i = 0; i < m2.length; i += 1) {
    if (m2[i].charCodeAt(0) >= 19968) {
      count += m2[i].length;
    } else {
      count += 1;
    }
  }
  return count;
}
function chineseSearchOptimize(input) {
  return input.replace(/[\u4e00-\u9fa5]/g, " $& ").replace(/\s+/g, " ").trim();
}
function getGithubUpdateTime(url) {
  const match = url.match(/github.com\/(.+)/);
  if (!(match == null ? void 0 : match[1])) {
    return Promise.reject(new Error("Github地址格式错误"));
  }
  const [owner, repo] = match[1].split("/");
  return fetch(`https://api.github.com/repos/${owner}/${repo}`).then((res) => res.json()).then((res) => {
    return res.updated_at;
  });
}
function getGithubDirUpdateTime(owner, repo, dir, branch) {
  let baseUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;
  if (branch) {
    baseUrl += `/${branch}`;
  }
  if (dir) {
    baseUrl += `?path=${dir}`;
  }
  return fetch(baseUrl).then((res) => res.json()).then((res) => {
    return [res].flat()[0].commit.committer.date;
  });
}
function getImageUrl(image, isDarkMode) {
  if (typeof image === "string") {
    return image;
  }
  if ("src" in image) {
    return image.src;
  }
  if ("light" in image && "dark" in image) {
    return isDarkMode ? image.dark : image.light;
  }
  return "";
}
const configSymbol = Symbol("theme-config");
const activeTagSymbol = Symbol("active-tag");
const currentPageNum = Symbol("home-page-num");
const homeConfigSymbol = Symbol("home-config");
const userWorks = Symbol("user-works");
function withConfigProvider(App) {
  return defineComponent({
    name: "ConfigProvider",
    props: {
      handleChangeSlogan: {
        type: Function,
        required: false
      }
    },
    setup(props, { slots }) {
      var _a2;
      provide(homeConfigSymbol, props);
      const { theme: theme2 } = useData$1();
      const config = computed(() => resolveConfig(theme2.value));
      provide(configSymbol, config);
      provide(
        userWorks,
        ref(
          ((_a2 = config.value.blog) == null ? void 0 : _a2.works) || {
            title: "",
            description: "",
            list: []
          }
        )
      );
      const activeTag = ref({
        label: "",
        type: ""
      });
      provide(activeTagSymbol, activeTag);
      const pageNum = ref(1);
      provide(currentPageNum, pageNum);
      return () => h(App, null, slots);
    }
  });
}
function useConfig() {
  return {
    config: inject(configSymbol).value
  };
}
function useBlogConfig() {
  return inject(configSymbol).value.blog;
}
function useBlogThemeMode() {
  var _a2, _b;
  return ((_b = (_a2 = inject(configSymbol).value) == null ? void 0 : _a2.blog) == null ? void 0 : _b.blog) ?? true;
}
function useHomeConfig() {
  return inject(homeConfigSymbol);
}
function useGiscusConfig() {
  var _a2, _b;
  const blogConfig = useConfig();
  return (_b = (_a2 = blogConfig.config) == null ? void 0 : _a2.blog) == null ? void 0 : _b.comment;
}
function useArticles() {
  const blogConfig = useConfig();
  const articles = computed(() => {
    var _a2, _b;
    return ((_b = (_a2 = blogConfig.config) == null ? void 0 : _a2.blog) == null ? void 0 : _b.pagesData) || [];
  });
  return articles;
}
function useActiveTag() {
  return inject(activeTagSymbol);
}
function useCurrentPageNum() {
  return inject(currentPageNum);
}
function useCurrentArticle() {
  const blogConfig = useConfig();
  const route = useRoute();
  const docs = computed(() => {
    var _a2, _b;
    return (_b = (_a2 = blogConfig.config) == null ? void 0 : _a2.blog) == null ? void 0 : _b.pagesData;
  });
  const currentArticle = computed(() => {
    var _a2;
    const currentPath = route.path.replace(/.html$/, "");
    const okPaths = [currentPath, decodeURIComponent(currentPath)];
    if (currentPath.endsWith("/")) {
      okPaths.push(
        ...[`${currentPath}index`, `${decodeURIComponent(currentPath)}index`]
      );
    }
    return (_a2 = docs.value) == null ? void 0 : _a2.find((v) => okPaths.includes(withBase(v.route)));
  });
  return currentArticle;
}
function useUserWorks() {
  return inject(userWorks);
}
function resolveConfig(config) {
  var _a2;
  return {
    ...config,
    blog: {
      ...config == null ? void 0 : config.blog,
      pagesData: ((_a2 = config == null ? void 0 : config.blog) == null ? void 0 : _a2.pagesData) || []
    }
  };
}
function useActiveAnchor() {
  const el = ref(null);
  onMounted(() => {
    const { hash } = window.location;
    if (hash) {
      el.value = document.querySelector(decodeURIComponent(hash));
    }
  });
  return el;
}
function useAutoUpdateAnchor() {
  const currentAnchor = reactive({
    id: "",
    top: -1
  });
  const calculateCurrentAnchor = () => {
    const anchors = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for (let i = 0; i < anchors.length; i += 1) {
      const anchor = anchors[i];
      const rect = anchor.getBoundingClientRect();
      if (rect.top <= 100 && anchor.id !== currentAnchor.id) {
        currentAnchor.id = anchor.id;
        currentAnchor.top = rect.top;
      }
    }
  };
  const onScroll = () => {
    calculateCurrentAnchor();
  };
  onMounted(() => {
    window.addEventListener("scroll", onScroll);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  return currentAnchor;
}
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "BlogHomeOverview",
  __ssrInlineRender: true,
  setup(__props) {
    const docs = useArticles();
    const notHiddenArticles = computed(() => {
      return docs.value.filter((v) => !v.meta.hidden);
    });
    const nowMonth = (/* @__PURE__ */ new Date()).getMonth();
    const nowYear = (/* @__PURE__ */ new Date()).getFullYear();
    const currentMonth = computed(() => {
      return notHiddenArticles.value.filter((v) => {
        var _a2;
        const pubDate = new Date((_a2 = v.meta) == null ? void 0 : _a2.date);
        return (pubDate == null ? void 0 : pubDate.getMonth()) === nowMonth && pubDate.getFullYear() === nowYear;
      });
    });
    const currentWeek = computed(() => {
      return notHiddenArticles.value.filter((v) => {
        var _a2;
        const pubDate = new Date((_a2 = v.meta) == null ? void 0 : _a2.date);
        return isCurrentWeek(pubDate);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card overview-data" }, _attrs))} data-v-181f5d73><div class="overview-item" data-v-181f5d73><span class="count" data-v-181f5d73>${ssrInterpolate(notHiddenArticles.value.length)}</span><span class="label" data-v-181f5d73>博客文章</span></div><div class="split" data-v-181f5d73></div><div class="overview-item" data-v-181f5d73><span class="count" data-v-181f5d73>+${ssrInterpolate((_a2 = currentMonth.value) == null ? void 0 : _a2.length)}</span><span class="label" data-v-181f5d73>本月更新</span></div><div class="split" data-v-181f5d73></div><div class="overview-item" data-v-181f5d73><span class="count" data-v-181f5d73>+${ssrInterpolate((_b = currentWeek.value) == null ? void 0 : _b.length)}</span><span class="label" data-v-181f5d73>本周更新</span></div></div>`);
    };
  }
});
const BlogHomeOverview_vue_vue_type_style_index_0_scoped_181f5d73_lang = "";
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogHomeOverview.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const BlogHomeOverview = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-181f5d73"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "BlogHotArticle",
  __ssrInlineRender: true,
  setup(__props) {
    const { hotArticle } = useBlogConfig();
    const title = computed(() => (hotArticle == null ? void 0 : hotArticle.title) || "🔥 精选文章");
    const nextText = computed(() => (hotArticle == null ? void 0 : hotArticle.nextText) || "换一组");
    const pageSize = computed(() => (hotArticle == null ? void 0 : hotArticle.pageSize) || 9);
    const empty = computed(() => (hotArticle == null ? void 0 : hotArticle.empty) ?? "暂无精选内容");
    const docs = useArticles();
    const recommendList = computed(() => {
      const data = docs.value.filter((v) => v.meta.sticky);
      data.sort((a, b) => b.meta.sticky - a.meta.sticky);
      return [...data];
    });
    const currentPage = ref(1);
    const changePage = () => {
      const newIdx = currentPage.value % Math.ceil(recommendList.value.length / pageSize.value);
      currentPage.value = newIdx + 1;
    };
    const currentWikiData = computed(() => {
      const startIdx = (currentPage.value - 1) * pageSize.value;
      const endIdx = startIdx + pageSize.value;
      return recommendList.value.slice(startIdx, endIdx);
    });
    const showChangeBtn = computed(() => {
      return recommendList.value.length > pageSize.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (recommendList.value.length || empty.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "card recommend",
          "data-pagefind-ignore": "all"
        }, _attrs))} data-v-d9ef8722><div class="card-header" data-v-d9ef8722><span class="title" data-v-d9ef8722>${ssrInterpolate(title.value)}</span>`);
        if (showChangeBtn.value) {
          _push(ssrRenderComponent(unref(ElButton), {
            size: "small",
            type: "primary",
            text: "",
            onClick: changePage
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(nextText.value)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(nextText.value), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (currentWikiData.value.length) {
          _push(`<ol class="recommend-container" data-v-d9ef8722><!--[-->`);
          ssrRenderList(currentWikiData.value, (v, idx) => {
            _push(`<li data-v-d9ef8722><i class="num" data-v-d9ef8722>${ssrInterpolate(idx + 1)}</i><div class="des" data-v-d9ef8722>`);
            _push(ssrRenderComponent(unref(ElLink), {
              type: "info",
              class: "title",
              href: unref(withBase)(v.route)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(v.meta.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(v.meta.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<div class="suffix" data-v-d9ef8722><span class="tag" data-v-d9ef8722>${ssrInterpolate(unref(formatShowDate)(v.meta.date))}</span></div></div></li>`);
          });
          _push(`<!--]--></ol>`);
        } else {
          _push(`<div class="empty-text" data-v-d9ef8722>${ssrInterpolate(empty.value)}</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogHotArticle_vue_vue_type_style_index_0_scoped_d9ef8722_lang = "";
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogHotArticle.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const BlogHotArticle = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-d9ef8722"]]);
var _a;
const isClient = typeof window !== "undefined";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive2 = ref(true);
  function pause() {
    isActive2.value = false;
  }
  function resume() {
    isActive2.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive2.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive2), pause, resume, eventFilter };
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function resolveRef(r) {
  return typeof r === "function" ? computed(r) : ref(r);
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter = bypassFilter
  } = _a2, watchOptions = __objRest$5(_a2, [
    "eventFilter"
  ]);
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a2 = options, {
    eventFilter: filter
  } = _a2, watchOptions = __objRest$1(_a2, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive: isActive2 } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$2({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive: isActive2 };
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners2;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners2, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners2, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners2))
    listeners2 = [listeners2];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners2.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update);
    else
      mediaQuery.removeListener(update);
  };
  const update = () => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(resolveRef(query).value);
    matches.value = mediaQuery.matches;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
  };
  watchEffect(update);
  tryOnScopeDispose(() => cleanup());
  return matches;
}
function useBrowserLocation({ window: window2 = defaultWindow } = {}) {
  const buildState = (trigger) => {
    const { state: state2, length } = (window2 == null ? void 0 : window2.history) || {};
    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (window2 == null ? void 0 : window2.location) || {};
    return {
      trigger,
      state: state2,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };
  const state = ref(buildState("load"));
  if (window2) {
    useEventListener(window2, "popstate", () => state.value = buildState("popstate"), { passive: true });
    useEventListener(window2, "hashchange", () => state.value = buildState("hashchange"), { passive: true });
  }
  return state;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var __defProp$k = Object.defineProperty;
var __getOwnPropSymbols$m = Object.getOwnPropertySymbols;
var __hasOwnProp$m = Object.prototype.hasOwnProperty;
var __propIsEnum$m = Object.prototype.propertyIsEnumerable;
var __defNormalProp$k = (obj, key, value) => key in obj ? __defProp$k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$k = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$m.call(b, prop))
      __defNormalProp$k(a, prop, b[prop]);
  if (__getOwnPropSymbols$m)
    for (var prop of __getOwnPropSymbols$m(b)) {
      if (__propIsEnum$m.call(b, prop))
        __defNormalProp$k(a, prop, b[prop]);
    }
  return a;
};
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = resolveUnref(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
  if (window2 && listenToStorageChanges) {
    useEventListener(window2, "storage", update);
    useEventListener(window2, customStorageEventName, updateFromCustomEvent);
  }
  update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (isFunction(mergeDefaults))
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return __spreadValues$k(__spreadValues$k({}, rawInit), value);
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
var __defProp$j = Object.defineProperty;
var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
var __hasOwnProp$l = Object.prototype.hasOwnProperty;
var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$l.call(b, prop))
      __defNormalProp$j(a, prop, b[prop]);
  if (__getOwnPropSymbols$l)
    for (var prop of __getOwnPropSymbols$l(b)) {
      if (__propIsEnum$l.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    }
  return a;
};
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    initialValue = "auto",
    window: window2 = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto
  } = options;
  const modes = __spreadValues$j({
    auto: "",
    light: "light",
    dark: "dark"
  }, options.modes || {});
  const preferredDark = usePreferredDark({ window: window2 });
  const preferredMode = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? ref(initialValue) : useStorage(storageKey, initialValue, storage, { window: window2, listenToStorageChanges }));
  const state = computed({
    get() {
      return store.value === "auto" && !emitAuto ? preferredMode.value : store.value;
    },
    set(v) {
      store.value = v;
    }
  });
  const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector2, attribute2, value) => {
    const el = window2 == null ? void 0 : window2.document.querySelector(selector2);
    if (!el)
      return;
    if (attribute2 === "class") {
      const current = value.split(/\s/g);
      Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
        if (current.includes(v))
          el.classList.add(v);
        else
          el.classList.remove(v);
      });
    } else {
      el.setAttribute(attribute2, value);
    }
  });
  function defaultOnChanged(mode) {
    var _a2;
    const resolvedMode = mode === "auto" ? preferredMode.value : mode;
    updateHTMLAttrs(selector, attribute, (_a2 = modes[resolvedMode]) != null ? _a2 : resolvedMode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  watch(state, onChanged, { flush: "post", immediate: true });
  if (emitAuto)
    watch(preferredMode, () => onChanged(state.value), { flush: "post" });
  tryOnMounted(() => onChanged(state.value));
  return state;
}
var __defProp$i = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$k = Object.getOwnPropertySymbols;
var __hasOwnProp$k = Object.prototype.hasOwnProperty;
var __propIsEnum$k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$k.call(b, prop))
      __defNormalProp$i(a, prop, b[prop]);
  if (__getOwnPropSymbols$k)
    for (var prop of __getOwnPropSymbols$k(b)) {
      if (__propIsEnum$k.call(b, prop))
        __defNormalProp$i(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window: window2 = defaultWindow
  } = options;
  const mode = useColorMode(__spreadProps$7(__spreadValues$i({}, options), {
    onChanged: (mode2, defaultHandler) => {
      var _a2;
      if (options.onChanged)
        (_a2 = options.onChanged) == null ? void 0 : _a2.call(options, mode2 === "dark");
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  }));
  const preferredDark = usePreferredDark({ window: window2 });
  const isDark = computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      if (v === preferredDark.value)
        mode.value = "auto";
      else
        mode.value = v ? "dark" : "light";
    }
  });
  return isDark;
}
function useElementVisibility(element, { window: window2 = defaultWindow, scrollTarget } = {}) {
  const elementIsVisible = ref(false);
  const testBounding = () => {
    if (!window2)
      return;
    const document2 = window2.document;
    const el = unrefElement(element);
    if (!el) {
      elementIsVisible.value = false;
    } else {
      const rect = el.getBoundingClientRect();
      elementIsVisible.value = rect.top <= (window2.innerHeight || document2.documentElement.clientHeight) && rect.left <= (window2.innerWidth || document2.documentElement.clientWidth) && rect.bottom >= 0 && rect.right >= 0;
    }
  };
  watch(() => unrefElement(element), () => testBounding(), { immediate: true, flush: "post" });
  if (window2) {
    useEventListener(scrollTarget || window2, "scroll", testBounding, {
      capture: false,
      passive: true
    });
  }
  return elementIsVisible;
}
const DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = noop
  } = options;
  const current = reactive(/* @__PURE__ */ new Set());
  const obj = {
    toJSON() {
      return {};
    },
    current
  };
  const refs = useReactive ? reactive(obj) : obj;
  const metaDeps = /* @__PURE__ */ new Set();
  const usedKeys = /* @__PURE__ */ new Set();
  function setRefs(key, value) {
    if (key in refs) {
      if (useReactive)
        refs[key] = value;
      else
        refs[key].value = value;
    }
  }
  function reset() {
    current.clear();
    for (const key of usedKeys)
      setRefs(key, false);
  }
  function updateRefs(e, value) {
    var _a2, _b;
    const key = (_a2 = e.key) == null ? void 0 : _a2.toLowerCase();
    const code = (_b = e.code) == null ? void 0 : _b.toLowerCase();
    const values = [code, key].filter(Boolean);
    if (key) {
      if (value)
        current.add(key);
      else
        current.delete(key);
    }
    for (const key2 of values) {
      usedKeys.add(key2);
      setRefs(key2, value);
    }
    if (key === "meta" && !value) {
      metaDeps.forEach((key2) => {
        current.delete(key2);
        setRefs(key2, false);
      });
      metaDeps.clear();
    } else if (typeof e.getModifierState === "function" && e.getModifierState("Meta") && value) {
      [...current, ...values].forEach((key2) => metaDeps.add(key2));
    }
  }
  useEventListener(target, "keydown", (e) => {
    updateRefs(e, true);
    return onEventFired(e);
  }, { passive });
  useEventListener(target, "keyup", (e) => {
    updateRefs(e, false);
    return onEventFired(e);
  }, { passive });
  useEventListener("blur", reset, { passive: true });
  useEventListener("focus", reset, { passive: true });
  const proxy = new Proxy(refs, {
    get(target2, prop, rec) {
      if (typeof prop !== "string")
        return Reflect.get(target2, prop, rec);
      prop = prop.toLowerCase();
      if (prop in aliasMap)
        prop = aliasMap[prop];
      if (!(prop in refs)) {
        if (/[+_-]/.test(prop)) {
          const keys = prop.split(/[+_-]/g).map((i) => i.trim());
          refs[prop] = computed(() => keys.every((key) => unref(proxy[key])));
        } else {
          refs[prop] = ref(false);
        }
      }
      const r = Reflect.get(target2, prop, rec);
      return useReactive ? unref(r) : r;
    }
  });
  return proxy;
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Infinity,
    initialHeight = Infinity,
    listenOrientation = true,
    includeScrollbar = true
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window2) {
      if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation)
    useEventListener("orientationchange", update, { passive: true });
  return { width, height };
}
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "BlogHomeTags",
  __ssrInlineRender: true,
  setup(__props) {
    const docs = useArticles();
    const tags = computed(() => {
      return [...new Set(docs.value.map((v) => v.meta.tag || []).flat(3))];
    });
    const activeTag = useActiveTag();
    const isDark = useDark({
      storageKey: "vitepress-theme-appearance"
    });
    const colorMode = computed(() => isDark.value ? "light" : "dark");
    const tagType = ["", "info", "success", "warning", "danger"];
    const currentPage = useCurrentPageNum();
    const handleCloseTag = () => {
      activeTag.value.label = "";
      activeTag.value.type = "";
      currentPage.value = 1;
      router.go(`${window.location.origin}${router.route.path}`);
    };
    const router = useRouter();
    const location2 = useBrowserLocation();
    const handleTagClick = (tag, type) => {
      if (tag === activeTag.value.label) {
        handleCloseTag();
        return;
      }
      activeTag.value.type = type;
      activeTag.value.label = tag;
      currentPage.value = 1;
      router.go(
        `${location2.value.origin}${router.route.path}?tag=${tag}&type=${type}`
      );
    };
    watch(
      location2,
      () => {
        if (location2.value.href) {
          const url = new URL(location2.value.href);
          activeTag.value.type = url.searchParams.get("type") || "";
          activeTag.value.label = url.searchParams.get("tag") || "";
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (tags.value.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "card tags",
          "data-pagefind-ignore": "all"
        }, _attrs))} data-v-87f5d357><div class="card-header" data-v-87f5d357><span class="title" data-v-87f5d357>🏷 标签</span>`);
        if (unref(activeTag).label) {
          _push(ssrRenderComponent(unref(ElTag), {
            type: unref(activeTag).type,
            effect: colorMode.value,
            closable: "",
            onClose: handleCloseTag
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(activeTag).label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(activeTag).label), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><ul class="tag-list" data-v-87f5d357><!--[-->`);
        ssrRenderList(tags.value, (tag, idx) => {
          _push(`<li data-v-87f5d357>`);
          _push(ssrRenderComponent(unref(ElTag), {
            type: tagType[idx % tagType.length],
            onClick: ($event) => handleTagClick(tag, tagType[idx % tagType.length]),
            effect: colorMode.value
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(tag)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(tag), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogHomeTags_vue_vue_type_style_index_0_scoped_87f5d357_lang = "";
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogHomeTags.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const BlogHomeTags = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-87f5d357"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "BlogFriendLink",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark({
      storageKey: "vitepress-theme-appearance"
    });
    const { friend } = useBlogConfig();
    const friendList = computed(() => {
      return friend == null ? void 0 : friend.map((v) => {
        const { avatar, nickname } = v;
        const avatarUrl = getImageUrl(avatar, isDark.value);
        let alt = nickname;
        if (typeof avatar !== "string") {
          alt = avatar.alt || "";
        }
        return {
          ...v,
          avatar: avatarUrl,
          alt
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      if ((_a2 = friendList.value) == null ? void 0 : _a2.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "card friend-wrapper" }, _attrs))} data-v-0b35f9f4><div class="card-header" data-v-0b35f9f4><span class="title" data-v-0b35f9f4>🤝 友情链接</span></div><ol class="friend-list" data-v-0b35f9f4><!--[-->`);
        ssrRenderList(friendList.value, (v) => {
          _push(`<li data-v-0b35f9f4><a${ssrRenderAttr("href", v.url)} target="_blank" data-v-0b35f9f4>`);
          _push(ssrRenderComponent(unref(ElAvatar), {
            size: 50,
            src: v.avatar,
            alt: v.alt
          }, null, _parent));
          _push(`<div data-v-0b35f9f4><span class="nickname" data-v-0b35f9f4>${ssrInterpolate(v.nickname)}</span><p class="des" data-v-0b35f9f4>${ssrInterpolate(v.des)}</p></div></a></li>`);
        });
        _push(`<!--]--></ol></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogFriendLink_vue_vue_type_style_index_0_scoped_0b35f9f4_lang = "";
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogFriendLink.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const BlogFriendLink = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-0b35f9f4"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "BlogHomeInfo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "blog-info",
        "data-pagefind-ignore": "all"
      }, _attrs))} data-v-56c6d2b1>`);
      _push(ssrRenderComponent(BlogHomeOverview, null, null, _parent));
      _push(ssrRenderComponent(BlogHotArticle, null, null, _parent));
      _push(ssrRenderComponent(BlogFriendLink, null, null, _parent));
      _push(ssrRenderComponent(BlogHomeTags, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const BlogHomeInfo_vue_vue_type_style_index_0_scoped_56c6d2b1_lang = "";
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogHomeInfo.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const BlogHomeInfo = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-56c6d2b1"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "BlogHomeBanner",
  __ssrInlineRender: true,
  setup(__props) {
    var _a2;
    const { site, frontmatter } = useData$1();
    const { home } = useBlogConfig();
    const name = computed(
      () => {
        var _a3;
        return (((_a3 = frontmatter.value.blog) == null ? void 0 : _a3.name) ?? site.value.title) || (home == null ? void 0 : home.name) || "";
      }
    );
    const motto = computed(() => {
      var _a3;
      return ((_a3 = frontmatter.value.blog) == null ? void 0 : _a3.motto) || (home == null ? void 0 : home.motto) || "";
    });
    const initInspiring = ref(
      ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.inspiring) || (home == null ? void 0 : home.inspiring) || ""
    );
    const inspiring = computed({
      get() {
        return initInspiring.value;
      },
      set(newValue) {
        initInspiring.value = newValue;
      }
    });
    useHomeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3efa1b04><h1 data-v-3efa1b04><span class="name" data-v-3efa1b04>${ssrInterpolate(name.value)}</span><span class="motto" style="${ssrRenderStyle(motto.value ? null : { display: "none" })}" data-v-3efa1b04>${ssrInterpolate(motto.value)}</span></h1><div class="inspiring-wrapper" data-v-3efa1b04><h2 style="${ssrRenderStyle(!!inspiring.value ? null : { display: "none" })}" data-v-3efa1b04>${ssrInterpolate(inspiring.value)}</h2></div></div>`);
    };
  }
});
const BlogHomeBanner_vue_vue_type_style_index_0_scoped_3efa1b04_lang = "";
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogHomeBanner.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const BlogHomeBanner = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-3efa1b04"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "BlogItem",
  __ssrInlineRender: true,
  props: {
    route: {},
    title: {},
    date: {},
    sticky: {},
    description: {},
    tag: {},
    author: {},
    cover: {},
    pin: {}
  },
  setup(__props) {
    const props = __props;
    const { width } = useWindowSize();
    const inMobile = computed(() => width.value <= 500);
    const showTime = computed(() => {
      return formatShowDate(props.date);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "blog-item",
        href: unref(withBase)(_ctx.route)
      }, _attrs))} data-v-f6aa70fc>`);
      if (!!_ctx.pin) {
        _push(`<i class="pin" data-v-f6aa70fc></i>`);
      } else {
        _push(`<!---->`);
      }
      if (inMobile.value) {
        _push(`<p class="title" data-v-f6aa70fc>${ssrInterpolate(_ctx.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="info-container" data-v-f6aa70fc><div class="info-part" data-v-f6aa70fc>`);
      if (!inMobile.value) {
        _push(`<p class="title" data-v-f6aa70fc>${ssrInterpolate(_ctx.title)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!!_ctx.description) {
        _push(`<p class="description" data-v-f6aa70fc>${ssrInterpolate(_ctx.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!inMobile.value) {
        _push(`<div class="badge-list" data-v-f6aa70fc>`);
        if (_ctx.author) {
          _push(`<span class="split" data-v-f6aa70fc>${ssrInterpolate(_ctx.author)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="split" data-v-f6aa70fc>${ssrInterpolate(showTime.value)}</span>`);
        if ((_a2 = _ctx.tag) == null ? void 0 : _a2.length) {
          _push(`<span class="split" data-v-f6aa70fc>${ssrInterpolate(_ctx.tag.join(" · "))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.cover) {
        _push(`<div class="cover-img" style="${ssrRenderStyle(`background-image: url(${_ctx.cover});`)}" data-v-f6aa70fc></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (inMobile.value) {
        _push(`<div class="badge-list" data-v-f6aa70fc>`);
        if (_ctx.author) {
          _push(`<span class="split" data-v-f6aa70fc>${ssrInterpolate(_ctx.author)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="split" data-v-f6aa70fc>${ssrInterpolate(showTime.value)}</span>`);
        if ((_b = _ctx.tag) == null ? void 0 : _b.length) {
          _push(`<span class="split" data-v-f6aa70fc>${ssrInterpolate(_ctx.tag.join(" · "))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
});
const BlogItem_vue_vue_type_style_index_0_scoped_f6aa70fc_lang = "";
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogItem.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const BlogItem = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-f6aa70fc"]]);
const queryPageNumKey = "pageNum";
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "BlogList",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, frontmatter } = useData$1();
    const globalAuthor = computed(() => {
      var _a2;
      return ((_a2 = theme2.value.blog) == null ? void 0 : _a2.author) || "";
    });
    const docs = useArticles();
    const activeTag = useActiveTag();
    const activeTagLabel = computed(() => activeTag.value.label);
    const wikiList = computed(() => {
      const topList = docs.value.filter((v) => !!v.meta.top);
      topList.sort((a, b) => {
        var _a2;
        const aTop = (_a2 = a == null ? void 0 : a.meta) == null ? void 0 : _a2.top;
        const bTop = b == null ? void 0 : b.meta.top;
        return Number(aTop) - Number(bTop);
      });
      const data = docs.value.filter(
        (v) => v.meta.date && v.meta.title && !v.meta.top && !v.meta.hidden
      );
      data.sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));
      return topList.concat(data);
    });
    const filterData = computed(() => {
      if (!activeTagLabel.value)
        return wikiList.value;
      return wikiList.value.filter(
        (v) => {
          var _a2, _b;
          return (_b = (_a2 = v.meta) == null ? void 0 : _a2.tag) == null ? void 0 : _b.includes(activeTagLabel.value);
        }
      );
    });
    const { home } = useBlogConfig();
    const pageSize = computed(
      () => {
        var _a2;
        return ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.pageSize) || (home == null ? void 0 : home.pageSize) || 6;
      }
    );
    const currentPage = useCurrentPageNum();
    const currentWikiData = computed(() => {
      const startIdx = (currentPage.value - 1) * pageSize.value;
      const endIdx = startIdx + pageSize.value;
      return filterData.value.slice(startIdx, endIdx);
    });
    const router = useRouter();
    const location2 = useBrowserLocation();
    const handleUpdatePageNum = (current) => {
      if (currentPage.value === current) {
        return;
      }
      currentPage.value = current;
      const { searchParams } = new URL(window.location.href);
      searchParams.delete(queryPageNumKey);
      searchParams.append(queryPageNumKey, String(current));
      router.go(
        `${location2.value.origin}${router.route.path}?${searchParams.toString()}`
      );
    };
    watch(
      location2,
      () => {
        if (location2.value.href) {
          const { searchParams } = new URL(location2.value.href);
          if (searchParams.has(queryPageNumKey)) {
            currentPage.value = Number(searchParams.get(queryPageNumKey));
          } else {
            currentPage.value = 1;
          }
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<!--[--><ul data-pagefind-ignore="all"><!--[-->`);
      ssrRenderList(currentWikiData.value, (v) => {
        _push(`<li>`);
        _push(ssrRenderComponent(BlogItem, {
          route: v.route,
          title: v.meta.title,
          description: v.meta.description,
          date: v.meta.date,
          tag: v.meta.tag,
          cover: v.meta.cover,
          author: v.meta.author || globalAuthor.value,
          pin: v.meta.top
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (wikiList.value.length >= pageSize.value) {
              _push2(ssrRenderComponent(unref(ElPagination), {
                small: "",
                background: "",
                "default-current-page": 1,
                "current-page": unref(currentPage),
                "onUpdate:currentPage": handleUpdatePageNum,
                "page-size": pageSize.value,
                total: filterData.value.length,
                layout: "prev, pager, next, jumper"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              wikiList.value.length >= pageSize.value ? (openBlock(), createBlock(unref(ElPagination), {
                key: 0,
                small: "",
                background: "",
                "default-current-page": 1,
                "current-page": unref(currentPage),
                "onUpdate:currentPage": handleUpdatePageNum,
                "page-size": pageSize.value,
                total: filterData.value.length,
                layout: "prev, pager, next, jumper"
              }, null, 8, ["current-page", "page-size", "total"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogList.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "BlogComment",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter } = useData$1();
    const commentEl = ref(null);
    const commentIsVisible = useElementVisibility(commentEl);
    const handleScrollToComment = () => {
      var _a2;
      (_a2 = document.querySelector("#giscus-comment")) == null ? void 0 : _a2.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };
    const giscusConfig = useGiscusConfig();
    const commentConfig = computed(() => {
      if (!giscusConfig) {
        return {};
      }
      return giscusConfig;
    });
    const show = computed(() => {
      if (frontmatter.value.comment === false) {
        return frontmatter.value.comment;
      }
      if (!giscusConfig) {
        return giscusConfig;
      }
      return giscusConfig.repo && giscusConfig.repoId && giscusConfig.category && giscusConfig.categoryId;
    });
    const isDark = useDark({
      storageKey: "vitepress-theme-appearance"
    });
    const route = useRoute();
    const showComment = ref(true);
    watch(
      () => route.path,
      () => {
        showComment.value = false;
        setTimeout(() => {
          showComment.value = true;
        }, 200);
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (show.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "comment",
          id: "giscus-comment",
          "data-pagefind-ignore": "all",
          ref_key: "commentEl",
          ref: commentEl
        }, _attrs))} data-v-b38946ac>`);
        _push(ssrRenderComponent(unref(ElAffix), {
          class: [{ hidden: unref(commentIsVisible) }, "comment-btn"],
          target: "main",
          position: "bottom",
          offset: 40
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ElButton), {
                onClick: handleScrollToComment,
                plain: "",
                icon: unref(Comment),
                type: "primary"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`评论`);
                  } else {
                    return [
                      createTextVNode("评论")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(ElButton), {
                  onClick: handleScrollToComment,
                  plain: "",
                  icon: unref(Comment),
                  type: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("评论")
                  ]),
                  _: 1
                }, 8, ["icon"])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (showComment.value) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
            src: "https://giscus.app/client.js",
            "data-repo": commentConfig.value.repo,
            "data-repo-id": commentConfig.value.repoId,
            "data-category": commentConfig.value.category,
            "data-category-id": commentConfig.value.categoryId,
            "data-mapping": commentConfig.value.mapping || "pathname",
            "data-reactions-enabled": "1",
            "data-emit-metadata": "0",
            "data-input-position": commentConfig.value.inputPosition || "top",
            "data-theme": unref(isDark) ? "dark" : "light",
            "data-lang": commentConfig.value.lang || "zh-CN",
            crossorigin: "anonymous",
            "data-loading": commentConfig.value.loading || "eager",
            async: ""
          }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogComment_vue_vue_type_style_index_0_scoped_b38946ac_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogComment.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const BlogComment = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-b38946ac"]]);
var Ce;
const Be = typeof window < "u", yt = (s) => typeof s == "string", ie = () => {
};
Be && ((Ce = window == null ? void 0 : window.navigator) == null ? void 0 : Ce.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function me(s) {
  return typeof s == "function" ? s() : unref(s);
}
function Et(s, e) {
  function t(...n) {
    s(() => e.apply(this, n), { fn: e, thisArg: this, args: n });
  }
  return t;
}
function It(s, e = {}) {
  let t, n;
  return (o) => {
    const i = me(s), a = me(e.maxWait);
    if (t && clearTimeout(t), i <= 0 || a !== void 0 && a <= 0)
      return n && (clearTimeout(n), n = null), o();
    a && !n && (n = setTimeout(() => {
      t && clearTimeout(t), n = null, o();
    }, a)), t = setTimeout(() => {
      n && clearTimeout(n), n = null, o();
    }, i);
  };
}
function St(s) {
  return s;
}
function wt(s) {
  return getCurrentScope() ? (onScopeDispose(s), true) : false;
}
function He(s, e = 200, t = {}) {
  return Et(It(e, t), s);
}
function ue(s, e = 200, t = {}) {
  if (e <= 0)
    return s;
  const n = ref(s.value), r = He(() => {
    n.value = s.value;
  }, e, t);
  return watch(s, () => r()), n;
}
function We(s, e, t) {
  return watch(s, (n, r, o) => {
    n && e(n, r, o);
  }, t);
}
function Mt(s) {
  var e;
  const t = me(s);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const ze = Be ? window : void 0;
function re(...s) {
  let e, t, n, r;
  if (yt(s[0]) ? ([t, n, r] = s, e = ze) : [e, t, n, r] = s, !e)
    return ie;
  let o = ie;
  const i = watch(() => Mt(e), (c) => {
    o(), c && (c.addEventListener(t, n, r), o = () => {
      c.removeEventListener(t, n, r), o = ie;
    });
  }, { immediate: true, flush: "post" }), a = () => {
    i(), o();
  };
  return wt(a), a;
}
const pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ge = "__vueuse_ssr_handlers__";
pe[ge] = pe[ge] || {};
const bt = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function xt(s = {}) {
  const {
    reactive: e = false,
    target: t = ze,
    aliasMap: n = bt,
    passive: r = true,
    onEventFired: o = ie
  } = s, i = reactive(/* @__PURE__ */ new Set()), a = { toJSON() {
    return {};
  }, current: i }, c = e ? reactive(a) : a, u = /* @__PURE__ */ new Set(), h2 = /* @__PURE__ */ new Set();
  function f(d, g) {
    d in c && (e ? c[d] = g : c[d].value = g);
  }
  function p() {
    for (const d of h2)
      f(d, false);
  }
  function v(d, g) {
    var I, M;
    const S = (I = d.key) == null ? void 0 : I.toLowerCase(), U = [(M = d.code) == null ? void 0 : M.toLowerCase(), S].filter(Boolean);
    S && (g ? i.add(S) : i.delete(S));
    for (const O of U)
      h2.add(O), f(O, g);
    S === "meta" && !g ? (u.forEach((O) => {
      i.delete(O), f(O, false);
    }), u.clear()) : typeof d.getModifierState == "function" && d.getModifierState("Meta") && g && [...i, ...U].forEach((O) => u.add(O));
  }
  re(t, "keydown", (d) => (v(d, true), o(d)), { passive: r }), re(t, "keyup", (d) => (v(d, false), o(d)), { passive: r }), re("blur", p, { passive: true }), re("focus", p, { passive: true });
  const y = new Proxy(c, {
    get(d, g, I) {
      if (typeof g != "string")
        return Reflect.get(d, g, I);
      if (g = g.toLowerCase(), g in n && (g = n[g]), !(g in c))
        if (/[+_-]/.test(g)) {
          const S = g.split(/[+_-]/g).map(($) => $.trim());
          c[g] = computed(() => S.every(($) => unref(y[$])));
        } else
          c[g] = ref(false);
      const M = Reflect.get(d, g, I);
      return e ? unref(M) : M;
    }
  });
  return y;
}
var $e;
(function(s) {
  s.UP = "UP", s.RIGHT = "RIGHT", s.DOWN = "DOWN", s.LEFT = "LEFT", s.NONE = "NONE";
})($e || ($e = {}));
var At = Object.defineProperty, Te = Object.getOwnPropertySymbols, kt = Object.prototype.hasOwnProperty, Ot = Object.prototype.propertyIsEnumerable, Ne = (s, e, t) => e in s ? At(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t, Lt = (s, e) => {
  for (var t in e || (e = {}))
    kt.call(e, t) && Ne(s, t, e[t]);
  if (Te)
    for (var t of Te(e))
      Ot.call(e, t) && Ne(s, t, e[t]);
  return s;
};
const Rt = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Lt({
  linear: St
}, Rt);
function K(s) {
  return Array.isArray ? Array.isArray(s) : Je(s) === "[object Array]";
}
const Ct = 1 / 0;
function $t(s) {
  if (typeof s == "string")
    return s;
  let e = s + "";
  return e == "0" && 1 / s == -Ct ? "-0" : e;
}
function Tt(s) {
  return s == null ? "" : $t(s);
}
function D(s) {
  return typeof s == "string";
}
function Qe(s) {
  return typeof s == "number";
}
function Nt(s) {
  return s === true || s === false || Pt(s) && Je(s) == "[object Boolean]";
}
function Ye(s) {
  return typeof s == "object";
}
function Pt(s) {
  return Ye(s) && s !== null;
}
function C(s) {
  return s != null;
}
function he(s) {
  return !s.trim().length;
}
function Je(s) {
  return s == null ? s === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(s);
}
const Dt = "Incorrect 'index' type", Ft = (s) => `Invalid value for key ${s}`, Kt = (s) => `Pattern length exceeds max of ${s}.`, Gt = (s) => `Missing ${s} property in key`, jt = (s) => `Property 'weight' in key '${s}' must be a positive integer`, Pe = Object.prototype.hasOwnProperty;
class Vt {
  constructor(e) {
    this._keys = [], this._keyMap = {};
    let t = 0;
    e.forEach((n) => {
      let r = Xe(n);
      t += r.weight, this._keys.push(r), this._keyMap[r.id] = r, t += r.weight;
    }), this._keys.forEach((n) => {
      n.weight /= t;
    });
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function Xe(s) {
  let e = null, t = null, n = null, r = 1, o = null;
  if (D(s) || K(s))
    n = s, e = De(s), t = _e(s);
  else {
    if (!Pe.call(s, "name"))
      throw new Error(Gt("name"));
    const i = s.name;
    if (n = i, Pe.call(s, "weight") && (r = s.weight, r <= 0))
      throw new Error(jt(i));
    e = De(i), t = _e(i), o = s.getFn;
  }
  return { path: e, id: t, weight: r, src: n, getFn: o };
}
function De(s) {
  return K(s) ? s : s.split(".");
}
function _e(s) {
  return K(s) ? s.join(".") : s;
}
function Ut(s, e) {
  let t = [], n = false;
  const r = (o, i, a) => {
    if (!!C(o))
      if (!i[a])
        t.push(o);
      else {
        let c = i[a];
        const u = o[c];
        if (!C(u))
          return;
        if (a === i.length - 1 && (D(u) || Qe(u) || Nt(u)))
          t.push(Tt(u));
        else if (K(u)) {
          n = true;
          for (let h2 = 0, f = u.length; h2 < f; h2 += 1)
            r(u[h2], i, a + 1);
        } else
          i.length && r(u, i, a + 1);
      }
  };
  return r(s, D(e) ? e.split(".") : e, 0), n ? t : t[0];
}
const Bt = {
  includeMatches: false,
  findAllMatches: false,
  minMatchCharLength: 1
}, Ht = {
  isCaseSensitive: false,
  includeScore: false,
  keys: [],
  shouldSort: true,
  sortFn: (s, e) => s.score === e.score ? s.idx < e.idx ? -1 : 1 : s.score < e.score ? -1 : 1
}, Wt = {
  location: 0,
  threshold: 0.6,
  distance: 100
}, zt = {
  useExtendedSearch: false,
  getFn: Ut,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  fieldNormWeight: 1
};
var m = {
  ...Ht,
  ...Bt,
  ...Wt,
  ...zt
};
const Qt = /[^ ]+/g;
function Yt(s = 1, e = 3) {
  const t = /* @__PURE__ */ new Map(), n = Math.pow(10, e);
  return {
    get(r) {
      const o = r.match(Qt).length;
      if (t.has(o))
        return t.get(o);
      const i = 1 / Math.pow(o, 0.5 * s), a = parseFloat(Math.round(i * n) / n);
      return t.set(o, a), a;
    },
    clear() {
      t.clear();
    }
  };
}
class xe {
  constructor({
    getFn: e = m.getFn,
    fieldNormWeight: t = m.fieldNormWeight
  } = {}) {
    this.norm = Yt(t, 3), this.getFn = e, this.isCreated = false, this.setIndexRecords();
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    this.keys = e, this._keysMap = {}, e.forEach((t, n) => {
      this._keysMap[t.id] = n;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = true, D(this.docs[0]) ? this.docs.forEach((e, t) => {
      this._addString(e, t);
    }) : this.docs.forEach((e, t) => {
      this._addObject(e, t);
    }), this.norm.clear());
  }
  add(e) {
    const t = this.size();
    D(e) ? this._addString(e, t) : this._addObject(e, t);
  }
  removeAt(e) {
    this.records.splice(e, 1);
    for (let t = e, n = this.size(); t < n; t += 1)
      this.records[t].i -= 1;
  }
  getValueForItemAtKeyId(e, t) {
    return e[this._keysMap[t]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, t) {
    if (!C(e) || he(e))
      return;
    let n = {
      v: e,
      i: t,
      n: this.norm.get(e)
    };
    this.records.push(n);
  }
  _addObject(e, t) {
    let n = { i: t, $: {} };
    this.keys.forEach((r, o) => {
      let i = r.getFn ? r.getFn(e) : this.getFn(e, r.path);
      if (!!C(i)) {
        if (K(i)) {
          let a = [];
          const c = [{ nestedArrIndex: -1, value: i }];
          for (; c.length; ) {
            const { nestedArrIndex: u, value: h2 } = c.pop();
            if (!!C(h2))
              if (D(h2) && !he(h2)) {
                let f = {
                  v: h2,
                  i: u,
                  n: this.norm.get(h2)
                };
                a.push(f);
              } else
                K(h2) && h2.forEach((f, p) => {
                  c.push({
                    nestedArrIndex: p,
                    value: f
                  });
                });
          }
          n.$[o] = a;
        } else if (D(i) && !he(i)) {
          let a = {
            v: i,
            n: this.norm.get(i)
          };
          n.$[o] = a;
        }
      }
    }), this.records.push(n);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function qe(s, e, { getFn: t = m.getFn, fieldNormWeight: n = m.fieldNormWeight } = {}) {
  const r = new xe({ getFn: t, fieldNormWeight: n });
  return r.setKeys(s.map(Xe)), r.setSources(e), r.create(), r;
}
function Jt(s, { getFn: e = m.getFn, fieldNormWeight: t = m.fieldNormWeight } = {}) {
  const { keys: n, records: r } = s, o = new xe({ getFn: e, fieldNormWeight: t });
  return o.setKeys(n), o.setIndexRecords(r), o;
}
function oe(s, {
  errors: e = 0,
  currentLocation: t = 0,
  expectedLocation: n = 0,
  distance: r = m.distance,
  ignoreLocation: o = m.ignoreLocation
} = {}) {
  const i = e / s.length;
  if (o)
    return i;
  const a = Math.abs(n - t);
  return r ? i + a / r : a ? 1 : i;
}
function Xt(s = [], e = m.minMatchCharLength) {
  let t = [], n = -1, r = -1, o = 0;
  for (let i = s.length; o < i; o += 1) {
    let a = s[o];
    a && n === -1 ? n = o : !a && n !== -1 && (r = o - 1, r - n + 1 >= e && t.push([n, r]), n = -1);
  }
  return s[o - 1] && o - n >= e && t.push([n, o - 1]), t;
}
const W = 32;
function qt(s, e, t, {
  location: n = m.location,
  distance: r = m.distance,
  threshold: o = m.threshold,
  findAllMatches: i = m.findAllMatches,
  minMatchCharLength: a = m.minMatchCharLength,
  includeMatches: c = m.includeMatches,
  ignoreLocation: u = m.ignoreLocation
} = {}) {
  if (e.length > W)
    throw new Error(Kt(W));
  const h2 = e.length, f = s.length, p = Math.max(0, Math.min(n, f));
  let v = o, y = p;
  const d = a > 1 || c, g = d ? Array(f) : [];
  let I;
  for (; (I = s.indexOf(e, y)) > -1; ) {
    let A = oe(e, {
      currentLocation: I,
      expectedLocation: p,
      distance: r,
      ignoreLocation: u
    });
    if (v = Math.min(A, v), y = I + h2, d) {
      let L = 0;
      for (; L < h2; )
        g[I + L] = 1, L += 1;
    }
  }
  y = -1;
  let M = [], S = 1, $ = h2 + f;
  const U = 1 << h2 - 1;
  for (let A = 0; A < h2; A += 1) {
    let L = 0, b = $;
    for (; L < b; )
      oe(e, {
        errors: A,
        currentLocation: p + b,
        expectedLocation: p,
        distance: r,
        ignoreLocation: u
      }) <= v ? L = b : $ = b, b = Math.floor(($ - L) / 2 + L);
    $ = b;
    let te = Math.max(1, p - b + 1), B = i ? f : Math.min(p + b, f) + h2, T = Array(B + 2);
    T[B + 1] = (1 << A) - 1;
    for (let k = B; k >= te; k -= 1) {
      let H = k - 1, q = t[s.charAt(H)];
      if (d && (g[H] = +!!q), T[k] = (T[k + 1] << 1 | 1) & q, A && (T[k] |= (M[k + 1] | M[k]) << 1 | 1 | M[k + 1]), T[k] & U && (S = oe(e, {
        errors: A,
        currentLocation: H,
        expectedLocation: p,
        distance: r,
        ignoreLocation: u
      }), S <= v)) {
        if (v = S, y = H, y <= p)
          break;
        te = Math.max(1, 2 * p - y);
      }
    }
    if (oe(e, {
      errors: A + 1,
      currentLocation: p,
      expectedLocation: p,
      distance: r,
      ignoreLocation: u
    }) > v)
      break;
    M = T;
  }
  const O = {
    isMatch: y >= 0,
    score: Math.max(1e-3, S)
  };
  if (d) {
    const A = Xt(g, a);
    A.length ? c && (O.indices = A) : O.isMatch = false;
  }
  return O;
}
function Zt(s) {
  let e = {};
  for (let t = 0, n = s.length; t < n; t += 1) {
    const r = s.charAt(t);
    e[r] = (e[r] || 0) | 1 << n - t - 1;
  }
  return e;
}
class Ze {
  constructor(e, {
    location: t = m.location,
    threshold: n = m.threshold,
    distance: r = m.distance,
    includeMatches: o = m.includeMatches,
    findAllMatches: i = m.findAllMatches,
    minMatchCharLength: a = m.minMatchCharLength,
    isCaseSensitive: c = m.isCaseSensitive,
    ignoreLocation: u = m.ignoreLocation
  } = {}) {
    if (this.options = {
      location: t,
      threshold: n,
      distance: r,
      includeMatches: o,
      findAllMatches: i,
      minMatchCharLength: a,
      isCaseSensitive: c,
      ignoreLocation: u
    }, this.pattern = c ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length)
      return;
    const h2 = (p, v) => {
      this.chunks.push({
        pattern: p,
        alphabet: Zt(p),
        startIndex: v
      });
    }, f = this.pattern.length;
    if (f > W) {
      let p = 0;
      const v = f % W, y = f - v;
      for (; p < y; )
        h2(this.pattern.substr(p, W), p), p += W;
      if (v) {
        const d = f - W;
        h2(this.pattern.substr(d), d);
      }
    } else
      h2(this.pattern, 0);
  }
  searchIn(e) {
    const { isCaseSensitive: t, includeMatches: n } = this.options;
    if (t || (e = e.toLowerCase()), this.pattern === e) {
      let y = {
        isMatch: true,
        score: 0
      };
      return n && (y.indices = [[0, e.length - 1]]), y;
    }
    const {
      location: r,
      distance: o,
      threshold: i,
      findAllMatches: a,
      minMatchCharLength: c,
      ignoreLocation: u
    } = this.options;
    let h2 = [], f = 0, p = false;
    this.chunks.forEach(({ pattern: y, alphabet: d, startIndex: g }) => {
      const { isMatch: I, score: M, indices: S } = qt(e, y, d, {
        location: r + g,
        distance: o,
        threshold: i,
        findAllMatches: a,
        minMatchCharLength: c,
        includeMatches: n,
        ignoreLocation: u
      });
      I && (p = true), f += M, I && S && (h2 = [...h2, ...S]);
    });
    let v = {
      isMatch: p,
      score: p ? f / this.chunks.length : 1
    };
    return p && n && (v.indices = h2), v;
  }
}
class V {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return Fe(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return Fe(e, this.singleRegex);
  }
  search() {
  }
}
function Fe(s, e) {
  const t = s.match(e);
  return t ? t[1] : null;
}
class es extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    const t = e === this.pattern;
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class ts extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    const n = e.indexOf(this.pattern) === -1;
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
}
class ss extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    const t = e.startsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class ns extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    const t = !e.startsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
}
class rs extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    const t = e.endsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [e.length - this.pattern.length, e.length - 1]
    };
  }
}
class os extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    const t = !e.endsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
}
class et extends V {
  constructor(e, {
    location: t = m.location,
    threshold: n = m.threshold,
    distance: r = m.distance,
    includeMatches: o = m.includeMatches,
    findAllMatches: i = m.findAllMatches,
    minMatchCharLength: a = m.minMatchCharLength,
    isCaseSensitive: c = m.isCaseSensitive,
    ignoreLocation: u = m.ignoreLocation
  } = {}) {
    super(e), this._bitapSearch = new Ze(e, {
      location: t,
      threshold: n,
      distance: r,
      includeMatches: o,
      findAllMatches: i,
      minMatchCharLength: a,
      isCaseSensitive: c,
      ignoreLocation: u
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class tt extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let t = 0, n;
    const r = [], o = this.pattern.length;
    for (; (n = e.indexOf(this.pattern, t)) > -1; )
      t = n + o, r.push([n, t - 1]);
    const i = !!r.length;
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: r
    };
  }
}
const ve = [
  es,
  tt,
  ss,
  ns,
  os,
  rs,
  ts,
  et
], Ke = ve.length, is = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, cs = "|";
function as(s, e = {}) {
  return s.split(cs).map((t) => {
    let n = t.trim().split(is).filter((o) => o && !!o.trim()), r = [];
    for (let o = 0, i = n.length; o < i; o += 1) {
      const a = n[o];
      let c = false, u = -1;
      for (; !c && ++u < Ke; ) {
        const h2 = ve[u];
        let f = h2.isMultiMatch(a);
        f && (r.push(new h2(f, e)), c = true);
      }
      if (!c)
        for (u = -1; ++u < Ke; ) {
          const h2 = ve[u];
          let f = h2.isSingleMatch(a);
          if (f) {
            r.push(new h2(f, e));
            break;
          }
        }
    }
    return r;
  });
}
const ls = /* @__PURE__ */ new Set([et.type, tt.type]);
class us {
  constructor(e, {
    isCaseSensitive: t = m.isCaseSensitive,
    includeMatches: n = m.includeMatches,
    minMatchCharLength: r = m.minMatchCharLength,
    ignoreLocation: o = m.ignoreLocation,
    findAllMatches: i = m.findAllMatches,
    location: a = m.location,
    threshold: c = m.threshold,
    distance: u = m.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: t,
      includeMatches: n,
      minMatchCharLength: r,
      findAllMatches: i,
      ignoreLocation: o,
      location: a,
      threshold: c,
      distance: u
    }, this.pattern = t ? e : e.toLowerCase(), this.query = as(this.pattern, this.options);
  }
  static condition(e, t) {
    return t.useExtendedSearch;
  }
  searchIn(e) {
    const t = this.query;
    if (!t)
      return {
        isMatch: false,
        score: 1
      };
    const { includeMatches: n, isCaseSensitive: r } = this.options;
    e = r ? e : e.toLowerCase();
    let o = 0, i = [], a = 0;
    for (let c = 0, u = t.length; c < u; c += 1) {
      const h2 = t[c];
      i.length = 0, o = 0;
      for (let f = 0, p = h2.length; f < p; f += 1) {
        const v = h2[f], { isMatch: y, indices: d, score: g } = v.search(e);
        if (y) {
          if (o += 1, a += g, n) {
            const I = v.constructor.type;
            ls.has(I) ? i = [...i, ...d] : i.push(d);
          }
        } else {
          a = 0, o = 0, i.length = 0;
          break;
        }
      }
      if (o) {
        let f = {
          isMatch: true,
          score: a / o
        };
        return n && (f.indices = i), f;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
}
const ye = [];
function hs(...s) {
  ye.push(...s);
}
function Ee(s, e) {
  for (let t = 0, n = ye.length; t < n; t += 1) {
    let r = ye[t];
    if (r.condition(s, e))
      return new r(s, e);
  }
  return new Ze(s, e);
}
const ae = {
  AND: "$and",
  OR: "$or"
}, Ie = {
  PATH: "$path",
  PATTERN: "$val"
}, Se = (s) => !!(s[ae.AND] || s[ae.OR]), ds = (s) => !!s[Ie.PATH], fs = (s) => !K(s) && Ye(s) && !Se(s), Ge = (s) => ({
  [ae.AND]: Object.keys(s).map((e) => ({
    [e]: s[e]
  }))
});
function st(s, e, { auto: t = true } = {}) {
  const n = (r) => {
    let o = Object.keys(r);
    const i = ds(r);
    if (!i && o.length > 1 && !Se(r))
      return n(Ge(r));
    if (fs(r)) {
      const c = i ? r[Ie.PATH] : o[0], u = i ? r[Ie.PATTERN] : r[c];
      if (!D(u))
        throw new Error(Ft(c));
      const h2 = {
        keyId: _e(c),
        pattern: u
      };
      return t && (h2.searcher = Ee(u, e)), h2;
    }
    let a = {
      children: [],
      operator: o[0]
    };
    return o.forEach((c) => {
      const u = r[c];
      K(u) && u.forEach((h2) => {
        a.children.push(n(h2));
      });
    }), a;
  };
  return Se(s) || (s = Ge(s)), n(s);
}
function ms(s, { ignoreFieldNorm: e = m.ignoreFieldNorm }) {
  s.forEach((t) => {
    let n = 1;
    t.matches.forEach(({ key: r, norm: o, score: i }) => {
      const a = r ? r.weight : null;
      n *= Math.pow(
        i === 0 && a ? Number.EPSILON : i,
        (a || 1) * (e ? 1 : o)
      );
    }), t.score = n;
  });
}
function ps(s, e) {
  const t = s.matches;
  e.matches = [], C(t) && t.forEach((n) => {
    if (!C(n.indices) || !n.indices.length)
      return;
    const { indices: r, value: o } = n;
    let i = {
      indices: r,
      value: o
    };
    n.key && (i.key = n.key.src), n.idx > -1 && (i.refIndex = n.idx), e.matches.push(i);
  });
}
function gs(s, e) {
  e.score = s.score;
}
function _s(s, e, {
  includeMatches: t = m.includeMatches,
  includeScore: n = m.includeScore
} = {}) {
  const r = [];
  return t && r.push(ps), n && r.push(gs), s.map((o) => {
    const { idx: i } = o, a = {
      item: e[i],
      refIndex: i
    };
    return r.length && r.forEach((c) => {
      c(o, a);
    }), a;
  });
}
class Y {
  constructor(e, t = {}, n) {
    this.options = { ...m, ...t }, this.options.useExtendedSearch, this._keyStore = new Vt(this.options.keys), this.setCollection(e, n);
  }
  setCollection(e, t) {
    if (this._docs = e, t && !(t instanceof xe))
      throw new Error(Dt);
    this._myIndex = t || qe(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(e) {
    !C(e) || (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => false) {
    const t = [];
    for (let n = 0, r = this._docs.length; n < r; n += 1) {
      const o = this._docs[n];
      e(o, n) && (this.removeAt(n), n -= 1, r -= 1, t.push(o));
    }
    return t;
  }
  removeAt(e) {
    this._docs.splice(e, 1), this._myIndex.removeAt(e);
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: t = -1 } = {}) {
    const {
      includeMatches: n,
      includeScore: r,
      shouldSort: o,
      sortFn: i,
      ignoreFieldNorm: a
    } = this.options;
    let c = D(e) ? D(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
    return ms(c, { ignoreFieldNorm: a }), o && c.sort(i), Qe(t) && t > -1 && (c = c.slice(0, t)), _s(c, this._docs, {
      includeMatches: n,
      includeScore: r
    });
  }
  _searchStringList(e) {
    const t = Ee(e, this.options), { records: n } = this._myIndex, r = [];
    return n.forEach(({ v: o, i, n: a }) => {
      if (!C(o))
        return;
      const { isMatch: c, score: u, indices: h2 } = t.searchIn(o);
      c && r.push({
        item: o,
        idx: i,
        matches: [{ score: u, value: o, norm: a, indices: h2 }]
      });
    }), r;
  }
  _searchLogical(e) {
    const t = st(e, this.options), n = (a, c, u) => {
      if (!a.children) {
        const { keyId: f, searcher: p } = a, v = this._findMatches({
          key: this._keyStore.get(f),
          value: this._myIndex.getValueForItemAtKeyId(c, f),
          searcher: p
        });
        return v && v.length ? [
          {
            idx: u,
            item: c,
            matches: v
          }
        ] : [];
      }
      const h2 = [];
      for (let f = 0, p = a.children.length; f < p; f += 1) {
        const v = a.children[f], y = n(v, c, u);
        if (y.length)
          h2.push(...y);
        else if (a.operator === ae.AND)
          return [];
      }
      return h2;
    }, r = this._myIndex.records, o = {}, i = [];
    return r.forEach(({ $: a, i: c }) => {
      if (C(a)) {
        let u = n(t, a, c);
        u.length && (o[c] || (o[c] = { idx: c, item: a, matches: [] }, i.push(o[c])), u.forEach(({ matches: h2 }) => {
          o[c].matches.push(...h2);
        }));
      }
    }), i;
  }
  _searchObjectList(e) {
    const t = Ee(e, this.options), { keys: n, records: r } = this._myIndex, o = [];
    return r.forEach(({ $: i, i: a }) => {
      if (!C(i))
        return;
      let c = [];
      n.forEach((u, h2) => {
        c.push(
          ...this._findMatches({
            key: u,
            value: i[h2],
            searcher: t
          })
        );
      }), c.length && o.push({
        idx: a,
        item: i,
        matches: c
      });
    }), o;
  }
  _findMatches({ key: e, value: t, searcher: n }) {
    if (!C(t))
      return [];
    let r = [];
    if (K(t))
      t.forEach(({ v: o, i, n: a }) => {
        if (!C(o))
          return;
        const { isMatch: c, score: u, indices: h2 } = n.searchIn(o);
        c && r.push({
          score: u,
          key: e,
          value: o,
          idx: i,
          norm: a,
          indices: h2
        });
      });
    else {
      const { v: o, n: i } = t, { isMatch: a, score: c, indices: u } = n.searchIn(o);
      a && r.push({ score: c, key: e, value: o, norm: i, indices: u });
    }
    return r;
  }
}
Y.version = "6.6.2";
Y.createIndex = qe;
Y.parseIndex = Jt;
Y.config = m;
Y.parseQuery = st;
hs(us);
const je = reactive({
  selectedNode: "",
  selectedGroup: "",
  search: "",
  dataValue: "",
  filtered: {
    count: 0,
    items: /* @__PURE__ */ new Map(),
    groups: /* @__PURE__ */ new Set()
  }
}), J = () => ({
  isSearching: computed(() => je.search !== ""),
  ...toRefs(je)
});
function vs(s) {
  return { all: s = s || /* @__PURE__ */ new Map(), on: function(e, t) {
    var n = s.get(e);
    n ? n.push(t) : s.set(e, [t]);
  }, off: function(e, t) {
    var n = s.get(e);
    n && (t ? n.splice(n.indexOf(t) >>> 0, 1) : s.set(e, []));
  }, emit: function(e, t) {
    var n = s.get(e);
    n && n.slice().map(function(r) {
      r(t);
    }), (n = s.get("*")) && n.slice().map(function(r) {
      r(e, t);
    });
  } };
}
const ys = vs(), le = () => ({
  emitter: ys
});
function Es(s, e) {
  let t = s.nextElementSibling;
  for (; t; ) {
    if (t.matches(e))
      return t;
    t = t.nextElementSibling;
  }
}
function Is(s, e) {
  let t = s.previousElementSibling;
  for (; t; ) {
    if (t.matches(e))
      return t;
    t = t.previousElementSibling;
  }
}
const Ss = ["command-theme"], ws = { "command-root": "" }, Ms = defineComponent({
  name: "Command"
}), bs = /* @__PURE__ */ defineComponent({
  ...Ms,
  props: {
    theme: {
      type: String,
      default: "default"
    },
    fuseOptions: {
      type: Object,
      default: () => ({
        threshold: 0.2,
        keys: ["label"]
      })
    }
  },
  emits: ["select-item"],
  setup(s, { emit: e }) {
    const t = s, n = '[command-item=""]', r = "command-item-key", o = '[command-group=""]', i = "command-group-key", a = '[command-group-heading=""]', c = `${n}:not([aria-disabled="true"])`, u = `${n}[aria-selected="true"]`, h2 = "command-item-select", f = "data-value";
    provide("theme", t.theme || "default");
    const { selectedNode: p, search: v, dataValue: y, filtered: d } = J(), { emitter: g } = le(), I = ref(), M = ue(ref(/* @__PURE__ */ new Map()), 333), S = ue(ref(/* @__PURE__ */ new Set()), 333), $ = ue(ref(/* @__PURE__ */ new Map())), U = computed(() => {
      const l = [];
      for (const [E, _] of M.value.entries())
        l.push({
          key: E,
          label: _
        });
      return l;
    }), O = computed(() => {
      const l = Y.createIndex(t.fuseOptions.keys, U.value);
      return new Y(U.value, t.fuseOptions, l);
    }), A = () => {
      var E, _, w;
      const l = L();
      l && (((E = l.parentElement) == null ? void 0 : E.firstElementChild) === l && ((w = (_ = l.closest(o)) == null ? void 0 : _.querySelector(a)) == null || w.scrollIntoView({ block: "nearest" })), l.scrollIntoView({ block: "nearest" }));
    }, L = () => {
      var l;
      return (l = I.value) == null ? void 0 : l.querySelector(u);
    }, b = (l = I.value) => {
      const E = l == null ? void 0 : l.querySelectorAll(
        c
      );
      return E ? Array.from(E) : [];
    }, te = () => {
      var E;
      const l = (E = I.value) == null ? void 0 : E.querySelectorAll(
        o
      );
      return l ? Array.from(l) : [];
    }, B = () => {
      const [l] = b();
      l && l.getAttribute(r) && (p.value = l.getAttribute(r) || "");
    }, T = (l) => {
      const _ = b()[l];
      _ && (p.value = _.getAttribute(r) || "");
    }, se = (l) => {
      const E = L(), _ = b(), w = _.findIndex((ne) => ne === E), G = _[w + l];
      G ? p.value = G.getAttribute(r) || "" : l > 0 ? T(0) : T(_.length - 1);
    }, k = (l) => {
      const E = L();
      let _ = E == null ? void 0 : E.closest(o), w = null;
      for (; _ && !w; )
        _ = l > 0 ? Es(_, o) : Is(_, o), w = _ == null ? void 0 : _.querySelector(c);
      w ? p.value = w.getAttribute(r) || "" : se(l);
    }, H = () => T(0), q = () => T(b().length - 1), Ae = (l) => {
      l.preventDefault(), l.metaKey ? q() : l.altKey ? k(1) : se(1);
    }, ke = (l) => {
      l.preventDefault(), l.metaKey ? H() : l.altKey ? k(-1) : se(-1);
    }, rt = (l) => {
      switch (l.key) {
        case "n":
        case "j": {
          l.ctrlKey && Ae(l);
          break;
        }
        case "ArrowDown": {
          Ae(l);
          break;
        }
        case "p":
        case "k": {
          l.ctrlKey && ke(l);
          break;
        }
        case "ArrowUp": {
          ke(l);
          break;
        }
        case "Home": {
          H();
          break;
        }
        case "End": {
          q();
          break;
        }
        case "Enter": {
          const E = L();
          if (E) {
            const _ = new Event(h2);
            E.dispatchEvent(_);
          }
        }
      }
    }, ot = () => {
      if (!v.value) {
        d.value.count = S.value.size;
        return;
      }
      d.value.groups = new Set("");
      const l = /* @__PURE__ */ new Map(), E = O.value.search(v.value).map((_) => _.item);
      for (const { key: _, label: w } of E)
        l.set(_, w);
      for (const [_, w] of $.value)
        for (const G of w)
          l.get(G) && d.value.groups.add(_);
      nextTick(() => {
        d.value.count = l.size, d.value.items = l;
      });
    }, Oe = () => {
      const l = b(), E = te();
      for (const _ of l) {
        const w = _.getAttribute(r) || "", G = _.getAttribute(f) || "";
        S.value.add(w), M.value.set(w, G), d.value.count = M.value.size;
      }
      for (const _ of E) {
        const w = b(_), G = _.getAttribute(i) || "", ne = new Set("");
        for (const ct of w) {
          const at = ct.getAttribute(r) || "";
          ne.add(at);
        }
        $.value.set(G, ne);
      }
    };
    watch(
      () => p.value,
      (l) => {
        l && nextTick(A);
      },
      { deep: true }
    ), watch(
      () => v.value,
      (l) => {
        ot(), nextTick(B);
      }
    ), g.on("selectItem", (l) => {
      e("select-item", l);
    });
    const it = He((l) => {
      l && (Oe(), nextTick(B));
    }, 100);
    return g.on("rerenderList", it), onMounted(() => {
      Oe(), B();
    }), (l, E) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(s.theme),
      onKeydown: rt,
      ref_key: "commandRef",
      ref: I,
      "command-theme": s.theme
    }, [
      createElementVNode("div", ws, [
        renderSlot(l.$slots, "default")
      ])
    ], 42, Ss));
  }
}), X = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [n, r] of e)
    t[n] = r;
  return t;
}, we = /* @__PURE__ */ X(bs, [["__file", "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue"]]), xs = { "command-dialog": "" }, As = { "command-dialog-mask": "" }, ks = { "command-dialog-wrapper": "" }, Os = { "command-dialog-header": "" }, Ls = { "command-dialog-body": "" }, Rs = {
  key: 0,
  "command-dialog-footer": ""
}, Cs = defineComponent({
  name: "Command.Dialog"
}), $s = /* @__PURE__ */ defineComponent({
  ...Cs,
  props: {
    visible: { type: Boolean, required: true },
    theme: { type: String, required: true }
  },
  emits: ["select-item"],
  setup(s, { emit: e }) {
    const t = s, { search: n, filtered: r } = J(), { emitter: o } = le(), i = ref();
    o.on("selectItem", (c) => {
      e("select-item", c);
    });
    const a = () => {
      n.value = "", r.value.count = 0, r.value.items = /* @__PURE__ */ new Map(), r.value.groups = /* @__PURE__ */ new Set();
    };
    return We(() => t.visible, a), onBeforeUnmount(a), (c, u) => (openBlock(), createBlock(Teleport, {
      to: "body",
      ref_key: "dialogRef",
      ref: i
    }, [
      createVNode(Transition, {
        name: "command-dialog",
        appear: ""
      }, {
        default: withCtx(() => [
          s.visible ? (openBlock(), createBlock(we, {
            key: 0,
            theme: s.theme
          }, {
            default: withCtx(() => [
              createElementVNode("div", xs, [
                createElementVNode("div", As, [
                  createElementVNode("div", ks, [
                    createElementVNode("div", Os, [
                      renderSlot(c.$slots, "header")
                    ]),
                    createElementVNode("div", Ls, [
                      renderSlot(c.$slots, "body")
                    ]),
                    c.$slots.footer ? (openBlock(), createElementBlock("div", Rs, [
                      renderSlot(c.$slots, "footer")
                    ])) : createCommentVNode("v-if", true)
                  ])
                ])
              ])
            ]),
            _: 3
          }, 8, ["theme"])) : createCommentVNode("v-if", true)
        ]),
        _: 3
      })
    ], 512));
  }
}), Ts = /* @__PURE__ */ X($s, [["__file", "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue"]]);
let nt = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
const Ns = ["command-group-key", "data-value"], Ps = {
  key: 0,
  "command-group-heading": ""
}, Ds = {
  "command-group-items": "",
  role: "group"
}, Fs = defineComponent({
  name: "Command.Group"
}), Ks = /* @__PURE__ */ defineComponent({
  ...Fs,
  props: {
    heading: { type: String, required: true }
  },
  setup(s) {
    const e = computed(() => `command-group-${nt()}`), { filtered: t, isSearching: n } = J(), r = computed(
      () => n.value ? t.value.groups.has(e.value) : true
    );
    return (o, i) => withDirectives((openBlock(), createElementBlock("div", {
      "command-group": "",
      role: "presentation",
      key: unref(e),
      "command-group-key": unref(e),
      "data-value": s.heading
    }, [
      s.heading ? (openBlock(), createElementBlock("div", Ps, toDisplayString(s.heading), 1)) : createCommentVNode("v-if", true),
      createElementVNode("div", Ds, [
        renderSlot(o.$slots, "default")
      ])
    ], 8, Ns)), [
      [vShow, unref(r)]
    ]);
  }
}), Gs = /* @__PURE__ */ X(Ks, [["__file", "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue"]]), js = ["placeholder", "value"], Vs = defineComponent({
  name: "Command.Input"
}), Us = /* @__PURE__ */ defineComponent({
  ...Vs,
  props: {
    placeholder: { type: String, required: true },
    value: { type: String, required: false }
  },
  emits: ["input", "update:value"],
  setup(s, { emit: e }) {
    const t = ref(null), { search: n } = J(), r = computed(() => n.value), o = (i) => {
      const a = i, c = i.target;
      n.value = c == null ? void 0 : c.value, e("input", a), e("update:value", n.value);
    };
    return watchEffect(() => {
      var i;
      (i = t.value) == null || i.focus();
    }), (i, a) => (openBlock(), createElementBlock("input", {
      ref_key: "inputRef",
      ref: t,
      "command-input": "",
      "auto-focus": "",
      "auto-complete": "off",
      "auto-correct": "off",
      "spell-check": false,
      "aria-autocomplete": "list",
      role: "combobox",
      "aria-expanded": true,
      placeholder: s.placeholder,
      value: unref(r),
      onInput: o
    }, null, 40, js));
  }
}), Bs = /* @__PURE__ */ X(Us, [["__file", "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue"]]), Hs = ["aria-selected", "aria-disabled", "command-item-key"], Ws = defineComponent({
  name: "Command.Item"
}), zs = /* @__PURE__ */ defineComponent({
  ...Ws,
  props: {
    shortcut: { type: Array, required: false },
    perform: { type: null, required: false }
  },
  emits: ["select"],
  setup(s, { emit: e }) {
    const t = s, n = "command-item-select", r = "data-value", { current: o } = xt(), { selectedNode: i, filtered: a, isSearching: c } = J(), { emitter: u } = le(), h2 = ref(), f = computed(() => `command-item-${nt()}`), p = computed(() => {
      const d = a.value.items.get(f.value);
      return c.value ? d !== void 0 : true;
    }), v = computed(() => Array.from(o)), y = () => {
      var g;
      const d = {
        key: f.value,
        value: ((g = h2.value) == null ? void 0 : g.getAttribute(r)) || ""
      };
      e("select", d), u.emit("selectItem", d);
    };
    return We(v, (d) => {
      t.shortcut && t.shortcut.length > 0 && t.shortcut.every((I) => o.has(I.toLowerCase())) && t.perform && t.perform();
    }), watchEffect(() => {
      var d;
      (d = h2.value) == null || d.addEventListener(n, y);
    }), onBeforeUnmount(() => {
      var d;
      (d = h2.value) == null || d.removeEventListener(n, y);
    }), (d, g) => withDirectives((openBlock(), createElementBlock("div", {
      ref_key: "itemRef",
      ref: h2,
      "command-item": "",
      role: "option",
      "aria-selected": unref(i) === unref(f),
      "aria-disabled": !unref(p),
      key: unref(f),
      "command-item-key": unref(f),
      onClick: y
    }, [
      renderSlot(d.$slots, "default")
    ], 8, Hs)), [
      [vShow, unref(p)]
    ]);
  }
}), Qs = /* @__PURE__ */ X(zs, [["__file", "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue"]]), Ys = defineComponent({
  name: "Command.List"
}), Js = /* @__PURE__ */ defineComponent({
  ...Ys,
  setup(s) {
    const { emitter: e } = le(), t = ref(), n = ref();
    let r = null, o;
    return watchEffect(() => {
      o = n.value;
      const i = t.value;
      o && i && (r = new ResizeObserver((a) => {
        nextTick(() => {
          const c = o == null ? void 0 : o.offsetHeight;
          i == null || i.style.setProperty(
            "--command-list-height",
            `${c == null ? void 0 : c.toFixed(1)}px`
          ), e.emit("rerenderList", true);
        });
      }), r.observe(o));
    }), onBeforeUnmount(() => {
      r !== null && o && r.unobserve(o);
    }), (i, a) => (openBlock(), createElementBlock("div", {
      "command-list": "",
      role: "listbox",
      "aria-label": "Suggestions",
      ref_key: "listRef",
      ref: t
    }, [
      createElementVNode("div", {
        "command-list-sizer": "",
        ref_key: "heightRef",
        ref: n
      }, [
        renderSlot(i.$slots, "default")
      ], 512)
    ], 512));
  }
}), Xs = /* @__PURE__ */ X(Js, [["__file", "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue"]]), qs = defineComponent({
  name: "Command.Empty",
  setup(s, { attrs: e, slots: t }) {
    const { filtered: n } = J(), r = computed(() => n.value.count === 0);
    return () => r.value ? h(
      "div",
      {
        "command-empty": "",
        role: "presentation",
        ...e
      },
      t
    ) : h("div", {
      "command-empty": "hidden",
      role: "presentation",
      style: {
        display: "none"
      },
      ...e
    });
  }
}), Zs = defineComponent({
  name: "Command.Loading",
  setup(s, { attrs: e, slots: t }) {
    return () => h(
      "div",
      {
        "command-loading": "",
        role: "progressbar",
        ...e
      },
      t
    );
  }
}), en = defineComponent({
  name: "Command.Separator",
  setup(s, { attrs: e, slots: t }) {
    return () => h("div", {
      "command-separator": "",
      role: "separator",
      ...e
    });
  }
}), sn = Object.assign(we, {
  Dialog: Ts,
  Empty: qs,
  Group: Gs,
  Input: Bs,
  Item: Qs,
  List: Xs,
  Loading: Zs,
  Separator: en,
  Root: we
});
const _sfc_main$b = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "594",
    height: "112",
    viewBox: "0 0 594 112",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M147.8 111.2H164V77.5998H164.6C164.6 77.5998 170.6 87.1998 183.2 87.1998C197 87.1998 209.6 74.5998 209.6 56.5998C209.6 38.5998 197 25.9998 183.2 25.9998C170.6 25.9998 164.6 35.5998 164.6 35.5998H164V27.1998H147.8V111.2ZM178.4 72.1998C170 72.1998 163.4 65.5998 163.4 56.5998C163.4 47.5998 170 40.9998 178.4 40.9998C186.8 40.9998 193.4 47.5998 193.4 56.5998C193.4 65.5998 186.8 72.1998 178.4 72.1998Z" fill="black"></path><path d="M230.628 87.1998C242.028 87.1998 248.028 78.7998 248.028 78.7998H248.628V85.9998C252.228 85.9998 264.828 85.9998 264.828 85.9998V49.3998C264.828 36.1998 254.628 25.9998 239.628 25.9998C224.028 25.9998 215.628 37.3998 215.628 37.3998L225.228 46.9998C225.228 46.9998 230.028 40.3998 238.428 40.3998C244.428 40.3998 248.028 43.9998 248.628 48.1998L230.028 51.5598C219.228 53.4798 212.628 60.7998 212.628 70.3998C212.628 79.9998 219.828 87.1998 230.628 87.1998ZM236.028 73.9998C231.228 73.9998 228.828 71.5998 228.828 67.9998C228.828 64.9998 231.228 62.7198 235.428 61.9998L248.628 59.5998V60.7998C248.628 68.5998 243.228 73.9998 236.028 73.9998Z" fill="black"></path><path d="M299.033 111.2C317.633 111.2 330.833 97.9998 330.833 79.9998V27.1998H314.633V35.5998H314.033C314.033 35.5998 308.633 25.9998 296.033 25.9998C282.833 25.9998 270.833 37.9998 270.833 55.3998C270.833 72.7998 282.833 84.7998 296.033 84.7998C308.633 84.7998 314.033 75.1998 314.033 75.1998H314.633V79.9998C314.633 89.5998 308.033 96.1998 299.033 96.1998C289.433 96.1998 283.433 88.9998 283.433 88.9998L273.233 99.1998C273.233 99.1998 281.633 111.2 299.033 111.2ZM300.833 69.7998C293.033 69.7998 287.033 63.7998 287.033 55.3998C287.033 46.9998 293.033 40.9998 300.833 40.9998C308.633 40.9998 314.633 46.9998 314.633 55.3998C314.633 63.7998 308.633 69.7998 300.833 69.7998Z" fill="black"></path><path d="M367.986 87.1998C384.186 87.1998 393.186 77.5998 393.186 77.5998L384.786 66.1998C384.786 66.1998 379.386 72.7998 369.186 72.7998C360.186 72.7998 355.386 67.9998 353.586 62.5998H396.186C396.186 62.5998 396.786 59.5998 396.786 55.3998C396.786 39.1998 383.586 25.9998 367.386 25.9998C350.586 25.9998 336.786 39.7998 336.786 56.5998C336.786 73.3998 350.586 87.1998 367.986 87.1998ZM353.586 50.5998C355.386 45.1998 360.186 40.3998 366.786 40.3998C373.386 40.3998 378.186 45.1998 379.986 50.5998H353.586Z" fill="black"></path><path d="M406.423 85.9998H422.624V43.3998H444.224V85.9998H460.423V28.3998H422.624V24.7998C422.624 19.3998 425.624 16.3998 430.423 16.3998C433.423 16.3998 435.823 17.5998 435.823 17.5998V2.5998C435.823 2.5998 431.624 0.799805 426.224 0.799805C414.224 0.799805 406.423 8.59981 406.423 22.3998V28.3998H397.423V43.3998H406.423V85.9998ZM452.263 19.3998C457.423 19.3998 461.624 15.1998 461.624 10.3998C461.624 5.59981 457.424 1.3998 452.384 1.3998C447.224 1.3998 443.023 5.59981 443.023 10.3998C443.023 15.1998 447.223 19.3998 452.263 19.3998Z" fill="black"></path><path d="M470.652 85.9998H486.852V54.7998C486.852 46.9998 492.252 41.5998 499.452 41.5998C506.052 41.5998 510.252 45.7998 510.252 52.9998V85.9998H526.452V50.5998C526.452 35.5998 516.852 25.9998 504.852 25.9998C493.452 25.9998 487.452 35.5998 487.452 35.5998H486.852V27.1998H470.652V85.9998Z" fill="black"></path><path d="M557.819 87.1998C570.419 87.1998 576.419 77.5998 576.419 77.5998H577.019V85.9998H593.219V1.9998H577.019V35.5998H576.419C576.419 35.5998 570.419 25.9998 557.819 25.9998C544.019 25.9998 531.419 38.5998 531.419 56.5998C531.419 74.5998 544.019 87.1998 557.819 87.1998ZM562.619 72.1998C554.219 72.1998 547.619 65.5998 547.619 56.5998C547.619 47.5998 554.219 40.9998 562.619 40.9998C571.019 40.9998 577.619 47.5998 577.619 56.5998C577.619 65.5998 571.019 72.1998 562.619 72.1998Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 96.9999C93.1371 96.9999 120 81.8416 120 63.1428V50.8311H115.91C107.182 38.2198 85.4398 29.2856 60 29.2856C34.5602 29.2856 12.8183 38.2198 4.09026 50.8311H0V63.1428C0 81.8416 26.8629 96.9999 60 96.9999Z" fill="black"></path><path d="M116 52C116 59.317 110.727 66.7404 100.454 72.5615C90.3014 78.3149 76.0069 82 60 82C43.9931 82 29.6986 78.3149 19.5456 72.5615C9.2731 66.7404 4 59.317 4 52C4 44.6831 9.2731 37.2596 19.5456 31.4385C29.6986 25.6851 43.9931 22 60 22C76.0069 22 90.3014 25.6851 100.454 31.4385C110.727 37.2596 116 44.6831 116 52Z" fill="white" stroke="black" stroke-width="8"></path><path d="M57.8864 72.0605L87.2817 41.837C88.6253 40.4556 87.43 38.1599 85.5278 38.4684L26.0819 48.1083C23.9864 48.4481 23.794 51.3882 25.8273 51.9982L46.7151 58.2645C47.2181 58.4154 47.6415 58.7581 47.894 59.2185L54.6991 71.6277C55.3457 72.8069 56.9487 73.0246 57.8864 72.0605Z" fill="black"></path><ellipse cx="58" cy="53.5" rx="7" ry="4.5" fill="white"></ellipse></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/LogoPagefind.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const LogoPagefind = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "BlogSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const windowSize = useWindowSize();
    const isMinimized = computed(() => windowSize.width.value < 760);
    const flexValue = computed(() => isMinimized.value ? 0 : 1);
    const { search: searchConfig } = useBlogConfig();
    const headingText = computed(() => {
      return (searchConfig == null ? void 0 : searchConfig.heading) ? searchConfig.heading.replace(
        /\{\{searchResult\}\}/,
        searchResult.value.length
      ) : `共: ${searchResult.value.length} 个搜索结果`;
    });
    const openSearch = computed(
      () => searchConfig instanceof Object ? searchConfig.mode ?? true : searchConfig ?? true
    );
    const addInlineScript = () => {
      const scriptText = `import('${withBase("/_pagefind/pagefind.js")}')
        .then((module) => {
          window.__pagefind__ = module
        })
        .catch(() => {
          console.log('not load /_pagefind/pagefind.js')
        })`;
      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = scriptText;
      document.head.appendChild(inlineScript);
    };
    onBeforeMount(() => {
      if (openSearch.value === "pagefind") {
        addInlineScript();
      }
    });
    const metaKey = ref("");
    onMounted(() => {
      metaKey.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator == null ? void 0 : navigator.platform) ? "⌘" : "Ctrl";
    });
    const searchModal = ref(false);
    const searchWords = ref("");
    const docs = useArticles();
    const keys = useMagicKeys({
      passive: false,
      onEventFired(e) {
        if (e.ctrlKey && e.key === "k" && e.type === "keydown")
          e.preventDefault();
      }
    });
    const CmdK = keys["Meta+K"];
    const CtrlK = keys["Ctrl+K"];
    const Escape = keys["Escape"];
    watch(CtrlK, (v) => {
      if (v) {
        searchModal.value = true;
      }
    });
    watch(CmdK, (v) => {
      if (v) {
        searchModal.value = true;
      }
    });
    watch(Escape, (v) => {
      if (v) {
        searchModal.value = false;
      }
    });
    const searchResult = ref([]);
    const inlineSearch = () => {
      if (!searchWords.value) {
        searchResult.value = [];
        return;
      }
      searchResult.value = docs.value.filter(
        (v) => `${v.meta.description}${v.meta.title}`.includes(searchWords.value)
      ).map((v) => {
        var _a2, _b;
        return {
          ...v,
          meta: {
            ...v.meta,
            description: ((_b = (_a2 = v.meta) == null ? void 0 : _a2.description) == null ? void 0 : _b.replace(
              new RegExp(`(${searchWords.value})`, "g"),
              "<mark>$1</mark>"
            )) || ""
          }
        };
      });
      searchResult.value.sort((a, b) => {
        return +new Date(b.meta.date) - +new Date(a.meta.date);
      });
    };
    watch(
      () => searchWords.value,
      async () => {
        var _a2, _b, _c;
        if (openSearch.value === "pagefind") {
          if (!((_a2 = window == null ? void 0 : window.__pagefind__) == null ? void 0 : _a2.search)) {
            inlineSearch();
          } else {
            await ((_c = (_b = window == null ? void 0 : window.__pagefind__) == null ? void 0 : _b.search) == null ? void 0 : _c.call(_b, chineseSearchOptimize(searchWords.value)).then(async (search) => {
              const result = await Promise.all(
                search.results.map((v) => v.data())
              );
              searchResult.value = [];
              docs.value.forEach((v) => {
                const match = result.find(
                  (r) => r.url.startsWith(withBase(v.route))
                );
                if (match) {
                  searchResult.value.push({
                    ...v,
                    meta: {
                      ...v.meta,
                      description: match.excerpt
                    }
                  });
                }
              });
            }));
          }
        } else {
          inlineSearch();
        }
        nextTick(() => {
          document.querySelectorAll('div[aria-disabled="true"]').forEach((v) => {
            v.setAttribute("aria-disabled", "false");
          });
        });
      }
    );
    const handleClickMask = (e) => {
      if (e.target === e.currentTarget) {
        searchModal.value = false;
      }
    };
    watch(
      () => searchModal.value,
      (newValue) => {
        var _a2;
        if (newValue) {
          nextTick(() => {
            var _a3;
            (_a3 = document.querySelector("div[command-dialog-mask]")) == null ? void 0 : _a3.addEventListener("click", handleClickMask);
          });
        } else {
          (_a2 = document.querySelector("div[command-dialog-mask]")) == null ? void 0 : _a2.removeEventListener("click", handleClickMask);
        }
      }
    );
    const router = useRouter();
    const route = useRoute();
    const handleSelect = (target) => {
      searchModal.value = false;
      if (!route.path.startsWith(target.value)) {
        router.go(target.value);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _cssVars = { style: {
        "--31cd6434": flexValue.value
      } };
      if (openSearch.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "blog-search",
          "data-pagefind-ignore": "all"
        }, _attrs, _cssVars))} data-v-cbb6fd74><div class="nav-search-btn-wait" data-v-cbb6fd74><svg width="14" height="14" viewBox="0 0 20 20" data-v-cbb6fd74><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" data-v-cbb6fd74></path></svg>`);
        if (!isMinimized.value) {
          _push(`<span class="search-tip" data-v-cbb6fd74>${ssrInterpolate(((_a2 = unref(searchConfig)) == null ? void 0 : _a2.btnPlaceholder) || "搜索")}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (!isMinimized.value) {
          _push(`<span class="metaKey" data-v-cbb6fd74>${ssrInterpolate(metaKey.value)} K </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(unref(sn).Dialog, {
          visible: searchModal.value,
          theme: "algolia"
        }, createSlots({
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b;
            if (_push2) {
              _push2(ssrRenderComponent(unref(sn).Input, {
                value: searchWords.value,
                "onUpdate:value": ($event) => searchWords.value = $event,
                placeholder: ((_a3 = unref(searchConfig)) == null ? void 0 : _a3.placeholder) || "请输入要搜素的内容"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(sn).Input, {
                  value: searchWords.value,
                  "onUpdate:value": ($event) => searchWords.value = $event,
                  placeholder: ((_b = unref(searchConfig)) == null ? void 0 : _b.placeholder) || "请输入要搜素的内容"
                }, null, 8, ["value", "onUpdate:value", "placeholder"])
              ];
            }
          }),
          body: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="search-dialog" data-v-cbb6fd74${_scopeId}>`);
              _push2(ssrRenderComponent(unref(sn).List, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!searchResult.value.length) {
                      _push3(ssrRenderComponent(unref(sn).Empty, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a3, _b;
                          if (_push4) {
                            _push4(`${ssrInterpolate(((_a3 = unref(searchConfig)) == null ? void 0 : _a3.emptyText) || "No results found.")}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(((_b = unref(searchConfig)) == null ? void 0 : _b.emptyText) || "No results found."), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(sn).Group, { heading: headingText.value }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(searchResult.value, (item) => {
                              _push4(ssrRenderComponent(unref(sn).Item, {
                                "data-value": unref(withBase)(item.route),
                                key: item.route,
                                onSelect: handleSelect
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="link" data-v-cbb6fd74${_scopeId4}><div class="title" data-v-cbb6fd74${_scopeId4}><span data-v-cbb6fd74${_scopeId4}>${ssrInterpolate(item.meta.title)}</span><span class="date" data-v-cbb6fd74${_scopeId4}>${ssrInterpolate(unref(formatDate)(item.meta.date, "yyyy-MM-dd"))}</span></div><div class="des" data-v-cbb6fd74${_scopeId4}>${item.meta.description}</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "link" }, [
                                        createVNode("div", { class: "title" }, [
                                          createVNode("span", null, toDisplayString(item.meta.title), 1),
                                          createVNode("span", { class: "date" }, toDisplayString(unref(formatDate)(item.meta.date, "yyyy-MM-dd")), 1)
                                        ]),
                                        createVNode("div", {
                                          class: "des",
                                          innerHTML: item.meta.description
                                        }, null, 8, ["innerHTML"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(searchResult.value, (item) => {
                                return openBlock(), createBlock(unref(sn).Item, {
                                  "data-value": unref(withBase)(item.route),
                                  key: item.route,
                                  onSelect: handleSelect
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "link" }, [
                                      createVNode("div", { class: "title" }, [
                                        createVNode("span", null, toDisplayString(item.meta.title), 1),
                                        createVNode("span", { class: "date" }, toDisplayString(unref(formatDate)(item.meta.date, "yyyy-MM-dd")), 1)
                                      ]),
                                      createVNode("div", {
                                        class: "des",
                                        innerHTML: item.meta.description
                                      }, null, 8, ["innerHTML"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["data-value"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    }
                  } else {
                    return [
                      !searchResult.value.length ? (openBlock(), createBlock(unref(sn).Empty, { key: 0 }, {
                        default: withCtx(() => {
                          var _a3;
                          return [
                            createTextVNode(toDisplayString(((_a3 = unref(searchConfig)) == null ? void 0 : _a3.emptyText) || "No results found."), 1)
                          ];
                        }),
                        _: 1
                      })) : (openBlock(), createBlock(unref(sn).Group, {
                        key: 1,
                        heading: headingText.value
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(searchResult.value, (item) => {
                            return openBlock(), createBlock(unref(sn).Item, {
                              "data-value": unref(withBase)(item.route),
                              key: item.route,
                              onSelect: handleSelect
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "link" }, [
                                  createVNode("div", { class: "title" }, [
                                    createVNode("span", null, toDisplayString(item.meta.title), 1),
                                    createVNode("span", { class: "date" }, toDisplayString(unref(formatDate)(item.meta.date, "yyyy-MM-dd")), 1)
                                  ]),
                                  createVNode("div", {
                                    class: "des",
                                    innerHTML: item.meta.description
                                  }, null, 8, ["innerHTML"])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["data-value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["heading"]))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "search-dialog" }, [
                  createVNode(unref(sn).List, null, {
                    default: withCtx(() => [
                      !searchResult.value.length ? (openBlock(), createBlock(unref(sn).Empty, { key: 0 }, {
                        default: withCtx(() => {
                          var _a3;
                          return [
                            createTextVNode(toDisplayString(((_a3 = unref(searchConfig)) == null ? void 0 : _a3.emptyText) || "No results found."), 1)
                          ];
                        }),
                        _: 1
                      })) : (openBlock(), createBlock(unref(sn).Group, {
                        key: 1,
                        heading: headingText.value
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(searchResult.value, (item) => {
                            return openBlock(), createBlock(unref(sn).Item, {
                              "data-value": unref(withBase)(item.route),
                              key: item.route,
                              onSelect: handleSelect
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "link" }, [
                                  createVNode("div", { class: "title" }, [
                                    createVNode("span", null, toDisplayString(item.meta.title), 1),
                                    createVNode("span", { class: "date" }, toDisplayString(unref(formatDate)(item.meta.date, "yyyy-MM-dd")), 1)
                                  ]),
                                  createVNode("div", {
                                    class: "des",
                                    innerHTML: item.meta.description
                                  }, null, 8, ["innerHTML"])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["data-value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["heading"]))
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 2
        }, [
          searchResult.value.length ? {
            name: "footer",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="command-palette-logo" data-v-cbb6fd74${_scopeId}>`);
                if (openSearch.value === "pagefind") {
                  _push2(`<a href="https://github.com/cloudcannon/pagefind" target="_blank" rel="noopener noreferrer" data-v-cbb6fd74${_scopeId}><span class="command-palette-Label" data-v-cbb6fd74${_scopeId}>Search by</span>`);
                  _push2(ssrRenderComponent(LogoPagefind, { style: { "width": "77px" } }, null, _parent2, _scopeId));
                  _push2(`</a>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><ul class="command-palette-commands" data-v-cbb6fd74${_scopeId}><li data-v-cbb6fd74${_scopeId}><kbd class="command-palette-commands-key" data-v-cbb6fd74${_scopeId}><svg width="15" height="15" aria-label="Enter key" role="img" data-v-cbb6fd74${_scopeId}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" data-v-cbb6fd74${_scopeId}><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" data-v-cbb6fd74${_scopeId}></path></g></svg></kbd><span class="command-palette-Label" data-v-cbb6fd74${_scopeId}>to select</span></li><li data-v-cbb6fd74${_scopeId}><kbd class="command-palette-commands-key" data-v-cbb6fd74${_scopeId}><svg width="15" height="15" aria-label="Arrow down" role="img" data-v-cbb6fd74${_scopeId}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" data-v-cbb6fd74${_scopeId}><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3" data-v-cbb6fd74${_scopeId}></path></g></svg></kbd><kbd class="command-palette-commands-key" data-v-cbb6fd74${_scopeId}><svg width="15" height="15" aria-label="Arrow up" role="img" data-v-cbb6fd74${_scopeId}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" data-v-cbb6fd74${_scopeId}><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3" data-v-cbb6fd74${_scopeId}></path></g></svg></kbd><span class="command-palette-Label" data-v-cbb6fd74${_scopeId}>to navigate</span></li><li data-v-cbb6fd74${_scopeId}><kbd class="command-palette-commands-key" data-v-cbb6fd74${_scopeId}><svg width="15" height="15" aria-label="Escape key" role="img" data-v-cbb6fd74${_scopeId}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" data-v-cbb6fd74${_scopeId}><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" data-v-cbb6fd74${_scopeId}></path></g></svg></kbd><span class="command-palette-Label" data-v-cbb6fd74${_scopeId}>to close</span></li></ul>`);
              } else {
                return [
                  createVNode("div", { class: "command-palette-logo" }, [
                    openSearch.value === "pagefind" ? (openBlock(), createBlock("a", {
                      key: 0,
                      href: "https://github.com/cloudcannon/pagefind",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }, [
                      createVNode("span", { class: "command-palette-Label" }, "Search by"),
                      createVNode(LogoPagefind, { style: { "width": "77px" } })
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("ul", { class: "command-palette-commands" }, [
                    createVNode("li", null, [
                      createVNode("kbd", { class: "command-palette-commands-key" }, [
                        (openBlock(), createBlock("svg", {
                          width: "15",
                          height: "15",
                          "aria-label": "Enter key",
                          role: "img"
                        }, [
                          createVNode("g", {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.2"
                          }, [
                            createVNode("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" })
                          ])
                        ]))
                      ]),
                      createVNode("span", { class: "command-palette-Label" }, "to select")
                    ]),
                    createVNode("li", null, [
                      createVNode("kbd", { class: "command-palette-commands-key" }, [
                        (openBlock(), createBlock("svg", {
                          width: "15",
                          height: "15",
                          "aria-label": "Arrow down",
                          role: "img"
                        }, [
                          createVNode("g", {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.2"
                          }, [
                            createVNode("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" })
                          ])
                        ]))
                      ]),
                      createVNode("kbd", { class: "command-palette-commands-key" }, [
                        (openBlock(), createBlock("svg", {
                          width: "15",
                          height: "15",
                          "aria-label": "Arrow up",
                          role: "img"
                        }, [
                          createVNode("g", {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.2"
                          }, [
                            createVNode("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" })
                          ])
                        ]))
                      ]),
                      createVNode("span", { class: "command-palette-Label" }, "to navigate")
                    ]),
                    createVNode("li", null, [
                      createVNode("kbd", { class: "command-palette-commands-key" }, [
                        (openBlock(), createBlock("svg", {
                          width: "15",
                          height: "15",
                          "aria-label": "Escape key",
                          role: "img"
                        }, [
                          createVNode("g", {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.2"
                          }, [
                            createVNode("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" })
                          ])
                        ]))
                      ]),
                      createVNode("span", { class: "command-palette-Label" }, "to close")
                    ])
                  ])
                ];
              }
            }),
            key: "0"
          } : void 0
        ]), _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogSearch_vue_vue_type_style_index_0_scoped_cbb6fd74_lang = "";
const BlogSearch_vue_vue_type_style_index_1_lang = "";
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogSearch.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const BlogSearch = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-cbb6fd74"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "BlogRecommendArticle",
  __ssrInlineRender: true,
  setup(__props) {
    const { recommend: _recommend } = useBlogConfig();
    const recommend = computed(
      () => _recommend === false ? void 0 : _recommend
    );
    const title = computed(() => {
      var _a2;
      return ((_a2 = recommend.value) == null ? void 0 : _a2.title) || "🔍 相关文章";
    });
    const pageSize = computed(() => {
      var _a2;
      return ((_a2 = recommend.value) == null ? void 0 : _a2.pageSize) || 9;
    });
    const nextText = computed(() => {
      var _a2;
      return ((_a2 = recommend.value) == null ? void 0 : _a2.nextText) || "换一组";
    });
    const emptyText = computed(() => {
      var _a2;
      return ((_a2 = recommend.value) == null ? void 0 : _a2.empty) ?? "暂无推荐文章";
    });
    const docs = useArticles();
    const route = useRoute();
    const recommendList = computed(() => {
      const paths = decodeURIComponent(route.path).split("/");
      const origin = docs.value.map((v) => ({ ...v, route: withBase(v.route) })).filter(
        (v) => v.route.split("/").length === paths.length && v.route.startsWith(paths.slice(0, paths.length - 1).join("/"))
      ).filter((v) => !!v.meta.title).filter(
        (v) => {
          var _a2;
          return (((_a2 = recommend.value) == null ? void 0 : _a2.showSelf) ?? true) || v.route !== decodeURIComponent(route.path).replace(/.html$/, "");
        }
      ).filter((v) => v.meta.recommend !== false).filter((v) => {
        var _a2, _b;
        return ((_b = (_a2 = recommend.value) == null ? void 0 : _a2.filter) == null ? void 0 : _b.call(_a2, v)) ?? true;
      });
      const topList = origin.filter((v) => {
        var _a2;
        return (_a2 = v.meta) == null ? void 0 : _a2.recommend;
      });
      topList.sort((a, b) => Number(a.meta.recommend) - Number(b.meta.recommend));
      const normalList = origin.filter((v) => {
        var _a2;
        return !((_a2 = v.meta) == null ? void 0 : _a2.recommend);
      });
      normalList.sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));
      return topList.concat(normalList);
    });
    const isCurrentDoc = (value) => {
      return value === decodeURIComponent(route.path).replace(/.html$/, "");
    };
    const currentPage = ref(1);
    const changePage = () => {
      const newIdx = currentPage.value % Math.ceil(recommendList.value.length / pageSize.value);
      currentPage.value = newIdx + 1;
    };
    const currentWikiData = computed(() => {
      const startIdx = (currentPage.value - 1) * pageSize.value;
      const endIdx = startIdx + pageSize.value;
      return recommendList.value.slice(startIdx, endIdx);
    });
    const showChangeBtn = computed(() => {
      return recommendList.value.length > pageSize.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(_recommend) !== false && (recommendList.value.length || emptyText.value)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "card recommend",
          "data-pagefind-ignore": "all"
        }, _attrs))} data-v-e59163b6><div class="card-header" data-v-e59163b6><span class="title" data-v-e59163b6>${ssrInterpolate(title.value)}</span>`);
        if (showChangeBtn.value) {
          _push(ssrRenderComponent(unref(ElButton), {
            size: "small",
            type: "primary",
            text: "",
            onClick: changePage
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(nextText.value)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(nextText.value), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (currentWikiData.value.length) {
          _push(`<ol class="recommend-container" data-v-e59163b6><!--[-->`);
          ssrRenderList(currentWikiData.value, (v, idx) => {
            _push(`<li data-v-e59163b6><i class="num" data-v-e59163b6>${ssrInterpolate(idx + 1)}</i><div class="des" data-v-e59163b6>`);
            _push(ssrRenderComponent(unref(ElLink), {
              type: "info",
              class: ["title", {
                current: isCurrentDoc(v.route)
              }],
              href: v.route
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(v.meta.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(v.meta.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<div class="suffix" data-v-e59163b6><span class="tag" data-v-e59163b6>${ssrInterpolate(unref(formatShowDate)(v.meta.date))}</span></div></div></li>`);
          });
          _push(`<!--]--></ol>`);
        } else {
          _push(`<div class="empty-text" data-v-e59163b6>${ssrInterpolate(emptyText.value)}</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogRecommendArticle_vue_vue_type_style_index_0_scoped_e59163b6_lang = "";
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogRecommendArticle.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const BlogRecommendArticle = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-e59163b6"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "BlogSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "sidebar",
        "data-pagefind-ignore": "all"
      }, _attrs))} data-v-2339f5d3>`);
      _push(ssrRenderComponent(BlogRecommendArticle, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const BlogSidebar_vue_vue_type_style_index_0_scoped_2339f5d3_lang = "";
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogSidebar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const BlogSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-2339f5d3"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BlogImagePreview",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    const previewImageInfo = reactive(
      {
        url: "",
        list: [],
        idx: 0
      }
    );
    const previewImage = (e) => {
      const target = e.target;
      const currentTarget = e.currentTarget;
      if (target.tagName.toLowerCase() === "img") {
        const imgs = currentTarget.querySelectorAll(
          ".content-container .main img"
        );
        const idx = Array.from(imgs).findIndex((el) => el === target);
        const urls = Array.from(imgs).map((el) => el.src);
        const url = target.getAttribute("src");
        previewImageInfo.url = url;
        previewImageInfo.list = urls;
        previewImageInfo.idx = idx;
        show.value = true;
      }
    };
    onMounted(() => {
      const docDomContainer = document.querySelector("#VPContent");
      docDomContainer == null ? void 0 : docDomContainer.addEventListener("click", previewImage);
    });
    onUnmounted(() => {
      const docDomContainer = document.querySelector("#VPContent");
      docDomContainer == null ? void 0 : docDomContainer.removeEventListener("click", previewImage);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (show.value) {
        _push(ssrRenderComponent(unref(ElImageViewer), mergeProps({
          infinite: false,
          "hide-on-click-modal": "",
          teleported: "",
          onClose: ($event) => show.value = false,
          "url-list": previewImageInfo.list,
          "initial-index": previewImageInfo.idx
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogImagePreview.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BlogDocCover",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter } = useData$1();
    const cover = computed(() => frontmatter.value.cover);
    const { article } = useBlogConfig();
    const hiddenCover = computed(
      () => {
        var _a2;
        return ((_a2 = frontmatter.value) == null ? void 0 : _a2.hiddenCover) ?? (article == null ? void 0 : article.hiddenCover) ?? false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (cover.value && !hiddenCover.value) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "blog-doc-cover",
          src: cover.value
        }, _attrs))} data-v-bd7fa791>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogDocCover_vue_vue_type_style_index_0_scoped_bd7fa791_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogDocCover.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const BlogDocCover = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-bd7fa791"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BlogArticleAnalyze",
  __ssrInlineRender: true,
  setup(__props) {
    const { article, authorList } = useBlogConfig();
    const { frontmatter } = useData$1();
    const tags = computed(() => {
      const { tag, tags: tags2, categories } = frontmatter.value;
      return [
        ...new Set(
          [].concat(tag, tags2, categories).flat().filter((v) => !!v)
        )
      ];
    });
    const showAnalyze = computed(
      () => {
        var _a2;
        return ((_a2 = frontmatter.value) == null ? void 0 : _a2.readingTime) ?? (article == null ? void 0 : article.readingTime) ?? true;
      }
    );
    const wordCount = ref(0);
    const imageCount = ref(0);
    const wordTime = computed(() => {
      return ~~(wordCount.value / 275 * 60);
    });
    const imageTime = computed(() => {
      const n = imageCount.value;
      if (imageCount.value <= 10) {
        return n * 13 + n * (n - 1) / 2;
      }
      return 175 + (n - 10) * 3;
    });
    const readTime = computed(() => {
      return Math.ceil((wordTime.value + imageTime.value) / 60);
    });
    const route = useRoute();
    const $des = ref();
    const analyze = () => {
      var _a2, _b;
      if (!$des.value) {
        return;
      }
      document.querySelectorAll(".meta-des").forEach((v) => v.remove());
      const docDomContainer = window.document.querySelector("#VPContent");
      const imgs = docDomContainer == null ? void 0 : docDomContainer.querySelectorAll(
        ".content-container .main img"
      );
      imageCount.value = (imgs == null ? void 0 : imgs.length) || 0;
      const words = ((_a2 = docDomContainer == null ? void 0 : docDomContainer.querySelector(".content-container .main")) == null ? void 0 : _a2.textContent) || "";
      wordCount.value = countWord(words);
      (_b = docDomContainer == null ? void 0 : docDomContainer.querySelector("h1")) == null ? void 0 : _b.after($des.value);
    };
    onMounted(() => {
      const observer = new MutationObserver(() => {
        const targetInstance = document.querySelector("#hack-article-des");
        if (!targetInstance) {
          analyze();
        }
      });
      observer.observe(document.body, {
        childList: true,
        // 观察目标子节点的变化，是否有添加或者删除
        subtree: true
        // 观察后代节点，默认为 false
      });
      analyze();
    });
    const pv = ref(6666);
    const currentArticle = useCurrentArticle();
    const publishDate = computed(() => {
      var _a2, _b;
      return formatShowDate(((_b = (_a2 = currentArticle.value) == null ? void 0 : _a2.meta) == null ? void 0 : _b.date) || "");
    });
    const timeTitle = computed(
      () => frontmatter.value.date ? "发布时间" : "最近修改时间"
    );
    const hiddenTime = computed(() => frontmatter.value.date === false);
    const { theme: theme2 } = useData$1();
    const globalAuthor = computed(() => {
      var _a2;
      return ((_a2 = theme2.value.blog) == null ? void 0 : _a2.author) || "";
    });
    const author = computed(
      () => {
        var _a2;
        return (frontmatter.value.author || ((_a2 = currentArticle.value) == null ? void 0 : _a2.meta.author)) ?? globalAuthor.value;
      }
    );
    const currentAuthorInfo = computed(
      () => authorList == null ? void 0 : authorList.find((v) => author.value === v.nickname)
    );
    const hiddenAuthor = computed(() => frontmatter.value.author === false);
    watch(
      () => route.path,
      () => {
        pv.value = 123;
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<!--[-->`);
      if (showAnalyze.value) {
        _push(`<div class="doc-analyze" data-pagefind-ignore="all" data-v-6c068968><span data-v-6c068968>`);
        _push(ssrRenderComponent(unref(ElIcon), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(EditPen), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(EditPen))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` 字数：${ssrInterpolate(wordCount.value)} 个字 </span><span data-v-6c068968>`);
        _push(ssrRenderComponent(unref(ElIcon), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(AlarmClock), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(AlarmClock))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` 预计：${ssrInterpolate(readTime.value)} 分钟 </span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="meta-des" id="hack-article-des" data-v-6c068968>`);
      if (author.value && !hiddenAuthor.value) {
        _push(`<span class="author" data-v-6c068968>`);
        _push(ssrRenderComponent(unref(ElIcon), { title: "本文作者" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(UserFilled), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(UserFilled))
              ];
            }
          }),
          _: 1
        }, _parent));
        if (currentAuthorInfo.value) {
          _push(`<a class="link"${ssrRenderAttr("href", currentAuthorInfo.value.url)}${ssrRenderAttr("title", currentAuthorInfo.value.des)} data-v-6c068968>${ssrInterpolate(currentAuthorInfo.value.nickname)}</a>`);
        } else {
          _push(`<!--[-->${ssrInterpolate(author.value)}<!--]-->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (publishDate.value && !hiddenTime.value) {
        _push(`<span class="publishDate" data-v-6c068968>`);
        _push(ssrRenderComponent(unref(ElIcon), { title: timeTitle.value }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Clock), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Clock))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` ${ssrInterpolate(publishDate.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (tags.value.length) {
        _push(`<span class="tags" data-v-6c068968>`);
        _push(ssrRenderComponent(unref(ElIcon), { title: timeTitle.value }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(CollectionTag), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(CollectionTag))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(tags.value, (tag) => {
          _push(`<a class="link"${ssrRenderAttr("href", `/?tag=${tag}`)} data-v-6c068968>${ssrInterpolate(tag)}</a>`);
        });
        _push(`<!--]--></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BlogDocCover, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(BlogDocCover)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const BlogArticleAnalyze_vue_vue_type_style_index_0_scoped_6c068968_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogArticleAnalyze.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const BlogArticleAnalyze = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6c068968"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BlogAlert",
  __ssrInlineRender: true,
  setup(__props) {
    const { alert: alertProps } = useBlogConfig();
    const show = ref(false);
    onMounted(() => {
      const storageKey = "theme-blog-alert";
      const oldValue = localStorage.getItem(storageKey);
      const newValue = JSON.stringify(alertProps);
      localStorage.setItem(storageKey, newValue);
      if (Number(alertProps == null ? void 0 : alertProps.duration) >= 0) {
        show.value = true;
        if (alertProps == null ? void 0 : alertProps.duration) {
          setTimeout(() => {
            show.value = false;
          }, alertProps == null ? void 0 : alertProps.duration);
        }
      }
      if (oldValue !== newValue && (alertProps == null ? void 0 : alertProps.duration) === -1) {
        show.value = true;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e2, _f, _g;
      if (show.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "global-alert",
          "data-pagefind-ignore": "all"
        }, _attrs))} data-v-3263acc6>`);
        _push(ssrRenderComponent(unref(ElAlert), {
          title: (_a2 = unref(alertProps)) == null ? void 0 : _a2.title,
          type: (_b = unref(alertProps)) == null ? void 0 : _b.type,
          "show-icon": (_c = unref(alertProps)) == null ? void 0 : _c.showIcon,
          center: (_d = unref(alertProps)) == null ? void 0 : _d.center,
          closable: (_e2 = unref(alertProps)) == null ? void 0 : _e2.closable,
          "close-text": (_f = unref(alertProps)) == null ? void 0 : _f.closeText,
          description: (_g = unref(alertProps)) == null ? void 0 : _g.description
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b2, _c2, _d2;
            if (_push2) {
              if ((_a3 = unref(alertProps)) == null ? void 0 : _a3.html) {
                _push2(`<div data-v-3263acc6${_scopeId}>${(_b2 = unref(alertProps)) == null ? void 0 : _b2.html}</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                ((_c2 = unref(alertProps)) == null ? void 0 : _c2.html) ? (openBlock(), createBlock("div", {
                  key: 0,
                  innerHTML: (_d2 = unref(alertProps)) == null ? void 0 : _d2.html
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const BlogAlert_vue_vue_type_style_index_0_scoped_3263acc6_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogAlert.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BlogAlert = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3263acc6"]]);
!!(process.env.NODE_ENV !== "production") ? Object.freeze({}) : {};
!!(process.env.NODE_ENV !== "production") ? Object.freeze([]) : [];
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BlogPopover",
  __ssrInlineRender: true,
  setup(__props) {
    const { popover: popoverProps } = useBlogConfig();
    const show = ref(false);
    const bodyContent = computed(() => {
      return (popoverProps == null ? void 0 : popoverProps.body) || [];
    });
    const footerContent = computed(() => {
      return (popoverProps == null ? void 0 : popoverProps.footer) || [];
    });
    onMounted(() => {
      if (!(popoverProps == null ? void 0 : popoverProps.title)) {
        return;
      }
      const storageKey = "theme-blog-popover";
      const oldValue = localStorage.getItem(storageKey);
      const newValue = JSON.stringify(popoverProps);
      localStorage.setItem(storageKey, newValue);
      if (Number((popoverProps == null ? void 0 : popoverProps.duration) ?? "") >= 0) {
        show.value = true;
        if (popoverProps == null ? void 0 : popoverProps.duration) {
          setTimeout(() => {
            show.value = false;
          }, popoverProps == null ? void 0 : popoverProps.duration);
        }
      }
      if (oldValue !== newValue && (popoverProps == null ? void 0 : popoverProps.duration) === -1) {
        show.value = true;
      }
    });
    const PopoverValue = (props, { slots }) => {
      const { key, item } = props;
      if (item.type === "title") {
        return h(
          "h4",
          {
            style: parseStringStyle(item.style || "")
          },
          item.content
        );
      }
      if (item.type === "text") {
        return h(
          "p",
          {
            style: parseStringStyle(item.style || "")
          },
          item.content
        );
      }
      if (item.type === "image") {
        return h("img", {
          src: item.src,
          style: parseStringStyle(item.style || "")
        });
      }
      if (item.type === "button") {
        return h(
          ElButton,
          {
            type: "primary",
            onClick: () => {
              window.open(item.link, "_self");
            },
            style: parseStringStyle(item.style || ""),
            ...item.props
          },
          slots
        );
      }
      return h(
        "div",
        {
          key
        },
        ""
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c;
      _push(`<!--[--><div class="theme-blog-popover" style="${ssrRenderStyle(show.value ? null : { display: "none" })}" data-pagefind-ignore="all" data-v-d128ba36><div class="header" data-v-d128ba36><div class="title-wrapper" data-v-d128ba36>`);
      _push(ssrRenderComponent(unref(ElIcon), { size: "20px" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Flag), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Flag))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="title" data-v-d128ba36>${ssrInterpolate((_a2 = unref(popoverProps)) == null ? void 0 : _a2.title)}</span></div>`);
      _push(ssrRenderComponent(unref(ElIcon), {
        onClick: ($event) => show.value = false,
        class: "close-icon",
        size: "20px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CircleCloseFilled), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CircleCloseFilled))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (bodyContent.value.length) {
        _push(`<div class="body content" data-v-d128ba36><!--[-->`);
        ssrRenderList(bodyContent.value, (v, idx) => {
          _push(ssrRenderComponent(PopoverValue, {
            key: idx,
            item: v
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(v.type !== "image" ? v.content : "")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(v.type !== "image" ? v.content : ""), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        if (footerContent.value.length) {
          _push(`<hr data-v-d128ba36>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="footer content" data-v-d128ba36><!--[-->`);
      ssrRenderList(footerContent.value, (v, idx) => {
        _push(ssrRenderComponent(PopoverValue, {
          key: idx,
          item: v
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(v.type !== "image" ? v.content : "")}`);
            } else {
              return [
                createTextVNode(toDisplayString(v.type !== "image" ? v.content : ""), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="theme-blog-popover-close" style="${ssrRenderStyle(!show.value && (((_b = unref(popoverProps)) == null ? void 0 : _b.reopen) ?? true) && ((_c = unref(popoverProps)) == null ? void 0 : _c.title) ? null : { display: "none" })}" data-v-d128ba36>`);
      _push(ssrRenderComponent(unref(ElIcon), { size: "20px" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Flag), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Flag))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const BlogPopover_vue_vue_type_style_index_0_scoped_d128ba36_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogPopover.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BlogPopover = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d128ba36"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BlogApp",
  __ssrInlineRender: true,
  setup(__props) {
    const isBlogTheme = useBlogThemeMode();
    const { Layout: Layout2 } = theme;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(ssrRenderComponent(unref(Layout2), _attrs, createSlots({
        "layout-top": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BlogAlert, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(BlogPopover, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(BlogAlert),
              createVNode(BlogPopover)
            ];
          }
        }),
        "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(BlogArticleAnalyze, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(BlogArticleAnalyze)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(BlogArticleAnalyze)
                ]),
                _: 1
              }),
              createVNode(_sfc_main$7)
            ];
          }
        }),
        "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BlogSearch, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(BlogSearch)
            ];
          }
        }),
        "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BlogComment, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(BlogComment)
            ];
          }
        }),
        _: 2
      }, [
        unref(isBlogTheme) ? {
          name: "home-hero-before",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="home" data-v-c411f8e0${_scopeId}><div class="header-banner" data-v-c411f8e0${_scopeId}>`);
              _push2(ssrRenderComponent(BlogHomeBanner, null, null, _parent2, _scopeId));
              _push2(`</div><div class="content-wrapper" data-v-c411f8e0${_scopeId}><div class="blog-list-wrapper" data-v-c411f8e0${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$d, null, null, _parent2, _scopeId));
              _push2(`</div><div class="blog-info-wrapper" data-v-c411f8e0${_scopeId}>`);
              _push2(ssrRenderComponent(BlogHomeInfo, null, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "home" }, [
                  createVNode("div", { class: "header-banner" }, [
                    createVNode(BlogHomeBanner)
                  ]),
                  createVNode("div", { class: "content-wrapper" }, [
                    createVNode("div", { class: "blog-list-wrapper" }, [
                      createVNode(_sfc_main$d)
                    ]),
                    createVNode("div", { class: "blog-info-wrapper" }, [
                      createVNode(BlogHomeInfo)
                    ])
                  ])
                ])
              ];
            }
          }),
          key: "0"
        } : void 0,
        unref(isBlogTheme) ? {
          name: "sidebar-nav-after",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(BlogSidebar, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(BlogSidebar)
              ];
            }
          }),
          key: "1"
        } : void 0
      ]), _parent));
    };
  }
});
const BlogApp_vue_vue_type_style_index_0_scoped_c411f8e0_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/BlogApp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BlogApp = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c411f8e0"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>时间线页面</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/TimelinePage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TimelinePage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;
const slugify = (str) => str.normalize("NFKD").replace(rCombining, "").replace(rControl, "").replace(rSpecial, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserWorks",
  __ssrInlineRender: true,
  setup(__props) {
    const currentAnchor = useAutoUpdateAnchor();
    watch(
      () => currentAnchor.id,
      (val) => {
        if (val) {
          window.history.replaceState(null, "", `#${val}`);
        }
      }
    );
    const mountActiveAnchorEl = useActiveAnchor();
    watch(mountActiveAnchorEl, () => {
      const { value } = mountActiveAnchorEl;
      if (value) {
        value.scroll({
          behavior: "smooth"
        });
      }
    });
    const works = useUserWorks();
    const workList = reactive([]);
    watch(
      works,
      (val) => {
        const sortDate = [...val.list].map((v) => {
          const { time } = v;
          const metaInfo = typeof time === "string" ? {
            startTime: time,
            endTime: "",
            lastUpdate: ""
          } : {
            startTime: time.start,
            endTime: time.end,
            lastUpdate: time.lastupdate
          };
          const covers = [];
          let coverLayout = "swiper";
          if (typeof v.cover === "string") {
            covers.push(v.cover);
          } else if (Array.isArray(v.cover)) {
            covers.push(...v.cover);
          } else if (typeof v.cover === "object") {
            covers.push(...v.cover.urls);
            coverLayout = v.cover.layout ?? coverLayout;
          }
          return {
            ...v,
            ...metaInfo,
            covers,
            coverLayout
          };
        });
        const topDate = sortDate.filter((v) => v.top !== void 0);
        const normalDate = sortDate.filter((v) => v.top === void 0);
        topDate.sort((a, b) => a.top - b.top);
        normalDate.sort((a, b) => +new Date(b.startTime) - +new Date(a.startTime));
        if (topDate.length) {
          topDate[0].year = works.value.topTitle ?? "置顶";
        }
        const groupDate = normalDate.reduce((prev, cur) => {
          const { startTime } = cur;
          const year = new Date(startTime).getFullYear();
          const data = { ...cur };
          if (!prev[year]) {
            prev[year] = [];
            data.year = year;
          }
          prev[year].push(data);
          return prev;
        }, {});
        workList.push(...topDate, ...Object.values(groupDate).reverse().flat());
      },
      { immediate: true }
    );
    const init = ref(true);
    watchEffect(() => {
      if (workList.length && init.value) {
        init.value = false;
        workList.forEach((data) => {
          if (!data.lastUpdate && data.github) {
            data.lastUpdate = "获取中...";
            const { github } = data;
            if (typeof github === "string") {
              getGithubUpdateTime(github).then((time) => {
                data.lastUpdate = formatDate(time, "yyyy-MM-dd");
              }).catch(() => {
                data.lastUpdate = "地址解析失败";
              });
            } else {
              const { owner, repo, path, branch } = github;
              let githubUrl = `https://github.com/${owner}/${repo}`;
              if (path) {
                githubUrl += `/tree/${branch || "master"}/${path}`;
              } else if (branch) {
                githubUrl += `/tree/${branch}`;
              }
              data.github = githubUrl;
              getGithubDirUpdateTime(owner, repo, path ?? "", branch).then((time) => {
                data.lastUpdate = formatDate(time, "yyyy-MM-dd");
              }).catch(() => {
                data.lastUpdate = "地址解析失败";
              });
            }
          }
        });
      }
    });
    const { width } = useWindowSize();
    const isCardMode = computed(() => width.value > 768);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = resolveComponent("Badge");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-works-page VPDoc" }, _attrs))} data-v-626d0844><div class="aside-container" data-v-626d0844><div class="filter" data-v-626d0844><div data-v-626d0844></div><div data-v-626d0844></div></div></div><div class="works" data-v-626d0844><h1 data-v-626d0844>${ssrInterpolate(unref(works).title)}</h1>`);
      if (unref(works).description) {
        _push(`<p class="description" data-v-626d0844>${ssrInterpolate(unref(works).description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(workList, (work, idx) => {
        var _a2, _b, _c, _d, _e2;
        _push(`<div class="work" data-v-626d0844>`);
        if (work.year) {
          _push(`<h2${ssrRenderAttr("id", `work_${work.year}`)} data-v-626d0844><a${ssrRenderAttr("href", `#work_${work.year}`)} data-v-626d0844>${ssrInterpolate(work.year)}</a></h2>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3 class="title"${ssrRenderAttr("id", unref(slugify)(work.title))} data-v-626d0844><a class="pin"${ssrRenderAttr("href", "#" + unref(slugify)(work.title))} data-v-626d0844></a>`);
        if (work.url) {
          _push(`<a rel="noopener" target="_blank"${ssrRenderAttr("href", work.url)} data-v-626d0844>${ssrInterpolate(work.title)}</a>`);
        } else {
          _push(`<span data-v-626d0844>${ssrInterpolate(work.title)}</span>`);
        }
        if (work.status) {
          _push(ssrRenderComponent(_component_Badge, {
            type: ((_a2 = work.status) == null ? void 0 : _a2.type) || "tip"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(work.status.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(work.status.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</h3><div class="info" data-v-626d0844><div class="times" data-v-626d0844><span class="icon" data-v-626d0844><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" data-v-626d0844><title data-v-626d0844>上线时间</title><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" fill="currentColor" data-v-626d0844></path></svg></span><span data-v-626d0844>${ssrInterpolate(work.startTime)}</span>`);
        if (work.endTime) {
          _push(`<span data-v-626d0844> - ${ssrInterpolate(work.endTime)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (work.github) {
          _push(`<div class="links" data-v-626d0844>`);
          if (work.github) {
            _push(`<a class="github-link"${ssrRenderAttr("href", work.github)} target="_blank" rel="noopener" data-v-626d0844><i class="icon" data-v-626d0844><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 512" data-v-626d0844><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z" fill="currentColor" data-v-626d0844></path></svg></i>`);
            if (work.lastUpdate) {
              _push(`<span class="lastupdate" data-v-626d0844>最后更新时间：${ssrInterpolate(work.lastUpdate)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_b = work.links) == null ? void 0 : _b.length) {
          _push(`<div class="links" data-v-626d0844>`);
          if ((_c = work.links) == null ? void 0 : _c.length) {
            _push(`<i class="icon" data-v-626d0844><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" data-v-626d0844><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-626d0844><path d="M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5" data-v-626d0844></path><path d="M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 0 0 5 5l.5-.5" data-v-626d0844></path></g></svg></i>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(work.links || [], (link2) => {
            _push(`<a class="link"${ssrRenderAttr("href", link2.url)}${ssrRenderAttr("title", link2.title)} target="_blank" rel="noopener" data-v-626d0844>${ssrInterpolate(link2.title)}</a>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_d = work.tags) == null ? void 0 : _d.length) {
          _push(`<div class="tags" data-v-626d0844><i class="icon" data-v-626d0844><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-d328c40a="" data-v-626d0844><path fill="currentColor" d="M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z" data-v-626d0844></path></svg></i><!--[-->`);
          ssrRenderList(work.tags, (tag) => {
            _push(`<span class="tag" data-v-626d0844>${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if ((_e2 = work.covers) == null ? void 0 : _e2.length) {
          _push(`<div class="images" data-v-626d0844>`);
          if (work.coverLayout === "swiper") {
            _push(`<div class="swiper-mode" data-v-626d0844>`);
            _push(ssrRenderComponent(unref(ElCarousel), {
              autoplay: "",
              height: "260px",
              type: isCardMode.value && work.covers.length >= 3 ? "card" : ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<!--[-->`);
                  ssrRenderList(work.covers, (url, idx2) => {
                    _push2(ssrRenderComponent(unref(ElCarouselItem), {
                      style: { "text-align": "center" },
                      key: url
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(unref(ElImage), {
                            "preview-teleported": "",
                            key: url,
                            src: url,
                            loading: "lazy",
                            "preview-src-list": work.covers,
                            "initial-index": idx2,
                            "hide-on-click-modal": "",
                            alt: work.title + "-" + idx2
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            (openBlock(), createBlock(unref(ElImage), {
                              "preview-teleported": "",
                              key: url,
                              src: url,
                              loading: "lazy",
                              "preview-src-list": work.covers,
                              "initial-index": idx2,
                              "hide-on-click-modal": "",
                              alt: work.title + "-" + idx2
                            }, null, 8, ["src", "preview-src-list", "initial-index", "alt"]))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(work.covers, (url, idx2) => {
                      return openBlock(), createBlock(unref(ElCarouselItem), {
                        style: { "text-align": "center" },
                        key: url
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(unref(ElImage), {
                            "preview-teleported": "",
                            key: url,
                            src: url,
                            loading: "lazy",
                            "preview-src-list": work.covers,
                            "initial-index": idx2,
                            "hide-on-click-modal": "",
                            alt: work.title + "-" + idx2
                          }, null, 8, ["src", "preview-src-list", "initial-index", "alt"]))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (work.coverLayout === "list") {
            _push(`<div class="list-mode" data-v-626d0844><!--[-->`);
            ssrRenderList(work.covers, (url, idx2) => {
              _push(ssrRenderComponent(unref(ElImage), {
                key: url,
                src: url,
                loading: "lazy",
                "preview-src-list": work.covers,
                "initial-index": idx2,
                "hide-on-click-modal": ""
              }, null, _parent));
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="description" data-v-626d0844>${work.description}</div></div>`);
      });
      _push(`<!--]--></div><div class="aside-container" data-v-626d0844><div class="aside-outline-container" data-v-626d0844>`);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const UserWorks_vue_vue_type_style_index_0_scoped_626d0844_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/registry.npmmirror.com+@sugarat+theme@0.1.31_vue@3.3.4/node_modules/@sugarat/theme/src/components/UserWorks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserWorksPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-626d0844"]]);
const BlogTheme = {
  ...theme,
  Layout: withConfigProvider(BlogApp),
  enhanceApp(ctx) {
    theme.enhanceApp(ctx);
    ctx.app.component("TimelinePage", TimelinePage);
    ctx.app.component("UserWorksPage", UserWorksPage);
  }
};
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    managedHeadTags.forEach((el) => document.head.removeChild(el));
    managedHeadTags = [];
    newTags.forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el);
      managedHeadTags.push(el);
    });
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    document.title = createTitle(siteData2, pageData);
    document.querySelector(`meta[name=description]`).setAttribute("content", pageDescription || siteData2.description);
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { target } = link2;
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          target !== `_blank` && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a2;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a2 = el.nextElementSibling) == null ? void 0 : _a2.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        let text = "";
        sibling.querySelectorAll("span.line:not(.diff.remove)").forEach((node) => text += (node.textContent || "") + "\n");
        text = text.slice(0, -1);
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a2, _b;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a2 = el.parentElement) == null ? void 0 : _a2.parentElement;
        const i = Array.from((group == null ? void 0 : group.querySelectorAll("input")) || []).indexOf(el);
        const current = group == null ? void 0 : group.querySelector('div[class*="language-"].active');
        const next = (_b = group == null ? void 0 : group.querySelectorAll('div[class*="language-"]:not(.language-id)')) == null ? void 0 : _b[i];
        if (current && next && current !== next) {
          current.classList.remove("active");
          next.classList.add("active");
        }
      }
    });
  }
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base2 = resolveThemeExtends(theme2.extends);
    return {
      ...base2,
      ...theme2,
      async enhanceApp(ctx) {
        if (base2.enhanceApp)
          await base2.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(BlogTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData$1();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang;
        document.documentElement.dir = site.value.dir;
      });
    });
    {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return import(
      /*@vite-ignore*/
      pageFilePath
    );
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "" };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  render
};
