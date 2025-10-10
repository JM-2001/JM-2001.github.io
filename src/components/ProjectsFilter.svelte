<script lang="ts">
  import ToggleSwitch from "./ToggleSwitch.svelte";
  import ProjectCardSvelte from "./ProjectCardSvelte.svelte";
  export let projects = [];
  let showFeatured = false;

  $: filtered = showFeatured
    ? projects.filter((p) => p.data.featured)
    : projects;
</script>

<div class="projects-div-header">
  <h1>Projects</h1>
  <div class="projects-div-header-right">
    <p>Featured:</p>
    <ToggleSwitch bind:checked={showFeatured} />
  </div>
</div>
<div class="projects-div-flex">
  {#each filtered.sort((a, b) => b.data.projectId - a.data.projectId) as card (card.data.projectId)}
    <ProjectCardSvelte
      projectId={card.data.projectId}
      featured={card.data.featured}
      pageUrl={`/projects/${card.id}/`}
      imgSrc={card.data.image.url}
      name={card.data.title}
      desc={card.data.description}
      githubUrl={card.data.github}
      techStack={card.data.stack}
    />
  {/each}
</div>
