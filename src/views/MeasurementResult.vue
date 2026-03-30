<template>
  <div class="operator-panel">
    <div class="panels-grid">
      <!-- Видеопоток -->
      <div class="panel video-panel">
        <h3 class="panel-title">📹 ВИДЕОПОТОК</h3>
        <div class="video-grid">
          <div v-for="i in 9" :key="i" class="video-feed">
            <div class="video-placeholder">
              <span>Камера {{ i }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Зона забора -->
      <div class="panel zone-panel">
        <h3 class="panel-title">🎯 ЗОНА ЗАБОРА</h3>
        <div class="zone-view">
          <div class="zone-placeholder">
            <span>🏗️ Зона забора материала</span>
          </div>
        </div>
      </div>

      <!-- 3D модель -->
      <div class="panel model-panel">
        <h3 class="panel-title">📐 3D МОДЕЛЬ КУЧИ</h3>
        <div class="model-view">
          <div class="model-placeholder">
            <div class="wireframe-cube"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="actions">
      <button class="btn-menu" @click="goToMenu">
        📋 МЕНЮ
      </button>
      <button class="btn-primary" @click="createProtocol">
        📄 СОЗДАТЬ ПРОТОКОЛ
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToMenu = () => {
  router.push('/')
}

const createProtocol = () => {
  router.push('/protocol/create')
}
</script>

<style scoped>
.operator-panel {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.panels-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 24px;
}

.panel {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.panel-title {
  margin: 0 0 16px 0;
  font-size: 18px;
  color: #1a1a2e;
  font-weight: 700;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.video-feed {
  aspect-ratio: 16/9;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  font-size: 14px;
}

.zone-view, .model-view {
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
}

.zone-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%);
  color: white;
  font-size: 16px;
  font-weight: 600;
}

.model-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0a;
}

.wireframe-cube {
  width: 150px;
  height: 150px;
  border: 2px solid #00ff00;
  transform: perspective(500px) rotateX(45deg) rotateY(45deg);
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from { transform: perspective(500px) rotateX(45deg) rotateY(0deg); }
  to { transform: perspective(500px) rotateX(45deg) rotateY(360deg); }
}

.actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-menu, .btn-primary {
  padding: 14px 32px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.btn-menu {
  background: #6c757d;
  color: white;
}

.btn-menu:hover {
  background: #5a6268;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
  transform: translateY(-2px);
}
</style>