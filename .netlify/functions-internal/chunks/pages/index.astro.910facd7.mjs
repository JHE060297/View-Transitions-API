/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent } from '../astro.7e64c46e.mjs';
import { $ as $$Layout } from './404.astro.c3185d30.mjs';
import { b as books } from './_book_.astro.c566f473.mjs';

const $$Astro$3 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead($$result)}<h1 class="font-black uppercase text-6xl md:text-8xl text-center py-8 px-4" style="view-transition-name: book-title">
   Libros de
 <span class="block text-[36px] md:text-[58px]">programación</span>
</h1>`;
}, "C:/Users/alex1/OneDrive - uniminuto.edu/Projects/jhe-books/src/components/Title.astro");

const $$Astro$2 = createAstro();
const $$BookItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BookItem;
  const {
    id,
    title,
    img
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl"${addAttribute(`/${id}`, "href")}>
    <img class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"${addAttribute(img, "src")}${addAttribute(`Portada del libro ${title}`, "alt")}${addAttribute(`view-transition-name: book-${id}`, "style")}>    
</a>`;
}, "C:/Users/alex1/OneDrive - uniminuto.edu/Projects/jhe-books/src/components/BookItem.astro");

const $$Astro$1 = createAstro();
const $$ListOfBooks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListOfBooks;
  return renderTemplate`${maybeRenderHead($$result)}<ul class="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
    ${books.map(({ id, title, img }) => {
    return renderTemplate`<li>
                    ${renderComponent($$result, "BookItem", $$BookItem, { "id": id, "title": title, "img": img })}
                </li>`;
  })}            
</ul>`;
}, "C:/Users/alex1/OneDrive - uniminuto.edu/Projects/jhe-books/src/components/ListOfBooks.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Libros de programacion." }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main class="m-auto max-w-4xl">
		${renderComponent($$result2, "Title", $$Title, {})}
		${renderComponent($$result2, "ListOfBooks", $$ListOfBooks, {})}

	</main>
` })}`;
}, "C:/Users/alex1/OneDrive - uniminuto.edu/Projects/jhe-books/src/pages/index.astro");

const $$file = "C:/Users/alex1/OneDrive - uniminuto.edu/Projects/jhe-books/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
