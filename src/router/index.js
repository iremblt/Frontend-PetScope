import { createRouter, createWebHistory } from 'vue-router'
import PetIndex from '../views/pets/Index.vue'
import PetCreate from '../views/pets/Create.vue'
import PetEdit from '../views/pets/Edit.vue'
import PetDetail from '../views/pets/Detail.vue'
import Login from '../views/user/Login.vue'
import Logout from '../views/user/Logout.vue'
import Register from '../views/user/Register.vue'
import UserDetail from '../views/user/Detail.vue'
import UserEdit from '../views/user/Edit.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: PetIndex
  },
  {
    path: '/detail/flyer/:id',
    name: 'detailFlyer',
    component: PetDetail
  },
  {
    path: '/create/flyer',
    name: 'createFlyer',
    component: PetCreate
  },
  {
    path: '/edit/flyer/:id',
    name: 'editFlyer',
    component: PetEdit
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/detail/user/:id',
    name: 'detailUser',
    component: UserDetail
  },
  {
    path: '/edit/user/:id',
    name: 'editUser',
    component: UserEdit
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
