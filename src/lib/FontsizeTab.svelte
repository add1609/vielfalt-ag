<script>
	let fontsizeOpen = false;
</script>

<div class="absolute top-0 left-[80%]">
    <div class="bg-base-200 px-3 py-1 cursor-pointer hover:bg-base-300"
         on:click={() => {fontsizeOpen = !fontsizeOpen}}
    >
        <span class="text-xs">A</span>
        <span class="text-xl">A</span>
        <span class="text-2xl">A</span>
    </div>
    <div
        class="absolute top-0 p-4 pr-8 mr-1 right-full w-fit text-xs bg-base-200 lg:text-base"
        style:display={fontsizeOpen ? "block" : "none"}
    >
        <span class="absolute text-lg">A</span>
        <input class="relative ml-4 mr-2 mt-1" max="2" min="0" step="1" type="range"
               value="1"
        >
        <span class="absolute text-3xl top-2">A</span>
    </div>
</div>