export const facebookGroup = (id: string) => `group/${id}`
export const facebookProfile = (id: string) => id
export const githubProfile = (id: string) => id
// export const githubRepository = (profileId: string, repositoryId: string) =>
//   `${profileId}/${repositoryId}`
export const githubRepository = (id: string) => id
export const githubRepositoryIssues = (id: string) => `${id}/issues`
export const githubRepositoryPullRequests = (id: string) => `${id}/pulls`
export const instagramProfile = (id: string) => id
export const soundcloudProfile = (id: string) => id
export const twitterProfile = (id: string) => id
export const youtubeChannel = (id: string) => `channel/${id}`
