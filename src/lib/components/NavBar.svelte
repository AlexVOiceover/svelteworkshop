<script lang="ts">
	import { language, type Language } from '$lib/stores';
	export let bagItemCount: number = 0;

	let isDropdownOpen = false;

	function setLanguage(lang: Language) {
		language.set(lang);
		isDropdownOpen = false;
	}

	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}
</script>

<nav class="sticky top-0 z-50 flex items-end justify-between bg-gray-800 p-4 text-white">
	<div class="flex items-center">
		<a href="/" aria-label="Home">
			<img
				alt="brand logo"
				src="/logo.png"
				style="width: 96px; height: 96px; border-radius: 10px;"
			/>
		</a>
	</div>
	<ul class="flex items-center space-x-4">
		<li><a href="/" class="hover:underline">Home</a></li>
		<li><a href="/bag" class="hover:underline">Bag</a></li>
		<li class="relative">
			<button
				on:click={toggleDropdown}
				class="flex items-center rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
				aria-haspopup="true"
				aria-expanded={isDropdownOpen}
			>
				{$language}
				<svg
					class="ml-1 h-4 w-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path></svg
				>
			</button>
			{#if isDropdownOpen}
				<div class="absolute right-0 z-10 mt-1 w-28 rounded bg-white shadow-lg">
					<ul class="py-1 text-gray-800">
						<li>
							<button
								on:click={() => setLanguage('EN')}
								class="block w-full px-4 py-2 text-left hover:bg-gray-100 {$language === 'EN'
									? 'bg-gray-100'
									: ''}"
							>
								English
							</button>
						</li>
						<li>
							<button
								on:click={() => setLanguage('ES')}
								class="block w-full px-4 py-2 text-left hover:bg-gray-100 {$language === 'ES'
									? 'bg-gray-100'
									: ''}"
							>
								Español
							</button>
						</li>
						<li>
							<button
								on:click={() => setLanguage('IT')}
								class="block w-full px-4 py-2 text-left hover:bg-gray-100 {$language === 'IT'
									? 'bg-gray-100'
									: ''}"
							>
								Italiano
							</button>
						</li>
					</ul>
				</div>
			{/if}
		</li>
		<div class="relative inline-block">
			<a href="/bag" class="hover:underline" aria-label="Bag">
				<svg
					class="h-8 w-8"
					id="Layer_1"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 106.53 122.88"
					fill="white"
				>
					<title>bag</title>
					<path
						d="M4.93,30.34H27.41V25.76a25.77,25.77,0,0,1,51.53,0v4.58H101.6a4.91,4.91,0,0,1,3.47,1.45h0a4.9,4.9,0,0,1,1.44,3.48v69.9a17.75,17.75,0,0,1-17.7,17.7H17.7A17.75,17.75,0,0,1,0,105.18V35.28A4.91,4.91,0,0,1,1.45,31.8h0a4.91,4.91,0,0,1,3.47-1.45Zm28.76,0h39V25.76a19.49,19.49,0,0,0-39,0v4.58Zm-6.28,13V36.62H6.28v62h94V36.62H78.94v6.76a6.48,6.48,0,1,1-6.28-.12V36.62h-39v6.71a6.48,6.48,0,1,1-6.28,0Z"
					/>
				</svg>
				<span
					class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-red-500 px-2 text-xs text-white"
				>
					{bagItemCount}
				</span>
			</a>
		</div>
	</ul>
</nav>
