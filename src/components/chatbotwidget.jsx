import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";

const WEBHOOK_URL = "https://biodisma.app.n8n.cloud/webhook/6eb2bd01-f8b2-4bff-b0ba-bf6df5527138/chat";
const TARGET = "#n8n-chat";

const CHAT_COPY = {
  es: {
    initialMessages: [
      "¡Hola! 👋",
      "Soy el asistente de Bio-Disma®. ¿En qué puedo ayudarte hoy?",
    ],
    getStarted: "Nueva conversación",
    inputPlaceholder: "Escribe tu pregunta...",
    closeButtonTooltip: "Cerrar chat",
  },
  en: {
    initialMessages: [
      "Hi! 👋",
      "I'm the Bio-Disma® assistant. How can I help you today?",
    ],
    getStarted: "New conversation",
    inputPlaceholder: "Type your question...",
    closeButtonTooltip: "Close chat",
  },
  de: {
    initialMessages: [
      "Hallo! 👋",
      "Ich bin der Bio-Disma® Assistent. Wie kann ich dir heute helfen?",
    ],
    getStarted: "Neue Unterhaltung",
    inputPlaceholder: "Schreibe deine Frage...",
    closeButtonTooltip: "Chat schliessen",
  },
  zh: {
    initialMessages: [
      "你好！👋",
      "我是 Bio-Disma® 助手。今天我可以帮你什么？",
    ],
    getStarted: "新对话",
    inputPlaceholder: "请输入你的问题...",
    closeButtonTooltip: "关闭聊天",
  },
};

export default function ChatbotWidget() {
  const { i18n } = useTranslation();
  const [showNudge, setShowNudge] = useState(true);
  const hasInteractedWithChatRef = useRef(false);
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || "es").split("-")[0];

  useEffect(() => {
    const copy = CHAT_COPY[currentLanguage] || CHAT_COPY.es;
    const originalFetch = window.fetch.bind(window);

    const cleanOutputText = (value) => value.split("---")[0].trim();

    const sanitizeOutputInPayload = (payload) => {
      if (Array.isArray(payload)) {
        return payload.map(sanitizeOutputInPayload);
      }

      if (!payload || typeof payload !== "object") {
        return payload;
      }

      const result = { ...payload };

      if (typeof result.output === "string") {
        result.output = cleanOutputText(result.output);
      }

      Object.keys(result).forEach((key) => {
        if (key === "output" && typeof result[key] === "string") return;
        result[key] = sanitizeOutputInPayload(result[key]);
      });

      return result;
    };

    window.fetch = async (...args) => {
      const response = await originalFetch(...args);
      const requestInput = args[0];
      const requestUrl = typeof requestInput === "string"
        ? requestInput
        : requestInput instanceof URL
          ? requestInput.href
          : requestInput?.url;

      if (!requestUrl || !requestUrl.startsWith(WEBHOOK_URL)) {
        return response;
      }

      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        return response;
      }

      try {
        const json = await response.clone().json();
        const sanitized = sanitizeOutputInPayload(json);
        const headers = new Headers(response.headers);
        headers.set("content-type", "application/json");
        headers.delete("content-length");

        return new Response(JSON.stringify(sanitized), {
          status: response.status,
          statusText: response.statusText,
          headers,
        });
      } catch {
        return response;
      }
    };

    const chatApp = createChat({
      webhookUrl: WEBHOOK_URL,
      webhookConfig: {
        method: "POST",
        headers: {},
      },
      target: TARGET,
      mode: "window",
      showWindowCloseButton: true,
      chatInputKey: "chatInput",
      chatSessionKey: "sessionId",
      loadPreviousSession: false,
      metadata: {
        source: "biodisma-web",
        language: currentLanguage,
      },
      showWelcomeScreen: false,
      defaultLanguage: "en",
      initialMessages: copy.initialMessages,
      i18n: {
        en: {
          title: "Asistente Virtual",
          subtitle: "",
          footer: "",
          getStarted: copy.getStarted,
          inputPlaceholder: copy.inputPlaceholder,
          closeButtonTooltip: copy.closeButtonTooltip,
        },
      },
      enableStreaming: false,
    });

    const closeFromHeader = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const clickedInsideChat = target.closest("#n8n-chat .chat-window-wrapper");
      if (clickedInsideChat) {
        hasInteractedWithChatRef.current = true;
        setShowNudge(false);
      }

      const clickedClose = target.closest("#n8n-chat .chat-close-button");
      if (!clickedClose) return;

      event.preventDefault();
      event.stopPropagation();

      const toggleButton = document.querySelector("#n8n-chat .chat-window-wrapper .chat-window-toggle");
      if (toggleButton instanceof HTMLElement) {
        toggleButton.click();
      }
    };

    document.addEventListener("click", closeFromHeader, true);

    return () => {
      window.fetch = originalFetch;
      document.removeEventListener("click", closeFromHeader, true);
      chatApp.unmount();
      const mountNode = document.querySelector(TARGET);
      if (mountNode) mountNode.innerHTML = "";
    };
  }, [currentLanguage]);

  const openChatFromNudge = () => {
    const toggleButton = document.querySelector("#n8n-chat .chat-window-wrapper .chat-window-toggle");
    if (!(toggleButton instanceof HTMLElement)) return;

    hasInteractedWithChatRef.current = true;
    setShowNudge(false);
    toggleButton.click();
  };

  return (
    <>
      <div id="n8n-chat" />
      {showNudge ? (
        <button
          type="button"
          onClick={openChatFromNudge}
          className="chatbot-nudge"
          aria-label="Abrir asistente virtual"
        >
          Hola, soy el asistente virtual de Bio-Disma.
        </button>
      ) : null}
    </>
  );
}
