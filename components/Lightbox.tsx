'use client'

import Image from 'next/image'
import { X } from 'lucide-react'

interface LightboxProps {
  image: string
  title: string
  onClose: () => void
}

export default function Lightbox({ image, title, onClose }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/10 p-2 text-white"
      >
        <X size={22} />
      </button>

      <div
        className="max-h-[90vh] max-w-5xl overflow-hidden rounded-[2rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image}
          alt={title}
          width={1600}
          height={1200}
          className="h-auto w-full object-contain"
        />

        <div className="bg-[#14181D] p-5">
          <h3 className="text-xl font-semibold text-[#F5F3EE]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}