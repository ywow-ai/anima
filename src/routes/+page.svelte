<script lang="ts">
	import { onMount } from 'svelte';
	import { treaty } from '@elysiajs/eden';
	import type { App } from './api/[...slugs]/+server';
	import { page } from '$app/state';

	const { api } = treaty<App>(page.url.origin);

	onMount(() => {
		const f = async () => {
			try {
				const r = await api.index.get();
				console.log(r);
			} catch (error) {
				console.error(error);
			}
		};

		f();
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
