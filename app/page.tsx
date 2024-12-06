import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Activity from "@/components/Activity";

export default function Home() {
  return (
<>
<section id="hero">
        <Hero />
      </section>
      <section id="camp">
        <Camp />
      </section>
      <section id="guide">
        <Guide />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="activity">
        <Activity/>
      </section>
      <section id="get-app">
        <GetApp />
      </section>
    </>
  );
}
