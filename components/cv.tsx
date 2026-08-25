"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ArrowLeft, FileWarning } from "lucide-react";
import { useLanguage } from "./language-provider";

const CV_PATH = "/NGUYEN_QUANG_HIEN.pdf";

export function CV() {
  const [status, setStatus] = useState<"checking" | "found" | "missing">(
    "checking",
  );
  const { t } = useLanguage();

  useEffect(() => {
    let cancelled = false;
    fetch(CV_PATH, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setStatus(res.ok ? "found" : "missing");
      })
      .catch(() => {
        if (!cancelled) setStatus("missing");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="cv" className="section-padding max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-border pt-20 pb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
      >
        <div>
          <p className="font-mono text-sm text-primary mb-3">
            // {t('cv.title').toLowerCase()}
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            {t('cv.title')}
          </h1>
          <p className="text-muted-foreground mt-2">
            {t('cv.subtitle')}
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={CV_PATH}
            download
            className="font-mono text-sm inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            <Download className="h-4 w-4" /> {t('cv.download')}
          </a>
          <Link
            href="/"
            className="font-mono text-sm inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 hover:border-primary hover:text-primary transition"
          >
            <ArrowLeft className="h-4 w-4" /> {t('cv.back')}
          </Link>
        </div>
      </motion.div>

      {/* PDF preview */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="pb-24"
      >
        <div className="border border-border rounded-lg overflow-hidden bg-muted/20">
          {status === "checking" && (
            <div className="flex items-center justify-center py-24">
              <p className="text-muted-foreground text-sm font-mono">
                {t('cv.loading')}
              </p>
            </div>
          )}

          {status === "missing" && (
            <div className="flex flex-col items-center justify-center gap-4 py-24 text-center px-6">
              <FileWarning className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium mb-1">
                  {t('cv.notFound.title')}
                </p>
                <p className="text-muted-foreground text-sm max-w-sm">
                  {t('cv.notFound.desc')}
                </p>
              </div>
            </div>
          )}
  
          {status === "found" && (
            <iframe
              src={`${CV_PATH}#toolbar=1&view=FitH`}
              title="Nguyen Quang Hien — CV"
              className="w-full"
              style={{ height: "85vh", border: "none" }}
            />
          )}
        </div>

        {status === "found" && (
          <p className="text-muted-foreground text-xs font-mono mt-3">
            {t('cv.mobileTip')}{" "}
            <a href={CV_PATH} download className="text-primary hover:underline">
              {t('cv.mobileTip.link')}
            </a>
            .
          </p>
        )}
      </motion.div>
    </section>
  );
}
