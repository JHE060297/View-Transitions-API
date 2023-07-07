/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent, m as maybeRenderHead } from '../astro.7e64c46e.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
		<meta name="view-transition" content="same-origin">
	${renderHead($$result)}</head>
	<body>
		<div id="content">
			${renderSlot($$result, $$slots["default"])}
		</div>
		
	

</body></html>`;
}, "C:/Users/alex1/OneDrive - uniminuto.edu/Projects/jhe-books/src/layouts/Layout.astro");

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404, no lo he encontrado" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<main class="max-w-4 xl m-auto min-h-screen grid place-content-center text-center">
    <h1 class="text-4xl font-black mb-4">Oh, vaya. ¡Lo has roto!</h1>
    <img src="https://midu.dev/images/this-is-fine-404.gif">
  </main>
` })}`;
}, "C:/Users/alex1/OneDrive - uniminuto.edu/Projects/jhe-books/src/pages/404.astro");

const $$file = "C:/Users/alex1/OneDrive - uniminuto.edu/Projects/jhe-books/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
