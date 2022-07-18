<script lang="ts">
    export let emoji: string;

    let emojiOptions = [..."📓🍎🥚🍌🥦📖🧹📝"];

    console.log(emoji);
</script>

<select bind:value={emoji} class="btn-secondary">
    {#each emojiOptions as emoji}
        <option>{emoji}</option>
    {/each}
</select>
