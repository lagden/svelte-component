<svelte:options tag="a-element" />

<script>
	export let exemplo = 'Apenas um show!!!'
</script>

<div class="_demo_base">
	<h2 class="_demo_title">{exemplo}</h2>
	<slot></slot>
</div>

<style>
:host {
	--bgColor: hsla(200, 100%, 50%, 0.5);
	--txtColor: hsla(100, 50%, 50%, 1);
}

._demo_base {
		box-sizing: border-box;
		padding: 1em;
		max-width: 1000px;
		margin: 1em auto;
		background-color: var(--bgColor);
	}

._demo_title {
	color: var(--txtColor);
}
</style>
