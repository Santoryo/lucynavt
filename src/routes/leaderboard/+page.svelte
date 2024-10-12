<script lang="ts">
	import PocketBase from 'pocketbase';
	import { onMount } from 'svelte';

	interface User {
		collectionId: string;
		collectionName: string;
		id: string;
		score: number;
        jsonData: UserData;
	}

    interface UserData {
        displayName: string;
        profilePictureUrl: string;
    }

	let data: User[] = [];

	onMount(async () => {
        const pb = new PocketBase('https://data.brelshaza.com/');
        const fetchedData = await pb.collection('firsts').getFullList();

        const updatedData = await Promise.all(fetchedData.map(async (item) => {
            const temp = await fetch("https://unttv.vercel.app/users/" + item.id);
            const json = await temp.json();
            console.log(json);
            return { ...item, jsonData: json };
        }));

        data = updatedData;
	});
</script>


<div class="flex flex-col mb-3">
    <h1 class="text-2xl font-bold flex flex-row">Top 10 First people on stream</h1>
    <h2>By redemptioning the "First" reward on stream you will be included in the ranking!</h2>
</div>

{#key data}
    {#if data.length == 0}
        <p>Loading...</p>
    {:else}
        <table class="table-fixed max-w-[700px]">
            <thead>
                <tr>
                  <th>#</th>
                  <th class="max-w-[100px]">User</th>
                  <th>Score</th>
                </tr>
              </thead>
            <tbody>
            {#each data as user, i}
                <!-- svelte-ignore node_invalid_placement_ssr -->
                <tr>
                    <td>{i + 1}</td>
                    <td class="flex flex-row gap-1 items-center">
                        <img src={user.jsonData.profilePictureUrl} alt="{user.jsonData.displayName} Twitch avatar" class="size-8 rounded-sm" />
                        <a href={"https://twitch.tv/" + user.jsonData.displayName} target="_blank">{user.jsonData.displayName}</a>
                    </td>
                    <td>{user.score}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    {/if}
    
{/key}