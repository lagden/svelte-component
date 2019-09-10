<svelte:options tag="b-element" />

<script>
	import {onMount, onDestroy} from 'svelte'

	let element
	let cssName = '_btn__ripple'

	function rippleAnimation (event) {
		const target = event.currentTarget
		const circle = document.createElement('div')
		const d = Math.max(target.clientWidth, target.clientHeight)
		const removeCircle = event => {
			circle.removeEventListener('animationend', removeCircle)
			circle.remove()
		}
		circle.addEventListener('animationend', removeCircle)
		circle.style.width = circle.style.height = `${d}px`
		target.appendChild(circle)

		const rect = target.getBoundingClientRect()
		circle.style.left = `${event.clientX - rect.left -d/2}px`
		circle.style.top = `${event.clientY - rect.top - d/2}px`
		circle.classList.add(cssName)

	}

	onMount(() => {
		element.addEventListener('click', rippleAnimation)
	})

	onDestroy(() => {
		element.removeEventListener('click', rippleAnimation)
	})
</script>

<button bind:this={element} on:click class="_btn">
	<slot></slot>
	<div class="_btn__ripple"></div>
</button>

<style>
._btn {
	font-size: 1em;
	padding: 1em 2em;
	margin: 0;
	border: 0;
	outline: 0;
	color: white;
	background-color: blue;
	border-radius: 5px;
	overflow: hidden;
	position: relative;
	cursor: pointer;
}

._btn:disabled {
	opacity: 0.3
}

._btn__ripple {
	border-radius: 50%;
	background-color: white;
	position: absolute;
	transform: scale(0);
	animation: ripple 0.6s linear
}

@keyframes ripple {
	to {
		transform: scale(2.5);
		opacity: 0
	}
}
</style>
