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
import CorporateCasesView from '../views/corporate/cases.vue'
import CorporateContactView from '../views/corporate/contact.vue'
import CorporateHomeView from '../views/corporate/home.vue'
import CorporateLandingView from '../views/corporate/landing.vue'
import CorporateProductsView from '../views/corporate/products.vue'
import EntertainmentGameView from '../views/entertainment/game.vue'
import EntertainmentHomeView from '../views/entertainment/home.vue'
import EntertainmentMusicView from '../views/entertainment/music.vue'
import EntertainmentProfileView from '../views/entertainment/profile.vue'
import EntertainmentVideoView from '../views/entertainment/video.vue'
import FinderHomeView from '../views/finder/home.vue'
import FinderNavigationView from '../views/finder/navigation.vue'
import FinderProfileView from '../views/finder/profile.vue'
import FinderResultsView from '../views/finder/results.vue'
import FinderToolsView from '../views/finder/tools.vue'
import FinanceBankView from '../views/finance/bank.vue'
import FinanceHomeView from '../views/finance/home.vue'
import FinanceInsuranceView from '../views/finance/insurance.vue'
import FinanceInvestView from '../views/finance/invest.vue'
import FinanceProfileView from '../views/finance/profile.vue'
import GovHomeView from '../views/gov/home.vue'
import GovPortalView from '../views/gov/portal.vue'
import GovProfileView from '../views/gov/profile.vue'
import GovQueryView from '../views/gov/query.vue'
import GovServicesView from '../views/gov/services.vue'
import HomeView from '../views/home/index.vue'
import HousingDesignView from '../views/housing/design.vue'
import HousingHomeView from '../views/housing/home.vue'
import HousingProfileView from '../views/housing/profile.vue'
import HousingPropertyView from '../views/housing/property.vue'
import HousingRentView from '../views/housing/rent.vue'
import LifeServiceHomeView from '../views/lifeservice/home.vue'
import LifeServiceJobsView from '../views/lifeservice/jobs.vue'
import LifeServiceLocalView from '../views/lifeservice/local.vue'
import LifeServiceProfileView from '../views/lifeservice/profile.vue'
import LifeServiceTravelView from '../views/lifeservice/travel.vue'
import MedicalAppointmentView from '../views/medical/appointment.vue'
import MedicalConsultView from '../views/medical/consult.vue'
import MedicalHealthView from '../views/medical/health.vue'
import MedicalHomeView from '../views/medical/home.vue'
import MedicalProfileView from '../views/medical/profile.vue'
import NewsAdminView from '../views/news/admin.vue'
import NewsArticleView from '../views/news/article.vue'
import NewsChannelView from '../views/news/channel.vue'
import NewsCreatorView from '../views/news/creator.vue'
import NewsHomeView from '../views/news/home.vue'
import NewsSearchView from '../views/news/search.vue'
import ProjectView from '../views/project/index.vue'
import SocialCircleView from '../views/social/circle.vue'
import SocialHomeView from '../views/social/home.vue'
import SocialMessagesView from '../views/social/messages.vue'
import SocialPostView from '../views/social/post.vue'
import SocialProfileView from '../views/social/profile.vue'
import SportsCommunityView from '../views/sports/community.vue'
import SportsCoursesView from '../views/sports/courses.vue'
import SportsHomeView from '../views/sports/home.vue'
import SportsLiveView from '../views/sports/live.vue'
import SportsProfileView from '../views/sports/profile.vue'
import TagsView from '../views/tags/index.vue'
import DevtechApiView from '../views/devtech/api.vue'
import DevtechHomeView from '../views/devtech/home.vue'
import DevtechOpenSourceView from '../views/devtech/open-source.vue'
import DevtechProfileView from '../views/devtech/profile.vue'
import DevtechToolsView from '../views/devtech/tools.vue'
import WorkStudyCollabView from '../views/workstudy/collab.vue'
import WorkStudyCoursesView from '../views/workstudy/courses.vue'
import WorkStudyHomeView from '../views/workstudy/home.vue'
import WorkStudyLibraryView from '../views/workstudy/library.vue'
import WorkStudyProfileView from '../views/workstudy/profile.vue'

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
    path: '/corporate/home.html',
    name: 'corporate-home',
    component: CorporateHomeView,
  },
  {
    path: '/corporate/products.html',
    name: 'corporate-products',
    component: CorporateProductsView,
  },
  {
    path: '/corporate/cases.html',
    name: 'corporate-cases',
    component: CorporateCasesView,
  },
  {
    path: '/corporate/landing.html',
    name: 'corporate-landing',
    component: CorporateLandingView,
  },
  {
    path: '/corporate/contact.html',
    name: 'corporate-contact',
    component: CorporateContactView,
  },
  {
    path: '/entertainment/home.html',
    name: 'entertainment-home',
    component: EntertainmentHomeView,
  },
  {
    path: '/entertainment/video.html',
    name: 'entertainment-video',
    component: EntertainmentVideoView,
  },
  {
    path: '/entertainment/music.html',
    name: 'entertainment-music',
    component: EntertainmentMusicView,
  },
  {
    path: '/entertainment/game.html',
    name: 'entertainment-game',
    component: EntertainmentGameView,
  },
  {
    path: '/entertainment/profile.html',
    name: 'entertainment-profile',
    component: EntertainmentProfileView,
  },
  {
    path: '/workstudy/home.html',
    name: 'workstudy-home',
    component: WorkStudyHomeView,
  },
  {
    path: '/workstudy/courses.html',
    name: 'workstudy-courses',
    component: WorkStudyCoursesView,
  },
  {
    path: '/workstudy/library.html',
    name: 'workstudy-library',
    component: WorkStudyLibraryView,
  },
  {
    path: '/workstudy/collab.html',
    name: 'workstudy-collab',
    component: WorkStudyCollabView,
  },
  {
    path: '/workstudy/profile.html',
    name: 'workstudy-profile',
    component: WorkStudyProfileView,
  },
  {
    path: '/finder/home.html',
    name: 'finder-home',
    component: FinderHomeView,
  },
  {
    path: '/finder/results.html',
    name: 'finder-results',
    component: FinderResultsView,
  },
  {
    path: '/finder/tools.html',
    name: 'finder-tools',
    component: FinderToolsView,
  },
  {
    path: '/finder/navigation.html',
    name: 'finder-navigation',
    component: FinderNavigationView,
  },
  {
    path: '/finder/profile.html',
    name: 'finder-profile',
    component: FinderProfileView,
  },
  {
    path: '/finance/home.html',
    name: 'finance-home',
    component: FinanceHomeView,
  },
  {
    path: '/finance/bank.html',
    name: 'finance-bank',
    component: FinanceBankView,
  },
  {
    path: '/finance/invest.html',
    name: 'finance-invest',
    component: FinanceInvestView,
  },
  {
    path: '/finance/insurance.html',
    name: 'finance-insurance',
    component: FinanceInsuranceView,
  },
  {
    path: '/finance/profile.html',
    name: 'finance-profile',
    component: FinanceProfileView,
  },
  {
    path: '/gov/home.html',
    name: 'gov-home',
    component: GovHomeView,
  },
  {
    path: '/gov/portal.html',
    name: 'gov-portal',
    component: GovPortalView,
  },
  {
    path: '/gov/services.html',
    name: 'gov-services',
    component: GovServicesView,
  },
  {
    path: '/gov/query.html',
    name: 'gov-query',
    component: GovQueryView,
  },
  {
    path: '/gov/profile.html',
    name: 'gov-profile',
    component: GovProfileView,
  },
  {
    path: '/housing/home.html',
    name: 'housing-home',
    component: HousingHomeView,
  },
  {
    path: '/housing/property.html',
    name: 'housing-property',
    component: HousingPropertyView,
  },
  {
    path: '/housing/rent.html',
    name: 'housing-rent',
    component: HousingRentView,
  },
  {
    path: '/housing/design.html',
    name: 'housing-design',
    component: HousingDesignView,
  },
  {
    path: '/housing/profile.html',
    name: 'housing-profile',
    component: HousingProfileView,
  },
  {
    path: '/lifeservice/home.html',
    name: 'lifeservice-home',
    component: LifeServiceHomeView,
  },
  {
    path: '/lifeservice/local.html',
    name: 'lifeservice-local',
    component: LifeServiceLocalView,
  },
  {
    path: '/lifeservice/travel.html',
    name: 'lifeservice-travel',
    component: LifeServiceTravelView,
  },
  {
    path: '/lifeservice/jobs.html',
    name: 'lifeservice-jobs',
    component: LifeServiceJobsView,
  },
  {
    path: '/lifeservice/profile.html',
    name: 'lifeservice-profile',
    component: LifeServiceProfileView,
  },
  {
    path: '/medical/home.html',
    name: 'medical-home',
    component: MedicalHomeView,
  },
  {
    path: '/medical/consult.html',
    name: 'medical-consult',
    component: MedicalConsultView,
  },
  {
    path: '/medical/appointment.html',
    name: 'medical-appointment',
    component: MedicalAppointmentView,
  },
  {
    path: '/medical/health.html',
    name: 'medical-health',
    component: MedicalHealthView,
  },
  {
    path: '/medical/profile.html',
    name: 'medical-profile',
    component: MedicalProfileView,
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
    path: '/social/home.html',
    name: 'social-home',
    component: SocialHomeView,
  },
  {
    path: '/social/circle/:slug.html',
    name: 'social-circle',
    component: SocialCircleView,
  },
  {
    path: '/social/post/:slug.html',
    name: 'social-post',
    component: SocialPostView,
  },
  {
    path: '/social/messages.html',
    name: 'social-messages',
    component: SocialMessagesView,
  },
  {
    path: '/social/profile.html',
    name: 'social-profile',
    component: SocialProfileView,
  },
  {
    path: '/sports/home.html',
    name: 'sports-home',
    component: SportsHomeView,
  },
  {
    path: '/sports/live.html',
    name: 'sports-live',
    component: SportsLiveView,
  },
  {
    path: '/sports/courses.html',
    name: 'sports-courses',
    component: SportsCoursesView,
  },
  {
    path: '/sports/community.html',
    name: 'sports-community',
    component: SportsCommunityView,
  },
  {
    path: '/sports/profile.html',
    name: 'sports-profile',
    component: SportsProfileView,
  },
  {
    path: '/devtech/home.html',
    name: 'devtech-home',
    component: DevtechHomeView,
  },
  {
    path: '/devtech/open-source.html',
    name: 'devtech-open-source',
    component: DevtechOpenSourceView,
  },
  {
    path: '/devtech/api.html',
    name: 'devtech-api',
    component: DevtechApiView,
  },
  {
    path: '/devtech/tools.html',
    name: 'devtech-tools',
    component: DevtechToolsView,
  },
  {
    path: '/devtech/profile.html',
    name: 'devtech-profile',
    component: DevtechProfileView,
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
