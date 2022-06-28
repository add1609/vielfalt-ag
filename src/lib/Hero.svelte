<script>
	const imgList = [""];
	const currentImg = imgList[0];

</script>

<div class="background-img hero" style:background-image={currentImg}>
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-1 font-bold text-4xl md:mb-5 md:text-5xl">Lorem ipsum</h1>
            <p class="text-lg md:text-lg">dolor sit amet, consectetur adipiscing elit.
                Nullam id dolor eget nunc
                ullamcorper blandit. </p>
        </div>
    </div>
</div>

<style>
    .background-img {
        background-repeat: no-repeat;
        min-height: 80vh;
    }
</style>