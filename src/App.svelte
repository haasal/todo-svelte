<script lang="ts">
    import AddTodoButton from "@/lib/AddTodoButton.svelte";
    import SubmitButton from "@/lib/SubmitButton.svelte";

    import TodoItems from "@/lib/TodoItems/TodoItems.svelte";
    import { newEmoji, newTodo } from "@/store/stores";
    import EmojiDropdown from "./lib/EmojiDropdown.svelte";
</script>

<main class="flex justify-center items-center h-screen">
    <div class="flex flex-col items-stretch space-y-2">
        <div class="flex space-x-2">
            <input bind:value={$newTodo} type="text" class="input w-96" />
            <EmojiDropdown bind:emoji={$newEmoji} />
        </div>

        <TodoItems />

        <div class="flex space-x-2 items-stretch">
            <AddTodoButton />
            <SubmitButton />
        </div>
    </div>
</main>
