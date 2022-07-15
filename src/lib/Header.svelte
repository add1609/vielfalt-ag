<script>
    import Divider from "./Divider.svelte";
    import Menu from "./Menu.svelte";
</script>

<div class="px-5 pt-4 lg:px-[6rem] xl:px-[12rem] 2xl:px-[18rem] sm:px-10">
    <div class="navbar flex-wrap gap-x-9 gap-y-3 bg-base-100">
        <div class="flex-auto">
            <a class="uppercase text-3xl font-bold text-base-content md:text-4xl"
               href="/">
                <span>Vielfalt AG</span>
                <Divider h={"h-[4px]"}
                         klass={"w-[11.6rem] h-[4px] mt-[-4px] sm:h-[5px] md:w-[14rem]"}
                         w={"w-[11.6rem]"}
                />
            </a>
        </div>
    </div>
</div>
<div class="text-base-content uppercase font-bold bg-base-200">
    <Menu entries="{[
        {
            title: 'Parent 1',
            subEntries: [
                {
                    title: 'Submenu 1',
                    href: '/'
                },
                {
                    title: 'Submenu 2',
                    href: '/'
                },
                {
                    title: 'Submenu 3',
                    href: '/'
                }
            ]
          },
        {
            title: 'Parent 2',
            subEntries: [
                {
                    title: 'Submenu 1',
                    href: '/'
                },
                {
                    title: 'Submenu 2',
                    href: '/'
                },
                {
                    title: 'Submenu 3',
                    href: '/'
                }
            ]
        },
        {
           title: 'Parent 3',
            subEntries: [
                {
                    title: 'Submenu 1',
                    href: '/'
                },
                {
                    title: 'Submenu 2',
                    href: '/'
                },
                {
                    title: 'Submenu 3',
                    href: '/'
                }
            ]
        },
        {
            title: 'Parent 4',
            subEntries: [
                {
                    title: 'Submenu 1',
                    href: '/'
                },
                {
                    title: 'Submenu 2',
                    href: '/'
                },
                {
                    title: 'Submenu 3',
                    href: '/'
                }
            ]
        },
        {
            title: 'Parent 5',
            subEntries: [
                {
                    title: 'Submenu 1',
                    href: '/'
                },
                {
                    title: 'Submenu 2',
                    href: '/'
                },
                {
                    title: 'Submenu 3',
                    href: '/'
                }
            ]
        }
    ]}"
    />
</div>