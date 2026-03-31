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
            <option value="zinc">ЦИНК</option>
            <option value="gravel">ЩЕБЕНЬ</option>
            <option value="sand">ПЕСОК</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Техника:</label>
          <select v-model="filters.equipment">
            <option value="all">Вся техника</option>
            <option value="excavator1">Экскаватор №1</option>
            <option value="excavator2">Экскаватор №2</option>
          </select>
        </div>
      </div>

      <div class="table-wrapper">
        <table class="report-table">
          <thead>
            <tr>
              <th>№</th>
              <th>МАТЕРИАЛ</th>
              <th>ТИП</th>
              <th>ГАБАРИТЫ</th>
              <th>ОБЪЁМ</th>
              <th>ПЛОТНОСТЬ</th>
              <th>ДАТА</th>
              <th>ВРЕМЯ</th>
              <th>ИТОГОВЫЙ ВЕС</th>
              <th>НОМЕР КУЧИ</th>
              <th>ТЕХНИКА</th>
              <th>ОПЕРАТОР</th>
              <th>ОТКЛОНЕНИЕ</th>
              <th>СТАТУС</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><strong>ЦИНК</strong></td>
              <td>Металл</td>
              <td>10×15×5 СМ</td>
              <td>154 СМ³</td>
              <td>7.13 Г/СМ³</td>
              <td>25.03.2026</td>
              <td>15:25</td>
              <td><strong>1.1 КГ</strong></td>
              <td>2</td>
              <td>ЭК-1</td>
              <td>Иванов И.И.</td>
              <td>0.05</td>
              <td><span class="status completed">✓ Выполнено</span></td>
            </tr>
            <tr>
              <td>2</td>
              <td><strong>ЩЕБЕНЬ</strong></td>
              <td>Инертный</td>
              <td>2.5×3.0×1.8 М</td>
              <td>13.5 М³</td>
              <td>1.6 Т/М³</td>
              <td>25.03.2026</td>
              <td>14:30</td>
              <td><strong>21.6 ТОНН</strong></td>
              <td>1</td>
              <td>ЭК-2</td>
              <td>Петров П.П.</td>
              <td>0.02</td>
              <td><span class="status completed">✓ Выполнено</span></td>
            </tr>
            <tr>
              <td>3</td>
              <td><strong>ПЕСОК</strong></td>
              <td>Инертный</td>
              <td>5.0×4.0×2.0 М</td>
              <td>40.0 М³</td>
              <td>1.5 Т/М³</td>
              <td>25.03.2026</td>
              <td>13:15</td>
              <td><strong>60.0 ТОНН</strong></td>
              <td>3</td>
              <td>ЭК-1</td>
              <td>Сидоров С.С.</td>
              <td>0.03</td>
              <td><span class="status completed">✓ Выполнено</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="summary-info">
        <div class="summary-item">
          <span class="label">Всего операций:</span>
          <span class="value">3</span>
        </div>
        <div class="summary-item">
          <span class="label">Общий объём:</span>
          <span class="value">53.5 М³</span>
        </div>
        <div class="summary-item">
          <span class="label">Общая масса:</span>
          <span class="value">81.7 Т</span>
        </div>
      </div>
    </div>

    <div class="actions">
      <button class="btn-menu" @click="goBack">← МЕНЮ</button>
      <button class="btn-primary" @click="showGraphs">📊 ГРАФИК</button>
      <button class="btn-export" @click="exportReport">📥 ЭКСПОРТ</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const filters = ref({
  period: 'week',
  material: 'all',
  equipment: 'all',
})

const goBack = () => {
  router.push('/')
}

const showGraphs = () => {
  router.push('/graphs')
}

const exportReport = () => {
  // Здесь будет логика экспорта
  alert('Экспорт отчёта в PDF/Excel')
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.title {
  text-align: center;
  color: #1a1a2e;
  margin: 0 0 32px 0;
  font-size: 32px;
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
  color: #1a1a2e;
  font-size: 25px;
}

.filter-group select {
  padding: 10px 14px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 25px;
  background: white;
  color: #1a1a2e;
  cursor: pointer;
}

.filter-group select:hover {
  border-color: #007bff;
}

.table-wrapper {
  overflow-x: auto;
  border: 2px solid #1a1a2e;
  border-radius: 8px;
  margin-bottom: 24px;
}

.report-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 22px;
}

.report-table th,
.report-table td {
  padding: 12px 10px;
  text-align: center;
  border: 1px solid #1a1a2e;
  font-weight: 600;
}

.report-table th {
  background: #e0e0e0;
  color: #1a1a2e;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 0.5px;
}

.report-table tbody tr:nth-child(even) {
  background: #f8f9fa;
}

.report-table tbody tr:hover {
  background: #e8f4ff;
}

.status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 25px;
  font-weight: 600;
}

.status.completed {
  background: #d4edda;
  color: #155724;
}

.summary-info {
  display: flex;
  gap: 32px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
  justify-content: center;
}

.summary-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.summary-item .label {
  font-size: 25px;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.summary-item .value {
  font-size: 28px;
  font-weight: 700;
}

.actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-menu,
.btn-primary,
.btn-export {
  padding: 14px 32px;
  border: none;
  border-radius: 10px;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-menu {
  background: #6c757d;
  color: white;
}

.btn-menu:hover {
  background: #5a6268;
  transform: translateY(-2px);
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.btn-export {
  background: #28a745;
  color: white;
}

.btn-export:hover {
  background: #218838;
  transform: translateY(-2px);
}
</style>
