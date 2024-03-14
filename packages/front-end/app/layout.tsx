import "@/assets/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import AppProvider from "@/components/AppProvider";

export default function Layout({ children }: { children: any }) {
  return (
    <html>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
