import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'
import Login from '../views/Login.vue'
import MainMenu from '../views/MainMenu.vue'
import OperatorPanel from '../views/OperatorPanel.vue'
import CreateProtocol from '../views/CreateProtocol.vue'
import CameraCalibration from '../views/CameraCalibration.vue'
import ProtocolMonitoring from '../views/ProtocolMonitoring.vue'
import Reports from '../views/Reports.vue'
import MeasurementResult from '../views/MeasurementResult.vue'
import Users from '../views/Users.vue'
import Settings from '../views/Settings.vue'
import Graphs from '../views/Graphs.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: MainMenu },
      { path: 'operator', component: OperatorPanel },
      { path: 'protocol/create', component: CreateProtocol },
      { path: 'calibration', component: CameraCalibration },
      { path: 'protocols', component: ProtocolMonitoring },
      { path: 'reports', component: Reports },
      { path: 'result/:id', component: MeasurementResult },
      { path: 'users', component: Users },
      { path: 'settings', component: Settings },
      { path: 'graphs', component: Graphs }
    ]
  },
  { 
    path: '/login', 
    component: Login 
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})