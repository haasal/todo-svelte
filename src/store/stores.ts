import type { Todo } from "src/types";
import { writable } from "svelte/store";

export let todos = writable([
    { text: "Buy vegetables", completed: false, icon: "🥦", deleted: false },
    { text: "Buy Apples", completed: false, icon: "🍎", deleted: false },
    { text: "Buy Eggs", completed: false, icon: "🥚", deleted: false },
] as Todo[]);

export let newTodo = writable("");
