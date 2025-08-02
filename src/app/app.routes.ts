import { Routes } from '@angular/router';
import { PostFeed } from './postFeed/postFeed'
import { UserPosts } from './userPosts/userPosts'
import { NewPost } from './newPost/newPost'

export const routes: Routes = [
    { path: "", component: PostFeed},
    { path: "posts", component: UserPosts},
    { path: "newPost", component: NewPost}
];
