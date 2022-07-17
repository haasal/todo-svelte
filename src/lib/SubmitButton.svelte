<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { todos } from "../store/stores";

    let dispatch = createEventDispatcher();

    async function submitTodos() {
        let resp = await fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify($todos),
        });
        dispatch("submitted", await resp.json());
    }
</script>

<button class="btn-primary grow" on:click={submitTodos}>Submit</button>
