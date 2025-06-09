import { useState } from "react";
import toast from "react-hot-toast";
import { Copy } from "lucide-react";

function ShareButton({ label = "Kopier lenke" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const textToCopy = window.location.href;

      if (navigator.clipboard && window.isSecureContext) {
       
        await navigator.clipboard.writeText(textToCopy);
      } else {
        
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      if (!copied) toast.success("Lenken er kopiert til utklippstavlen!");
      setCopied(true);
    } catch (err) {
      toast.error("Klarte ikke å kopiere lenken.");
      console.error("Copy failed", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="flex items-center gap-2 px-4 py-2 rounded text-dark-green hover:text-cyan-dark hover:scale-110 focus:ring-2 focus:ring-cyan-dark focus:outline-none transition cursor-pointer"
      aria-label={copied ? "Lenke kopiert" : label}
    >
      <Copy size={18} />
      {copied ? "Lenke kopiert" : label}
    </button>
  );
}

export default ShareButton;
