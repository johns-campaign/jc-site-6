<script lang="ts">
  import {page} from "$app/stores"
  import FirestoreDocument from "$lib/firebase/FirestoreDocument.svelte"
  import Head from "$lib/Head.svelte"
  import ThisLink from "$lib/links/pages/ThisLink.svelte"
  import PostAuthorsAndDate from "$lib/posts/PostAuthorsAndDate.svelte"
  import PostContent from "$lib/posts/PostContent.svelte"
  import PostFigure from "$lib/posts/PostFigure.svelte"
  import PostShareLinks from "$lib/posts/PostShareLinks.svelte"
  import PostStandfirst from "$lib/posts/PostStandfirst.svelte"
  import PostTags from "$lib/posts/PostTags.svelte"

  $: ref = `posts/${$page.params.postId}`
</script>

<FirestoreDocument {ref} let:data={post}>
  <Head title={post.title} description={post.standfirst || post.quote} />

  <PostFigure {post} />
  <h1 class="top">
    <ThisLink>Post</ThisLink>
  </h1>
  <PostAuthorsAndDate {post} level={2} />
  <PostTags {post} />
  <PostStandfirst {post} />
  <PostContent {post} />
  <PostShareLinks {post} />
</FirestoreDocument>
