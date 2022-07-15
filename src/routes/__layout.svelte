<script>
    import "../app.css";
    import Footer from "$lib/Footer.svelte";
    import Divider from "$lib/Divider.svelte";
    import Header from "$lib/Header.svelte";
</script>
<Header></Header>
<main class="min-h-[80vh]">
    <slot/>
</main>
<Divider h="16px" klass="w-full h-[16px]" w="100%"/>
<Footer/>
