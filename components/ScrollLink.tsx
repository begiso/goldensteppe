"use client"

import type React from "react"

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function ScrollLink({ href, children, className = "" }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Если это hero секция, прокручиваем к самому верху
      if (targetId === "hero") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else {
        // Для других секций учитываем высоту хедера
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
