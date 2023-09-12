<script setup lang="ts">
import github_icon from '@/assets/img/github.svg'
import search_icon from '@/assets/img/search.svg'

import avatar_icon from '@/assets/img/avatar.jpeg'
import { useRouter } from 'vue-router'

const router = useRouter()

interface NavItem {
  id: number
  name: string
  label: string
  icon?: any
  link?: string
}

const navList: NavItem[] = [
  {
    id: 1,
    name: 'blog',
    label: '文章',
  },
  {
    id: 2,
    name: 'archive',
    label: '归档',
  },
  {
    id: 3,
    name: 'about',
    label: '关于',
  },
  {
    id: 4,
    name: '',
    label: 'github',
    icon: github_icon,
    link: 'https://github.com/liuxzzz',
  },
  {
    id: 5,
    name: '',
    label: 'search',
    icon: search_icon,
  },
]

const handleNavItemClick = (item: NavItem) => {
  //search

  if (item.label === 'search') {
    return
  }

  //github
  if (item.label === 'github') {
    window.open(item.link)
    return
  }
  router.push(`${item.name}`)
  // TODO:
}
</script>

<template>
  <div class="header">
    <div class="header-avatar">
      <img :src="avatar_icon" alt="" width="32" class="avatar-img" />
      <span class="header-">Horizon</span>
    </div>
    <div class="header-nav">
      <div
        v-for="item in navList"
        class="nac-item"
        @click="handleNavItemClick(item)"
      >
        <a-tooltip placement="bottom">
          <template #title>
            <span>{{ item.label }}</span>
          </template>
          <img v-if="item.icon" :src="item.icon" alt="" width="20" />
          <span v-else>{{ item.label }}</span>
        </a-tooltip>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #6002ee;
  .header-avatar {
    padding: 8px;
    margin: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    .avatar-img {
      border-radius: 50%;
      margin-right: 8px;
    }
    border-radius: 4px;
    transition:
      color 0.3s ease 0s,
      background-color 0.3s ease 0s;
    &:hover {
      background-color: rgba(229, 219, 255, 0.3);
    }
  }
  .header-nav {
    display: flex;
    align-items: center;
    padding-right: 24px;
    .nac-item {
      border-radius: 4px;
      cursor: pointer;
      padding: 8px 10px;
      transition:
        color 0.3s ease 0s,
        background-color 0.3s ease 0s;
      &:hover {
        background-color: rgba(229, 219, 255, 0.3);
      }
    }
  }
}
</style>
