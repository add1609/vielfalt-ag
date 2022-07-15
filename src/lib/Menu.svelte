<script lang="ts">
    import type HeaderEntryType from "./types";

    let colors = ["#ff9900", "#ffde56", "#52b36d", "#3996d3", "#905ba1"];
    let colorClassesHover = [
        "hover:bg-orange hover:text-white",
        "hover:bg-yellow",
        "hover:bg-green hover:text-white",
        "hover:bg-blue hover:text-white",
        "hover:bg-purple hover:text-white",
    ];
    let colorClassesPeer = [
        "collapse-title peer-checked:bg-orange peer-checked:text-white",
        "collapse-title peer-checked:bg-yellow",
        "collapse-title peer-checked:bg-green peer-checked:text-white",
        "collapse-title peer-checked:bg-blue peer-checked:text-white",
        "collapse-title peer-checked:bg-purple peer-checked:text-white",
    ];

    export let entries: HeaderEntryType[];
    let borderColor = "red";
</script>

<div class="w-full border-b-8 px-5 lg:px-[6rem] xl:px-[12rem] 2xl:px-[18rem] sm:px-10"
     style:border-color={borderColor}
>
    <ul class="menu big-menu menu-horizontal">
        <li class="menu-item">
            <a class="menu-link bg-red" href="/">
                <svg fill="white" height="24" viewBox="0 0 576 512" width="24"
                     xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/>
                </svg>
            </a>
        </li>
        {#each entries as entry, i}
            <li class={colorClassesHover[i % colorClassesHover.length]}
                on:mouseenter={() => {borderColor = colors[i % colors.length]}}
                on:mouseleave={() => {borderColor = "red"}}
            >
                <span>{entry.title}</span>
                <ul class="bg-base-200 text-base-content text-2xs">
                    {#each entry.subEntries as subEntry}
                        <li class={colorClassesHover[i % colorClassesHover.length]}>
                            <a href={subEntry.href}>
                                <p>
                                    {subEntry.title}
                                </p>
                            </a>
                        </li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
    <ul class="md:hidden menu menu-compact">
        <div class="md:hidden collapse collapse-arrow">
            <input class="peer" type="checkbox"/>
            <div class="collapse-title peer-checked:bg-red peer-checked:text-white">
                <span>Menu</span>
            </div>
            <div class="collapse-content p-0 peer-checked:p-0">
                {#each entries as entry, i}
                    <div class="md:hidden collapse collapse-arrow"
                         on:mouseenter={() => {borderColor = colors[i % colors.length]}}
                         on:mouseleave={() => {borderColor = "red"}}
                    >
                        <input class="peer" type="checkbox"/>
                        <div class={colorClassesPeer[i % colorClassesPeer.length]}>
                            <span>{entry.title}</span>
                        </div>
                        <div class="collapse-content p-0 peer-checked:p-0">
                            <ul class="bg-base-200 text-base-content">
                                {#each entry.subEntries as subEntry}
                                    <li class={colorClassesHover[i % colorClassesHover.length]}>
                                        <a href={subEntry.href}>{subEntry.title}</a></li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </ul>
</div>

<style>
    .big-menu {
        display: flex;
    }

    @media (max-width: 768px) {
        .big-menu {
            display: none;
        }
    }
</style>