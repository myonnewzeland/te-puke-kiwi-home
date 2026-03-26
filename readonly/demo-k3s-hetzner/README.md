## Rancher Readonly Demo

Demo de acceso de solo lectura para el cluster `k3s-hetzner` en Rancher.

### Acceso Rancher

- URL: `https://rancher.luam.ovh`
- Usuario: `k3s-hetzner-readonly`
- Password: `5dbDF3D8pWvMUjo8_1Q3TuxU`

### Cluster

- Cluster: `k3s-hetzner`
- Alcance: solo lectura
- Permisos: vista de cluster y acceso `read-only` a los proyectos `Default` y `System`

### Kubeconfig

- Archivo: `k3s-hetzner-readonly.yaml`

Uso rapido:

```bash
kubectl --kubeconfig ./k3s-hetzner-readonly.yaml get nodes
kubectl --kubeconfig ./k3s-hetzner-readonly.yaml get ns
```

### Nota

Este material contiene credenciales reales. No compartir fuera del entorno de demo.
