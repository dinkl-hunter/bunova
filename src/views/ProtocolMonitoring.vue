<template>
  <div class="protocol-monitoring">
    <div class="table-container">
      <h2 class="title">МОНИТОРИНГ ПРОТОКОЛОВ</h2>
      
      <table class="data-table">
        <thead>
          <tr>
            <th>№</th>
            <th>МАТЕРИАЛ</th>
            <th>ИСПОЛНИТЕЛЬ</th>
            <th>СТАТУС</th>
            <th>ДАТА</th>
            <th>ДЕЙСТВИЯ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="protocol in protocols" :key="protocol.id">
            <td>{{ protocol.id }}</td>
            <td>{{ protocol.material }}</td>
            <td>{{ protocol.executor }}</td>
            <td>
              <span :class="['status', protocol.status]">
                {{ protocol.statusText }}
              </span>
            </td>
            <td>{{ protocol.date }}</td>
            <td>
              <button class="btn-view" @click="viewResult(protocol.id)">
                👁 Просмотр
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="actions">
      <button class="btn-menu" @click="goBack">
        ← МЕНЮ
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const protocols = ref([
  {
    id: 1,
    material: 'Щебень',
    executor: 'Иванов И.И.',
    status: 'completed',
    statusText: 'ВЫПОЛНЕНО',
    date: '25.03.2026'
  },
  {
    id: 2,
    material: 'Песок',
    executor: 'Петров П.П.',
    status: 'in-progress',
    statusText: 'В ПРОЦЕССЕ',
    date: '25.03.2026'
  }
])

const goBack = () => {
  router.push('/')
}

const viewResult = (id) => {
  router.push(`/result/${id}`)
}
</script>

<style scoped>
.protocol-monitoring {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.table-container {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.title {
  margin: 0 0 24px 0;
  color: #1a1a2e;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.data-table th {
  background: #f8f9fa;
  font-weight: 700;
  color: #1a1a2e;
  text-transform: uppercase;
  font-size: 13px;
}

.data-table tbody tr:hover {
  background: #f8f9fa;
}

.status {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.status.completed {
  background: #d4edda;
  color: #155724;
}

.status.in-progress {
  background: #fff3cd;
  color: #856404;
}

.btn-view {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: 0.3s;
}

.btn-view:hover {
  background: #0056b3;
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