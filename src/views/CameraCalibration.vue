<template>
  <div class="camera-calibration">
    <div class="calibration-container">
      <h2 class="title">КАЛИБРОВКА КАМЕР</h2>
      
      <div class="calibration-content">
        <div class="cameras-section">
          <h3>Камеры онлайн</h3>
          <div class="camera-grid">
            <div v-for="i in 4" :key="i" class="camera-feed">
              <div class="camera-placeholder">
                <span>Камера {{ i }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="controls-section">
          <h3>Калибровка</h3>
          
          <div class="control-group">
            <label>Выбор угла</label>
            <select>
              <option>Верхний левый</option>
              <option>Верхний правый</option>
              <option>Нижний левый</option>
              <option>Нижний правый</option>
            </select>
          </div>

          <div class="control-group">
            <label>Настройка камеры относительно кучи</label>
            <input type="number" placeholder="Расстояние (м)" />
          </div>

          <div class="control-group">
            <label>Фокусное расстояние</label>
            <input type="number" placeholder="мм" />
          </div>

          <button class="btn-save">💾 СОХРАНИТЬ</button>
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
  router.push('/settings')
}
</script>

<style scoped>
.camera-calibration {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.calibration-container {
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

.calibration-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
}

.cameras-section h3,
.controls-section h3 {
  margin: 0 0 16px 0;
  color: #1a1a2e;
  font-size: 18px;
}

.camera-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.camera-feed {
  aspect-ratio: 16/9;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

.camera-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}

.controls-section {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-group label {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.control-group select,
.control-group input {
  padding: 10px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
}

.btn-save {
  background: #28a745;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 8px;
}

.btn-save:hover {
  background: #218838;
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