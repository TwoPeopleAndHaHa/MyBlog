import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","blog":{"name":"Er人与黑","motto":"渴不饮盗泉水，热不息恶木阴","inspiring":"少睡觉,多看报","pageSize":6},"features":[{"title":"❤ 郑坦普尔 ❤","details":"❤ 郑坦普尔 ❤"},{"title":"Hello Word","details":"Hello Word"},{"title":"东子哥的爱心小屋 ❤","details":"东子哥的爱心小屋 ❤"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1687871526000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
