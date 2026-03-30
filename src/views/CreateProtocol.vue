<template>
  <div class="create-protocol">
    <div class="protocol-card">
      <h2 class="title">СОЗДАНИЕ ПРОТОКОЛА ИЗМЕРЕНИЯ</h2>
      
      <form @submit.prevent="submitProtocol" class="protocol-form">
        <div class="form-row">
          <div class="form-group">
            <label>Название протокола</label>
            <input 
              v-model="protocol.name" 
              type="text" 
              placeholder="Введите название"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Исполнитель</label>
            <input 
              v-model="protocol.executor" 
              type="text" 
              placeholder="ФИО исполнителя"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Выберите материал</label>
            <select v-model="protocol.material" required>
              <option value="">-- Выберите материал --</option>
              <option value="sand">Песок</option>
              <option value="gravel">Гравий</option>
              <option value="stone">Щебень</option>
              <option value="soil">Грунт</option>
            </select>
          </div>
        </div>

        <div class="form-actions">
          <button type="button" class="btn-menu" @click="goBack">
            ← МЕНЮ
          </button>
          <button type="submit" class="btn-primary">
            ✓ СОЗДАТЬ ПРОТОКОЛ
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const protocol = ref({
  name: '',
  executor: '',
  material: ''
})

const goBack = () => {
  router.push('/')
}

const submitProtocol = () => {
  console.log('Creating protocol:', protocol.value)
  router.push('/protocols')
}
</script>

<style scoped>
.create-protocol {
  max-width: 700px;
  margin: 0 auto;
}

.protocol-card {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.title {
  text-align: center;
  color: #1a1a2e;
  margin: 0 0 32px 0;
  font-size: 24px;
  font-weight: 700;
}

.protocol-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.form-group input,
.form-group select {
  padding: 14px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 15px;
  transition: 0.3s;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #007bff;
}

.form-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;
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