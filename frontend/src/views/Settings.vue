<template>
  <div class="settings">
    <div class="settings-container">
      <h2 class="title">НАСТРОЙКИ</h2>
      
      <div class="settings-grid">
        <div class="settings-section">
          <h3>Управление камерами</h3>
          <div class="setting-buttons">
            <button class="btn-setting">📹 Добавить камеру</button>
            <button class="btn-setting">🗑️ Удалить камеру</button>
          </div>
        </div>

        <div class="settings-section">
          <h3>Справочник материалов</h3>
          <div class="setting-buttons">
            <button class="btn-setting">➕ Добавить материал</button>
            <button class="btn-setting">✏️ Редактировать материал</button>
          </div>
        </div>

        <div class="settings-section">
          <h3>Параметры системы</h3>
          <div class="setting-buttons">
            <button class="btn-setting">🎚️ Порог чувствительности</button>
            <button class="btn-setting">📐 Настройка порога</button>
          </div>
        </div>

        <div class="settings-section full-width">
          <h3>Калибровка</h3>
          <div class="setting-buttons">
            <button class="btn-setting-primary" @click="goToCalibration">
              🔧 КАЛИБРОВКА КАМЕР
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="actions">
      <button class="btn-menu" @click="goBack">← МЕНЮ</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')
}

const goToCalibration = () => {
  router.push('/calibration')
}
</script>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.settings-container {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.title {
  text-align: center;
  color: #1a1a2e;
  margin: 0 0 32px 0;
  font-size: 28px;
  font-weight: 700;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.settings-section {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
}

.settings-section h3 {
  margin: 0 0 16px 0;
  color: #1a1a2e;
  font-size: 22px;
}

.setting-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn-setting {
  background: #50a5ff;
  border: 2px solid #e0e0e0;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 22px;
  transition: 0.3s;
  text-align: left;
}

.btn-setting:hover {
  border-color: #014b9b;
  background: #f0f8ff;
}

.btn-setting-primary {
  background: #007bff;
  color: rgb(0, 0, 0);
  border: none;
  padding: 14px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  transition: 0.3s;
}

.btn-setting-primary:hover {
  background: #0065d8;
}

.full-width {
  grid-column: 1 / -1;
}

.actions {
  display: flex;
  justify-content: center;
}

.btn-menu {
  background: #6c757d;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.btn-menu:hover {
  background: #5a6268;
}
</style>