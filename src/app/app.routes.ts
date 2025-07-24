import { Routes } from '@angular/router';
import { PostFeed } from './postFeed'
import { UserPosts } from './userPosts'
import { newPost } from './newPost'

export const routes: Routes = [
    { path: "", component: UserPosts},
    { path: "posts", component: PostFeed},
    { path: "newPost", component: newPost}
];
