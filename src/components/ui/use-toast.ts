// Toast utilities - placeholder
import { useState, useCallback } from "react";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

const toastState: ToastProps[] = [];

export function toast(props: ToastProps) {
  toastState.push(props);
}

export function useToast() {
  return { toast, toasts: toastState, dismiss: () => {} };
}
