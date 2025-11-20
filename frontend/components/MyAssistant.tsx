"use client";

import { useThreadRuntime, ThreadPrimitive } from "@assistant-ui/react"; 
import { MarkdownTextPrimitive } from "@assistant-ui/react-markdown"; 

const MarkdownText = MarkdownTextPrimitive;

// You must also update your JSX to use the new primitive parts.
// Your component will now look more like this (based on the docs):

export function MyAssistant() {
  const runtime = useThreadRuntime(); // Use the new hook

  // You will need to bring in the styled parts or define your own structure
  return (
    <ThreadPrimitive.Root runtime={runtime}>
      <ThreadPrimitive.Viewport>
        <ThreadPrimitive.Messages components={{ 
            Text: MarkdownText,
            // You will need to define components for UserMessage, AssistantMessage, etc. 
            // if you don't use the library's recommended setup via the CLI/styles package.
        }} />
      </ThreadPrimitive.Viewport>
      {/* Add other required primitives like the Composer/Input area here */}
      <ThreadPrimitive.Composer />
    </ThreadPrimitive.Root>
  );
}

