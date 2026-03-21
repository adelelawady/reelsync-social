import { motion } from "framer-motion";
import { Download, QrCode, Play } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "1",
    title: "Get Expo Go",
    description: "Download the free Expo Go app on your phone. It lets you run ReelWatch instantly.",
    links: {
      ios: "https://apps.apple.com/app/expo-go/id982107779",
      android: "https://play.google.com/store/apps/details?id=host.exp.exponent",
    },
  },
  {
    icon: QrCode,
    step: "2",
    title: "Scan the Code",
    description: "Open Expo Go and scan the QR code below — or tap the \"Open in Expo\" button.",
  },
  {
    icon: Play,
    step: "3",
    title: "Start Watching",
    description: "Pick a name, join or create a room, and start watching reels with friends!",
  },
];

export function SetupSteps() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((s, i) => (
        <motion.div
          key={s.step}
          className="glass-card p-6 relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          {/* Step number bg */}
          <div className="absolute -top-4 -right-4 text-[6rem] font-bold text-primary/5 select-none">
            {s.step}
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-all">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>

            {s.links && (
              <div className="flex gap-3 mt-4">
                <a
                  href={s.links.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-secondary hover:bg-secondary/80 px-3 py-2 rounded-lg transition-colors"
                >
                  📱 iOS
                </a>
                <a
                  href={s.links.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-secondary hover:bg-secondary/80 px-3 py-2 rounded-lg transition-colors"
                >
                  🤖 Android
                </a>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
