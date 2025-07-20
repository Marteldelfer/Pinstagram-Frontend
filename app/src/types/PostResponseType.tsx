type UUID = string;
type Instant = string;

export type PostResponseType = {
  id: UUID,
  authorId: UUID,

  imageUrl: string,
  description: string,

  postedAt: Instant,

  viewCount: number,
  commentCount: number,
  likeCount: number,

  likedByCurrentUser: boolean,

  isEdited: boolean,

  locationName?: string,
  latitude?: number,
  longitude?: number

}