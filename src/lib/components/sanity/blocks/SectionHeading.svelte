<script lang="ts">
  export let number: number;
  export let title: string;
</script>

<div class="section">
  <div class="section-content center">
    <h2>
      <span class="row center text-heading text-base">
        {number}
        <svg width="48" height="36" fill="none">
          <path
            stroke="var(--color-text)"
            stroke-miterlimit="10"
            stroke-width="4"
            d="M48 2C24 2 24 34 0 34"
          />
        </svg>
        {title}
      </span>
    </h2>
  </div>
</div>
