import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://rtm-cc.github.io",
  base: "/TryHackMe",
  integrations: [
    starlight({
      title: "🥷 TryHackMe",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/rtm-cc/TryHackMe"
        }
      ],
      sidebar: [
        {
          label: "🥷 TryHackMe",
          slug: "index"
        },
        {
          label: "Introduction",
          slug: "introduction"
        },
        {
          label:
            "Web Hacking Fundamentals",
          items: [
            {
              label: "OWASP Top10",
              items: [
                {
                  label: "Overview",
                  slug: "web-hacking-fundamentals/owasp-top10"
                },
                {
                  label: "Task 5",
                  slug: "web-hacking-fundamentals/owasp-top10/task-5"
                },
                {
                  label: "Task 7",
                  slug: "web-hacking-fundamentals/owasp-top10/task-7"
                },
                {
                  label: "Task 8\\~11",
                  slug: "web-hacking-fundamentals/owasp-top10/task-8-11"
                },
                {
                  label: "Task 12\\~16",
                  slug: "web-hacking-fundamentals/owasp-top10/task-12-16"
                },
                {
                  label: "Task 20",
                  slug: "web-hacking-fundamentals/owasp-top10/task-20"
                },
                {
                  label: "Task 21\\~26",
                  slug: "web-hacking-fundamentals/owasp-top10/task-21-26"
                },
                {
                  label: "Task 29",
                  slug: "web-hacking-fundamentals/owasp-top10/task-29"
                }
              ]
            }
          ]
        },
        {
          label:
            "Jr Penetration Tester",
          items: [
            {
              label:
                "Introduction to Cyber Security",
              slug: "jr-penetration-tester/introduction-to-cyber-security"
            }
          ]
        },
        {
          label: "Red Teaming",
          items: [
            {
              label:
                "Red Team Fundamentals",
              slug: "red-teaming/red-team-fundamentals"
            }
          ]
        },
        {
          label: "EXTRA",
          items: [
            {
              label:
                "Advent of Cyber 2022",
              items: [
                {
                  label: "Overview",
                  slug: "extra/advent-of-cyber-2022"
                },
                {
                  label: "Day 1",
                  slug: "extra/advent-of-cyber-2022/day-1"
                },
                {
                  label: "Day 2",
                  slug: "extra/advent-of-cyber-2022/day-2"
                },
                {
                  label: "Day 3",
                  slug: "extra/advent-of-cyber-2022/day-3"
                },
                {
                  label: "Day 4",
                  slug: "extra/advent-of-cyber-2022/day-4"
                },
                {
                  label: "Day 5",
                  slug: "extra/advent-of-cyber-2022/day-5"
                },
                {
                  label: "Day 6",
                  slug: "extra/advent-of-cyber-2022/day-6"
                },
                {
                  label: "Day 7",
                  slug: "extra/advent-of-cyber-2022/day-7"
                },
                {
                  label: "Day 8",
                  slug: "extra/advent-of-cyber-2022/day-8"
                },
                {
                  label: "Day 9",
                  slug: "extra/advent-of-cyber-2022/day-9"
                },
                {
                  label: "Day 10",
                  slug: "extra/advent-of-cyber-2022/day-10"
                },
                {
                  label: "Day 11",
                  slug: "extra/advent-of-cyber-2022/day-11"
                }
              ]
            }
          ]
        }
      ],
      customCss: [
        "./src/styles/custom.css"
      ]
    })
  ]
});
