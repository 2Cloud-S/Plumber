import * as React from "react"
import { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast"

type ToastOptions = Omit<ToastProps, "children"> & {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const useToast = () => {
  const toast = (options: ToastOptions) => {
    const { title, description, ...props } = options

    return Toast({
      ...props,
      title: title,
      children: description,
    })
  }

  return { toast }
}

export { useToast }