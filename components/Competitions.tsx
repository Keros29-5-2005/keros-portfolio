'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

export default function Competitions() {
const [lightbox, setLightbox] = useState({
open: false,
image: '',
title: '',
})

const openImage = (image: string, title: string) => {
setLightbox({ open: true, image, title })
}

return (
<> <section
     id="competitions"
     className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
   > <div className="mb-14"> <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
Competition engineering project </p>

```
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#F5F3EE] md:text-6xl">
        Autonomous Maze Solver Robot
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-8 text-[#B8BCC6] md:text-lg">
        A competition-focused autonomous robotics project developed for maze
        navigation challenges using embedded control, sensor-based path
        detection, and real-time decision making.
      </p>
    </div>

    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#14181D]">
      <button
        onClick={() =>
          openImage(
            '/Competitisions/technoxian-hero.jpg',
            'Autonomous Maze Solver Robot'
          )
        }
        className="w-full text-left"
      >
        <Image
          src="/Competitisionss/technoxian-hero.jpg"
          alt="Autonomous Maze Solver Robot"
          width={1600}
          height={900}
          className="h-[260px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[560px]"
        />
      </button>

      <div className="p-6 md:p-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="text-2xl font-semibold text-[#F5F3EE] md:text-3xl">
              Competition objective
            </h3>

            <p className="mt-5 text-base leading-8 text-[#C9C2B8] md:text-lg">
              The robot was designed to autonomously navigate unknown maze
              environments using infrared sensors, embedded control logic,
              and optimized navigation algorithms while maintaining speed,
              accuracy, and obstacle awareness.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#8FA8C7] md:text-xs">
                Control
              </p>
              <p className="mt-2 text-xl font-semibold leading-tight text-[#F5F3EE] md:text-2xl">
                Embedded
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#8FA8C7] md:text-xs">
                Navigation
              </p>
              <p className="mt-2 text-xl font-semibold leading-tight text-[#F5F3EE] md:text-2xl">
                Autonomous
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#8FA8C7] md:text-xs">
                Sensors
              </p>
              <p className="mt-2 text-xl font-semibold leading-tight text-[#F5F3EE] md:text-2xl">
                Infrared
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#8FA8C7] md:text-xs">
                Result
              </p>
              <p className="mt-2 text-xl font-semibold leading-tight text-[#F5F3EE] md:text-2xl">
                Competition Ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Video */}
    <div className="mt-14 rounded-[2rem] border border-white/10 bg-[#14181D] p-4 md:p-6">
      <div className="aspect-video w-full overflow-hidden rounded-[1.5rem] bg-black">
        <iframe
          src="https://drive.google.com/file/d/153dpKtLc3pf86pdOdo5oiSwndk2HNOi5/preview"
          className="h-full w-full border-0"
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
          title="Maze Solver Robot demonstration"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <div className="mt-5">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#8FA8C7] md:text-sm">
          Competition demonstration
        </p>

        <h3 className="mt-2 text-xl font-semibold text-[#F5F3EE] md:text-2xl">
          Autonomous maze navigation
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#B8BCC6] md:text-base md:leading-8">
          Demonstration of the Maze Solver Robot navigating the competition
          maze using autonomous sensor-based path detection and embedded
          control logic.
        </p>
      </div>
    </div>

    {/* Gallery */}
    <div className="mt-20">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
          Competition gallery
        </p>

        <h3 className="mt-2 text-3xl font-semibold text-[#F5F3EE]">
          Design, testing, and competition
        </h3>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#14181D]">
          <button
            onClick={() =>
              openImage(
                '/Competitisions/maze-robot.jpg',
                'Maze Robot Prototype'
              )
            }
            className="w-full text-left"
          >
            <Image
              src="/Competitisions/maze-robot.jpg"
              alt="Maze Solver Prototype"
              width={900}
              height={700}
              className="gallery-image"
            />
          </button>

          <div className="p-6">
            <h4 className="text-xl font-semibold text-[#F5F3EE]">
              Robot prototype
            </h4>

            <p className="mt-3 text-[#B8BCC6]">
              Final competition-ready chassis with sensor integration,
              embedded controller, and autonomous navigation hardware.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#14181D]">
            <button
              onClick={() =>
                openImage(
                  '/projects/maze-test.jpg',
                  'Maze Testing'
                )
              }
              className="w-full text-left"
            >
              <Image
                src="/Competitisions/maze-robot.jpg"
                alt="Maze Testing"
                width={700}
                height={500}
                className="gallery-image"
              />
            </button>

            <div className="p-5">
              <h4 className="text-lg font-semibold text-[#F5F3EE]">
                Maze testing
              </h4>

              <p className="mt-2 text-sm text-[#B8BCC6]">
                Algorithm validation and navigation accuracy testing in
                multiple maze configurations.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#14181D]">
            <button
              onClick={() =>
                openImage(
                  'Competitisions/competition-day.jpg',
                  'Competition Event'
                )
              }
              className="w-full text-left"
            >
              <Image
                src="/Competitisions/competition-day.jpg"
                alt="Competition Event"
                width={700}
                height={500}
                className="gallery-image"
              />
            </button>

            <div className="p-5">
              <h4 className="text-lg font-semibold text-[#F5F3EE]">
                Competition event
              </h4>

              <p className="mt-2 text-sm text-[#B8BCC6]">
                Live competition participation demonstrating autonomous
                maze-solving performance under timed conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Achievement */}
    <div className="mt-20 rounded-[2rem] border border-white/10 bg-[#14181D] p-8 md:p-10">
      <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
        Engineering achievement
      </p>

      <h3 className="mt-3 text-3xl font-semibold text-[#F5F3EE]">
        Autonomous robotics and embedded control
      </h3>

      <p className="mt-5 text-base leading-8 text-[#B8BCC6] md:text-lg">
        The project strengthened practical expertise in embedded
        programming, autonomous navigation, sensor integration, algorithm
        development, and competition-oriented robotic system design.
      </p>
    </div>
  </section>

  {lightbox.open && (
    <Lightbox
      image={lightbox.image}
      title={lightbox.title}
      onClose={() =>
        setLightbox({
          open: false,
          image: '',
          title: '',
        })
      }
    />
  )}
</>


)
}
