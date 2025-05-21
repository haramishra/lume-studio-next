"use client";
import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20" id="stats">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Driven by Design. Backed by Results.
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              At Lume Studio, we don’t just make things look good — we create
              thoughtful design experiences that help businesses grow, connect
              with their audience, and stand out in a crowded digital world.
            </p>
          </ScrollView>
        </div>
        <ScrollView stagger delay={0.04}>
          <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">+120</div>
              <p>Projects Launched</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">40%</div>
              <p>Average Client Growth</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">5+</div>
              <p>Years in the Game</p>
            </motion.div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
