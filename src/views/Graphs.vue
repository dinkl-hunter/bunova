<template>
  <div class="graphs">
    <div class="graphs-container">
      <h2 class="title">ГРАФИКИ</h2>

      <div class="charts-grid">
        <div class="chart-box">
          <h3>ГРАФИК ВЕСА КУЧИ 1</h3>
          <div class="chart-placeholder">
            <svg viewBox="0 0 400 200" class="chart-svg">
              <polyline
                fill="none"
                stroke="#007bff"
                stroke-width="2"
                points="0,150 50,120 100,140 150,100 200,110 250,80 300,90 350,60 400,70"
              />
            </svg>
          </div>
        </div>

        <div class="chart-box">
          <h3>ГРАФИК ВЕСА КУЧИ 2</h3>
          <div class="chart-placeholder">
            <svg viewBox="0 0 400 200" class="chart-svg">
              <polyline
                fill="none"
                stroke="#007bff"
                stroke-width="2"
                points="0,150 50,130 100,120 150,110 200,100 250,90 300,85 350,80 400,75"
              />
            </svg>
          </div>
        </div>

        <div class="chart-box">
          <h3>ГРАФИК ОТКЛОНЕНИЙ КУЧИ 1</h3>
          <div class="chart-placeholder">
            <svg viewBox="0 0 400 200" class="chart-svg">
              <polyline
                fill="none"
                stroke="#dc3545"
                stroke-width="2"
                points="0,100 50,95 100,105 150,90 200,110 250,85 300,95 350,80 400,90"
              />
            </svg>
          </div>
        </div>

        <div class="chart-box">
          <h3>ГРАФИК ОТКЛОНЕНИЙ КУЧИ 2</h3>
          <div class="chart-placeholder">
            <svg viewBox="0 0 400 200" class="chart-svg">
              <polyline
                fill="none"
                stroke="#dc3545"
                stroke-width="2"
                points="0,100 50,90 100,95 150,85 200,100 250,90 300,85 350,80 400,88"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="actions">
      <button class="btn-menu" @click="goBack">МЕНЮ</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.graphs {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.graphs-container {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.title {
  text-align: center;
  color: #1a1a2e;
  margin: 0 0 32px 0;
  font-size: 32px;
  font-weight: 700;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.chart-box {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
}

.chart-box h3 {
  margin: 0 0 16px 0;
  color: #1a1a2e;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.chart-placeholder {
  background: white;
  padding: 16px;
  border-radius: 8px;
  height: 220px;
}

.chart-svg {
  width: 100%;
  height: 100%;
}

.actions {
  display: flex;
  justify-content: center;
}

.btn-menu {
  background: #007bff;
  color: white;
  border: none;
  padding: 14px 48px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.btn-menu:hover {
  background: #0056b3;
  transform: translateY(-2px);
}
</style>
