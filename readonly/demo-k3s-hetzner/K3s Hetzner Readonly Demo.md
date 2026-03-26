---
title: K3s Hetzner Readonly Demo
tags:
  - rancher
  - kubernetes
  - demo
  - readonly
aliases:
  - Rancher Readonly Demo
---

# K3s Hetzner Readonly Demo

> [!note]
> Credenciales de demo para acceso de solo lectura en Rancher y por `kubectl`.

## Acceso Rancher

- URL: [Rancher](https://rancher.luam.ovh)
- Usuario: `k3s-hetzner-readonly`
- Password: `5dbDF3D8pWvMUjo8_1Q3TuxU`

## Acceso Kubernetes

- Cluster: `k3s-hetzner`
- Kubeconfig: `[[k3s-hetzner-readonly.yaml]]`

```bash
kubectl --kubeconfig ./k3s-hetzner-readonly.yaml get nodes
kubectl --kubeconfig ./k3s-hetzner-readonly.yaml get pods -A
```

## Alcance

- Solo lectura para `k3s-hetzner`
- Vista de nodos y proyectos del cluster
- Rol `read-only` en proyectos `Default` y `System`

## Archivos relacionados

- [[README]]
- [[k3s-hetzner-readonly.yaml]]

> [!warning]
> Este folder contiene credenciales reales de demo. Guardar solo en entornos controlados.
