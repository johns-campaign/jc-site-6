<script lang="ts">
  import type NavType from "./Nav"
  import Nav from "./Nav.svelte"

  let nav: NavType = {
    items: [
      {
        text: "About",
        href: "/about",
        same: true,
      },
      {
        text: "Blog",
        href: "/blog",
        same: true,
      },
      {
        link: {
          text: "Resources",
          href: "/resources",
          same: true,
        },
        links: [
          {
            text: "Articles",
            href: "/articles",
            same: true,
          },
          {
            text: "Books",
            href: "/books",
            same: true,
          },
          {
            text: "Pictures",
            href: "/pictures",
            same: true,
          },
          {
            text: "Experiences",
            href: "/experiences",
            same: true,
          },
          {
            text: "Video of the Week",
            href: "/video-of-the-week",
            same: true,
          },
          {
            text: "Voices",
            href: "/voices",
            same: true,
          },
        ],
      },
      {
        link: {
          text: "Supporters",
          href: "/supporters",
          same: true,
        },
        links: [
          {
            text: "Ambassadors",
            href: "/ambassadors",
            same: true,
          },
          {
            text: "Participants",
            href: "/participants",
            same: true,
          },
          {
            text: "Partners",
            href: "/partners",
            same: true,
          },
        ],
      },
    ],
  }
</script>

<Nav {nav} />
