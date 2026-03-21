import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Tv, MessageCircle, Zap } from "lucide-react";

const features = [
  {
    id: "sync",
    label: "Watch Together",
    icon: Users,
    title: "Sync Reels with Friends",
    description: "Create a room, invite your friends, and scroll through reels together in real-time. Everyone sees the same reel at the same time.",
    mockup: (
      <div className="space-y-3">
        <div className="glass-card p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/30" />
          <div>
            <div className="text-sm font-medium">movie-night</div>
            <div className="text-xs text-muted-foreground">3 friends watching</div>
          </div>
          <div className="ml-auto text-xs bg-primary/20 px-2 py-1 rounded-full text-primary">Live</div>
        </div>
        {["Alice", "Bob", "Charlie"].map(name => (
          <div key={name} className="glass-card p-2 flex items-center gap-2 text-xs">
            <div className="w-5 h-5 rounded-full bg-accent/30" />
            <span>{name}</span>
            <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "remote",
    label: "Remote Control",
    icon: Tv,
    title: "One Person Drives",
    description: "Enable remote control mode so one person picks the reels. Pass the remote to anyone in the room whenever you want.",
    mockup: (
      <div className="space-y-3">
        <div className="glass-card p-4 text-center">
          <Tv className="w-10 h-10 mx-auto mb-2 text-primary" />
          <div className="text-sm font-medium">Alice has the remote</div>
          <div className="text-xs text-muted-foreground mt-1">Only she can change reels</div>
        </div>
        <div className="glass-card p-3 flex items-center justify-between">
          <span className="text-xs">Pass remote to Bob</span>
          <div className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">Transfer</div>
        </div>
      </div>
    ),
  },
  {
    id: "comments",
    label: "Live Chat",
    icon: MessageCircle,
    title: "React in Real-Time",
    description: "Drop comments and reactions while you watch. See what your friends think about each reel instantly.",
    mockup: (
      <div className="space-y-2">
        {[
          { from: "Bob", text: "lol this is so good 😂" },
          { from: "Alice", text: "wait for the ending!!" },
          { from: "Charlie", text: "I'm crying 💀" },
        ].map((msg, i) => (
          <div key={i} className="glass-card p-2 flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-accent/30 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-medium text-primary">{msg.from}</span>
              <p className="text-xs text-foreground/80">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "instant",
    label: "Instant Setup",
    icon: Zap,
    title: "Ready in Seconds",
    description: "No accounts needed. Just pick a name, create or join a room, and start watching. It's that simple.",
    mockup: (
      <div className="space-y-3">
        <div className="glass-card p-4">
          <div className="text-xs text-muted-foreground mb-2">Pick a name</div>
          <div className="bg-muted rounded-lg px-3 py-2 text-sm">CoolUser123</div>
        </div>
        <div className="glass-card p-4">
          <div className="text-xs text-muted-foreground mb-2">Create a room</div>
          <div className="bg-muted rounded-lg px-3 py-2 text-sm">friday-vibes</div>
        </div>
        <div className="bg-primary/20 text-primary text-center text-sm py-2 rounded-xl font-medium">
          Start Watching →
        </div>
      </div>
    ),
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState("sync");
  const feature = features.find(f => f.id === active)!;

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 justify-center flex-wrap mb-8">
        {features.map(f => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === f.id
                ? "bg-primary text-primary-foreground glow-primary"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <f.icon className="w-4 h-4" />
            {f.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
          <div className="phone-mockup w-[240px] mx-auto p-4 h-[420px]">
            <div className="pt-6">{feature.mockup}</div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
