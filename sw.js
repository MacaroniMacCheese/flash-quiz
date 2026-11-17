<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="theme-color" content="#ffffff">
    <title>Minimalist Quiz App</title>
    <meta name="description" content="A minimalist quiz app: upload, paste, or create your own questions.">
    <!-- Inline icon: saves the browser a separate (404) /favicon.ico request -->
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23000'/%3E%3Ctext x='16' y='23' font-size='20' font-weight='700' text-anchor='middle' fill='%23fff' font-family='sans-serif'%3EQ%3C/text%3E%3C/svg%3E">
    <!-- Pre-compiled utility CSS (replaces the Tailwind CDN script, which blocked first paint on slow connections).
         It only contains the classes this page uses: if you add a NEW utility class, add its rule here. -->
    <style id="utility-css">
*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}
body{margin:0;line-height:inherit}
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}
blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}
button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}
button,select{text-transform:none}
button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}
textarea{resize:vertical}
input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}
button,[role=button]{cursor:pointer}
:disabled{cursor:default}
img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}
[hidden]{display:none}
@keyframes pulse{50%{opacity:.5}}
.-mx-1{margin-left:-.25rem;margin-right:-.25rem}
.mt-1{margin-top:.25rem}
.mt-2{margin-top:.5rem}
.mt-3{margin-top:.75rem}
.mt-4{margin-top:1rem}
.mt-5{margin-top:1.25rem}
.-mb-2{margin-bottom:-.5rem}
.mb-2{margin-bottom:.5rem}
.mb-3{margin-bottom:.75rem}
.mb-4{margin-bottom:1rem}
.mb-6{margin-bottom:1.5rem}
.ml-1{margin-left:.25rem}
.p-1{padding:.25rem}
.p-3{padding:.75rem}
.p-4{padding:1rem}
.p-5{padding:1.25rem}
.p-6{padding:1.5rem}
.px-1{padding-left:.25rem;padding-right:.25rem}
.px-3{padding-left:.75rem;padding-right:.75rem}
.px-4{padding-left:1rem;padding-right:1rem}
.px-6{padding-left:1.5rem;padding-right:1.5rem}
.px-8{padding-left:2rem;padding-right:2rem}
.py-1\.5{padding-top:.375rem;padding-bottom:.375rem}
.py-2{padding-top:.5rem;padding-bottom:.5rem}
.py-4{padding-top:1rem;padding-bottom:1rem}
.pt-2{padding-top:.5rem}
.pt-3{padding-top:.75rem}
.pt-4{padding-top:1rem}
.pt-5{padding-top:1.25rem}
.pr-2{padding-right:.5rem}
.pb-12{padding-bottom:3rem}
.pb-2{padding-bottom:.5rem}
.pb-3{padding-bottom:.75rem}
.pb-4{padding-bottom:1rem}
.pb-8{padding-bottom:2rem}
.pl-12{padding-left:3rem}
.-rotate-90{transform:rotate(-90deg)}
.absolute{position:absolute}
.accent-black{accent-color:#000}
.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}
.backdrop-blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}
.bg-black{background-color:#000000}
.bg-blue-100\/60{background-color:rgb(219 234 254 / .6)}
.bg-blue-50{background-color:#eff6ff}
.bg-gray-100{background-color:#f3f4f6}
.bg-gray-50{background-color:#f9fafb}
.bg-green-100{background-color:#dcfce7}
.bg-green-50{background-color:#f0fdf4}
.bg-red-100{background-color:#fee2e2}
.bg-red-50{background-color:#fef2f2}
.bg-transparent{background-color:transparent}
.bg-white{background-color:#ffffff}
.bg-white\/95{background-color:rgb(255 255 255 / .95)}
.border{border-width:1px}
.border-2{border-width:2px}
.border-b{border-bottom-width:1px}
.border-black{border-color:#000000}
.border-blue-200{border-color:#bfdbfe}
.border-blue-200\/50{border-color:rgb(191 219 254 / .5)}
.border-dashed{border-style:dashed}
.border-gray-100{border-color:#f3f4f6}
.border-gray-200{border-color:#e5e7eb}
.border-green-200{border-color:#bbf7d0}
.border-green-500{border-color:#22c55e}
.border-l-4{border-left-width:4px}
.border-red-200{border-color:#fecaca}
.border-red-500{border-color:#ef4444}
.border-t{border-top-width:1px}
.bottom-3{bottom:.75rem}
.box-border{box-sizing:border-box}
.break-words{overflow-wrap:break-word}
.cursor-not-allowed{cursor:not-allowed}
.cursor-pointer{cursor:pointer}
.flex{display:flex}
.flex-1{flex:1 1 0%}
.flex-col{flex-direction:column}
.flex-row{flex-direction:row}
.font-bold{font-weight:700}
.font-light{font-weight:300}
.font-medium{font-weight:500}
.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}
.font-normal{font-weight:400}
.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}
.font-semibold{font-weight:600}
.gap-1{gap:.25rem}
.gap-1\.5{gap:.375rem}
.gap-2{gap:.5rem}
.gap-3{gap:.75rem}
.gap-4{gap:1rem}
.grid{display:grid}
.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}
.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.h-1\.5{height:.375rem}
.h-14{height:3.5rem}
.h-28{height:7rem}
.h-6{height:1.5rem}
.h-8{height:2rem}
.h-auto{height:auto}
.h-full{height:100%}
.hidden{display:none}
.inline-block{display:inline-block}
.inset-0{inset:0px}
.items-center{align-items:center}
.items-start{align-items:flex-start}
.justify-around{justify-content:space-around}
.justify-between{justify-content:space-between}
.justify-center{justify-content:center}
.leading-none{line-height:1}
.leading-relaxed{line-height:1.625}
.left-3{left:.75rem}
.left-4{left:1rem}
.line-through{text-decoration-line:line-through}
.max-w-2xl{max-width:42rem}
.max-w-4xl{max-width:56rem}
.max-w-5xl{max-width:64rem}
.min-h-screen{min-height:100vh}
.min-w-0{min-width:0px}
.mx-auto{margin-left:auto;margin-right:auto}
.normal-case{text-transform:none}
.opacity-0{opacity:0}
.opacity-40{opacity:.4}
.opacity-75{opacity:.75}
.opacity-80{opacity:.8}
.outline-none{outline:2px solid transparent;outline-offset:2px}
.overflow-hidden{overflow:hidden}
.overflow-visible{overflow:visible}
.relative{position:relative}
.resize-none{resize:none}
.resize-y{resize:vertical}
.right-3{right:.75rem}
.ring-2{box-shadow:0 0 0 2px var(--tw-ring-color,rgb(59 130 246 / .5))}
.ring-black{--tw-ring-color:#000}
.rounded-2xl{border-radius:1rem}
.rounded-full{border-radius:9999px}
.rounded-lg{border-radius:.5rem}
.rounded-r-xl{border-top-right-radius:.75rem;border-bottom-right-radius:.75rem}
.rounded-xl{border-radius:.75rem}
.shadow-lg{box-shadow:0 10px 15px -3px rgb(0 0 0 / .1),0 4px 6px -4px rgb(0 0 0 / .1)}
.shadow-sm{box-shadow:0 1px 2px 0 rgb(0 0 0 / .05)}
.shrink-0{flex-shrink:0}
.space-y-2>:not([hidden])~:not([hidden]){margin-top:.5rem;margin-bottom:0px}
.space-y-4>:not([hidden])~:not([hidden]){margin-top:1rem;margin-bottom:0px}
.space-y-5>:not([hidden])~:not([hidden]){margin-top:1.25rem;margin-bottom:0px}
.space-y-6>:not([hidden])~:not([hidden]){margin-top:1.5rem;margin-bottom:0px}
.text-2xl{font-size:1.5rem;line-height:2rem}
.text-3xl{font-size:1.875rem;line-height:2.25rem}
.text-\[10px\]{font-size:10px}
.text-base{font-size:1rem;line-height:1.5rem}
.text-black{color:#000000}
.text-blue-900{color:#1e3a8a}
.text-center{text-align:center}
.text-gray-400{color:#9ca3af}
.text-gray-500{color:#6b7280}
.text-gray-600{color:#4b5563}
.text-gray-700{color:#374151}
.text-gray-900{color:#111827}
.text-green-600{color:#16a34a}
.text-green-700{color:#15803d}
.text-green-800{color:#166534}
.text-left{text-align:left}
.text-red-500{color:#ef4444}
.text-red-600{color:#dc2626}
.text-red-700{color:#b91c1c}
.text-red-800{color:#991b1b}
.text-right{text-align:right}
.text-sm{font-size:.875rem;line-height:1.25rem}
.text-white{color:#ffffff}
.text-xl{font-size:1.25rem;line-height:1.75rem}
.text-xs{font-size:.75rem;line-height:1rem}
.top-2{top:.5rem}
.top-4{top:1rem}
.tracking-tight{letter-spacing:-.025em}
.tracking-wider{letter-spacing:.05em}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}
.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}
.uppercase{text-transform:uppercase}
.w-10{width:2.5rem}
.w-12{width:3rem}
.w-14{width:3.5rem}
.w-6{width:1.5rem}
.w-8{width:2rem}
.w-full{width:100%}
.whitespace-normal{white-space:normal}
.whitespace-nowrap{white-space:nowrap}
.whitespace-pre-wrap{white-space:pre-wrap}
.z-10{z-index:10}
.z-20{z-index:20}
.z-30{z-index:30}
.min-h-\[100dvh\]{min-height:100dvh}
.min-h-\[120px\]{min-height:120px}
.min-h-\[160px\]{min-height:160px}
.min-h-\[44px\]{min-height:44px}
.min-h-\[48px\]{min-height:48px}
.min-h-\[56px\]{min-height:56px}
.min-h-\[64px\]{min-height:64px}
.duration-300{transition-duration:.3s}
.hover\:bg-gray-100:hover{background-color:#f3f4f6}
.hover\:bg-gray-200:hover{background-color:#e5e7eb}
.hover\:bg-gray-50:hover{background-color:#f9fafb}
.hover\:bg-gray-800:hover{background-color:#1f2937}
.hover\:bg-green-50:hover{background-color:#f0fdf4}
.hover\:bg-red-50:hover{background-color:#fef2f2}
.hover\:border-black:hover{border-color:#000000}
.hover\:border-gray-300:hover{border-color:#d1d5db}
.hover\:border-green-600:hover{border-color:#16a34a}
.hover\:border-red-300:hover{border-color:#fca5a5}
.hover\:border-red-600:hover{border-color:#dc2626}
.hover\:text-black:hover{color:#000000}
.hover\:text-green-700:hover{color:#15803d}
.hover\:text-red-600:hover{color:#dc2626}
.hover\:text-red-700:hover{color:#b91c1c}
.focus-within\:border-black:focus-within{border-color:#000000}
.focus\:border-black:focus{border-color:#000000}
.group:focus-within .group-focus-within\:text-black{color:#000000}
.disabled\:cursor-not-allowed:disabled{cursor:not-allowed}
.disabled\:opacity-30:disabled{opacity:.3}
.disabled\:opacity-50:disabled{opacity:.5}
@media (min-width:640px){.sm\:mb-8{margin-bottom:2rem}
.sm\:p-4{padding:1rem}
.sm\:p-5{padding:1.25rem}
.sm\:p-6{padding:1.5rem}
.sm\:p-8{padding:2rem}
.sm\:pb-12{padding-bottom:3rem}
.sm\:pb-4{padding-bottom:1rem}
.sm\:flex-row{flex-direction:row}
.sm\:gap-3{gap:.75rem}
.sm\:gap-4{gap:1rem}
.sm\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.sm\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.sm\:h-10{height:2.5rem}
.sm\:h-16{height:4rem}
.sm\:h-32{height:8rem}
.sm\:items-center{align-items:center}
.sm\:ml-auto{margin-left:auto}
.sm\:space-y-6>:not([hidden])~:not([hidden]){margin-top:1.5rem;margin-bottom:0px}
.sm\:space-y-8>:not([hidden])~:not([hidden]){margin-top:2rem;margin-bottom:0px}
.sm\:text-2xl{font-size:1.5rem;line-height:2rem}
.sm\:text-3xl{font-size:1.875rem;line-height:2.25rem}
.sm\:text-lg{font-size:1.125rem;line-height:1.75rem}
.sm\:text-sm{font-size:.875rem;line-height:1.25rem}
.sm\:text-xs{font-size:.75rem;line-height:1rem}
.sm\:w-10{width:2.5rem}
.sm\:w-16{width:4rem}
.sm\:w-auto{width:auto}
.sm\:min-h-\[160px\]{min-height:160px}
.sm\:min-h-\[76px\]{min-height:76px}
}
@media (min-width:768px){.md\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.md\:text-4xl{font-size:2.25rem;line-height:2.5rem}
.md\:text-base{font-size:1rem;line-height:1.5rem}
.md\:text-lg{font-size:1.125rem;line-height:1.75rem}
}
    </style>
    <style>
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .animate-slide-in { animation: slideInRight 0.3s ease-out forwards; }
        .animate-zoom-in { animation: zoomIn 0.4s ease-out forwards; }
        html { -webkit-text-size-adjust: 100%; }
        body { -webkit-tap-highlight-color: transparent; padding-left: max(1rem, env(safe-area-inset-left)); padding-right: max(1rem, env(safe-area-inset-right)); }
        button, label, input[type=checkbox] { touch-action: manipulation; }
        /* 16px inputs stop iOS Safari from zooming on focus */
        input[type=text], input[type=number], textarea { font-size: 16px !important; }
        button:active:not(:disabled) { transform: scale(0.98); }
        .sticky-actions { position: sticky; bottom: 0; padding-bottom: max(0.75rem, env(safe-area-inset-bottom)); }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
        body::-webkit-scrollbar { display: none; }
        body { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body class="min-h-screen min-h-[100dvh] bg-white text-gray-900 font-sans flex items-start sm:items-center justify-center py-4 sm:p-6 box-border">

    <div id="app" class="w-full max-w-5xl"><p class="text-center text-sm text-gray-400">Loading…</p></div>

    <script>
        const icons = {
            upload: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
            play: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
            clock: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
            arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
            check: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
            x: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
            rotateCcw: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
            clipboard: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
            checkSmall: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><polyline points="20 6 9 17 4 12"/></svg>`,
            infoCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
        };

        const state = {
            appState: 'setup',
            rawQuestions: [],
            activeQuestions: [],
            pastedText: '',
            settings: { randomizeQuestions: false, randomizeChoices: false, immediateFeedback: true, passingScore: 70, timeLimit: 30 },
            currentIndex: 0,
            score: 0,
            timeLeft: 0,
            timerRef: null,
            questionStartTime: 0,
            questionStats: [],
            feedbackState: null,
            previousScore: undefined,
            previousTotal: undefined
        };

        const escapeHTML = (str) => String(str).replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));

        const formatTime = (secs) => {
            const m = Math.floor(secs / 60);
            const s = (secs % 60).toFixed(1);
            return m > 0 ? `${m}m ${s}s` : `${s}s`;
        };

        const fmtClock = (t) => `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;

        const compressText = async (text) => {
            if (!window.CompressionStream) return 'COMPZ_LEGACY:' + btoa(encodeURIComponent(text));
            try {
                const stream = new Blob([text]).stream().pipeThrough(new CompressionStream('deflate-raw'));
                const buffer = await new Response(stream).arrayBuffer();
                const uint8 = new Uint8Array(buffer);
                let binary = '';
                for(let i = 0; i < uint8.length; i+=8192) {
                    binary += String.fromCharCode.apply(null, uint8.subarray(i, i + 8192));
                }
                return 'COMPZ:' + btoa(binary);
            } catch(e) {
                return 'COMPZ_LEGACY:' + btoa(encodeURIComponent(text));
            }
        };

        const decompressText = async (fullText) => {
            const txt = fullText.trim();
            if (txt.startsWith('COMPZ_LEGACY:')) return decodeURIComponent(atob(txt.replace('COMPZ_LEGACY:', '')));
            if (txt.startsWith('COMPZ:')) {
                try {
                    const binary = atob(txt.replace('COMPZ:', ''));
                    const uint8 = new Uint8Array(binary.length);
                    for(let i = 0; i < binary.length; i++) uint8[i] = binary.charCodeAt(i);
                    const stream = new Blob([uint8]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
                    return await new Response(stream).text();
                } catch(e) { return ""; }
            }
            if (txt.startsWith('COMPRESSED:')) {
                try {
                    const json = JSON.parse(decodeURIComponent(atob(txt.replace('COMPRESSED:', ''))));
                    let out = '';
                    json.forEach((q, i) => {
                        out += `Q${i+1} = {\nQuestion = "${q.question}"\nTypeOfQuestion = "${q.type}"\n`;
                        if (q.type === 'Multiple Choice') q.options.forEach((o, j) => out += `OP${j+1} = "${o.text}"\n`);
                        out += `Ans = "${q.answer}"\n`;
                        if (q.info) out += `Info = "${q.info}"\n`;
                        out += `}\n\n`;
                    });
                    return out;
                } catch(e) { return ""; }
            }
            return txt;
        };

        const parseQuizFile = (text) => {
            if (!text) return [];
            const questions = [];
            const blockRegex = /\w+\s*=\s*\{([^}]+)\}/g;
            let match;
            while ((match = blockRegex.exec(text)) !== null) {
                const block = match[1];
                const qMatch = block.match(/Question\s*=\s*"([^"]+)"/);
                const typeMatch = block.match(/TypeOfQuestion\s*=\s*"([^"]+)"/);
                if (!qMatch || !typeMatch) continue;

                const type = typeMatch[1];
                const questionObj = { id: Math.random().toString(36).substring(2, 9), question: qMatch[1], type: type, options: [], answer: null };

                // Matches everything inside the Info quotes including actual multi-line paragraphs
                const infoMatch = block.match(/Info\s*=\s*"([^"]+)"/);
                // Also explicitly replace literal "\n" strings from the AI to actual newline characters
                if (infoMatch) questionObj.info = infoMatch[1].replace(/\\n/g, '\n');

                const options = {};
                if (type === "Multiple Choice") {
                    const optRegex = /(OP\d+)\s*=\s*"([^"]+)"/g;
                    let optMatch;
                    while ((optMatch = optRegex.exec(block)) !== null) {
                        options[optMatch[1]] = optMatch[2];
                        questionObj.options.push({ key: optMatch[1], text: optMatch[2] });
                    }
                }
                const ansMatch = block.match(/Ans\s*=\s*(?:"([^"]+)"|([A-Za-z0-9_]+))/);
                if (ansMatch) {
                    const ansVal = ansMatch[1] || ansMatch[2];
                    questionObj.answer = (type === "Multiple Choice" && options[ansVal] !== undefined) ? options[ansVal] : ansVal;
                }
                questions.push(questionObj);
            }
            return questions;
        };

        const processText = async (text) => {
            const uncompressed = await decompressText(text);
            const parsed = parseQuizFile(uncompressed);
            state.rawQuestions = parsed;
            return parsed;
        };

        const updateDOMForQuestions = (parsed, text) => {
            const statusBar = document.getElementById('status-bar');
            const statusText = document.getElementById('status-text');
            const initBtn = document.getElementById('init-btn');
            const compBtn = document.getElementById('compress-btn');

            if (parsed.length > 0) {
                if (statusBar) statusBar.className = "flex items-center justify-center p-3 rounded-xl border transition-colors bg-green-50 text-green-700 border-green-200";
                if (statusText) statusText.innerHTML = `${icons.checkSmall} <span class="ml-1">${parsed.length} Questions Loaded Successfully</span>`;
                if (initBtn) initBtn.disabled = false;
                if (compBtn) {
                    compBtn.classList.remove('hidden');
                    compBtn.innerText = text.trim().startsWith('COMP') ? 'Show Uncompressed' : 'Compress Data';
                }
            } else {
                if (statusBar) statusBar.className = "flex items-center justify-center p-3 rounded-xl border transition-colors bg-gray-50 text-gray-700 border-gray-200";
                if (statusText) statusText.innerHTML = "Waiting for question data...";
                if (initBtn) initBtn.disabled = true;
                if (compBtn) compBtn.classList.add('hidden');
            }
        };

        let pasteTimeout;
        window.handleTextPaste = (text) => {
            state.pastedText = text;
            clearTimeout(pasteTimeout);
            pasteTimeout = setTimeout(async () => {
                const statusText = document.getElementById('status-text');
                if (text.trim().startsWith('COMP') && statusText) statusText.innerHTML = "Decompressing...";
                const parsed = await processText(text);
                updateDOMForQuestions(parsed, text);
            }, 200);
        };

        window.handleFileUpload = (input) => {
            const file = input.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = async (evt) => {
                state.pastedText = evt.target.result;
                await processText(evt.target.result);
                render();
            };
            reader.readAsText(file);
        };

        window.toggleCompression = async () => {
            const btn = document.getElementById('compress-btn');
            if (!btn) return;
            btn.innerText = "Processing...";
            btn.disabled = true;

            if (state.pastedText.trim().startsWith('COMP')) {
                try { state.pastedText = await decompressText(state.pastedText); } catch(e) {}
            } else {
                let txt = '';
                state.rawQuestions.forEach((q, i) => {
                    txt += `Q${i+1} = {\nQuestion = "${q.question}"\nTypeOfQuestion = "${q.type}"\n`;
                    if (q.type === 'Multiple Choice') q.options.forEach((o, j) => txt += `OP${j+1} = "${o.text}"\n`);
                    txt += `Ans = "${q.answer}"\n`;
                    if (q.info) txt += `Info = "${q.info}"\n`;
                    txt += `}\n\n`;
                });
                state.pastedText = await compressText(txt.trim());
            }
            render();
        };

        const shuffleArray = (array) => {
            const newArr = [...array];
            for (let i = newArr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
            }
            return newArr;
        };

        window.updateSetting = (key, value) => { state.settings[key] = value; render(); };

        window.startQuiz = () => {
            if (state.rawQuestions.length === 0) return;
            let processed = [...state.rawQuestions];
            if (state.settings.randomizeQuestions) processed = shuffleArray(processed);
            if (state.settings.randomizeChoices) processed = processed.map(q => q.type === 'Multiple Choice' ? { ...q, options: shuffleArray(q.options) } : q);
            state.activeQuestions = processed;
            state.currentIndex = 0;
            state.score = 0;
            state.questionStats = [];
            state.feedbackState = null;
            state.appState = 'quiz';
            state.questionStartTime = Date.now();
            render();
            startTimer();
        };

        window.retakeQuiz = () => {
            state.previousScore = state.score;
            state.previousTotal = state.activeQuestions.length;
            let processed = [...state.rawQuestions];
            if (state.settings.randomizeQuestions) processed = shuffleArray(processed);
            if (state.settings.randomizeChoices) processed = processed.map(q => q.type === 'Multiple Choice' ? { ...q, options: shuffleArray(q.options) } : q);
            state.activeQuestions = processed;
            state.currentIndex = 0;
            state.score = 0;
            state.questionStats = [];
            state.feedbackState = null;
            state.appState = 'quiz';
            state.questionStartTime = Date.now();
            render();
            startTimer();
        };

        const startTimer = () => {
            clearInterval(state.timerRef);
            if (state.settings.timeLimit > 0) {
                state.timeLeft = state.settings.timeLimit;
                updateTimerDisplay();
                state.timerRef = setInterval(() => {
                    state.timeLeft--;
                    if (state.timeLeft <= 0) {
                        clearInterval(state.timerRef);
                        checkAndProceed("[Time Out]", state.activeQuestions[state.currentIndex]);
                    } else updateTimerDisplay();
                }, 1000);
            }
        };

        const updateTimerDisplay = () => {
            const timerEl = document.getElementById('timer-display');
            if (timerEl) {
                timerEl.innerHTML = `${icons.clock} ${fmtClock(state.timeLeft)}`;
                if (state.timeLeft <= 5) {
                    timerEl.classList.add('text-red-500', 'font-bold', 'animate-pulse');
                    timerEl.classList.remove('text-gray-600');
                } else {
                    timerEl.classList.remove('text-red-500', 'font-bold', 'animate-pulse');
                    timerEl.classList.add('text-gray-600');
                }
            }
        };

        window.submitOption = (optIndex) => checkAndProceed(state.activeQuestions[state.currentIndex].options[optIndex].text, state.activeQuestions[state.currentIndex]);
        window.submitTF = (answer) => checkAndProceed(answer, state.activeQuestions[state.currentIndex]);
        window.submitIdent = () => {
            const inputEl = document.getElementById('identInput');
            if (!inputEl) return;
            const val = inputEl.value.trim();
            if (!val && (Date.now() - state.questionStartTime < 2000)) {
                inputEl.placeholder = "Wait 2s before skipping...";
                setTimeout(() => { if (inputEl) inputEl.placeholder = "Type your answer..."; }, 1000);
                return;
            }
            checkAndProceed(val, state.activeQuestions[state.currentIndex]);
        };
        window.handleIdentKeydown = (event) => {
            if (event.key !== 'Enter') return;
            // Keep this Enter from bubbling to the global "Enter = next question" handler below.
            // Without this, the same keypress that submitted the answer also skipped the feedback screen.
            event.preventDefault();
            event.stopPropagation();
            if (event.repeat) return;
            window.submitIdent();
        };

        const checkAndProceed = (userAnswer, currentQ) => {
            if (state.feedbackState) return; // already answered; ignore double submits
            clearInterval(state.timerRef);
            const timeTaken = (Date.now() - state.questionStartTime) / 1000;
            const isCorrect = currentQ.type === 'Multiple Choice' ? userAnswer === currentQ.answer : String(userAnswer).trim().toLowerCase() === String(currentQ.answer).trim().toLowerCase();
            if (isCorrect) state.score++;
            state.questionStats.push({ question: currentQ.question, timeTaken, isCorrect, userAnswer, correctAnswer: currentQ.answer, info: currentQ.info });
            if (state.settings.immediateFeedback) {
                state.feedbackState = { isCorrect, userAnswer, correctAnswer: currentQ.answer };
                state.feedbackShownAt = Date.now();
                render();
            } else window.goToNextQuestion();
        };

        window.goToNextQuestion = () => {
            state.feedbackState = null;
            if (state.currentIndex + 1 < state.activeQuestions.length) {
                state.currentIndex++;
                state.questionStartTime = Date.now();
                render();
                startTimer();
            } else {
                state.appState = 'results';
                render();
            }
        };

        window.restart = () => {
            state.appState = 'setup';
            state.rawQuestions = [];
            state.questionStats = [];
            state.pastedText = '';
            state.previousScore = undefined;
            state.previousTotal = undefined;
            render();
        };

        // ---------- Question builder ----------
        const blankEditor = () => ({ index: -1, type: 'Multiple Choice', question: '', options: ['', '', '', ''], correct: 0, tf: 'True', answer: '', info: '' });
        state.builder = { draft: [], editor: blankEditor(), error: '', notice: '' };
        state.tab = 'play'; // 'play' (load + configure + start) or 'create' (question builder)

        // The file format can't hold " or { } inside values, so swap them for safe lookalikes
        const cleanField = (str) => String(str).trim().replace(/"/g, '”').replace(/\{/g, '(').replace(/\}/g, ')');

        const serializeQuestions = (list) => list.map((q, i) => {
            let out = `Q${i + 1} = {\nQuestion = "${cleanField(q.question)}"\nTypeOfQuestion = "${q.type}"\n`;
            if (q.type === 'Multiple Choice') {
                q.options.forEach((o, j) => out += `OP${j + 1} = "${cleanField(o.text)}"\n`);
                out += `Ans = "OP${q.options.findIndex(o => o.text === q.answer) + 1}"\n`;
            } else out += `Ans = "${cleanField(q.answer)}"\n`;
            if (q.info) out += `Info = "${cleanField(q.info)}"\n`;
            return out + `}`;
        }).join('\n\n');

        const bState = () => state.builder;
        window.setTab = (tab) => {
            if (state.tab === tab) return;
            const b = bState();
            state.tab = tab;
            // Opening Create with questions already loaded: start from them so they can be edited
            if (tab === 'create' && b.draft.length === 0 && state.rawQuestions.length > 0) {
                b.draft = state.rawQuestions.map(q => ({ ...q, options: q.options.map(o => ({ ...o })) }));
            }
            b.error = '';
            b.notice = '';
            window.scrollTo(0, 0);
            render();
        };
        window.bSet = (field, value) => { bState().editor[field] = value; };
        window.bSetOption = (i, value) => { bState().editor.options[i] = value; };
        window.bSetType = (type) => { bState().editor.type = type; bState().error = ''; render(); };
        window.bAddOption = () => { bState().editor.options.push(''); render(); };
        window.bRemoveOption = (i) => {
            const e = bState().editor;
            e.options.splice(i, 1);
            if (e.correct === i) e.correct = 0; else if (e.correct > i) e.correct--;
            render();
        };
        window.bSave = () => {
            const b = bState(), e = b.editor;
            const question = e.question.trim();
            if (!question) { b.error = 'Please enter the question text.'; return render(); }
            const q = { id: Math.random().toString(36).substring(2, 9), question, type: e.type, options: [], answer: null };
            if (e.info.trim()) q.info = e.info.trim();
            if (e.type === 'Multiple Choice') {
                const correctText = (e.options[e.correct] || '').trim();
                q.options = e.options.map(t => t.trim()).filter(Boolean).map((t, i) => ({ key: `OP${i + 1}`, text: t }));
                if (q.options.length < 2) { b.error = 'Add at least two options.'; return render(); }
                if (!correctText) { b.error = 'Select a correct option that is not empty.'; return render(); }
                q.answer = correctText;
            } else if (e.type === 'True or False') q.answer = e.tf;
            else {
                if (!e.answer.trim()) { b.error = 'Please enter the correct answer.'; return render(); }
                q.answer = e.answer.trim();
            }
            const wasEditing = e.index >= 0;
            if (wasEditing) b.draft[e.index] = q; else b.draft.push(q);
            b.editor = blankEditor();
            b.error = '';
            const msg = b.notice = wasEditing ? 'Changes saved.' : `Question added. You have ${b.draft.length} so far.`;
            render();
            // The confirmation fades away on its own (removed from the DOM directly, no re-render)
            setTimeout(() => {
                if (b.notice !== msg) return;
                b.notice = '';
                document.getElementById('b-notice')?.remove();
            }, 2500);
        };
        window.bEdit = (i) => {
            const b = bState(), q = b.draft[i];
            b.editor = {
                index: i, type: q.type, question: q.question, info: q.info || '',
                options: q.type === 'Multiple Choice' ? q.options.map(o => o.text) : ['', '', '', ''],
                correct: q.type === 'Multiple Choice' ? Math.max(0, q.options.findIndex(o => o.text === q.answer)) : 0,
                tf: q.type === 'True or False' ? q.answer : 'True',
                answer: q.type === 'Identification' ? q.answer : ''
            };
            b.error = '';
            render();
            document.getElementById('builder-editor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        window.bCancelEdit = () => { bState().editor = blankEditor(); bState().error = ''; render(); };
        window.bDelete = (i) => {
            const b = bState();
            b.draft.splice(i, 1);
            if (b.editor.index === i) b.editor = blankEditor(); else if (b.editor.index > i) b.editor.index--;
            render();
        };
        window.bMove = (i, dir) => {
            const d = bState().draft, j = i + dir;
            if (j < 0 || j >= d.length) return;
            [d[i], d[j]] = [d[j], d[i]];
            bState().editor = blankEditor();
            render();
        };
        window.bUse = () => {
            const b = bState();
            if (b.draft.length === 0) return;
            state.pastedText = serializeQuestions(b.draft);
            state.rawQuestions = b.draft.map(q => ({ ...q, options: q.options.map(o => ({ ...o })) }));
            state.tab = 'play'; // jump back to the quiz setup so they can configure and start
            b.notice = '';
            window.scrollTo(0, 0);
            render();
        };
        window.bDownload = () => {
            const b = bState();
            if (b.draft.length === 0) return;
            const url = URL.createObjectURL(new Blob([serializeQuestions(b.draft)], { type: 'text/plain' }));
            const a = document.createElement('a');
            a.href = url; a.download = 'my-quiz.txt';
            document.body.appendChild(a); a.click(); a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        };

        // ---------- Tabs ----------
        const renderTabs = () => {
            const n = bState().draft.length;
            const tab = (id, label) => {
                const on = state.tab === id;
                return `<button role="tab" aria-selected="${on}" onclick="setTab('${id}')" class="min-h-[44px] px-3 rounded-lg text-sm font-medium transition-colors ${on ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'}">${label}</button>`;
            };
            return `<div role="tablist" class="grid grid-cols-2 gap-1 p-1 bg-gray-100 rounded-xl">${tab('play', 'Take Quiz')}${tab('create', n > 0 ? `Create Questions (${n})` : 'Create Questions')}</div>`;
        };

        // ---------- Create tab (question builder) ----------
        const renderBuilder = () => {
            const b = bState(), e = b.editor;
            const inp = 'w-full p-3 sm:p-4 border border-gray-200 rounded-xl outline-none focus:border-black transition-colors bg-white';
            const btn = 'min-h-[48px] px-4 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 ';

            const typeTabs = ['Multiple Choice', 'True or False', 'Identification'].map(t =>
                `<button onclick="bSetType('${t}')" class="${btn} flex-1 border ${e.type === t ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-200 hover:border-black'}">${t}</button>`).join('');

            let answerHTML = '';
            if (e.type === 'Multiple Choice') {
                answerHTML = `<div class="space-y-2"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Options <span class="normal-case font-normal">(select the correct one)</span></label>` +
                    e.options.map((o, i) => `
                        <div class="flex items-center gap-2">
                            <input type="radio" name="correct" ${e.correct === i ? 'checked' : ''} onchange="bSet('correct', ${i})" class="w-6 h-6 accent-black shrink-0" aria-label="Correct option ${i + 1}" />
                            <input type="text" value="${escapeHTML(o)}" oninput="bSetOption(${i}, this.value)" placeholder="Option ${i + 1}" class="${inp}" autocomplete="off" />
                            ${e.options.length > 2 ? `<button onclick="bRemoveOption(${i})" aria-label="Remove option ${i + 1}" class="${btn} w-12 shrink-0 border border-gray-200 text-gray-500 hover:text-red-600 hover:border-red-300">✕</button>` : ''}
                        </div>`).join('') +
                    `<button onclick="bAddOption()" class="${btn} border border-gray-200 text-gray-700 hover:border-black">+ Add option</button></div>`;
            } else if (e.type === 'True or False') {
                answerHTML = `<div class="space-y-2"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Correct answer</label><div class="flex gap-2">` +
                    ['True', 'False'].map(v => `<button onclick="bSet('tf','${v}'); render()" class="${btn} flex-1 border ${e.tf === v ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-200 hover:border-black'}">${v}</button>`).join('') + `</div></div>`;
            } else {
                answerHTML = `<div class="space-y-2"><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Correct answer</label><input type="text" value="${escapeHTML(e.answer)}" oninput="bSet('answer', this.value)" placeholder="Answer (not case sensitive)" class="${inp}" autocomplete="off" /></div>`;
            }

            const list = b.draft.length === 0 ? '<p class="text-sm text-gray-500 text-center py-2">No questions yet. Add your first one above.</p>' :
                b.draft.map((q, i) => `
                    <div class="flex items-start gap-2 p-3 border border-gray-200 rounded-xl bg-white ${e.index === i ? 'ring-2 ring-black' : ''}">
                        <div class="flex-1 min-w-0">
                            <div class="text-sm font-medium break-words"><span class="text-gray-400">${i + 1}.</span> ${escapeHTML(q.question)}</div>
                            <div class="text-xs text-gray-500 mt-1 break-words">${q.type} • ${escapeHTML(q.answer)}</div>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-1 shrink-0">
                            <div class="flex gap-1">
                                <button onclick="bMove(${i}, -1)" ${i === 0 ? 'disabled' : ''} aria-label="Move up" class="${btn} w-10 border border-gray-200 disabled:opacity-30">↑</button>
                                <button onclick="bMove(${i}, 1)" ${i === b.draft.length - 1 ? 'disabled' : ''} aria-label="Move down" class="${btn} w-10 border border-gray-200 disabled:opacity-30">↓</button>
                            </div>
                            <div class="flex gap-1">
                                <button onclick="bEdit(${i})" class="${btn} border border-gray-200 hover:border-black">Edit</button>
                                <button onclick="bDelete(${i})" aria-label="Delete question" class="${btn} w-10 border border-gray-200 text-gray-500 hover:text-red-600 hover:border-red-300">✕</button>
                            </div>
                        </div>
                    </div>`).join('');

            return `
                <div class="space-y-6 sm:space-y-8">
                    <div id="builder-editor" class="space-y-4">
                        <h3 class="font-semibold">${e.index >= 0 ? `Editing question ${e.index + 1}` : 'Add a question'}</h3>
                        <div class="flex flex-col sm:flex-row gap-2">${typeTabs}</div>
                        <div class="space-y-2">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Question</label>
                            <textarea rows="3" oninput="bSet('question', this.value)" placeholder="Type your question..." class="${inp} resize-y">${escapeHTML(e.question)}</textarea>
                        </div>
                        ${answerHTML}
                        <div class="space-y-2">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Explanation <span class="normal-case font-normal">(optional, shown after answering)</span></label>
                            <textarea rows="2" oninput="bSet('info', this.value)" placeholder="Why is this the answer?" class="${inp} resize-y">${escapeHTML(e.info)}</textarea>
                        </div>
                        ${b.error ? `<div class="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm" role="alert">${escapeHTML(b.error)}</div>` : ''}
                        <div class="flex flex-col sm:flex-row gap-2">
                            <button onclick="bSave()" class="${btn} flex-1 bg-black text-white hover:bg-gray-800">${e.index >= 0 ? 'Save changes' : '+ Add question'}</button>
                            ${e.index >= 0 ? `<button onclick="bCancelEdit()" class="${btn} bg-white border border-gray-200 hover:border-black">Cancel</button>` : ''}
                        </div>
                        <div aria-live="polite">${b.notice ? `<div id="b-notice" class="p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm">${escapeHTML(b.notice)}</div>` : ''}</div>
                    </div>

                    <div class="pt-5 border-t border-gray-100 space-y-4">
                        <h3 class="font-semibold">Your questions (${b.draft.length})</h3>
                        <div class="space-y-2">${list}</div>
                    </div>

                    <div class="sticky-actions bg-white/95 border-t border-gray-100 pt-3 -mx-1 px-1">
                        <div class="grid grid-cols-2 gap-2">
                            <button onclick="bUse()" ${b.draft.length === 0 ? 'disabled' : ''} class="${btn} bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed">Use questions${b.draft.length ? ` (${b.draft.length})` : ''}</button>
                            <button onclick="bDownload()" ${b.draft.length === 0 ? 'disabled' : ''} class="${btn} bg-white border border-gray-200 hover:border-black disabled:opacity-50 disabled:cursor-not-allowed">Download .txt</button>
                        </div>
                    </div>
                </div>`;
        };

        // ---------- Take Quiz tab (load, configure, start) ----------
        const renderPlay = () => {
            const statusClasses = state.rawQuestions.length > 0 ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-700 border-gray-200';
            return `
                <div class="space-y-5 sm:space-y-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-gray-100 transition-colors relative min-h-[120px] sm:min-h-[160px]">
                            <div class="text-gray-400 mb-3">${icons.upload}</div>
                            <span class="text-sm font-medium text-gray-600 text-center">Upload .txt file</span>
                            <input type="file" accept=".txt" onchange="handleFileUpload(this)" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        </div>
                        <div class="relative flex flex-col border-2 border-gray-200 rounded-xl bg-white overflow-hidden min-h-[160px] focus-within:border-black transition-colors group">
                            <div class="absolute top-4 left-4 text-gray-400 group-focus-within:text-black transition-colors z-10">${icons.clipboard}</div>
                            <textarea id="paste-input" oninput="handleTextPaste(this.value)" placeholder="...or paste text directly here" class="w-full h-full p-4 pl-12 pb-12 resize-none outline-none text-sm text-gray-700 bg-transparent relative z-20 leading-relaxed">${escapeHTML(state.pastedText || '')}</textarea>
                            <button id="compress-btn" onclick="toggleCompression()" class="absolute bottom-3 right-3 z-30 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors ${state.rawQuestions.length > 0 ? '' : 'hidden'}">
                                ${state.pastedText.trim().startsWith('COMP') ? 'Show Uncompressed' : 'Compress Data'}
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center justify-center p-3 rounded-xl border transition-colors ${statusClasses}" id="status-bar">
                        <span class="font-medium text-sm flex items-center text-center" id="status-text">
                            ${state.rawQuestions.length > 0 ? `${icons.checkSmall} <span class="ml-1">${state.rawQuestions.length} Questions Loaded Successfully</span>` : "Waiting for question data..."}
                        </span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                        <label class="flex items-center justify-between cursor-pointer min-h-[56px] p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                            <span class="text-sm font-medium">Randomize Questions</span>
                            <input type="checkbox" ${state.settings.randomizeQuestions ? 'checked' : ''} onchange="updateSetting('randomizeQuestions', this.checked)" class="w-6 h-6 accent-black" />
                        </label>
                        <label class="flex items-center justify-between cursor-pointer min-h-[56px] p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                            <span class="text-sm font-medium">Randomize Options</span>
                            <input type="checkbox" ${state.settings.randomizeChoices ? 'checked' : ''} onchange="updateSetting('randomizeChoices', this.checked)" class="w-6 h-6 accent-black" />
                        </label>
                        <label class="flex items-center justify-between cursor-pointer min-h-[56px] p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                            <span class="text-sm font-medium">Immediate Feedback</span>
                            <input type="checkbox" ${state.settings.immediateFeedback ? 'checked' : ''} onchange="updateSetting('immediateFeedback', this.checked)" class="w-6 h-6 accent-black" />
                        </label>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Passing Score (%)</label>
                            <input type="number" inputmode="numeric" min="1" max="100" value="${state.settings.passingScore}" onchange="updateSetting('passingScore', Number(this.value))" class="w-full p-4 border border-gray-200 rounded-xl outline-none focus:border-black transition-colors" />
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Seconds Per Question</label>
                            <input type="number" inputmode="numeric" min="0" value="${state.settings.timeLimit}" onchange="updateSetting('timeLimit', Number(this.value))" class="w-full p-4 border border-gray-200 rounded-xl outline-none focus:border-black transition-colors" />
                        </div>
                    </div>
                    <button id="init-btn" onclick="startQuiz()" ${state.rawQuestions.length === 0 ? 'disabled' : ''} class="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2">
                        ${icons.play} Initialize
                    </button>
                </div>`;
        };

        const renderSetup = () => {
            const creating = state.tab === 'create';
            return `
                <div class="max-w-2xl mx-auto space-y-6 sm:space-y-8 animate-fade-in w-full">
                    <div class="text-center space-y-2">
                        <h1 class="text-3xl md:text-4xl font-light tracking-tight">Quiz Platform</h1>
                        <p class="text-sm md:text-base text-gray-500">${creating ? 'Write your own questions, then use them in a quiz or download them.' : 'Upload or paste your questions, then configure and start.'}</p>
                    </div>
                    ${renderTabs()}
                    <div class="border border-gray-200 rounded-2xl p-4 sm:p-8 bg-white shadow-sm">
                        ${creating ? renderBuilder() : renderPlay()}
                    </div>
                </div>
            `;
        };

        const renderQuiz = () => {
            if (state.activeQuestions.length === 0) return '';
            const currentQ = state.activeQuestions[state.currentIndex];
            let optionsHTML = '';

            if (currentQ.type === 'Multiple Choice') {
                optionsHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">` + currentQ.options.map((opt, idx) => {
                    let btnClass = "text-left p-4 sm:p-6 min-h-[56px] border rounded-xl transition-all font-medium h-auto break-words whitespace-normal text-sm md:text-base ";
                    if (state.feedbackState) {
                        if (opt.text === state.feedbackState.correctAnswer) btnClass += "border-green-500 bg-green-50 text-green-800 shadow-sm";
                        else if (opt.text === state.feedbackState.userAnswer && !state.feedbackState.isCorrect) btnClass += "border-red-500 bg-red-50 text-red-800 opacity-75";
                        else btnClass += "border-gray-200 bg-white opacity-40 cursor-not-allowed";
                    } else btnClass += "border-gray-200 hover:border-black hover:bg-gray-50 cursor-pointer";
                    return `<button ${state.feedbackState ? 'disabled' : `onclick="submitOption(${idx})"`} class="${btnClass}">${escapeHTML(opt.text)}</button>`;
                }).join('') + `</div>`;
            } else if (currentQ.type === 'True or False' || currentQ.type === 'True/False') {
                optionsHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">` + ['True', 'False'].map(opt => {
                    let btnClass = "p-4 sm:p-6 min-h-[56px] border rounded-xl transition-all font-medium text-base md:text-lg text-center h-auto break-words whitespace-normal ";
                    if (state.feedbackState) {
                        if (String(opt).toLowerCase() === String(state.feedbackState.correctAnswer).trim().toLowerCase()) btnClass += "border-green-500 bg-green-50 text-green-800 shadow-sm";
                        else if (String(opt).toLowerCase() === String(state.feedbackState.userAnswer).trim().toLowerCase() && !state.feedbackState.isCorrect) btnClass += "border-red-500 bg-red-50 text-red-800 opacity-75";
                        else btnClass += "border-gray-200 bg-white opacity-40 cursor-not-allowed";
                    } else btnClass += `border-gray-200 cursor-pointer ${opt === 'True' ? 'hover:border-green-600 hover:bg-green-50 hover:text-green-700' : 'hover:border-red-600 hover:bg-red-50 hover:text-red-700'}`;
                    return `<button ${state.feedbackState ? 'disabled' : `onclick="submitTF('${opt}')"`} class="${btnClass}">${opt}</button>`;
                }).join('') + `</div>`;
            } else {
                let identClass = "w-full p-4 sm:p-6 text-base md:text-lg border rounded-xl outline-none transition-colors ";
                if (state.feedbackState) {
                    let identValue = state.feedbackState.isCorrect ? state.feedbackState.userAnswer : `❌ ${state.feedbackState.userAnswer || '(blank)'}  ➔  ✅ ${state.feedbackState.correctAnswer}`;
                    identClass += state.feedbackState.isCorrect ? "border-green-500 bg-green-50 text-green-800" : "border-red-500 bg-red-50 text-red-800 font-medium";
                    optionsHTML = `<div class="space-y-4"><div class="${identClass} min-h-[64px] sm:min-h-[76px] h-auto break-words whitespace-pre-wrap">${escapeHTML(identValue)}</div></div>`;
                } else {
                    identClass += "border-gray-200 focus:border-black bg-white";
                    optionsHTML = `<div class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"><input type="text" id="identInput" onkeydown="handleIdentKeydown(event)" placeholder="Type your answer..." class="${identClass} flex-1" autocomplete="off" value="" /><button onclick="submitIdent()" class="w-full sm:w-auto px-6 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2">Submit ${icons.arrowRight}</button></div>`;
                }
            }

            if (state.feedbackState) {
                optionsHTML += `<div class="pt-5 mt-5 border-t border-gray-100 flex flex-col space-y-4 animate-fade-in">`;
                // Add whitespace-pre-wrap to properly render newlines
                if (currentQ.info) optionsHTML += `<div class="p-4 sm:p-5 bg-blue-50 text-blue-900 rounded-xl text-sm sm:text-lg border border-blue-200 leading-relaxed shadow-sm whitespace-pre-wrap"><strong>Info: </strong>\n${escapeHTML(currentQ.info)}</div>`;
                optionsHTML += `<div class="sticky-actions bg-white/95 backdrop-blur pt-2 -mx-1 px-1"><button id="next-btn" onclick="goToNextQuestion()" class="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg sm:ml-auto">${state.currentIndex + 1 < state.activeQuestions.length ? 'Next Question' : 'See Results'} ${icons.arrowRight}</button></div></div>`;
            }

            return `
                <div class="w-full max-w-2xl mx-auto space-y-6 sm:space-y-8 animate-slide-in pb-2">
                    <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden -mb-2"><div class="h-full bg-black rounded-full transition-all duration-300" style="width:${(state.currentIndex + (state.feedbackState ? 1 : 0)) / state.activeQuestions.length * 100}%"></div></div>
                    <div class="flex items-center justify-between border-b border-gray-200 pb-3 sm:pb-4">
                        <div class="text-xs sm:text-sm font-medium text-gray-500">Question ${state.currentIndex + 1} of ${state.activeQuestions.length}</div>
                        ${state.settings.timeLimit > 0 ? `<div id="timer-display" class="flex items-center gap-2 font-mono text-xs sm:text-sm ${state.timeLeft <= 5 ? 'text-red-500 font-bold' : 'text-gray-600'}">${icons.clock} ${fmtClock(state.timeLeft)}</div>` : ''}
                    </div>
                    <div class="space-y-5 sm:space-y-6">
                        <h2 class="text-xl sm:text-2xl font-medium leading-relaxed">${escapeHTML(currentQ.question)}</h2>
                        ${optionsHTML}
                    </div>
                </div>
            `;
        };

        const renderResults = () => {
            const percent = (state.score / state.activeQuestions.length) * 100;
            const passed = percent >= state.settings.passingScore;
            const totalTime = state.questionStats.reduce((acc, curr) => acc + curr.timeTaken, 0);
            const avgTime = totalTime / state.questionStats.length || 0;
            const sortedByTime = [...state.questionStats].sort((a, b) => b.timeTaken - a.timeTaken);

            let previousStatsHTML = '';
            if (state.previousScore !== undefined) {
                const diff = state.score - state.previousScore;
                previousStatsHTML = `
                    <div class="p-5 sm:p-6 border border-gray-200 rounded-2xl bg-white flex flex-row justify-around gap-2 w-full max-w-4xl mx-auto mb-6 sm:mb-8 text-center shadow-sm">
                        <div><div class="text-xs sm:text-sm text-gray-500">Previous</div><div class="text-xl sm:text-2xl font-medium">${state.previousScore} / ${state.previousTotal}</div></div>
                        <div><div class="text-xs sm:text-sm text-gray-500">Current</div><div class="text-xl sm:text-2xl font-medium">${state.score} / ${state.activeQuestions.length}</div></div>
                        <div><div class="text-xs sm:text-sm text-gray-500">Difference</div><div class="text-xl sm:text-2xl font-medium ${diff > 0 ? 'text-green-600' : (diff < 0 ? 'text-red-600' : 'text-gray-600')}">${diff > 0 ? `+${diff}` : diff}</div></div>
                    </div>
                `;
            }

            const times = state.questionStats.map(stat => stat.timeTaken);
            const maxTime = Math.max(...times, 1);
            const svgW = 1000;
            const svgH = 100;
            const points = times.map((t, i) => {
                const x = times.length > 1 ? (i / (times.length - 1)) * svgW : svgW / 2;
                const y = svgH - ((t / maxTime) * (svgH - 20)) - 10;
                return `${x},${y}`;
            }).join(' ');

            const lineGraphHTML = times.length > 0 ? `
                <div class="w-full h-28 sm:h-32 mt-2 mb-4 bg-gray-50 rounded-xl border border-gray-100 relative p-4 group overflow-visible">
                    <div class="absolute top-2 left-3 text-[10px] text-gray-400 font-medium uppercase tracking-wider">Time (s)</div>
                    <svg viewBox="0 0 ${svgW} ${svgH}" class="w-full h-full overflow-visible" preserveAspectRatio="none">
                        <polyline points="${points}" fill="none" stroke="#22c55e" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="opacity-80"/>
                        ${times.map((t, i) => {
                            const x = times.length > 1 ? (i / (times.length - 1)) * svgW : svgW / 2;
                            const y = svgH - ((t / maxTime) * (svgH - 20)) - 10;
                            return `<circle cx="${x}" cy="${y}" r="4" fill="#fff" stroke="#22c55e" stroke-width="2"><title>Q${i+1}: ${formatTime(t)}</title></circle>`;
                        }).join('')}
                    </svg>
                </div>
            ` : '';

            return `
                <div class="animate-zoom-in w-full flex flex-col items-center pb-8 sm:pb-12">

                    <div class="max-w-5xl w-full p-6 sm:p-8 border border-gray-200 rounded-2xl space-y-4 bg-gray-50 text-center mb-6 sm:mb-8 shadow-sm">
                        <div class="flex justify-center">${passed ? `<div class="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">${icons.check}</div>` : `<div class="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center">${icons.x}</div>`}</div>
                        <div class="space-y-2">
                            <h2 class="text-2xl sm:text-3xl font-light">${passed ? "Validation Passed" : "Validation Failed"}</h2>
                            <p class="text-gray-500 text-base sm:text-lg">Scored <span class="font-semibold text-black">${state.score}</span> out of <span class="font-semibold text-black">${state.activeQuestions.length}</span> (${percent.toFixed(0)}%)</p>
                            <div class="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-gray-600 pt-2">
                                <span>Total: ${formatTime(totalTime)}</span><span>&bull;</span><span>Avg: ${formatTime(avgTime)}</span>
                            </div>
                        </div>
                    </div>

                    ${previousStatsHTML}

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-5xl mb-6 sm:mb-8">
                        <button onclick="retakeQuiz()" class="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-sm">${icons.play} Retake Quiz</button>
                        <button onclick="restart()" class="w-full py-4 bg-white border border-gray-200 text-black rounded-xl font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">${icons.rotateCcw} Start New Session</button>
                    </div>

                    <div class="w-full max-w-5xl flex flex-col space-y-6 sm:space-y-8 items-center">
                        <div class="w-full border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white space-y-4 shadow-sm">
                            <h3 class="font-semibold text-base sm:text-lg flex items-center gap-2">${icons.clock} Time Distribution</h3>
                            ${lineGraphHTML}
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-4">
                                ${sortedByTime.map(stat => `<div class="p-3 bg-gray-50 rounded-xl text-xs sm:text-sm flex justify-between items-start gap-3 border border-gray-100"><span class="text-gray-700 break-words whitespace-normal pr-2">${escapeHTML(stat.question)}</span><span class="font-mono font-medium whitespace-nowrap ${stat.timeTaken > avgTime * 1.5 ? 'text-red-500' : 'text-gray-900'}">${formatTime(stat.timeTaken)}</span></div>`).join('')}
                            </div>
                        </div>

                        <div class="w-full border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white space-y-4 shadow-sm">
                            <div class="flex items-center justify-between border-b border-gray-100 pb-4">
                                <h3 class="font-semibold text-base sm:text-lg">Detailed Breakdown</h3>
                                <div class="flex items-center gap-2 sm:gap-3">
                                    <div class="text-right">
                                        <div class="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">Accuracy</div>
                                        <div class="text-base sm:text-lg font-medium leading-none">${percent.toFixed(0)}%</div>
                                    </div>
                                    <svg viewBox="0 0 32 32" class="w-8 h-8 sm:w-10 sm:h-10 transform -rotate-90 rounded-full">
                                        <circle r="15.9155" cx="16" cy="16" fill="transparent" stroke="#fca5a5" stroke-width="32"></circle>
                                        <circle r="15.9155" cx="16" cy="16" fill="transparent" stroke="#22c55e" stroke-width="32" stroke-dasharray="${percent} 100"></circle>
                                    </svg>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                ${state.questionStats.map((stat, i) => `
                                    <div class="p-4 sm:p-5 ${stat.isCorrect ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'} rounded-r-xl text-sm space-y-2 break-words whitespace-normal shadow-sm">
                                        <div class="font-medium text-gray-900 mb-2">Q${i + 1}: ${escapeHTML(stat.question)}</div>
                                        ${!stat.isCorrect ? `<div class="text-red-700">Answered: <span class="line-through opacity-75">${escapeHTML(stat.userAnswer || '(blank)')}</span></div><div class="text-green-700 font-medium mt-1">Correct: ${escapeHTML(stat.correctAnswer)}</div>` : `<div class="text-green-700 font-medium">Answered: ${escapeHTML(stat.correctAnswer)}</div>`}

                                        ${stat.info ? `
                                            <button onclick="this.nextElementSibling.classList.toggle('hidden')" class="mt-3 flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-black transition-colors uppercase tracking-wider outline-none">
                                                ${icons.infoCircle} Toggle Info
                                            </button>
                                            <div class="hidden mt-2 text-blue-900 text-xs sm:text-sm bg-blue-100/60 p-3 rounded-lg leading-relaxed border border-blue-200/50 whitespace-pre-wrap">${escapeHTML(stat.info)}</div>
                                        ` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        };

        const render = () => {
            const appDiv = document.getElementById('app');
            const viewKey = `${state.appState}:${state.currentIndex}`;
            if (viewKey !== state.lastView && !state.feedbackState) { window.scrollTo(0, 0); state.lastView = viewKey; }
            if (state.appState === 'setup') appDiv.innerHTML = renderSetup();
            else if (state.appState === 'quiz') {
                appDiv.innerHTML = renderQuiz();
                if (!state.feedbackState) setTimeout(() => { const identInput = document.getElementById('identInput'); if (identInput) identInput.focus(); }, 10);
            } else if (state.appState === 'results') appDiv.innerHTML = renderResults();
        };

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && state.appState === 'quiz' && state.feedbackState) {
                e.preventDefault();
                // Ignore held-down / double-tapped Enter so the feedback is always visible for a moment
                if (e.repeat || Date.now() - state.feedbackShownAt < 300) return;
                window.goToNextQuestion();
            }
        });

        // Render right away (the script sits at the end of <body>) instead of waiting for window.onload,
        // which would wait for every resource to finish downloading.
        render();

        // Cache the page for instant repeat visits and offline use (only works when served over http/https, e.g. GitHub Pages)
        if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
            window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
        }
    </script>
</body>
</html>
