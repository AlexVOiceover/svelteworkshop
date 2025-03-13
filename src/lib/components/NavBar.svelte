<script lang="ts">
	export let bagItemCount: number = 0;
</script>

<nav class="bg-gray-800 p-4 text-white">
	<ul class="flex space-x-4">
		<li>
			<a href="/" aria-label="Home">
				<img
					alt="brand logo"
					src="/logo.png"
					style="width: 96px; height: 96px; border-radius: 10px;"
				/>
			</a>
		</li>
		<li><a href="/" class="hover:underline">Home</a></li>
		<li><a href="/bag" class="hover:underline">Bag</a></li>
	</ul>
	<div class="relative">
		<a href="/bag" class="hover:underline" aria-label="Bag">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 3h18l-1 14H4L3 3z"
				/>
			</svg>
			<span class="absolute top-0 right-0 rounded-full bg-red-500 px-2 text-xs text-white"
				>{bagItemCount}</span
			>
		</a>
	</div>
</nav>
