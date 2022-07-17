<script lang="ts">
    import { todos } from "../store/stores";
    import TodoItem from "./TodoItem.svelte";
</script>

<div class="flex flex-col space-y-2">
    {#each $todos as todoItem}
        <TodoItem
            {todoItem}
            on:completed={() => (todoItem.completed = !todoItem.completed)}
            on:deleted={() => (todoItem.deleted = !todoItem.deleted)}
        />
    {/each}
</div>
