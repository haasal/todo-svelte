<script lang="ts">
    import type { Todo } from "src/types";
    import { createEventDispatcher } from "svelte";
    import { fly } from "svelte/transition";
    import DeleteButton from "./DeleteButton.svelte";

    export let todoItem: Todo;
    $: ({ text, icon, completed, deleted } = todoItem);

    let dispatch = createEventDispatcher();

    function toggleComplete() {
        dispatch("completed");
    }
</script>

{#if !deleted}
    <div class="flex">
        <button
            class="transition-opacity btn-secondary flex justify-between items-center self-stretch grow mr-2 {completed
                ? 'line-through opacity-20'
                : ''}"
            out:fly={{ x: -20 }}
            on:click={toggleComplete}
        >
            <p>
                {text}
            </p>
            <p>
                {icon}
            </p>
        </button>
        <DeleteButton on:deleted />
    </div>
{/if}
