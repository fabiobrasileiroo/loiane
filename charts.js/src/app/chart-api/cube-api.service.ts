import { Injectable } from '@angular/core';
import { CubejsApi } from '@cubejs-client/core';

@Injectable({
  providedIn: 'root'
})
export class CubeApiService {

  apiUrl = 'https://heavy-lansford.gcp-us-central1.cubecloudapp.dev/cubejs-api/v1';
  cubeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjEwMDAwMDAwMDAsImV4cCI6NTAwMDAwMDAwMH0.OHZOpOBVKr-sCwn8sbZ5UFsqI3uCs6e4omT7P6WVMFw';

  constructor() {
    this.cubeApi = new CubejsApi(this.cubeToken, { apiUrl: this.apiUrl });
  }

  async getAquisitionsByYear() {
    // ... lógica de consulta Cube.js do código fornecido
  }

  async getDimensions() {
    // ... lógica de consulta Cube.js do código fornecido
  }
}
