<template>
  <div class="graphs">
    <div class="graphs-container">
      <h2 class="title">ГРАФИК</h2>
      
      <div class="filters">
        <div class="filter-group">
          <label>Выберите материал</label>
          <select v-model="selectedMaterial">
            <option value="all">Все материалы</option>
            <option value="sand">Песок</option>
            <option value="gravel">Гравий</option>
            <option value="stone">Щебень</option>
          </select>
        </div>
        
        <div class="filter-group">
          <label>Выберите период</label>
          <input type="date" v-model="dateFrom" />
          <span>—</span>
          <input type="date" v-model="dateTo" />
        </div>
      </div>

      <button class="btn-show" @click="showGraph">
        📊 Показать график
      </button>

      <div class="charts-section">
        <div class="chart">
          <h3>ГРАФИК ВЕСА</h3>
          <div class="chart-placeholder">
            <svg viewBox="0 0 400 200" class="chart-svg">
              <polyline
                fill="none"
                stroke="#007bff"
                stroke-width="2"
                points="0,150 50,120 100,140 150,100 200,110 250,80 300,90 350,60 400,70"
              />
              <polyline
                fill="none"
                stroke="#28a745"
                stroke-width="2"
                points="0,160 50,140 100,150 150,120 200,130 250,100 300,110 350,80 400,90"
              />
            </svg>
          </div>
        </div>

        <div class="chart">
          <h3>ГРАФИК ОТКЛОНЕНИЙ</h3>
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
      </div>
    </div>

    <div class="actions">
      <button class="btn-menu" @click="goBack">← МЕНЮ</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const selectedMaterial = ref('all')
const dateFrom = ref('')
const dateTo = ref('')

const goBack = () => {
  router.push('/')
}

const showGraph = () => {
  console.log('Showing graph for:', selectedMaterial.value)
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
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.title {
  text-align: center;
  color: #1a1a2e;
  margin: 0 0 24px 0;
  font-size: 28px;
  font-weight: 700;
}

.filters {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.filter-group label {
  font-weight: 600;
  color: #333;
}

.filter-group select,
.filter-group input {
  padding: 10px 14px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
}

.btn-show {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 32px;
}

.btn-show:hover {
  background: #0056b3;
}

.charts-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.chart {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
}

.chart h3 {
  margin: 0 0 16px 0;
  color: #1a1a2e;
  text-align: center;
  font-size: 16px;
}

.chart-placeholder {
  background: white;
  padding: 20px;
  border-radius: 8px;
  height: 250px;
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