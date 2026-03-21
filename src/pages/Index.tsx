import { FeatureTabs } from "@/components/FeatureTabs";
import { PhoneMockup } from "@/components/PhoneMockup";
import { SetupSteps } from "@/components/SetupSteps";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const EXPO_URL = `exp://u.expo.dev/be5b5a31-e1b9-4b59-aa86-4576088f0302/group/84467230-ef6d-46f7-8126-368fc0951f73`;

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
            R
          </div>
          <span className="font-bold text-lg">ReelWatch</span>
        </div>
        <a
          href="#get-started"
          className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Get the App
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-6">
              Watch Reels Together ✨
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Scroll reels<br />
              <span className="gradient-text">with friends,</span><br />
              in real-time.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Create a room, invite your crew, and watch Instagram reels together — synced, live, with comments.
            </p>
            <div className="flex gap-4">
              <a
                href="#get-started"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity glow-primary"
              >
                Get Started Free
              </a>
              <a
                href="#features"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-medium hover:bg-secondary/80 transition-colors"
              >
                See Features
              </a>
            </div>
          </motion.div>

          <PhoneMockup />
        </div>
      </section>

      {/* Get Started */}
      <section id="get-started" className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-3">Get Started in 3 Steps</h2>
          <p className="text-muted-foreground">No account needed. Free. Takes 2 minutes.</p>
        </motion.div>

        <SetupSteps />

        {/* QR + Open button */}
        <motion.div
          className="glass-card max-w-md mx-auto mt-12 p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Scan with Expo Go</h3>
          <div className="bg-foreground rounded-2xl p-4 w-fit mx-auto mb-6">
            <QRCodeSVG
              value={EXPO_URL}
              size={180}
              bgColor="hsl(0, 0%, 95%)"
              fgColor="hsl(240, 15%, 5%)"
              level="M"
            />
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Open Expo Go on your phone and scan this code
          </p>
          <a
            href={EXPO_URL}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity glow-primary"
          >
            Open in Expo Go
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-3">What You Can Do</h2>
          <p className="text-muted-foreground">Everything you need for the perfect watch party.</p>
        </motion.div>

        <FeatureTabs />
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>ReelWatch — Watch reels together, anywhere.</p>
      </footer>
    </div>
  );
};

export default Index;
