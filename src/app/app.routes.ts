import { Routes } from '@angular/router';
import { PostFeed } from './postFeed'
import { UserPosts } from './userPosts'
import { newPost } from './newPost'

export const routes: Routes = [
    { path: "", component: PostFeed},
    { path: "posts", component: UserPosts},
    { path: "newPost", component: newPost}
];
