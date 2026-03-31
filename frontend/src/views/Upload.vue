<template>
  <div class="upload-box">
    <input type="file" multiple @change="handleFiles" />

    <div class="drop-area">
      📁 Drag & Drop files here
      <br />
      <span>or click to select</span>
    </div>

    <button @click="upload">Upload</button>

    <div class="preview">
      <div v-for="(file, i) in files" :key="i" class="preview-item">
        {{ file.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const files = ref([])

const handleFiles = (e) => {
  files.value = Array.from(e.target.files)
}

const upload = () => {
  console.log('Uploading:', files.value)
}
</script>

<style scoped>
.upload-box {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.drop-area {
  border: 2px dashed #ccc;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 20px;
  transition: 0.2s;
}

.drop-area:hover {
  border-color: #4a6cf7;
  background: #f5f8ff;
}

button {
  padding: 10px 20px;
  background: #4a6cf7;
  color: white;
  border: none;
  border-radius: 8px;
  margin-bottom: 20px;
}

.preview-item {
  background: #fff;
  padding: 10px;
  margin-top: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}
</style>