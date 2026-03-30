<template>
  <div class="reports">
    <div class="reports-container">
      <h2 class="title">ОТЧЁТЫ</h2>
      
      <div class="filters">
        <div class="filter-group">
          <label>Период:</label>
          <select v-model="filters.period">
            <option value="day">За день</option>
            <option value="week">За неделю</option>
            <option value="month">За месяц</option>
          </select>
        </div>
        
        <div class="filter-group">
          <label>Материал:</label>
          <select v-model="filters.material">
            <option value="all">Все материалы</option>
            <option value="sand">Песок</option>
            <option value="gravel">Гравий</option>
          </select>
        </div>
      </div>

      <div class="summary-cards">
        <div class="summary-card">
          <h4>Общий объём</h4>
          <p class="value">1,234 м³</p>
        </div>
        <div class="summary-card">
          <h4>Общая масса</h4>
          <p class="value">2,456 тонн</p>
        </div>
        <div class="summary-card">
          <h4>Измерений</h4>
          <p class="value">45</p>
        </div>
      </div>

      <div class="table-wrapper">
        <table class="report-table">
          <thead>
            <tr>
              <th>№</th>
              <th>МАТЕРИАЛ</th>
              <th>ГАБАРИТЫ</th>
              <th>ОБЪЁМ</th>
              <th>ВЕС</th>
              <th>ДАТА</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ЩЕБЕНЬ</td>
              <td>2.5×3.0×1.8 м</td>
              <td>13.5 м³</td>
              <td>21.6 тонн</td>
              <td>25.03.2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="actions">
      <button class="btn-menu" @click="goBack">← МЕНЮ</button>
      <button class="btn-primary" @click="showGraphs">📊 ГРАФИК</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const filters = ref({
  period: 'week',
  material: 'all'
})

const goBack = () => {
  router.push('/')
}

const showGraphs = () => {
  router.push('/graphs')
}
</script>

<style scoped>
.reports {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.reports-container {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.title {
  text-align: center;
  color: #000000;
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

.filter-group select {
  padding: 10px 14px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}

.summary-card {
  background: #007bff 0%;
  padding: 24px;
  border-radius: 12px;
  color: white;
  text-align: center;
}

.summary-card h4,
.summary-card .value {
  color: #1a1a2e; /* чёрный текст */
  -webkit-text-stroke: 0.01px white; /* белая обводка */
  text-shadow: 0 0 1px white; /* дополнительное свечение */
}

.summary-card .value {
  margin: 0;
  font-size: 50px;
  font-weight: bold;
}

.table-wrapper {
  overflow-x: auto;
}

.report-table {
  width: 100%;
  border-collapse: collapse;
}

.report-table th,
.report-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.report-table th {
  background: #007bff;
  font-weight: 700;
  color: #000000;
  -webkit-text-stroke: 0.01px #ffffff; /* белая обводка */
  text-shadow: 0 0 1px white; /* дополнительное свечение */
  text-transform: uppercase;
  font-size: 24px;
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
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.btn-menu {
  background: #6c757d;
  color: white;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-menu:hover, .btn-primary:hover {
  transform: translateY(-2px);
}
</style>