"use client"

import Image from "next/image"

export function VFilmsLogo({ size = 300 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-07%20014213-5hdiEarYI2cqYmb1TfZq4X6CTsktWR.png"
        alt="V Films Logo"
        width={size}
        height={size}
        priority
        className="drop-shadow-lg"
      />
    </div>
  )
}
