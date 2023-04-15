<script lang="ts">
  import {onMount} from "svelte"

  let wrapper: HTMLElement

  // This is outrageous
  onMount(() => {
    let iframeObserver: MutationObserver | undefined
    const wrapperObserver = new MutationObserver((wrapperMutations) => {
      for (const wrapperMutation of wrapperMutations) {
        for (const node of wrapperMutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            if (
              element.tagName === "DIV" &&
              element.classList.contains("twitter-timeline")
            ) {
              for (const child of element.children) {
                if (child.tagName === "IFRAME") {
                  const iframeObserver = new MutationObserver(() => {
                    const style = child.getAttribute("style")
                    if (!style?.endsWith("; height: 100%")) {
                      child.setAttribute("style", `${style}; height: 100%`)
                    }
                  })
                  iframeObserver.observe(child, {attributeFilter: ["style"]})
                }
              }
            }
          }
        }
      }
    })
    wrapperObserver.observe(wrapper, {childList: true})
    return () => {
      wrapperObserver.disconnect()
      if (iframeObserver) {
        iframeObserver.disconnect()
      }
    }
  })
</script>

<div class="twitter-timeline-wrapper" bind:this={wrapper}>
  <a
    class="twitter-timeline"
    data-chrome="noheader nofooter noborders transparent"
    href="https://twitter.com/JohnCampaign">
    <!-- This comment is just to remove the A11y warning that anchors should have children -->
  </a>
</div>

{#if wrapper}
  <div>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"></script>
  </div>
{/if}

<style lang="sass">
  .twitter-timeline-wrapper
    height: 100%

    :global(.twitter-timeline)
      height: 100%
      :global(iframe)
        border-width: 0
</style>
