# Resume PDF source

`resume.html` is the source for `public/Brede-Resume.pdf`. It's a standalone,
print-tuned template, deliberately separate from `src/app/resume/page.tsx`
(the on-site resume page has different, more spacious styling meant for the
web, not a 1-page print layout).

To edit the resume PDF: edit `resume.html`, then regenerate with:

```bash
python3 resume-source/print.py
```

(Needs `pip3 install websocket-client` once. Don't use Chrome's
`--print-to-pdf-no-header` command-line flag instead — it does not reliably
suppress the header/footer; `print.py` uses the DevTools Protocol directly,
which does.)

Or manually: open `resume.html` in Chrome, Cmd+P, "Save as PDF", uncheck
headers and footers, replace `public/Brede-Resume.pdf`.

Keep it to one page. Content should mirror the Projects/Experience/Education
sections on the site (`src/content/site.ts`), but this file is edited by
hand, not generated from that data, so update both when either changes.
