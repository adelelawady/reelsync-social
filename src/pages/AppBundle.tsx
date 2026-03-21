import { useEffect } from "react";

/**
 * This route serves as the Expo bundle entry point.
 * When Expo Go opens this URL, it looks for bundle and asset endpoints.
 * In production, you'd configure your Expo dev server or EAS to serve here.
 */
const AppBundle = () => {
  useEffect(() => {
    document.title = "ReelWatch — Expo Bundle";
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="glass-card max-w-lg w-full p-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-6">
          R
        </div>
        <h1 className="text-2xl font-bold mb-3">ReelWatch Bundle Server</h1>
        <p className="text-muted-foreground mb-6">
          This endpoint serves the Expo app bundle and assets. Open this URL in Expo Go on your phone to launch ReelWatch.
        </p>
        <div className="glass-card p-4 text-left font-mono text-xs text-muted-foreground space-y-1">
          <p><span className="text-primary">GET</span> /app — Bundle manifest</p>
          <p><span className="text-primary">GET</span> /app/assets — Static assets</p>
          <p><span className="text-primary">GET</span> /app/bundle — JS bundle</p>
        </div>
        <p className="text-xs text-muted-foreground mt-6">
          If you're seeing this in a browser, open this link on your phone with Expo Go instead.
        </p>
      </div>
    </div>
  );
};

export default AppBundle;
