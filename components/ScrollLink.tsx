"use client"

import Link from "next/link"
import { useEffect } from "react"

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void // 👈 Добавляем onClick
}

export default function ScrollLink({ href, children, className, onClick }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }

    // Вызов внешнего обработчика (например, закрытие меню)
    if (onClick) onClick()
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
