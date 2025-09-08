// Test script for the contact form API
// Run this with: node test-contact-api.js

const testData = {
  name: "Test User",
  email: "test@example.com",
  phone: "+1234567890",
  subject: "Test Message",
  message: "This is a test message from the contact form integration test.",
  to: "andriotis.ece@gmail.com",
};

async function testContactAPI() {
  try {
    console.log("🧪 Testing contact form API...");
    console.log("📤 Sending test data:", testData);

    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("✅ Success! Email sent successfully");
      console.log("📧 Response:", result);
    } else {
      console.log("❌ Error occurred:");
      console.log("📧 Status:", response.status);
      console.log("📧 Response:", result);
    }
  } catch (error) {
    console.log("❌ Network error:", error.message);
    console.log(
      "💡 Make sure your development server is running (npm run dev)"
    );
  }
}

testContactAPI();
