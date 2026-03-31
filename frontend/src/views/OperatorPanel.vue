<template>
  <div class="operator-panel">
    <div class="panels-grid">
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

      <div class="panel zone-panel">
        <h3 class="panel-title">🎯 ЗОНА ЗАБОРА</h3>
        <div class="zone-view">
          <div class="zone-placeholder">
            <span>🏗️ Зона забора</span>
          </div>
        </div>
      </div>

      <div class="panel model-panel">
        <h3 class="panel-title">📐 3D МОДЕЛЬ</h3>
        <div class="model-view">
          <div class="model-placeholder">
            <div class="wireframe-cube"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="actions">
      <button class="btn-menu" @click="goToMenu">📋 МЕНЮ</button>
      <button class="btn-primary" @click="createProtocol">📄 ПРОТОКОЛ</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToMenu = () => router.push('/')
const createProtocol = () => router.push('/protocol/create')
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.panel-title {
  margin: 0 0 16px 0;
  font-size: 25px;
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
}
.video-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  font-size: 25px;
}
.zone-view,
.model-view {
  height: 280px;
  border-radius: 8px;
  overflow: hidden;
}
.zone-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f3460, #1a1a2e);
  color: white;
  font-size: 15px;
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
  width: 120px;
  height: 120px;
  border: 2px solid #00ff88;
  transform: perspective(400px) rotateX(40deg) rotateY(40deg);
  animation: rotate 8s linear infinite;
}
@keyframes rotate {
  from {
    transform: perspective(400px) rotateX(40deg) rotateY(0deg);
  }
  to {
    transform: perspective(400px) rotateX(40deg) rotateY(360deg);
  }
}
.actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}
.btn-menu,
.btn-primary {
  padding: 12px 28px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
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
