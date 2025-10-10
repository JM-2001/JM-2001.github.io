<script lang="ts">
  export let projectId: number;
  export let featured: boolean;
  export let pageUrl: string;
  export let githubUrl: string;
  export let imgSrc: string;
  export let name: string;
  export let desc: string;
  export let techStack: string;
</script>

<div class="project-card">
  <div class="project-card-image-div">
    <img
      src={imgSrc}
      alt={name}
      height="1500"
      width="2500"
      loading="eager"
      class="project-card-image-div-img"
    />
    {#if featured}
      <img
        src="/feature.png"
        alt="Featured"
        height="30"
        width="30"
        loading="eager"
        class="project-card-image-div-img-featured"
      />
    {/if}
  </div>
  <div class="project-card-info">
    <h2>{name}</h2>
    <p class="project-desc">{desc}</p>
    <p class="project-techstack">Built with: {techStack}</p>
    <div class="project-card-btns">
      <a href={pageUrl} rel="noopener noreferrer">View Project</a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        View on Github
      </a>
    </div>
  </div>
</div>
