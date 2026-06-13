import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/about/index.vue'
import ArchiveView from '../views/archive/index.vue'
import ArticleView from '../views/article/index.vue'
import ArticlesView from '../views/articles/index.vue'
import HomeView from '../views/home/index.vue'
import TagsView from '../views/tags/index.vue'

export const routes = [
  {
    path: '/',
    redirect: '/home.html',
  },
  {
    path: '/home.html',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/articles.html',
    name: 'articles',
    component: ArticlesView,
  },
  {
    path: '/article/:slug.html',
    name: 'article',
    component: ArticleView,
  },
  {
    path: '/archive.html',
    name: 'archive',
    component: ArchiveView,
  },
  {
    path: '/tags.html',
    name: 'tags',
    component: TagsView,
  },
  {
    path: '/guestbook.html',
    redirect: '/about.html',
  },
  {
    path: '/about.html',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/about',
    redirect: '/about.html',
  },
  {
    path: '/test',
    redirect: '/articles.html',
  },
  {
    path: '/csstest',
    redirect: '/archive.html',
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
