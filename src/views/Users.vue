<template>
  <div class="users">
    <div class="users-container">
      <h2 class="title">ПОЛЬЗОВАТЕЛИ</h2>
      
      <table class="users-table">
        <thead>
          <tr>
            <th>РОЛЬ</th>
            <th>ФИО</th>
            <th>СТАТУС</th>
            <th>ДЕЙСТВИЯ</th>
            <th>АКТИВНОСТЬ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.role }}</td>
            <td>{{ user.name }}</td>
            <td>
              <span :class="['status', user.status]">
                {{ user.statusText }}
              </span>
            </td>
            <td>
              <button class="btn-edit">✏️ Редактировать</button>
            </td>
            <td>{{ user.lastActive }}</td>
          </tr>
        </tbody>
      </table>

      <div class="add-user">
        <button class="btn-add">+ Добавить пользователя</button>
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

const users = ref([
  {
    id: 1,
    role: 'Администратор',
    name: 'Иванов И.И.',
    status: 'active',
    statusText: 'Активен',
    lastActive: 'Сегодня, 14:30'
  },
  {
    id: 2,
    role: 'Оператор',
    name: 'Петров П.П.',
    status: 'active',
    statusText: 'Активен',
    lastActive: 'Сегодня, 13:15'
  }
])

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.users {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.users-container {
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

.users-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
}

.users-table th,
.users-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.users-table th {
  background: #f8f9fa;
  font-weight: 700;
  color: #1a1a2e;
  text-transform: uppercase;
  font-size: 13px;
}

.status {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.status.active {
  background: #d4edda;
  color: #155724;
}

.btn-edit {
  background: #ffc107;
  color: #000;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: 0.3s;
}

.btn-edit:hover {
  background: #e0a800;
}

.add-user {
  display: flex;
  justify-content: flex-end;
}

.btn-add {
  background: #28a745;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s;
}

.btn-add:hover {
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