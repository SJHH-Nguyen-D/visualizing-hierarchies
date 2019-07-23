
export const Intro = () => import('./views/Intro.vue')
export const ConsoleView = () => import('./views/ConsoleView.vue')

export const finished = {
  MakingComponent: () => import('@/lessons/vue/create/finished/index.vue'),
  Reactivity:      () => import('@/lessons/vue/reactivity/finished/index.vue'),
  Rendering:       () => import('@/lessons/vue/rendering/finished/index.vue'),
  Interaction:     () => import('@/lessons/vue/interact/finished/index.vue')
}