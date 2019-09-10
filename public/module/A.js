import { S as SvelteElement, i as init, a as insert_dev, f as flush, s as safe_not_equal, d as dispatch_dev, e as element, t as text, b as space, n as noop, c as attr_dev, g as add_location, h as append_dev, j as set_data_dev, k as detach_dev } from './index-2d5a9333.js';

/* src/components/A.svelte generated by Svelte v3.12.0 */

const file = "src/components/A.svelte";

function create_fragment(ctx) {
	var div, h2, t0, t1, slot;

	const block = {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t0 = text(ctx.exemplo);
			t1 = space();
			slot = element("slot");
			this.c = noop;
			attr_dev(h2, "class", "_demo_title");
			add_location(h2, file, 7, 1, 124);
			add_location(slot, file, 8, 1, 164);
			attr_dev(div, "class", "_demo_base");
			add_location(div, file, 6, 0, 98);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h2);
			append_dev(h2, t0);
			append_dev(div, t1);
			append_dev(div, slot);
		},

		p: function update(changed, ctx) {
			if (changed.exemplo) {
				set_data_dev(t0, ctx.exemplo);
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { exemplo = 'Apenas um show!!!' } = $$props;

	const writable_props = ['exemplo'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<a-element> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('exemplo' in $$props) $$invalidate('exemplo', exemplo = $$props.exemplo);
	};

	$$self.$capture_state = () => {
		return { exemplo };
	};

	$$self.$inject_state = $$props => {
		if ('exemplo' in $$props) $$invalidate('exemplo', exemplo = $$props.exemplo);
	};

	return { exemplo };
}

class A extends SvelteElement {
	constructor(options) {
		super();

		this.shadowRoot.innerHTML = `<style>:host{--bgColor:hsla(200, 100%, 50%, 0.5);--txtColor:hsla(100, 50%, 50%, 1)}._demo_base{box-sizing:border-box;padding:1em;max-width:1000px;margin:1em auto;background-color:var(--bgColor)}._demo_title{color:var(--txtColor)}
		/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQS5zdmVsdGUiLCJzb3VyY2VzIjpbIkEuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdmVsdGU6b3B0aW9ucyB0YWc9XCJhLWVsZW1lbnRcIiAvPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IGV4ZW1wbG8gPSAnQXBlbmFzIHVtIHNob3chISEnXG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cIl9kZW1vX2Jhc2VcIj5cblx0PGgyIGNsYXNzPVwiX2RlbW9fdGl0bGVcIj57ZXhlbXBsb308L2gyPlxuXHQ8c2xvdD48L3Nsb3Q+XG48L2Rpdj5cblxuPHN0eWxlPlxuOmhvc3Qge1xuXHQtLWJnQ29sb3I6IGhzbGEoMjAwLCAxMDAlLCA1MCUsIDAuNSk7XG5cdC0tdHh0Q29sb3I6IGhzbGEoMTAwLCA1MCUsIDUwJSwgMSk7XG59XG5cbi5fZGVtb19iYXNlIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdHBhZGRpbmc6IDFlbTtcblx0XHRtYXgtd2lkdGg6IDEwMDBweDtcblx0XHRtYXJnaW46IDFlbSBhdXRvO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQ29sb3IpO1xuXHR9XG5cbi5fZGVtb190aXRsZSB7XG5cdGNvbG9yOiB2YXIoLS10eHRDb2xvcik7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBLEtBQUssQUFBQyxDQUFDLEFBQ04sU0FBUyxDQUFFLHlCQUF5QixDQUNwQyxVQUFVLENBQUUsc0JBQXNCLEFBQ25DLENBQUMsQUFFRCxXQUFXLEFBQUMsQ0FBQyxBQUNYLFVBQVUsQ0FBRSxVQUFVLENBQ3RCLE9BQU8sQ0FBRSxHQUFHLENBQ1osU0FBUyxDQUFFLE1BQU0sQ0FDakIsTUFBTSxDQUFFLEdBQUcsQ0FBQyxJQUFJLENBQ2hCLGdCQUFnQixDQUFFLElBQUksU0FBUyxDQUFDLEFBQ2pDLENBQUMsQUFFRixZQUFZLEFBQUMsQ0FBQyxBQUNiLEtBQUssQ0FBRSxJQUFJLFVBQVUsQ0FBQyxBQUN2QixDQUFDIn0= */</style>`;

		init(this, { target: this.shadowRoot }, instance, create_fragment, safe_not_equal, ["exemplo"]);

		if (options) {
			if (options.target) {
				insert_dev(options.target, this, options.anchor);
			}

			if (options.props) {
				this.$set(options.props);
				flush();
			}
		}
	}

	static get observedAttributes() {
		return ["exemplo"];
	}

	get exemplo() {
		return this.$$.ctx.exemplo;
	}

	set exemplo(exemplo) {
		this.$set({ exemplo });
		flush();
	}
}

customElements.define("a-element", A);

export default A;
//# sourceMappingURL=A.js.map
