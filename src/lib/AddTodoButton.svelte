<script lang="ts">
    import { newTodo, todos } from "../store/stores";

    function addTodo() {
        if (!$newTodo) {
            return;
        }

        let newTodoObj = {
            text: $newTodo,
            completed: false,
            icon: "🍌",
            deleted: false,
        };

        $todos = [...$todos, newTodoObj];
        $newTodo = "";
    }
</script>

<button class="btn-primary grow" on:click={addTodo}> Add Todo </button>
