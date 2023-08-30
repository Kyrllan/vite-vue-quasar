<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const menuList = [
  {
    icon: 'feedback',
    label: 'Módulo 1',
    route: '/',
  },
  {
    icon: 'help',
    label: 'Módulo 2',
    route: '/module2',
  },
  {
    icon: 'settings',
    label: 'Módulo 3',
    route: '/module3',
  },
]


</script>

<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" style="height: 300px">
      <q-header>
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Quasar</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="700">
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, i) in menuList" :key="i">
              <q-item clickable v-ripple @click="$router.push(menuItem.route)">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <router-view></router-view>
    </q-layout>
  </div>
</template>