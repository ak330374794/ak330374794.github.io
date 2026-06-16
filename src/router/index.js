import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/about/index.vue'
import ArchiveView from '../views/archive/index.vue'
import ArticleView from '../views/article/index.vue'
import ArticlesView from '../views/articles/index.vue'
import CasesView from '../views/cases/index.vue'
import CommerceCartView from '../views/commerce/cart.vue'
import CommerceCategoryView from '../views/commerce/category.vue'
import CommerceCheckoutView from '../views/commerce/checkout.vue'
import CommerceHomeView from '../views/commerce/home.vue'
import CommerceProductView from '../views/commerce/product.vue'
import CommerceSellerView from '../views/commerce/seller.vue'
import HomeView from '../views/home/index.vue'
import NewsAdminView from '../views/news/admin.vue'
import NewsArticleView from '../views/news/article.vue'
import NewsChannelView from '../views/news/channel.vue'
import NewsCreatorView from '../views/news/creator.vue'
import NewsHomeView from '../views/news/home.vue'
import NewsSearchView from '../views/news/search.vue'
import ProjectView from '../views/project/index.vue'
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
    path: '/cases.html',
    name: 'cases',
    component: CasesView,
  },
  {
    path: '/project/:slug.html',
    name: 'project',
    component: ProjectView,
  },
  {
    path: '/commerce/home.html',
    name: 'commerce-home',
    component: CommerceHomeView,
  },
  {
    path: '/commerce/category/:slug.html',
    name: 'commerce-category',
    component: CommerceCategoryView,
  },
  {
    path: '/commerce/product/:slug.html',
    name: 'commerce-product',
    component: CommerceProductView,
  },
  {
    path: '/commerce/cart.html',
    name: 'commerce-cart',
    component: CommerceCartView,
  },
  {
    path: '/commerce/checkout.html',
    name: 'commerce-checkout',
    component: CommerceCheckoutView,
  },
  {
    path: '/commerce/seller.html',
    name: 'commerce-seller',
    component: CommerceSellerView,
  },
  {
    path: '/news/home.html',
    name: 'news-home',
    component: NewsHomeView,
  },
  {
    path: '/news/channel/:slug.html',
    name: 'news-channel',
    component: NewsChannelView,
  },
  {
    path: '/news/article/:slug.html',
    name: 'news-article',
    component: NewsArticleView,
  },
  {
    path: '/news/search.html',
    name: 'news-search',
    component: NewsSearchView,
  },
  {
    path: '/news/creator.html',
    name: 'news-creator',
    component: NewsCreatorView,
  },
  {
    path: '/news/admin.html',
    name: 'news-admin',
    component: NewsAdminView,
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
