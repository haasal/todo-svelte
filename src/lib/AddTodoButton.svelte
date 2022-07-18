<script lang="ts">
    import { newTodo, todos, newEmoji } from "../store/stores";

    function addTodo() {
        if (!$newTodo) {
            return;
        }

        let newTodoObj = {
            text: $newTodo,
            completed: false,
            icon: $newEmoji,
            deleted: false,
        };

        $todos = [...$todos, newTodoObj];
        $newTodo = "";
        $newEmoji = "📝";
    }
</script>

<button class="btn-primary grow" on:click={addTodo}> Add Todo </button>
