type UUID = string;
type Instant = string;

export type AccountResponseType = {
  id: UUID;
  name: string;
  username: string;
  avatarUrl?: string;
  bio: string;

  currentUser: boolean;
  followedByCurrentUser: boolean;
  isPrivate: boolean;

  createdAt: Instant;

  publicationCount: number;
  followerCount: number;
  followingCount: number;
}