<script lang="ts">
  export let checked = false;
  export let label = "";
  // Forward the change event
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    checked = target.checked;
    // Dispatch a custom event for parent to listen
    const customEvent = new CustomEvent("toggle", {
      detail: { checked },
    });
    dispatchEvent(customEvent);
  };
</script>

<label class="switch">
  <input
    type="checkbox"
    bind:checked
    on:change={handleChange}
    aria-label={label}
  />
  <span class="slider round"></span>
</label>
