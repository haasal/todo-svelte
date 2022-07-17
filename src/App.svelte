<script lang="ts">
    import AddTodoButton from "./lib/AddTodoButton.svelte";
    import SubmitButton from "./lib/SubmitButton.svelte";

    import TodoItems from "./lib/TodoItems.svelte";
    import { newTodo } from "./store/stores";
</script>

<main class="flex justify-center items-center h-screen">
    <div class="flex flex-col items-stretch space-y-2">
        <input bind:value={$newTodo} type="text" class="input w-96" />
        <TodoItems />
        <div class="flex space-x-2 items-stretch">
            <AddTodoButton />
            <SubmitButton />
        </div>
    </div>
</main>
