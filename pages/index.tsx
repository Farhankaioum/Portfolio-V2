import Head from "next/head";
import About from "./about";
import Certifications from "./certifications";
import Experience from "./experience";
import Project from "./projects";
import Education from "./education";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Keiuom&apos;s Portfolio</title>
          <meta
            property="og:description"
            content="Md Keiuom is a software engineer who builds accessible,
  inclusive products and digital experiences for the web and mobile app."
          />
          <meta property="og:image" content="/images/Thumbnail.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:alt" content="Summary Image" />
          <meta property="og:title" content="Md Keiuom" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_IE" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Keiuom&apos;s Portfolio" />
          <meta name="twitter:image:alt" content="Full Stack Engineer" />
          <link rel="shortcut icon" href="/favicon/apple-touch-icon.jpg" />
          <link
            rel="favicon-16x16"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.jpg"
          />
          <link
            rel="favicon-32x32"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.jpg"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.jpg"
          />
          <link
            rel="android-chrome-192x192"
            sizes="192x192"
            href="/favicon/android-chrome-192x192.jpg"
          />
          <link
            rel="android-chrome-512x512"
            sizes="512x512"
            href="/favicon/android-chrome-512x512.jpg"
          />
        </Head>
      </div>
      <About />
      <Experience />
      <Project />
      <Certifications />
      <Education />
      <div className="mt-20">
          &copy; 2025 Md Keiuom Miah. Made with ♥ in Sydney, Australia.
      </div>
    </>
  );
}
