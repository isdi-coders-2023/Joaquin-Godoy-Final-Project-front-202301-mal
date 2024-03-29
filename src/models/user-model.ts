import { Post } from './post-model';
import { Game } from './game-model';

export interface User {
  _id: string;
  email: string;
  password: string;
  username: string;
  name: string;
  surname: string;
  avatar: string;
  biography: string;
  posts: Post[];
  followers: User[];
  following: User[];
  favGames: Game[];
}

export type UserCredentials = Pick<User, 'email' | 'password'>;

export interface UserProfile
  extends Omit<User, 'followers' | 'following' | 'posts'> {
  followersCount: number;
  followingCount: number;
  isFollower: boolean;
}

export interface UserProfileResponse {
  msg: string;
  user: User;
  userFollowersCount: number;
  userFollowingCount: number;
  isFollower: boolean;
}

export interface UserPostsResponse {
  msg: string;
  posts: Post[];
  count: number;
}

export interface UserAddFollowerResponse {
  msg: string;
  newFollower: string;
  newFollowing: string;
}

export interface UserRemoveFollowerResponse {
  msg: string;
  removedFollower: string;
  removedFollowing: string;
}
