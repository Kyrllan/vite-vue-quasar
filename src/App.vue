<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const menuList = [
  {
    icon: 'feedback',
    label: 'Módulo 1',
  },
  {
    icon: 'help',
    label: 'Módulo 2',
  },
  {
    icon: 'settings',
    label: 'Módulo 3',
  },
]

</script>

<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" style="height: 300px">
      <q-header>
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="700"
      >
      <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Módulo 2'" v-ripple>
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

      <v-router></v-router>


      <q-page-container>
        <q-page>
          <h1>Quasar</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
      
    </q-layout>
  </div>
</template>

<!-- <template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr fFf" style="height: 300px">
      <q-header reveal class="z-top">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Quasar</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" :width="200" :breakpoint="500" bordered>
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page style="padding-top: 60px" class="q-pa-md">
          <h1>Quasar</h1>
        </q-page>

      </q-page-container>
    </q-layout>
  </div>
</template> -->