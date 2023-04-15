<script lang="ts">
  import {page} from "$app/stores"
  import {stringIn} from "$lib/filter"
  import Filter from "$lib/filters/Filter.svelte"
  import {firestore} from "$lib/firebase"
  import FirestoreList from "$lib/firebase/FirestoreList.svelte"
  import Head from "$lib/Head.svelte"
  import PostLink from "$lib/links/pages/PostLink.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import PostAuthorsAndDate from "$lib/posts/PostAuthorsAndDate.svelte"
  import PostContent from "$lib/posts/PostContent.svelte"
  import PostFigure from "$lib/posts/PostFigure.svelte"
  import PostShareLinks from "$lib/posts/PostShareLinks.svelte"
  import PostStandfirst from "$lib/posts/PostStandfirst.svelte"
  import PostTags from "$lib/posts/PostTags.svelte"
  import Quote from "$lib/Quote.svelte"
  import type FromFirestore from "$lib/types/FromFirestore"
  import type Post from "$lib/types/Post"
  import {collection, orderBy, query, where} from "firebase/firestore"

  const ref = query(
    collection(firestore, "posts"),
    where("timestamp", "<=", new Date()),
    orderBy("timestamp", "desc"),
  )

  let postsExpanded = [] as string[]

  $: postExpanded = (postId: string) => postsExpanded.includes(postId)

  const expandPost = (postId: string) =>
    (postsExpanded = [...postsExpanded, postId])
  const collapsePost = (postId: string) =>
    (postsExpanded = postsExpanded.filter(
      (postId2: string) => postId !== postId2,
    ))

  let filteringText: string = $page.url.searchParams.get("text") || ""
  let filteringTags: string[] =
    $page.url.searchParams.get("tags")?.split(",") || []
  const allTags = [
    "care-and-nursing-homes",
    "hospitals",
    "primary-care",
    "hospices",
    "theatres",
    "home-care",
    "community",
    "private",
    "acute",
    "ambulances",
    "ccgs",
    "cqc",
    "mental-health",
    "children",
    "radiography",
    "why-i-love-my-job",
    "early-onset",
    "delirium",
    "infection-control",
    "nutrition-and-hydration",
    "carer-support",
    "carer-identification",
    "dementia-support",
    "end-of-life",
    "regulation",
    "signs",
    "technology",
    "feedback",
    "research",
    "ambassadors",
    "nurses",
    "doctors",
    "therapists",
    "managers",
    "patients",
    "residents",
    "family-carers",
    "care-workers",
    "england",
    "wales",
    "northern-ireland",
    "scotland",
  ]
  allTags.sort()

  $: postPredicate = (post: FromFirestore<Post>) =>
    (!filteringText || stringIn(filteringText, post)) &&
    (!filteringTags.length ||
      filteringTags.findIndex(
        (tag) => !Object.keys(post.tags).includes(tag),
      ) === -1)

  const filter = (filtering: {text: string; tags: string[]}) => {
    filteringText = filtering.text
    filteringTags = filtering.tags
    // const url = new URL($page.url)
    // url.search = ""
    // if (filteringText) {
    //   url.searchParams.set("text", filteringText)
    // }
    // if (filteringTags.length) {
    //   url.searchParams.set("tags", filteringTags.join(","))
    // }
    // history.replaceState("", "", url)
  }
</script>

<Head title="Blog" description="The John's Campaign blog." />

<h1 class="top">
  <ThisLink>Blog</ThisLink>
</h1>
<Filter
  text={filteringText}
  textPlaceholder="Enter a title / an author / post content..."
  tags={filteringTags.slice()}
  tagsSet={allTags}
  on:filter={(event) => filter(event.detail)} />
<FirestoreList {ref} let:item={post} predicate={postPredicate} lazy>
  <PostFigure {post} />
  <h2>
    <PostLink id={post.id}>
      {@html post.title}
    </PostLink>
  </h2>
  <PostAuthorsAndDate {post} level={3} />
  <PostTags {post} />
  <PostStandfirst {post} />
  {#if !post.quote || postExpanded(post.id)}
    <PostContent {post} />
  {:else}
    <Quote paragraphs={[post.quote]} />
  {/if}
  {#if post.quote}
    <button
      on:click={() =>
        (postExpanded(post.id) ? collapsePost : expandPost)(post.id)}>
      Show
      {postExpanded(post.id) ? "less" : "more"}
    </button>
    <!-- {#if postExpanded(post.id)}
      <button on:click={() => collapsePost(post.id)}>Show less</button>
    {:else}
      <button on:click={() => expandPost(post.id)}>Show more</button>
    {/if} -->
  {/if}
  <PostShareLinks {post} />
</FirestoreList>
