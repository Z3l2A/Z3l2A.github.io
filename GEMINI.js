/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  tools: [{codeExecution: {}}],
});

const generationConfig = {
  temperature: 0,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "test"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Please provide me with a question or task. I'm ready to help! 😊 \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "How to block iframe commonly used in websites that try to force creation of unwanted cookies and ads by blacklist? :)"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "It's great that you're taking steps to protect your privacy and control your online experience! Blocking iframes used for unwanted cookies and ads can be tricky, as websites often use them for legitimate purposes too. Here's a breakdown of the challenges and some potential solutions:\n\n**Challenges:**\n\n* **Dynamic Content:** Websites often load iframes dynamically, making it difficult to create a static blacklist.\n* **Legitimate Use:** Many websites use iframes for essential features like social media embeds, maps, or payment processing. Blocking them indiscriminately could break functionality.\n* **Evolving Tactics:** Advertisers and trackers are constantly changing their methods, so any blacklist needs to be updated regularly.\n\n**Potential Solutions:**\n\n1. **Browser Extensions:**\n\n   * **uBlock Origin:** A powerful ad blocker that can be configured to block specific iframes based on their source or content.\n   * **Privacy Badger:**  Focuses on blocking trackers and cookies, including those loaded within iframes.\n   * **NoScript:**  A more advanced option that allows you to control which scripts (including those in iframes) are allowed to run on websites.\n\n2. **Custom Blacklist (Advanced):**\n\n   * **Content Blocking Rules:** Some browsers allow you to create custom rules to block specific content. You can use this to block iframes from known domains or with specific attributes.\n   * **User-Agent Spoofing:**  Changing your browser's user-agent string can sometimes trick websites into not loading certain iframes. However, this is not always reliable and can break website functionality.\n\n**Important Considerations:**\n\n* **False Positives:** Blocking iframes can sometimes break legitimate website functionality. Be prepared to adjust your settings if you encounter issues.\n* **Privacy vs. Functionality:**  Find a balance between blocking unwanted content and maintaining a good browsing experience.\n* **Regular Updates:**  Keep your browser extensions and blacklist rules updated to stay ahead of evolving tracking techniques.\n\n**Example (uBlock Origin):**\n\n1. Install uBlock Origin in your browser.\n2. Open the extension's settings.\n3. In the \"My filters\" section, you can add custom rules to block specific iframes. For example:\n\n   ```\n   ##example.com/ads.html^\n   ```\n\n   This rule would block any iframe loaded from `example.com/ads.html`.\n\n**Remember:**  Blocking iframes is a complex topic, and there's no single solution that works perfectly for everyone. Experiment with different methods and find what works best for your needs and privacy preferences. \n"},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  console.log(result.response.text());
}

run();
code: 7
message: "Permission \'resourcemanager.projects.create\' denied on parent resource \'organizations/116954223478\'."
details {
  type_url: "type.googleapis.com/google.rpc.ResourceInfo"
  value: "\n\aproject\022#projects/gen-lang-client-0804679158"
}