import "./globals.css";
import Nav from "./components/Nav/Nav";

export const metadata = {
  title: "Queens Kisivuli-Experienced Software Engineer",
  description:
    "Queens Kisivuli is an experienced software engineer specializing in full-stack development. With expertise in multiple programming languages and a track record of delivering high-quality, scalable solutions, Queens can help take your project to the next level. Visit His portfolio to see examples of her work and learn more about how she can help your business succeed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
