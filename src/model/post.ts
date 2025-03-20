export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type PostWithContext = Post & {
  metadata: string;
  favorite: boolean;
  isOwner: boolean;
}

