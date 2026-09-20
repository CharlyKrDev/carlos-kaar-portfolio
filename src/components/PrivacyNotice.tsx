import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";

type PrivacyNoticeProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function PrivacyNotice({
  isOpen,
  onClose,
}: PrivacyNoticeProps) {
  const { t } = useLanguage();

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      id="privacy-dialog"
      aria-labelledby="privacy-title"
      aria-describedby="privacy-description"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      className="
        m-auto
        w-[calc(100%-3rem)]
        max-w-2xl
        border
        border-line-strong
        bg-canvas
        p-0
        text-foreground
        backdrop:bg-black/70
      "
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="mb-2 font-mono text-xs text-accent">
              PRIVACY / ANALYTICS
            </p>

            <h2
              id="privacy-title"
              className="text-xl font-semibold"
            >
              {t.privacy.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              cursor-pointer
              font-mono
              text-xs
              text-muted
              transition-colors
              hover:text-foreground
              focus-ring
            "
          >
            <span
              aria-hidden="true"
              className="text-accent"
            >
              {"> "}
            </span>

            {t.privacy.close}
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <p
            id="privacy-description"
            className="text-sm leading-6 text-muted"
          >
            {t.privacy.description}
          </p>

          <div className="border-t border-line pt-5">
            <p className="font-mono text-xs text-secondary">
              {t.privacy.analyticsTitle}
            </p>

            <p className="mt-3 text-sm leading-6 text-muted">
              {t.privacy.analyticsDescription}
            </p>

            <p className="mt-3 text-sm leading-6 text-muted">
              {t.privacy.consentDescription}
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
}