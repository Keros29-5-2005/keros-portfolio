'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

export default function FeaturedProject() {
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
      <section
        id="featured-project"
        className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28"
      >
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
            Flagship engineering project
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#F5F3EE] md:text-6xl">
            Bio-Inspired Water Strider Robot
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#B8BCC6] md:text-lg">
            A completed final-year engineering project focused on biomimetic
            locomotion, surface tension engineering, lightweight robotic design,
            vibration-based propulsion, and experimental prototype development.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#14181D]">
          <button
            onClick={() =>
              openImage(
                '/projects/water-strider-hero.jpg',
                'Bio-Inspired Water Strider Robot'
              )
            }
            className="w-full text-left"
          >
            <Image
              src="/projects/water-strider-hero.jpg"
              alt="Bio-Inspired Water Strider Robot"
              width={1600}
              height={900}
              className="h-[260px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[560px]"
            />
          </button>

          <div className="p-6 md:p-10">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h3 className="text-2xl font-semibold text-[#F5F3EE] md:text-3xl">
                  Engineering objective
                </h3>

                <p className="mt-5 text-base leading-8 text-[#C9C2B8] md:text-lg">
                  The project was inspired by the locomotion mechanics of the
                  water strider insect and aimed to develop a lightweight
                  robotic platform capable of stable movement across the water
                  surface through vibration-based propulsion and optimized
                  weight distribution.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8FA8C7]">
                    Weight
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#F5F3EE]">
                    Lightweight
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8FA8C7]">
                    Structure
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#F5F3EE]">
                    Biomimetic
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8FA8C7]">
                    Propulsion
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#F5F3EE]">
                    Vibration
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8FA8C7]">
                    Outcome
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#F5F3EE]">
                    Working Prototype
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-[#14181D] p-5 md:p-6">
          <div className="aspect-video w-full overflow-hidden rounded-[1.5rem] bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              className="h-full w-full"
              controlsList="nodownload"
            >
              <source
                src="/videos/water-strider-demo.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="mt-5">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
              Prototype demonstration
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-[#F5F3EE]">
              Bio-inspired water-surface locomotion
            </h3>

            <p className="mt-3 text-[#B8BCC6]">
              Experimental testing of the completed Water Strider Robot
              prototype demonstrating vibration-based propulsion and locomotion
              across the water surface.
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-20">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
              Research gallery
            </p>

            <h3 className="mt-2 text-3xl font-semibold text-[#F5F3EE]">
              Design, fabrication, and testing
            </h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#14181D]">
              <button
                onClick={() =>
                  openImage(
                    '/projects/water-strider-prototype.jpg',
                    'Prototype Development'
                  )
                }
                className="w-full text-left"
              >
                <Image
                  src="/projects/water-strider-prototype.jpg"
                  alt="Water Strider Prototype"
                  width={900}
                  height={700}
                  className="gallery-image"
                />
              </button>

              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#F5F3EE]">
                  Prototype development
                </h4>

                <p className="mt-3 text-[#B8BCC6]">
                  Initial weight distribution optimization and structural
                  refinement through multiple design iterations.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#14181D]">
                <button
                  onClick={() =>
                    openImage(
                      '/projects/water-strider-test.jpg',
                      'Surface Tension Experiment'
                    )
                  }
                  className="w-full text-left"
                >
                  <Image
                    src="/projects/water-strider-test.jpg"
                    alt="Water Strider Testing"
                    width={700}
                    height={500}
                    className="gallery-image"
                  />
                </button>

                <div className="p-5">
                  <h4 className="text-lg font-semibold text-[#F5F3EE]">
                    Surface tension experiment
                  </h4>

                  <p className="mt-2 text-sm text-[#B8BCC6]">
                    Experimental evaluation of locomotion performance and
                    stability on water.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#14181D]">
                <button
                  onClick={() =>
                    openImage(
                      '/projects/water-strider-design.jpg',
                      'Engineering Design'
                    )
                  }
                  className="w-full text-left"
                >
                  <Image
                    src="/projects/water-strider-design.jpg"
                    alt="Water Strider Design"
                    width={700}
                    height={500}
                    className="gallery-image"
                  />
                </button>

                <div className="p-5">
                  <h4 className="text-lg font-semibold text-[#F5F3EE]">
                    Engineering design
                  </h4>

                  <p className="mt-2 text-sm text-[#B8BCC6]">
                    Design sketches, fabrication planning, and engineering
                    development process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Model */}
        <div className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-[#14181D]">
          <button
            onClick={() =>
              openImage('/projects/water-strider-3d.jpg', '3D CAD Model')
            }
            className="w-full text-left"
          >
            <Image
              src="/projects/water-strider-3d.jpg"
              alt="Water Strider 3D CAD Model"
              width={1600}
              height={900}
              className="w-full object-cover"
            />
          </button>

          <div className="p-6 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
              Design for intellectual property
            </p>

            <h3 className="mt-3 text-3xl font-semibold text-[#F5F3EE]">
              CAD model and design documentation
            </h3>

            <p className="mt-4 text-base leading-8 text-[#B8BCC6] md:text-lg">
              A detailed 3D model was developed to support design refinement,
              fabrication planning, and technical documentation as part of the
              project’s engineering development process.
            </p>
          </div>
        </div>

        {/* Research */}
        <div className="mt-20 rounded-[2rem] border border-white/10 bg-[#14181D] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
            Research outcome
          </p>

          <h3 className="mt-3 text-3xl font-semibold text-[#F5F3EE]">
            Engineering research publication
          </h3>

          <p className="mt-5 text-base leading-8 text-[#B8BCC6] md:text-lg">
            The project resulted in a research publication documenting the
            design, fabrication, and experimental evaluation of the
            Bio-Inspired Water Strider Robot, connecting engineering
            experimentation with academic research and technical documentation.
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
