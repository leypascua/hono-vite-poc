				import worker, * as OTHER_EXPORTS from "E:\\src\\leypascua\\hono-vite-poc\\src\\app\\server\\wrangler.server.ts";
				import * as __MIDDLEWARE_0__ from "E:\\src\\leypascua\\hono-vite-poc\\node_modules\\wrangler\\templates\\middleware\\middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "E:\\src\\leypascua\\hono-vite-poc\\node_modules\\wrangler\\templates\\middleware\\middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "E:\\src\\leypascua\\hono-vite-poc\\src\\app\\server\\wrangler.server.ts";
				export default worker;