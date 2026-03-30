<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="title">WEIGHT VISION</h1>
      <p class="subtitle">Система определения веса материала</p>
      
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label>Логин</label>
          <input 
            v-model="username" 
            type="text" 
            placeholder="Введите логин"
            required
          />
        </div>
        
        <div class="form-group">
          <label>Пароль</label>
          <input 
            v-model="password" 
            type="password" 
            placeholder="Введите пароль"
            required
          />
        </div>

        <button type="submit" class="login-btn">
          Войти в систему
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

const login = () => {
  // Здесь будет реальная аутентификация
  console.log('Login:', username.value)
  router.push('/')
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-card {
  background: white;
  padding: 48px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  width: 100%;
  max-width: 420px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #1a1a2e;
  margin: 0 0 8px 0;
  letter-spacing: 2px;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 14px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.form-group input {
  padding: 14px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 15px;
  transition: 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #007bff;
}

.login-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;
}

.login-btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}
</style>