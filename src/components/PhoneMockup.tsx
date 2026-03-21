import { motion } from "framer-motion";

const reelItems = [
  { user: "@sarah_travels", caption: "Sunset in Bali 🌅", likes: "12.4K", color: "from-primary/30 to-accent/30" },
  { user: "@chef_mike", caption: "Secret pasta recipe 🍝", likes: "8.7K", color: "from-accent/30 to-primary/30" },
  { user: "@fitness_guru", caption: "5 min morning routine 💪", likes: "23.1K", color: "from-primary/20 to-accent/40" },
];

export function PhoneMockup() {
  return (
    <motion.div
      className="phone-mockup w-[280px] h-[560px] mx-auto animate-float"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-2xl z-10" />

      {/* Screen content */}
      <div className="h-full flex flex-col">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-8 pb-2 text-xs text-muted-foreground">
          <span>9:41</span>
          <span className="font-medium text-foreground">ReelWatch</span>
          <span>●●●</span>
        </div>

        {/* Room header */}
        <div className="px-4 py-2">
          <div className="glass-card px-3 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium">movie-night</span>
            <span className="text-xs text-muted-foreground ml-auto">3 watching</span>
          </div>
        </div>

        {/* Reel cards */}
        <div className="flex-1 px-4 py-2 space-y-3 overflow-hidden">
          {reelItems.map((reel, i) => (
            <motion.div
              key={reel.user}
              className={`glass-card p-3 bg-gradient-to-br ${reel.color}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-primary/30 border border-primary/50" />
                <span className="text-xs font-medium">{reel.user}</span>
              </div>
              <p className="text-xs text-muted-foreground">{reel.caption}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                <span>❤️ {reel.likes}</span>
                <span>💬 Share</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comment bar */}
        <div className="px-4 pb-6 pt-2">
          <div className="glass-card px-3 py-2 flex items-center gap-2">
            <div className="flex-1 text-xs text-muted-foreground">Type a comment...</div>
            <div className="w-6 h-6 rounded-full bg-primary/60 flex items-center justify-center text-xs">↑</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
