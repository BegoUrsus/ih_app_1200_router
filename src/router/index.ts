import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoaderView from '@/views/LoaderView.vue'
import IntroView from '@/views/IntroView.vue'
import MainView from '@/views/MainView.vue'
import EquipoPlayer from '@/components/EquipoPlayer.vue'
import EquipoValores from '@/components/Equipo/EquipoValores.vue'
import EquipoGestion from '@/components/Equipo/EquipoGestion.vue'
import EquipoCalidad from '@/components/Equipo/EquipoCalidad.vue'
import EquipoPrevencion from '@/components/Equipo/EquipoPrevencion.vue'
import EquipoResponsabilidad from '@/components/Equipo/EquipoResponsabilidad.vue'
import IngenieriaPlayer from '@/components/IngenieriaPlayer.vue'
import IngenieriaLineales from '@/components/Ingenieria/IngenieriaLineales.vue'
import IngenieriaUrbanizacion from '@/components/Ingenieria/IngenieriaUrbanizacion.vue'
import IngenieriaHidraulicas from '@/components/Ingenieria/IngenieriaHidraulicas.vue'
import IngenieriaIndustriales from '@/components/Ingenieria/IngenieriaIndustriales.vue'
import IngenieriaDeportivas from '@/components/Ingenieria/IngenieriaDeportivas.vue'
import IngenieriaEstructuras from '@/components/Ingenieria/IngenieriaEstructuras.vue'
import IngenieriaGeotecnia from '@/components/Ingenieria/IngenieriaGeotecnia.vue'
import IngenieriaParques from '@/components/Ingenieria/IngenieriaParques.vue'
import EdificacionPlayer from '@/components/EdificacionPlayer.vue'
import ProjectPlayer from '@/components/ProjectPlayer.vue'
import HumanaPlayer from '@/components/HumanaPlayer.vue'
import ContactoPlayer from '@/components/ContactoPlayer.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '*', redirect: '/' },
  {
    path: '/',
    name: 'loader',
    component: LoaderView
  },
  {
    path: '/intro',
    name: 'intro',
    component: IntroView
  },
  {
    path: '/main',
    name: 'main',
    // redirect: '/main/equipo',
    component: MainView,
    // component: () => import(/* webpackChunkName: "main" */ '@/views/MainView.vue'),
    children: [
      {
        path: '/main/equipo',
        name: 'equipo',
        // redirect: '/main/equipo/valores',
        // alias: ['/valores', '/calidad', 'gestion/calidad'],
        component: EquipoPlayer,
        children: [
          {
            path: '/main/equipo/valores',
            name: 'valores',
            component: EquipoValores,
          },
          {
            path: '/main/equipo/gestion',
            name: 'gestion',
            component: EquipoGestion,
            children: [
              {
                path: '/main/equipo/gestion/calidad',
                name: 'calidad',
                component: EquipoCalidad,
              },
              {
                path: '/main/equipo/gestion/prevencion',
                name: 'prevencion',
                component: EquipoPrevencion,
              },
              {
                path: '/main/equipo/gestion/responsabilidad',
                name: 'responsabilidad',
                component: EquipoResponsabilidad,
              },
            ]
          },
        ]
      },
      {
        path: '/main/ingenieria',
        name: 'ingenieria',
        // redirect: '/main/ingenieria/lineales',
        component: IngenieriaPlayer,
        children: [
          {
            path: '/main/ingenieria/lineales',
            name: 'lineales',
            component: IngenieriaLineales,
          },
          {
            path: '/main/ingenieria/urbanizacion',
            name: 'urbanizacion',
            component: IngenieriaUrbanizacion,
          },
          {
            path: '/main/ingenieria/hidraulicas',
            name: 'hidraulicas',
            component: IngenieriaHidraulicas,
          },
          {
            path: '/main/ingenieria/industriales',
            name: 'industriales',
            component: IngenieriaIndustriales,
          },
          {
            path: '/main/ingenieria/deportivas',
            name: 'deportivas',
            component: IngenieriaDeportivas,
          },
          {
            path: '/main/ingenieria/estructuras',
            name: 'estructuras',
            component: IngenieriaEstructuras,
          },
          {
            path: '/main/ingenieria/geotecnia',
            name: 'geotecnia',
            component: IngenieriaGeotecnia,
          },
          {
            path: '/main/ingenieria/parques',
            name: 'parques',
            component: IngenieriaParques,
          },
        ]
  },
      {
        path: '/main/edificacion',
        name: 'edificacion',
        component: EdificacionPlayer
      },
      {
        path: '/main/project',
        name: 'project',
        component: ProjectPlayer
      },
      {
        path: '/main/humana',
        name: 'humana',
        component: HumanaPlayer
      },
      {
        path: '/main/contacto',
        name: 'contacto',
        component: ContactoPlayer
      },
    ]
  },
  
]

const router = new VueRouter({
  // mode: 'history',
  routes,
  linkActiveClass: 'red-active-link',
  linkExactActiveClass: 'red-active-link',
})

router.afterEach ((to, from) => {
  // console.log("AFTER EACH to: " + to.name);
  router.app.$store.state.toRoute = to.name;
  router.app.$store.state.fromRoute = from.name;
});


export default router
