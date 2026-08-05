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
    <>
      <section id="competition" className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
            Robotics competition
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-[#F5F3EE] md:text-6xl">
            TECHNOXIAN World Robotics Championship 9.0
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#B8BCC6] md:text-lg">
            Participated in the Maze Solver category with an autonomous robot
            designed for navigation, sensor-based decision making, and
            competition-oriented robotics.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#14181D]">
          <button
            onClick={() =>
              openImage(
                '/competitions/technoxian-hero.jpg',
                'TECHNOXIAN World Robotics Championship 9.0'
              )
            }
            className="w-full text-left"
          >
            <Image
              src="/competitions/technoxian-hero.jpg"
              alt="TECHNOXIAN World Robotics Championship 9.0"
              width={1600}
              height={900}
              className="h-[260px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[560px]"
            />
          </button>

          <div className="p-6 md:p-10">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-2xl font-semibold text-[#F5F3EE] md:text-3xl">
                  Maze Solver Robot
                </h3>

                <p className="mt-5 text-base leading-8 text-[#C9C2B8] md:text-lg">
                  Developed for autonomous maze navigation using sensor-based
                  path detection and embedded control logic. The project focused
                  on navigation accuracy, decision making, and reliable
                  performance in a competitive robotics environment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8FA8C7]">Event</p>
                  <p className="mt-2 text-2xl font-semibold text-[#F5F3EE]">TECHNOXIAN</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8FA8C7]">Category</p>
                  <p className="mt-2 text-2xl font-semibold text-[#F5F3EE]">Maze Solver</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8FA8C7]">System</p>
                  <p className="mt-2 text-2xl font-semibold text-[#F5F3EE]">Autonomous</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8FA8C7]">Focus</p>
                  <p className="mt-2 text-2xl font-semibold text-[#F5F3EE]">Navigation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video */}

        {/* Prototype demonstration */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-[#14181D] p-5 md:p-6">
          <div className="aspect-video w-full overflow-hidden rounded-[1.5rem] bg-black">
            <iframe
              src="https://drive.google.com/file/d/1jICAlBDFCiYtF0sYSWmUluTJ1n9vCJdD/preview"
              className="h-full w-full border-0"
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
              title="Water Strider Robot demonstration"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        
          <div className="mt-5">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
              Prototype demonstration
            </p>
        
            <h3 className="mt-2 text-2xl font-semibold text-[#F5F3EE]">
              Bio-inspired water-surface locomotion
            </h3>
        
            <p className="mt-3 text-[#B8BCC6]">
              Experimental testing of the completed Water Strider Robot prototype
              demonstrating vibration-based propulsion and locomotion across the
              water surface.
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
              Robot, event, and participation
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                src: '/competitions/maze-robot.jpg',
                title: 'Maze Solver Robot',
                text: 'Competition-ready autonomous robot developed for maze navigation.',
              },
              {
                src: '/competitions/competition-day.jpg',
                title: 'Competition Environment',
                text: 'Participation in the TECHNOXIAN robotics championship event.',
              },
              {
                src: '/competitions/certificate.jpg',
                title: 'Participation Certificate',
                text: 'Official competition certificate documenting participation in TECHNOXIAN 9.0.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#14181D]"
              >
                <button
                  onClick={() => openImage(item.src, item.title)}
                  className="w-full text-left"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="gallery-image"
                  />
                </button>

                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#F5F3EE]">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm text-[#B8BCC6]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 rounded-[2rem] border border-white/10 bg-[#14181D] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
            Technical highlights
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                title: 'Autonomous navigation',
                text: 'Sensor-based path detection and autonomous movement control.',
              },
              {
                title: 'Embedded control',
                text: 'Real-time motor control and navigation decision logic.',
              },
              {
                title: 'Competition engineering',
                text: 'Robot optimization for reliability and performance under competition conditions.',
              },
              {
                title: 'Problem solving',
                text: 'Path planning, obstacle handling, and navigation refinement.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#101317] p-6"
              >
                <h4 className="text-xl font-semibold text-[#F5F3EE]">
                  {item.title}
                </h4>

                <p className="mt-3 text-[#B8BCC6]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
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
