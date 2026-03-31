<template>
  <div class="measurement-result">
    <div class="result-card">
      <h2 class="title">РЕЗУЛЬТАТ ИЗМЕРЕНИЯ</h2>

      <div class="result-content">
        <div class="image-section">
          <!-- CSS-плейсхолдер вместо внешнего изображения -->
          <div class="material-placeholder">
            <span>📦 Материал</span>
          </div>
        </div>

        <div class="data-section">
          <div class="data-row">
            <span class="label">ПЛОТНОСТЬ:</span>
            <span class="value">7.13 Г/СМ³</span>
          </div>
          <div class="data-row">
            <span class="label">РАЗМЕР:</span>
            <span class="value">10×15×5 СМ</span>
          </div>
          <div class="data-row">
            <span class="label">ОБЪЁМ:</span>
            <span class="value">154 СМ³</span>
          </div>
          <div class="data-row">
            <span class="label">ВЕС:</span>
            <span class="value">1.1 КГ</span>
          </div>
          <div class="data-row">
            <span class="label">МАТЕРИАЛ:</span>
            <span class="value">ЦИНК</span>
          </div>
        </div>
      </div>

      <div class="actions">
        <button class="btn-ok" @click="goBack">OK</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/protocols')
}
</script>

<style scoped>
.measurement-result {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
}

.result-card {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 700px;
  width: 100%;
  border: 2px solid #1a1a2e;
}

.title {
  text-align: center;
  color: #1a1a2e;
  margin: 0 0 32px 0;
  font-size: 32px;
  font-weight: 700;
}

.result-content {
  display: flex;
  gap: 32px;
  margin-bottom: 32px;
  align-items: center;
}

.image-section {
  flex: 1;
}

.material-placeholder {
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a2e;
  font-size: 18px;
  font-weight: 600;
  border: 2px solid #1a1a2e;
}

.data-section {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.data-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f8f9fa;
  border-radius: 6px;
  border-bottom: 2px solid #1a1a2e;
}

.data-row .label {
  font-weight: 700;
  color: #1a1a2e;
  font-size: 14px;
}

.data-row .value {
  font-weight: 700;
  color: #1a1a2e;
  font-size: 14px;
}

.actions {
  display: flex;
  justify-content: center;
}

.btn-ok {
  background: #007bff;
  color: white;
  border: none;
  padding: 14px 64px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.btn-ok:hover {
  background: #0056b3;
  transform: translateY(-2px);
}
</style>
