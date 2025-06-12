import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_CA7pQFHm.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BJih1GQZ.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/calvin/Documents/Code/portfolio/","cacheDir":"file:///home/calvin/Documents/Code/portfolio/node_modules/.astro/","outDir":"file:///home/calvin/Documents/Code/portfolio/dist/","srcDir":"file:///home/calvin/Documents/Code/portfolio/src/","publicDir":"file:///home/calvin/Documents/Code/portfolio/public/","buildClientDir":"file:///home/calvin/Documents/Code/portfolio/dist/client/","buildServerDir":"file:///home/calvin/Documents/Code/portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CpDBPu18.js"}],"styles":[{"type":"inline","content":":where([data-astro-image]){object-fit:var(--fit);object-position:var(--pos);height:auto}:where([data-astro-image=full-width]){width:100%}:where([data-astro-image=constrained]){max-width:100%}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CpDBPu18.js"}],"styles":[{"type":"external","src":"/_astro/about.O1z4NUDY.css"},{"type":"inline","content":"b[data-astro-cid-wixuki3h]{display:inline-block;margin:0 -.25rem;border-radius:.25em;background-color:var(--text-color);padding:.15em .45em;color:var(--base);&::selection,>a::selection{background-color:var(--base);color:var(--text-color)}>a,>a:before,>a:after{color:var(--base)}}li[data-astro-cid-gqilxyee]{margin:0;padding:0;list-style:none;white-space:nowrap;&::marker{all:unset;content:\"\"}}ul[data-astro-cid-idg6lw7b]{display:flex;flex-wrap:wrap;gap:1em;margin:0;padding:0;list-style:none}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CpDBPu18.js"}],"styles":[{"type":"external","src":"/_astro/about.O1z4NUDY.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CpDBPu18.js"}],"styles":[{"type":"external","src":"/_astro/about.O1z4NUDY.css"}],"routeData":{"route":"/demos","isIndex":false,"type":"page","pattern":"^\\/demos\\/?$","segments":[[{"content":"demos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/demos.astro","pathname":"/demos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CpDBPu18.js"}],"styles":[{"type":"external","src":"/_astro/about.O1z4NUDY.css"},{"type":"inline","content":"b[data-astro-cid-wixuki3h]{display:inline-block;margin:0 -.25rem;border-radius:.25em;background-color:var(--text-color);padding:.15em .45em;color:var(--base);&::selection,>a::selection{background-color:var(--base);color:var(--text-color)}>a,>a:before,>a:after{color:var(--base)}}li[data-astro-cid-gqilxyee]{margin:0;padding:0;list-style:none;white-space:nowrap;&::marker{all:unset;content:\"\"}}ul[data-astro-cid-idg6lw7b]{display:flex;flex-wrap:wrap;gap:1em;margin:0;padding:0;list-style:none}\n:where([data-astro-image]){object-fit:var(--fit);object-position:var(--pos);height:auto}:where([data-astro-image=full-width]){width:100%}:where([data-astro-image=constrained]){max-width:100%}\n"}],"routeData":{"route":"/experience/[slug]","isIndex":false,"type":"page","pattern":"^\\/experience\\/([^/]+?)\\/?$","segments":[[{"content":"experience","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/experience/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CpDBPu18.js"}],"styles":[{"type":"external","src":"/_astro/about.O1z4NUDY.css"},{"type":"inline","content":":where([data-astro-image]){object-fit:var(--fit);object-position:var(--pos);height:auto}:where([data-astro-image=full-width]){width:100%}:where([data-astro-image=constrained]){max-width:100%}\n"}],"routeData":{"route":"/experience","isIndex":false,"type":"page","pattern":"^\\/experience\\/?$","segments":[[{"content":"experience","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experience.astro","pathname":"/experience","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CpDBPu18.js"}],"styles":[{"type":"external","src":"/_astro/about.O1z4NUDY.css"},{"type":"inline","content":"#logo[data-astro-cid-j7pv25f6],#logo-md[data-astro-cid-j7pv25f6],#logo-sm[data-astro-cid-j7pv25f6]{font-weight:700}#logo[data-astro-cid-j7pv25f6],#logo-md[data-astro-cid-j7pv25f6]{display:none}#logo-sm[data-astro-cid-j7pv25f6]{display:block}@media screen and (min-width: 320px){#logo[data-astro-cid-j7pv25f6]{display:none}#logo-md[data-astro-cid-j7pv25f6]{display:block}#logo-sm[data-astro-cid-j7pv25f6]{display:none}}@media screen and (min-width: 640px){#logo[data-astro-cid-j7pv25f6]{display:block}#logo-md[data-astro-cid-j7pv25f6],#logo-sm[data-astro-cid-j7pv25f6]{display:none}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/calvin/Documents/Code/portfolio/src/pages/experience.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/experience@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/calvin/Documents/Code/portfolio/src/pages/experience/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/experience/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/calvin/Documents/Code/portfolio/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["/home/calvin/Documents/Code/portfolio/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["/home/calvin/Documents/Code/portfolio/src/pages/demos.astro",{"propagation":"in-tree","containsHead":true}],["/home/calvin/Documents/Code/portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/calvin/Documents/Code/portfolio/src/layouts/FrameLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/demos@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/experience/[slug]@_@astro":"pages/experience/_slug_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/demos@_@astro":"pages/demos.astro.mjs","\u0000@astro-page:src/pages/experience@_@astro":"pages/experience.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/home/calvin/Documents/Code/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DEPSJKdl.mjs","/home/calvin/Documents/Code/portfolio/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/calvin/Documents/Code/portfolio/.astro/content-modules.mjs":"chunks/content-modules_kzJFAKKF.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Bctu8400.mjs","/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/calvin-bonner-design-llc.mdx?astroPropagatedAssets":"chunks/calvin-bonner-design-llc_CyWg6XqN.mjs","/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/crowe-llp.mdx?astroPropagatedAssets":"chunks/crowe-llp_CvCB60Ms.mjs","/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/parent-teacher-co-op.mdx?astroPropagatedAssets":"chunks/parent-teacher-co-op_C2I3PWwZ.mjs","/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/personal-contracting.mdx?astroPropagatedAssets":"chunks/personal-contracting_DJdeZziV.mjs","/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/kodiak-llc.mdx?astroPropagatedAssets":"chunks/kodiak-llc_Bw1FeFZr.mjs","/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/the-connected-product-llc.mdx?astroPropagatedAssets":"chunks/the-connected-product-llc_-dlQHu8s.mjs","/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/calvin-bonner-design-llc.mdx":"chunks/calvin-bonner-design-llc_DDwr4ZV3.mjs","/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/crowe-llp.mdx":"chunks/crowe-llp_DLROT3oO.mjs","/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/parent-teacher-co-op.mdx":"chunks/parent-teacher-co-op_Y7KoFNEC.mjs","/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/personal-contracting.mdx":"chunks/personal-contracting_DL5iz5Bq.mjs","/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/kodiak-llc.mdx":"chunks/kodiak-llc_CEXdUGoL.mjs","/home/calvin/Documents/Code/portfolio/src/assets/md/expreience/the-connected-product-llc.mdx":"chunks/the-connected-product-llc_Vslmu_bG.mjs","\u0000@astrojs-manifest":"manifest_C9CPUNim.mjs","@components/background":"_astro/background.CPCvjicF.js","@astrojs/svelte/client.js":"_astro/client.svelte.5gWgL6si.js","/home/calvin/Documents/Code/portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","astro:scripts/page.js":"_astro/page.CpDBPu18.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/house.nbeTysIe.svg","/_astro/briefcase.DDNhXVFq.svg","/_astro/lightbulb.C0wR536H.svg","/_astro/user.BXUwIZEx.svg","/_astro/messages.D9LsyEN6.svg","/_astro/about.O1z4NUDY.css","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/_astro/about.FXz39q9y.css","/_astro/background.CPCvjicF.js","/_astro/client.svelte.5gWgL6si.js","/_astro/page.CpDBPu18.js","/_astro/template.BlZmXojx.js","/_astro/page.CpDBPu18.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Z4/DArW153sFQ1MLwHgcKhcW6rKKE2EeQDXRLfPbHZ0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
