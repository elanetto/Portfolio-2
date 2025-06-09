import { useState } from "react";
import toast from "react-hot-toast";
import { Copy } from "lucide-react";

const COPY_FEEDBACK_DURATION = 3000;

function ShareButton({ label = "Kopier lenke" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Lenken er kopiert til utklippstavlen!");
      setTimeout(() => setCopied(false), COPY_FEEDBACK_DURATION);
    } catch (err) {
      toast.error("Klarte ikke å kopiere lenken.");
      console.error("Copy failed", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="flex items-center gap-2 px-4 py-2 rounded  text-dark-green hover:text-cyan-dark hover:scale-110 transition cursor-pointer"
      aria-label={copied ? "Kopiert!" : label}
    >
      <Copy size={18} />
      {copied ? "Kopiert!" : label}
    </button>
  );
}

export default ShareButton;
