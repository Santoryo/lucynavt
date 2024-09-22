<script lang="ts">
    import twitter from '$lib/images/twitter.svg';
    import youtube from '$lib/images/youtube.svg';
    import twitch from '$lib/images/twitch.svg';
    import vgen from '$lib/images/vgen.svg';
    import tiktok from '$lib/images/tiktok.svg';
    import discord from '$lib/images/discord.svg';
    import throne from '$lib/images/throne.svg';
    import rippedpaper from '$lib/images/rippedpaper.webp';
    import vid from '$lib/images/vid.webm';
    import getTwitchLive from '$lib/scripts/twitch';

    twitchInfo();
    let stream: boolean = false;

    async function twitchInfo()
    {
        const data = await getTwitchLive();
        if(data != null)
        {
            stream = true;
        }
        else
        {
            stream = false
        }
    }



</script>

    <div class="flex lg:flex-row flex-col justify-between items-center gap-2">
        <h1 class="text-4xl font-bold flex flex-row">lucy ✨💜 </h1>
        {#if stream}
        <a class="bg-red-500 px-4 rounded-full text-white text-lg" href="https://twitch.tv/lucynavt">LIVE NOW</a>
        {/if}
    </div>
    <h2 class="text-lg">silly vtuber, design & coding</h2>

    <div class="w-full h-[300px] md:flex flex-row items-center justify-center relative hidden">
        <img src={rippedpaper} alt="ripperpaper" class="h-full object-cover absolute z-10" />
        <div class="w-[432px] h-[300px] overflow-hidden absolute">
            <video class="h-full absolute" autoplay loop muted>
                <source src="{vid}" type="video/webm">
            </video>
        </div>
    </div>

    <div class="flex flex-row gap-4 mt-4 items-center justify-center">
    <!-- svelte-ignore a11y_missing_attribute --> 
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a class="hover:text-[#9f52bc] cursor-pointer size-8 hover-container hover:scale-110 transition-all" href="https://x.com/lucynavt" target="_blank">
            <img src={twitter} alt="twitter" class="w-8 h-8 fill-current" />
        </a>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a class="hover:text-[#9f52bc] cursor-pointer size-8 hover-container hover:scale-110 transition-all" href="https://youtube.com/@lucynavt" target="_blank">
            <img src={youtube} alt="youtube" class="w-8 h-8 fill-current" />
        </a>
            <!-- svelte-ignore a11y_consider_explicit_label -->
        <a class="hover:text-[#9f52bc] cursor-pointer size-8 hover-container hover:scale-110 transition-all" href="https://twitch.tv/lucynavt" target="_blank">
            <img src={twitch} alt="youtube" class="w-8 h-8 fill-current mt-0.5" />
        </a>

        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a class="hover:text-[#9f52bc] cursor-pointer size-8 hover-container hover:scale-110 transition-all" href="https://vgen.co/lucynavt" target="_blank">
            <img src={vgen} alt="vgen" class="w-8 h-8 fill-current" />
        </a>

        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a class="hover:text-[#9f52bc] cursor-pointer size-8 hover-container hover:scale-110 transition-all" href=" https://discord.gg/MgFbfkNDPY" target="_blank">
            <img src={discord} alt="discord" class="w-8 h-8 fill-current" />
        </a>

        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a class="hover:text-[#9f52bc] cursor-pointer size-8 hover-container hover:scale-110 transition-all" href="https://throne.com/lucynavt" target="_blank">
            <img src={throne} alt="throne" class="w-8 h-8 fill-current" />
        </a>
    </div>