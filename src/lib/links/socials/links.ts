import * as pages from "./pages"
import * as paths from "./paths"

export const facebook = (page: string) => `https://facebook.com/${page}`
export const facebookGroup = (id: string) => facebook(paths.facebookGroup(id))
export const facebookProfile = (id: string) =>
  facebook(paths.facebookProfile(id))

export const github = (page: string) => `https://github.com/${page}`
export const githubProfile = (id: string) => github(paths.githubProfile(id))
export const githubRepository = (id: string) =>
  github(paths.githubRepository(id))
export const githubRepositoryIssues = (id: string) =>
  github(paths.githubRepositoryIssues(id))
export const githubRepositoryPullRequests = (id: string) =>
  github(paths.githubRepositoryPullRequests(id))

export const instagram = (page: string) => `https://instagram.com/${page}`
export const instagramProfile = (id: string) =>
  instagram(paths.instagramProfile(id))

export const soundcloud = (page: string) => `https://soundcloud.com/${page}`
export const soundcloudProfile = (id: string) =>
  soundcloud(paths.soundcloudProfile(id))

export const twitter = (page: string) => `https://twitter.com/${page}`
export const twitterProfile = (id: string) => twitter(paths.twitterProfile(id))

export const youtube = (page: string) => `https://youtube.com/${page}`
export const youtubeChannel = (id: string) => youtube(paths.youtubeChannel(id))
export const youtubeVideo = (id: string) => `https://youtu.be/${id}`

export const careHomeAndSupportFacebookGroup = facebookGroup(
  pages.careHomeAndSupportFacebookGroup,
)
export const campaignFacebookProfile = facebookProfile(pages.facebook)
export const campaignGitHubProfile = githubProfile(pages.githubProfile)
export const campaignGitHubRepository = githubRepository(pages.githubRepository)
export const campaignSoundCloudProfile = soundcloudProfile(pages.soundcloud)
export const campaignTwitterProfile = twitterProfile(pages.twitter)
export const campaignYouTubeChannel = youtubeChannel(pages.youtube)
export const welshFacebookProfile = facebookProfile(pages.welshFacebook)
