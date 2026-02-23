export default defineNuxtPlugin(() => {
  if (process.client) {
    // Service Worker Registration (if needed in future)
    // Add JSON-LD for structured data
    const addStructuredData = () => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Cortx",
        applicationCategory: "EducationalApplication",
        operatingSystem: "iOS",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          ratingCount: "1",
        },
        description:
          "Cortx helps you memorize anything using flashcards and spaced repetition.",
      });

      if (!document.querySelector('script[type="application/ld+json"]')) {
        document.head.appendChild(script);
      }
    };

    // Add structured data on mount
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", addStructuredData);
    } else {
      addStructuredData();
    }
  }
});
