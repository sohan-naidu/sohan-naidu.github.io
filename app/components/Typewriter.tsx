"use client";
import Typewriter from "typewriter-effect";

export default function GreetingTypewriter() {
  return (
    <span className="text-[90px] font-[family-name:var(--font-geist-sans)] inline-block">
      <Typewriter
        options={{
          strings: ["Hey!", "नमस्कार!", "Bonjour!", "Hola!", "Guten Tag!", "こんにちは!", "안녕하세요!", "Ciao!", "Olá!"],
          autoStart: true,
          loop: true,
          deleteSpeed: 80,
        }}
      />
    </span>
  );
}
