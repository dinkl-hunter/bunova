<template>
  <div class="main-menu">
    <div class="menu-grid">
      <button class="menu-card" @click="goTo('/operator')">
        <div class="card-icon">👨‍</div>
        <h3>ПАНЕЛЬ ОПЕРАТОРА</h3>
        <p>Мониторинг видеопотока и измерений</p>
      </button>

      <button class="menu-card" @click="goTo('/protocols')">
        <div class="card-icon">📊</div>
        <h3>ИСТОРИЯ ИЗМЕРЕНИЙ</h3>
        <p>Просмотр всех протоколов измерений</p>
      </button>

      <button class="menu-card" @click="goTo('/reports')">
        <div class="card-icon">📈</div>
        <h3>ОТЧЁТЫ</h3>
        <p>Аналитика и статистика</p>
      </button>

      <button class="menu-card" @click="goTo('/users')">
        <div class="card-icon">👥</div>
        <h3>ПОЛЬЗОВАТЕЛИ</h3>
        <p>Управление пользователями системы</p>
      </button>

      <button class="menu-card" @click="goTo('/settings')">
        <div class="card-icon">⚙️</div>
        <h3>НАСТРОЙКИ</h3>
        <p>Конфигурация системы</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
.main-menu {
  padding: 20px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-card {
  background: white;
  border: none;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
}

.menu-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,123,255,0.15);
}

.card-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.menu-card h3 {
  color: #1a1a2e;
  margin: 0 0 10px 0;
  font-size: 18px;
}

.menu-card p {
  color: #666;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}
</style>