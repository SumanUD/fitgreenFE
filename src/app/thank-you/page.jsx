export default function ThankYouPage() {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Thank You! 🎉
      </h1>
      <p style={{ fontSize: "18px", color: "#555" }}>
        Your message has been successfully submitted.  
        Our team will contact you soon.
      </p>
    </div>
  );
}
