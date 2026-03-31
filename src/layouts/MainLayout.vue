<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="logo">WEIGHT VISION</div>

      <nav class="nav">
        <RouterLink to="/" class="nav-item"> Главное меню </RouterLink>
        <RouterLink to="/operator" class="nav-item"> 👨‍ Панель оператора </RouterLink>
        <RouterLink to="/protocols" class="nav-item"> 📊 История измерений </RouterLink>
        <RouterLink to="/reports" class="nav-item"> 📈 Отчёты </RouterLink>
        <RouterLink to="/users" class="nav-item"> 👥 Пользователи </RouterLink>
        <RouterLink to="/settings" class="nav-item"> ⚙️ Настройки </RouterLink>
      </nav>

      <button class="logout-btn" @click="logout">🚪 Выйти</button>
    </aside>

    <main class="content">
      <header class="topbar">
        <h2>{{ pageTitle }}</h2>
        <div class="user-info">
          <span>Оператор: Иванов И.И.</span>
        </div>
      </header>

      <div class="page-content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const pageTitle = computed(() => {
  const titles = {
    '/': 'Главное меню',
    '/operator': 'Панель оператора',
    '/protocols': 'Мониторинг протоколов',
    '/reports': 'Отчёты',
    '/users': 'Пользователи',
    '/settings': 'Настройки',
    '/graphs': 'Графики',
    '/calibration': 'Калибровка камер',
  }
  return titles[route.path] || 'WeightVision'
})

const logout = () => {
  router.push('/login')
}
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.sidebar {
  width: 260px;
  background: #1a1a2e;
  color: white;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  padding: 16px;
  background: #620779;
  border-radius: 12px;
  letter-spacing: 1px;
}

.nav {
  flex: 1;
}

.nav-item {
  display: block;
  padding: 14px 18px;
  margin-bottom: 8px;
  color: #b8b8b8;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.3s;
  font-size: 25px;
}

.nav-item:hover {
  background: #0f3460;
  color: white;
}

.nav-item.router-link-active {
  background: #ff0077;
  color: rgb(255, 255, 255);
  font-weight: 600;
}

.logout-btn {
  background: #e94560;
  border: none;
  padding: 12px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  transition: 0.3s;
}

.logout-btn:hover {
  background: #ff6b6b;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.topbar {
  background: white;
  padding: 20px 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topbar h2 {
  font-size: 25px;
  color: #1a1a2e;
  margin: 0;
}

.user-info {
  color: #666;
  font-size: 14px;
}

.page-content {
  flex: 1;
  padding: 32px;
  overflow-y: auto;
}
</style>
